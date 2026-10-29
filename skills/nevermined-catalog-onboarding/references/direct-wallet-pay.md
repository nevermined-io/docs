# Direct-wallet validation — pay an external x402 merchant from a raw EOA

The Nevermined SDK/API x402 buyer flow (`nvm:erc4337`) settles against a **Nevermined
plan**, not an arbitrary external merchant. To prove an external merchant's endpoint really
charges and returns a valid result, you pay it **directly**: sign an **EIP-3009
`transferWithAuthorization`** yourself (Coinbase "exact" scheme — gasless USDC; the merchant
or its facilitator submits the transfer) and send it as the `X-PAYMENT` header.

This is the tested payer used to validate a live Base-mainnet merchant. It runs in
`references/c402pay/` and executes **no merchant code** — it only signs with `viem` and
builds the standard header.

## Run it

```bash
cd references/c402pay && npm i --silent          # installs viem

# sign-only self-check (no network, no spend): proves the key signs and self-recovers
WALLET_PRIVATE_KEY=0x<64hex> node pay.mjs dryrun

# real paid call: probe → 402 → sign → resend with X-PAYMENT → 200 + receipt
WALLET_PRIVATE_KEY=0x<64hex> [WALLET_ADDRESS=0x<expected>] \
  node pay.mjs pay "https://HOST/v1/tools/<tool>/call" '{"input":{"iban":"DE89370400440532013000"}}'
```

`WALLET_ADDRESS` is optional; when set, the script aborts if the key derives a different
address (catches a key/address mismatch before you spend). The key is read from env and
**never printed**.

## What a pass looks like

- `probe status: 402` then `paid status: 200`
- a decoded `payment-response` receipt
- a correct result `body` (e.g. `valid:true` for a valid IBAN)
- on-chain: a USDC `Transfer` from your EOA to the merchant's `payTo` for the quoted amount
  (`eth_getTransactionReceipt` → `status: 0x1`)

## The flow, step by step

1. **Probe** `POST targetUrl` with a **well-formed body** (validate-before-charge services
   400 on an empty body; the 402 only fires on a real body).
2. Read `challenge.accepts[]`; pick the cheapest **`scheme:"exact"`** option whose `asset`
   is the chain's USDC (`pickAccept`).
3. **Sign** EIP-3009 `TransferWithAuthorization` over the EIP-712 domain
   `{ name, version, chainId: 8453, verifyingContract: asset }` with
   `{ from, to: payTo, value: amount, validAfter: 0, validBefore: now+600, nonce: random32 }`.
   Self-recover the signer and assert it equals your address before sending.
4. **Build** `X-PAYMENT` = base64(`{ x402Version, scheme, network, payload:{ signature,
   authorization } }`) and resend the same request with that header. Send it on `X-PAYMENT`
   **only**. A **dual-version** merchant (it advertises x402 v1 in the 402 body *and* v2 terms in
   the `PAYMENT-REQUIRED` response header) treats `payment-signature` as its **v2** channel — so
   mirroring this v1-shaped payload there makes it reject the retry with `402 "No matching payment
   requirements"` (a verify-reject; you are not charged). One header, matched to the version you
   signed.
5. **200** + `payment-response` = paid; the merchant/facilitator submits the transfer.

## Adapt for a different merchant

- **Chain / asset:** change `chainId` and the USDC address (`USDC_BASE`) to the merchant's
  network. Sandbox = Base Sepolia (`84532`); the USDC address differs per chain.
- **EIP-712 domain:** most USDC uses `name:"USD Coin", version:"2"`; the script already
  prefers `accept.extra.name`/`.version` from the 402 when present — trust the challenge.
- **Body schema:** the `pay` mode takes the request body as its last arg; shape it per the
  tool's docs.

## `pay.mjs` (reference copy)

The runnable file is `references/c402pay/pay.mjs`. Key parts:

```js
// EIP-712 typed data for EIP-3009
const types = { TransferWithAuthorization: [
  { name: 'from', type: 'address' }, { name: 'to', type: 'address' },
  { name: 'value', type: 'uint256' }, { name: 'validAfter', type: 'uint256' },
  { name: 'validBefore', type: 'uint256' }, { name: 'nonce', type: 'bytes32' },
]}

const domain = {                       // built from the 402's accept entry
  name: accept.extra?.name ?? 'USD Coin',
  version: accept.extra?.version ?? '2',
  chainId: 8453, verifyingContract: accept.asset,
}
const signature = await account.signTypedData({ domain, types,
  primaryType: 'TransferWithAuthorization', message: auth })

// X-PAYMENT header the merchant expects
const payload = { x402Version: 1, scheme: accept.scheme, network: accept.network,
  payload: { signature, authorization: { from, to, value, validAfter, validBefore, nonce } } }
const header = Buffer.from(JSON.stringify(payload)).toString('base64')
```

## Guardrails

- Validate at the boundary: reject a non-`exact` scheme, a missing `payTo`, or a wrong-chain
  `asset` — do not sign a transfer you can't reason about.
- Cap the blast radius: fund the EOA with only what the test needs (a few cents of USDC).
- The self-recover check (`recovered == account.address`) is the cheap assertion that the
  signature is well-formed before you put money on the wire — keep it.
