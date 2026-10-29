// Native x402 "exact" payer for code402 (Base mainnet, USDC EIP-3009).
// No merchant code executed: we sign the EIP-3009 authorization ourselves with viem
// and build the standard X-PAYMENT header. Reads key from env; never prints it.
import { privateKeyToAccount } from 'viem/accounts'
import { recoverTypedDataAddress, toHex } from 'viem'
import { randomBytes } from 'node:crypto'

const PK = (process.env.WALLET_PRIVATE_KEY || '').trim()
const EXPECT_ADDR = (process.env.WALLET_ADDRESS || '').trim()
if (!/^0x[0-9a-fA-F]{64}$/.test(PK)) { console.error('bad/missing WALLET_PRIVATE_KEY'); process.exit(2) }
const account = privateKeyToAccount(PK)
if (EXPECT_ADDR && account.address.toLowerCase() !== EXPECT_ADDR.toLowerCase()) {
  console.error(`key/address mismatch: derived ${account.address} != ${EXPECT_ADDR}`); process.exit(2)
}

const USDC_BASE = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'.toLowerCase()
const types = {
  TransferWithAuthorization: [
    { name: 'from', type: 'address' }, { name: 'to', type: 'address' },
    { name: 'value', type: 'uint256' }, { name: 'validAfter', type: 'uint256' },
    { name: 'validBefore', type: 'uint256' }, { name: 'nonce', type: 'bytes32' },
  ],
}

async function signAuth(accept) {
  const now = Math.floor(Date.now() / 1000)
  const auth = {
    from: account.address,
    to: accept.payTo,
    value: BigInt(accept.maxAmountRequired ?? accept.amount),
    validAfter: 0n,
    validBefore: BigInt(now + 600),
    nonce: toHex(randomBytes(32)),
  }
  const domain = {
    name: accept.extra?.name ?? 'USD Coin',
    version: accept.extra?.version ?? '2',
    chainId: 8453,
    verifyingContract: accept.asset,
  }
  const signature = await account.signTypedData({ domain, types, primaryType: 'TransferWithAuthorization', message: auth })
  const recovered = await recoverTypedDataAddress({ domain, types, primaryType: 'TransferWithAuthorization', message: auth, signature })
  return { auth, domain, signature, recovered }
}

function xPaymentHeader(accept, auth, signature) {
  const payload = {
    x402Version: 1, scheme: accept.scheme, network: accept.network,
    payload: {
      signature,
      authorization: {
        from: auth.from, to: auth.to, value: auth.value.toString(),
        validAfter: auth.validAfter.toString(), validBefore: auth.validBefore.toString(),
        nonce: auth.nonce,
      },
    },
  }
  return Buffer.from(JSON.stringify(payload)).toString('base64')
}

function pickAccept(accepts) {
  const usable = accepts.filter(a => a.scheme === 'exact' && a.payTo && (a.maxAmountRequired ?? a.amount))
  const usdc = usable.filter(a => (a.asset || '').toLowerCase() === USDC_BASE)
  const pool = usdc.length ? usdc : usable
  return pool.sort((a, b) => Number(a.maxAmountRequired ?? a.amount) - Number(b.maxAmountRequired ?? b.amount))[0]
}

const mode = process.argv[2] || 'dryrun'

if (mode === 'dryrun') {
  const sample = { scheme: 'exact', network: 'base', asset: USDC_BASE, payTo: '0xc59c85e661d34084a7769f955d17fd38254a6235', maxAmountRequired: '5000', extra: { name: 'USD Coin', version: '2' } }
  const { auth, signature, recovered } = await signAuth(sample)
  console.log('address           :', account.address)
  console.log('recovered==signer :', recovered.toLowerCase() === account.address.toLowerCase())
  console.log('authorization     :', { ...auth, value: auth.value.toString(), validAfter: '0', validBefore: auth.validBefore.toString() })
  console.log('X-PAYMENT (b64,len):', xPaymentHeader(sample, auth, signature).length)
  process.exit(0)
}

if (mode === 'pay') {
  const url = process.argv[3]
  const body = JSON.parse(process.argv[4] || '{"input":{"iban":"GB82WEST12345698765432"}}')
  const r1 = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })
  console.log('probe status:', r1.status)
  if (r1.status !== 402) {
    console.log('NOT 402 (free tier still active or error). Body head:', (await r1.text()).slice(0, 200))
    process.exit(3)
  }
  const challenge = await r1.json()
  const accept = pickAccept(challenge.accepts)
  console.log('paying option:', { scheme: accept.scheme, network: accept.network, asset: accept.asset, payTo: accept.payTo, amount: accept.maxAmountRequired ?? accept.amount, currency: accept.extra?.currency })
  const { auth, signature, recovered } = await signAuth(accept)
  if (recovered.toLowerCase() !== account.address.toLowerCase()) { console.error('self-recover failed'); process.exit(4) }
  const header = xPaymentHeader(accept, auth, signature)
  // Send the x402 v1 payload on `X-PAYMENT` ONLY. A dual-version merchant (v1 body + v2
  // PAYMENT-REQUIRED header) reads `payment-signature` as its v2 channel, so mirroring this
  // v1-shaped payload there makes it reject with 402 "No matching payment requirements".
  const r2 = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json', 'X-PAYMENT': header }, body: JSON.stringify(body) })
  console.log('paid status:', r2.status)
  const pr = r2.headers.get('payment-response')
  if (pr) { try { console.log('payment-response:', JSON.parse(Buffer.from(pr, 'base64').toString())) } catch { console.log('payment-response(raw):', pr.slice(0, 300)) } }
  const txt = await r2.text()
  console.log('body:', txt.slice(0, 2000))
  process.exit(r2.status === 200 ? 0 : 5)
}
