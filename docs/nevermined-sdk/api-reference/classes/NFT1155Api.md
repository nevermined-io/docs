[@nevermined-io/sdk](../code-reference.md) / NFT1155Api

# Class: NFT1155Api

Allows the interaction with external ERC-1155 NFT contracts built on top of the Nevermined NFT extra features.

## Hierarchy

- [`NFTsBaseApi`](NFTsBaseApi.md)

  ↳ **`NFT1155Api`**

  ↳↳ [`SubscriptionCreditsNFTApi`](SubscriptionCreditsNFTApi.md)

## Table of contents

### Constructors

- [constructor](NFT1155Api.md#constructor)

### Properties

- [nftContract](NFT1155Api.md#nftcontract)
- [servicePlugin](NFT1155Api.md#serviceplugin)

### Accessors

- [address](NFT1155Api.md#address)
- [artifactsFolder](NFT1155Api.md#artifactsfolder)
- [circuitsFolder](NFT1155Api.md#circuitsfolder)
- [client](NFT1155Api.md#client)
- [config](NFT1155Api.md#config)
- [getContract](NFT1155Api.md#getcontract)
- [instanceConfig](NFT1155Api.md#instanceconfig)
- [instantiableConfig](NFT1155Api.md#instantiableconfig)
- [logger](NFT1155Api.md#logger)
- [nevermined](NFT1155Api.md#nevermined)
- [publicClient](NFT1155Api.md#publicclient)
- [walletClient](NFT1155Api.md#walletclient)

### Methods

- [\_details](NFT1155Api.md#_details)
- [access](NFT1155Api.md#access)
- [addRating](NFT1155Api.md#addrating)
- [balance](NFT1155Api.md#balance)
- [burn](NFT1155Api.md#burn)
- [burnFromHolder](NFT1155Api.md#burnfromholder)
- [buySecondaryMarketNft](NFT1155Api.md#buysecondarymarketnft)
- [claim](NFT1155Api.md#claim)
- [claimNFT](NFT1155Api.md#claimnft)
- [create](NFT1155Api.md#create)
- [details](NFT1155Api.md#details)
- [getSubscriptionToken](NFT1155Api.md#getsubscriptiontoken)
- [grantOperatorRole](NFT1155Api.md#grantoperatorrole)
- [isApprovedForAll](NFT1155Api.md#isapprovedforall)
- [isOperator](NFT1155Api.md#isoperator)
- [isOperatorOfDID](NFT1155Api.md#isoperatorofdid)
- [list](NFT1155Api.md#list)
- [listOnSecondaryMarkets](NFT1155Api.md#listonsecondarymarkets)
- [mint](NFT1155Api.md#mint)
- [order](NFT1155Api.md#order)
- [orderAsset](NFT1155Api.md#orderasset)
- [owner](NFT1155Api.md#owner)
- [registerNeverminedAsset](NFT1155Api.md#registerneverminedasset)
- [releaseRewards](NFT1155Api.md#releaserewards)
- [releaseSecondaryMarketRewards](NFT1155Api.md#releasesecondarymarketrewards)
- [resolveAsset](NFT1155Api.md#resolveasset)
- [revokeOperatorRole](NFT1155Api.md#revokeoperatorrole)
- [setApprovalForAll](NFT1155Api.md#setapprovalforall)
- [setInstanceConfig](NFT1155Api.md#setinstanceconfig)
- [transfer](NFT1155Api.md#transfer)
- [updateAsset](NFT1155Api.md#updateasset)
- [getInstance](NFT1155Api.md#getinstance)
- [getNFTContractAddress](NFT1155Api.md#getnftcontractaddress)
- [getServicePlugin](NFT1155Api.md#getserviceplugin)
- [setInstanceConfig](NFT1155Api.md#setinstanceconfig-1)

## Constructors

### constructor

• **new NFT1155Api**(): [`NFT1155Api`](NFT1155Api.md)

#### Returns

[`NFT1155Api`](NFT1155Api.md)

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[constructor](NFTsBaseApi.md#constructor)

## Properties

### nftContract

• **nftContract**: [`Nft1155Contract`](Nft1155Contract.md)

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:26](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L26)

___

### servicePlugin

• **servicePlugin**: `Object`

#### Index signature

▪ [key: `string`]: [`ServicePlugin`](../interfaces/ServicePlugin.md)\<[`Service`](../code-reference.md#service)\>

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[servicePlugin](NFTsBaseApi.md#serviceplugin)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:39](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L39)

## Accessors

### address

• `get` **address**(): `string`

Gets the ERC-1155 NFT Contract address

#### Returns

`string`

The NFT contract address

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:64](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L64)

___

### artifactsFolder

• `get` **artifactsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

NFTsBaseApi.artifactsFolder

#### Defined in

[src/Instantiable.abstract.ts:132](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L132)

___

### circuitsFolder

• `get` **circuitsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

NFTsBaseApi.circuitsFolder

#### Defined in

[src/Instantiable.abstract.ts:136](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L136)

___

### client

• `get` **client**(): [`Web3Clients`](../interfaces/Web3Clients.md)

#### Returns

[`Web3Clients`](../interfaces/Web3Clients.md)

#### Inherited from

NFTsBaseApi.client

#### Defined in

[src/Instantiable.abstract.ts:84](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L84)

___

### config

• `get` **config**(): [`NeverminedOptions`](NeverminedOptions.md)

#### Returns

[`NeverminedOptions`](NeverminedOptions.md)

#### Inherited from

NFTsBaseApi.config

#### Defined in

[src/Instantiable.abstract.ts:115](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L115)

___

### getContract

• `get` **getContract**(): [`Nft1155Contract`](Nft1155Contract.md)

Gets the instance of the ERC-1155 NFT Contract where the API is connected

#### Returns

[`Nft1155Contract`](Nft1155Contract.md)

The `Nft1155Contract` instance

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:72](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L72)

___

### instanceConfig

• `get` **instanceConfig**(): [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

[`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

NFTsBaseApi.instanceConfig

#### Defined in

[src/Instantiable.abstract.ts:140](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L140)

___

### instantiableConfig

• `get` **instantiableConfig**(): `undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

`undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

NFTsBaseApi.instantiableConfig

#### Defined in

[src/Instantiable.abstract.ts:108](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L108)

___

### logger

• `get` **logger**(): `Logger`

#### Returns

`Logger`

#### Inherited from

NFTsBaseApi.logger

#### Defined in

[src/Instantiable.abstract.ts:123](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L123)

___

### nevermined

• `get` **nevermined**(): [`Nevermined`](Nevermined.md)

#### Returns

[`Nevermined`](Nevermined.md)

#### Inherited from

NFTsBaseApi.nevermined

#### Defined in

[src/Instantiable.abstract.ts:76](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L76)

___

### publicClient

• `get` **publicClient**(): `Object`

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `undefined` | The Account of the Client. |
| `batch?` | \{ `multicall?`: `boolean` \| \{ `batchSize?`: `number` ; `wait?`: `number`  }  } | Flags for batch settings. |
| `batch.multicall?` | `boolean` \| \{ `batchSize?`: `number` ; `wait?`: `number`  } | Toggle to enable `eth_call` multicall aggregation. |
| `cacheTime` | `number` | Time (in ms) that cached data will remain in memory. |
| `call` | (`parameters`: `CallParameters`\<`undefined` \| `Chain`\>) => `Promise`\<`CallReturnType`\> | - |
| `ccipRead?` | ``false`` \| \{ `request?`: (`parameters`: `CcipRequestParameters`) => `Promise`\<\`0x$\{string}\`\>  } | [CCIP Read](https://eips.ethereum.org/EIPS/eip-3668) configuration. |
| `chain` | `undefined` \| `Chain` | Chain for the client. |
| `createBlockFilter` | () => `Promise`\<\{ `id`: \`0x$\{string}\` ; `request`: `EIP1193RequestFn`\<readonly [\{ `Method`: ``"eth_getFilterChanges"`` ; `Parameters`: [filterId: \`0x$\{string}\`] ; `ReturnType`: \`0x$\{string}\`[] \| `RpcLog`[]  }, \{ `Method`: ``"eth_getFilterLogs"`` ; `Parameters`: [filterId: \`0x$\{string}\`] ; `ReturnType`: `RpcLog`[]  }, \{ `Method`: ``"eth_uninstallFilter"`` ; `Parameters`: [filterId: \`0x$\{string}\`] ; `ReturnType`: `boolean`  }]\> ; `type`: ``"block"``  }\> | - |
| `createContractEventFilter` | \<TAbi, TEventName, TArgs, TStrict, TFromBlock, TToBlock\>(`args`: `CreateContractEventFilterParameters`\<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>) => `Promise`\<`CreateContractEventFilterReturnType`\<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>\> | - |
| `createEventFilter` | \<TAbiEvent, TAbiEvents, TStrict, TFromBlock, TToBlock, _EventName, _Args\>(`args?`: `CreateEventFilterParameters`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`, `_EventName`, `_Args`\>) => `Promise`\<\{ [K in string \| number \| symbol]: Filter\<"event", TAbiEvents, \_EventName, \_Args, TStrict, TFromBlock, TToBlock\>[K] }\> | - |
| `createPendingTransactionFilter` | () => `Promise`\<\{ `id`: \`0x$\{string}\` ; `request`: `EIP1193RequestFn`\<readonly [\{ `Method`: ``"eth_getFilterChanges"`` ; `Parameters`: [filterId: \`0x$\{string}\`] ; `ReturnType`: \`0x$\{string}\`[] \| `RpcLog`[]  }, \{ `Method`: ``"eth_getFilterLogs"`` ; `Parameters`: [filterId: \`0x$\{string}\`] ; `ReturnType`: `RpcLog`[]  }, \{ `Method`: ``"eth_uninstallFilter"`` ; `Parameters`: [filterId: \`0x$\{string}\`] ; `ReturnType`: `boolean`  }]\> ; `type`: ``"transaction"``  }\> | - |
| `estimateContractGas` | \<TChain, abi, functionName, args\>(`args`: `EstimateContractGasParameters`\<`abi`, `functionName`, `args`, `TChain`\>) => `Promise`\<`bigint`\> | - |
| `estimateFeesPerGas` | \<TChainOverride, TType\>(`args?`: `EstimateFeesPerGasParameters`\<`undefined` \| `Chain`, `TChainOverride`, `TType`\>) => `Promise`\<`EstimateFeesPerGasReturnType`\> | - |
| `estimateGas` | (`args`: `EstimateGasParameters`\<`undefined` \| `Chain`\>) => `Promise`\<`bigint`\> | - |
| `estimateMaxPriorityFeePerGas` | \<TChainOverride\>(`args?`: \{ `chain`: ``null`` \| `TChainOverride`  }) => `Promise`\<`bigint`\> | - |
| `extend` | \<client\>(`fn`: (`client`: `Client`\<`Transport`, `undefined` \| `Chain`, `undefined`, `PublicRpcSchema`, `PublicActions`\<`Transport`, `undefined` \| `Chain`\>\>) => `client`) => `Client`\<`Transport`, `undefined` \| `Chain`, `undefined`, `PublicRpcSchema`, \{ [K in string \| number \| symbol]: client[K] } & `PublicActions`\<`Transport`, `undefined` \| `Chain`\>\> | - |
| `getBalance` | (`args`: `GetBalanceParameters`) => `Promise`\<`bigint`\> | - |
| `getBlobBaseFee` | () => `Promise`\<`bigint`\> | - |
| `getBlock` | \<TIncludeTransactions, TBlockTag\>(`args?`: `GetBlockParameters`\<`TIncludeTransactions`, `TBlockTag`\>) => `Promise`\<\{ `baseFeePerGas`: ``null`` \| `bigint` ; `blobGasUsed`: `bigint` ; `difficulty`: `bigint` ; `excessBlobGas`: `bigint` ; `extraData`: \`0x$\{string}\` ; `gasLimit`: `bigint` ; `gasUsed`: `bigint` ; `hash`: `TBlockTag` extends ``"pending"`` ? ``null`` : \`0x$\{string}\` ; `logsBloom`: `TBlockTag` extends ``"pending"`` ? ``null`` : \`0x$\{string}\` ; `miner`: \`0x$\{string}\` ; `mixHash`: \`0x$\{string}\` ; `nonce`: `TBlockTag` extends ``"pending"`` ? ``null`` : \`0x$\{string}\` ; `number`: `TBlockTag` extends ``"pending"`` ? ``null`` : `bigint` ; `parentHash`: \`0x$\{string}\` ; `receiptsRoot`: \`0x$\{string}\` ; `sealFields`: \`0x$\{string}\`[] ; `sha3Uncles`: \`0x$\{string}\` ; `size`: `bigint` ; `stateRoot`: \`0x$\{string}\` ; `timestamp`: `bigint` ; `totalDifficulty`: ``null`` \| `bigint` ; `transactions`: `TIncludeTransactions` extends ``true`` ? (\{ `accessList?`: `undefined` ; `blobVersionedHashes?`: `undefined` ; `blockHash`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : \`0x$\{string}\` ; `blockNumber`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `bigint` ; `chainId?`: `number` ; `from`: \`0x$\{string}\` ; `gas`: `bigint` ; `gasPrice`: `bigint` ; `hash`: \`0x$\{string}\` ; `input`: \`0x$\{string}\` ; `maxFeePerBlobGas?`: `undefined` ; `maxFeePerGas?`: `undefined` ; `maxPriorityFeePerGas?`: `undefined` ; `nonce`: `number` ; `r`: \`0x$\{string}\` ; `s`: \`0x$\{string}\` ; `to`: ``null`` \| \`0x$\{string}\` ; `transactionIndex`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `number` ; `type`: ``"legacy"`` ; `typeHex`: ``null`` \| \`0x$\{string}\` ; `v`: `bigint` ; `value`: `bigint` ; `yParity?`: `undefined`  } \| \{ `accessList`: `AccessList` ; `blobVersionedHashes?`: `undefined` ; `blockHash`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : \`0x$\{string}\` ; `blockNumber`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `bigint` ; `chainId`: `number` ; `from`: \`0x$\{string}\` ; `gas`: `bigint` ; `gasPrice`: `bigint` ; `hash`: \`0x$\{string}\` ; `input`: \`0x$\{string}\` ; `maxFeePerBlobGas?`: `undefined` ; `maxFeePerGas?`: `undefined` ; `maxPriorityFeePerGas?`: `undefined` ; `nonce`: `number` ; `r`: \`0x$\{string}\` ; `s`: \`0x$\{string}\` ; `to`: ``null`` \| \`0x$\{string}\` ; `transactionIndex`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `number` ; `type`: ``"eip2930"`` ; `typeHex`: ``null`` \| \`0x$\{string}\` ; `v`: `bigint` ; `value`: `bigint` ; `yParity`: `number`  } \| \{ `accessList`: `AccessList` ; `blobVersionedHashes?`: `undefined` ; `blockHash`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : \`0x$\{string}\` ; `blockNumber`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `bigint` ; `chainId`: `number` ; `from`: \`0x$\{string}\` ; `gas`: `bigint` ; `gasPrice?`: `undefined` ; `hash`: \`0x$\{string}\` ; `input`: \`0x$\{string}\` ; `maxFeePerBlobGas?`: `undefined` ; `maxFeePerGas`: `bigint` ; `maxPriorityFeePerGas`: `bigint` ; `nonce`: `number` ; `r`: \`0x$\{string}\` ; `s`: \`0x$\{string}\` ; `to`: ``null`` \| \`0x$\{string}\` ; `transactionIndex`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `number` ; `type`: ``"eip1559"`` ; `typeHex`: ``null`` \| \`0x$\{string}\` ; `v`: `bigint` ; `value`: `bigint` ; `yParity`: `number`  } \| \{ `accessList`: `AccessList` ; `blobVersionedHashes`: \`0x$\{string}\`[] ; `blockHash`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : \`0x$\{string}\` ; `blockNumber`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `bigint` ; `chainId`: `number` ; `from`: \`0x$\{string}\` ; `gas`: `bigint` ; `gasPrice?`: `undefined` ; `hash`: \`0x$\{string}\` ; `input`: \`0x$\{string}\` ; `maxFeePerBlobGas`: `bigint` ; `maxFeePerGas`: `bigint` ; `maxPriorityFeePerGas`: `bigint` ; `nonce`: `number` ; `r`: \`0x$\{string}\` ; `s`: \`0x$\{string}\` ; `to`: ``null`` \| \`0x$\{string}\` ; `transactionIndex`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `number` ; `type`: ``"eip4844"`` ; `typeHex`: ``null`` \| \`0x$\{string}\` ; `v`: `bigint` ; `value`: `bigint` ; `yParity`: `number`  })[] : \`0x$\{string}\`[] ; `transactionsRoot`: \`0x$\{string}\` ; `uncles`: \`0x$\{string}\`[] ; `withdrawals?`: `Withdrawal`[] ; `withdrawalsRoot?`: \`0x$\{string}\`  }\> | - |
| `getBlockNumber` | (`args?`: `GetBlockNumberParameters`) => `Promise`\<`bigint`\> | - |
| `getBlockTransactionCount` | (`args?`: `GetBlockTransactionCountParameters`) => `Promise`\<`number`\> | - |
| `getBytecode` | (`args`: `GetBytecodeParameters`) => `Promise`\<`GetBytecodeReturnType`\> | - |
| `getChainId` | () => `Promise`\<`number`\> | - |
| `getContractEvents` | \<abi, eventName, strict, fromBlock, toBlock\>(`args`: `GetContractEventsParameters`\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>) => `Promise`\<`GetContractEventsReturnType`\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>\> | - |
| `getEnsAddress` | (`args`: \{ `blockNumber?`: `bigint` ; `blockTag?`: `BlockTag` ; `coinType?`: `number` ; `gatewayUrls?`: `string`[] ; `name`: `string` ; `strict?`: `boolean` ; `universalResolverAddress?`: \`0x$\{string}\`  }) => `Promise`\<`GetEnsAddressReturnType`\> | - |
| `getEnsAvatar` | (`args`: \{ `assetGatewayUrls?`: `AssetGatewayUrls` ; `blockNumber?`: `bigint` ; `blockTag?`: `BlockTag` ; `gatewayUrls?`: `string`[] ; `name`: `string` ; `strict?`: `boolean` ; `universalResolverAddress?`: \`0x$\{string}\`  }) => `Promise`\<`GetEnsAvatarReturnType`\> | - |
| `getEnsName` | (`args`: \{ `address`: \`0x$\{string}\` ; `blockNumber?`: `bigint` ; `blockTag?`: `BlockTag` ; `gatewayUrls?`: `string`[] ; `strict?`: `boolean` ; `universalResolverAddress?`: \`0x$\{string}\`  }) => `Promise`\<`GetEnsNameReturnType`\> | - |
| `getEnsResolver` | (`args`: \{ `blockNumber?`: `bigint` ; `blockTag?`: `BlockTag` ; `name`: `string` ; `universalResolverAddress?`: \`0x$\{string}\`  }) => `Promise`\<\`0x$\{string}\`\> | - |
| `getEnsText` | (`args`: \{ `blockNumber?`: `bigint` ; `blockTag?`: `BlockTag` ; `gatewayUrls?`: `string`[] ; `key`: `string` ; `name`: `string` ; `strict?`: `boolean` ; `universalResolverAddress?`: \`0x$\{string}\`  }) => `Promise`\<`GetEnsTextReturnType`\> | - |
| `getFeeHistory` | (`args`: `GetFeeHistoryParameters`) => `Promise`\<`GetFeeHistoryReturnType`\> | - |
| `getFilterChanges` | \<TFilterType, TAbi, TEventName, TStrict, TFromBlock, TToBlock\>(`args`: `GetFilterChangesParameters`\<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>) => `Promise`\<`GetFilterChangesReturnType`\<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>\> | - |
| `getFilterLogs` | \<TAbi, TEventName, TStrict, TFromBlock, TToBlock\>(`args`: `GetFilterLogsParameters`\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>) => `Promise`\<`GetFilterLogsReturnType`\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>\> | - |
| `getGasPrice` | () => `Promise`\<`bigint`\> | - |
| `getLogs` | \<TAbiEvent, TAbiEvents, TStrict, TFromBlock, TToBlock\>(`args?`: `GetLogsParameters`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`\>) => `Promise`\<`GetLogsReturnType`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`\>\> | - |
| `getProof` | (`args`: `GetProofParameters`) => `Promise`\<`GetProofReturnType`\> | - |
| `getStorageAt` | (`args`: `GetStorageAtParameters`) => `Promise`\<`GetStorageAtReturnType`\> | - |
| `getTransaction` | \<TBlockTag\>(`args`: `GetTransactionParameters`\<`TBlockTag`\>) => `Promise`\<\{ `accessList?`: `undefined` ; `blobVersionedHashes?`: `undefined` ; `blockHash`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : \`0x$\{string}\` ; `blockNumber`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `bigint` ; `chainId?`: `number` ; `from`: \`0x$\{string}\` ; `gas`: `bigint` ; `gasPrice`: `bigint` ; `hash`: \`0x$\{string}\` ; `input`: \`0x$\{string}\` ; `maxFeePerBlobGas?`: `undefined` ; `maxFeePerGas?`: `undefined` ; `maxPriorityFeePerGas?`: `undefined` ; `nonce`: `number` ; `r`: \`0x$\{string}\` ; `s`: \`0x$\{string}\` ; `to`: ``null`` \| \`0x$\{string}\` ; `transactionIndex`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `number` ; `type`: ``"legacy"`` ; `typeHex`: ``null`` \| \`0x$\{string}\` ; `v`: `bigint` ; `value`: `bigint` ; `yParity?`: `undefined`  } \| \{ `accessList`: `AccessList` ; `blobVersionedHashes?`: `undefined` ; `blockHash`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : \`0x$\{string}\` ; `blockNumber`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `bigint` ; `chainId`: `number` ; `from`: \`0x$\{string}\` ; `gas`: `bigint` ; `gasPrice`: `bigint` ; `hash`: \`0x$\{string}\` ; `input`: \`0x$\{string}\` ; `maxFeePerBlobGas?`: `undefined` ; `maxFeePerGas?`: `undefined` ; `maxPriorityFeePerGas?`: `undefined` ; `nonce`: `number` ; `r`: \`0x$\{string}\` ; `s`: \`0x$\{string}\` ; `to`: ``null`` \| \`0x$\{string}\` ; `transactionIndex`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `number` ; `type`: ``"eip2930"`` ; `typeHex`: ``null`` \| \`0x$\{string}\` ; `v`: `bigint` ; `value`: `bigint` ; `yParity`: `number`  } \| \{ `accessList`: `AccessList` ; `blobVersionedHashes?`: `undefined` ; `blockHash`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : \`0x$\{string}\` ; `blockNumber`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `bigint` ; `chainId`: `number` ; `from`: \`0x$\{string}\` ; `gas`: `bigint` ; `gasPrice?`: `undefined` ; `hash`: \`0x$\{string}\` ; `input`: \`0x$\{string}\` ; `maxFeePerBlobGas?`: `undefined` ; `maxFeePerGas`: `bigint` ; `maxPriorityFeePerGas`: `bigint` ; `nonce`: `number` ; `r`: \`0x$\{string}\` ; `s`: \`0x$\{string}\` ; `to`: ``null`` \| \`0x$\{string}\` ; `transactionIndex`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `number` ; `type`: ``"eip1559"`` ; `typeHex`: ``null`` \| \`0x$\{string}\` ; `v`: `bigint` ; `value`: `bigint` ; `yParity`: `number`  } \| \{ `accessList`: `AccessList` ; `blobVersionedHashes`: \`0x$\{string}\`[] ; `blockHash`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : \`0x$\{string}\` ; `blockNumber`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `bigint` ; `chainId`: `number` ; `from`: \`0x$\{string}\` ; `gas`: `bigint` ; `gasPrice?`: `undefined` ; `hash`: \`0x$\{string}\` ; `input`: \`0x$\{string}\` ; `maxFeePerBlobGas`: `bigint` ; `maxFeePerGas`: `bigint` ; `maxPriorityFeePerGas`: `bigint` ; `nonce`: `number` ; `r`: \`0x$\{string}\` ; `s`: \`0x$\{string}\` ; `to`: ``null`` \| \`0x$\{string}\` ; `transactionIndex`: `TBlockTag` extends ``"pending"`` ? ``true`` : ``false`` extends ``true`` ? ``null`` : `number` ; `type`: ``"eip4844"`` ; `typeHex`: ``null`` \| \`0x$\{string}\` ; `v`: `bigint` ; `value`: `bigint` ; `yParity`: `number`  }\> | - |
| `getTransactionConfirmations` | (`args`: `GetTransactionConfirmationsParameters`\<`undefined` \| `Chain`\>) => `Promise`\<`bigint`\> | - |
| `getTransactionCount` | (`args`: `GetTransactionCountParameters`) => `Promise`\<`number`\> | - |
| `getTransactionReceipt` | (`args`: `GetTransactionReceiptParameters`) => `Promise`\<`TransactionReceipt`\> | - |
| `key` | `string` | A key for the client. |
| `multicall` | \<contracts, allowFailure\>(`args`: `MulticallParameters`\<`contracts`, `allowFailure`\>) => `Promise`\<`MulticallReturnType`\<`contracts`, `allowFailure`\>\> | - |
| `name` | `string` | A name for the client. |
| `pollingInterval` | `number` | Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds. |
| `prepareTransactionRequest` | \<TRequest, TChainOverride, TAccountOverride\>(`args`: `PrepareTransactionRequestParameters`\<`undefined` \| `Chain`, `undefined` \| `Account`, `TChainOverride`, `TAccountOverride`, `TRequest`\>) => `Promise`\<\{ [K in string \| number \| symbol]: (UnionRequiredBy\<Extract\<UnionOmit\<(...), (...)\> & ((...) extends (...) ? (...) : (...)) & ((...) extends (...) ? (...) : (...)), IsNever\<(...)\> extends true ? unknown : ExactPartial\<(...)\>\> & Object, ParameterTypeToParameters\<TRequest["parameters"] extends readonly PrepareTransactionRequestParameterType[] ? any[any][number] : "gas" \| "nonce" \| "blobVersionedHashes" \| "chainId" \| "type" \| "fees"\>\> & (unknown extends TRequest["kzg"] ? Object : Pick\<TRequest, "kzg"\>))[K] }\> | - |
| `readContract` | \<abi, functionName, args\>(`args`: `ReadContractParameters`\<`abi`, `functionName`, `args`\>) => `Promise`\<`ReadContractReturnType`\<`abi`, `functionName`, `args`\>\> | - |
| `request` | `EIP1193RequestFn`\<`PublicRpcSchema`\> | Request function wrapped with friendly error handling |
| `sendRawTransaction` | (`args`: `SendRawTransactionParameters`) => `Promise`\<\`0x$\{string}\`\> | - |
| `simulateContract` | \<abi, functionName, args, chainOverride, accountOverride\>(`args`: `SimulateContractParameters`\<`abi`, `functionName`, `args`, `undefined` \| `Chain`, `chainOverride`, `accountOverride`\>) => `Promise`\<`SimulateContractReturnType`\<`abi`, `functionName`, `args`, `undefined` \| `Chain`, `undefined` \| `Account`, `chainOverride`, `accountOverride`\>\> | - |
| `transport` | `TransportConfig`\<`string`, `EIP1193RequestFn`\> & `Record`\<`string`, `any`\> | The RPC transport |
| `type` | `string` | The type of client. |
| `uid` | `string` | A unique ID for the client. |
| `uninstallFilter` | (`args`: `UninstallFilterParameters`) => `Promise`\<`boolean`\> | - |
| `verifyMessage` | (`args`: `VerifyMessageParameters`) => `Promise`\<`boolean`\> | - |
| `verifyTypedData` | (`args`: `VerifyTypedDataParameters`) => `Promise`\<`boolean`\> | - |
| `waitForTransactionReceipt` | (`args`: `WaitForTransactionReceiptParameters`\<`undefined` \| `Chain`\>) => `Promise`\<`TransactionReceipt`\> | - |
| `watchBlockNumber` | (`args`: `WatchBlockNumberParameters`) => `WatchBlockNumberReturnType` | - |
| `watchBlocks` | \<TIncludeTransactions, TBlockTag\>(`args`: `WatchBlocksParameters`\<`Transport`, `undefined` \| `Chain`, `TIncludeTransactions`, `TBlockTag`\>) => `WatchBlocksReturnType` | - |
| `watchContractEvent` | \<TAbi, TEventName, TStrict\>(`args`: `WatchContractEventParameters`\<`TAbi`, `TEventName`, `TStrict`, `Transport`\>) => `WatchContractEventReturnType` | - |
| `watchEvent` | \<TAbiEvent, TAbiEvents, TStrict\>(`args`: `WatchEventParameters`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `Transport`\>) => `WatchEventReturnType` | - |
| `watchPendingTransactions` | (`args`: `WatchPendingTransactionsParameters`\<`Transport`\>) => `WatchPendingTransactionsReturnType` | - |

#### Inherited from

NFTsBaseApi.publicClient

#### Defined in

[src/Instantiable.abstract.ts:92](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L92)

___

### walletClient

• `get` **walletClient**(): `Object`

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `undefined` \| `Account` | The Account of the Client. |
| `addChain` | (`args`: `AddChainParameters`) => `Promise`\<`void`\> | - |
| `batch?` | \{ `multicall?`: `boolean` \| \{ `batchSize?`: `number` ; `wait?`: `number`  }  } | Flags for batch settings. |
| `batch.multicall?` | `boolean` \| \{ `batchSize?`: `number` ; `wait?`: `number`  } | Toggle to enable `eth_call` multicall aggregation. |
| `cacheTime` | `number` | Time (in ms) that cached data will remain in memory. |
| `ccipRead?` | ``false`` \| \{ `request?`: (`parameters`: `CcipRequestParameters`) => `Promise`\<\`0x$\{string}\`\>  } | [CCIP Read](https://eips.ethereum.org/EIPS/eip-3668) configuration. |
| `chain` | `undefined` \| `Chain` | Chain for the client. |
| `deployContract` | \<abi, chainOverride\>(`args`: `DeployContractParameters`\<`abi`, `undefined` \| `Chain`, `undefined` \| `Account`, `chainOverride`\>) => `Promise`\<\`0x$\{string}\`\> | - |
| `extend` | \<client\>(`fn`: (`client`: `Client`\<`Transport`, `undefined` \| `Chain`, `undefined` \| `Account`, `WalletRpcSchema`, `WalletActions`\<`undefined` \| `Chain`, `undefined` \| `Account`\>\>) => `client`) => `Client`\<`Transport`, `undefined` \| `Chain`, `undefined` \| `Account`, `WalletRpcSchema`, \{ [K in string \| number \| symbol]: client[K] } & `WalletActions`\<`undefined` \| `Chain`, `undefined` \| `Account`\>\> | - |
| `getAddresses` | () => `Promise`\<`GetAddressesReturnType`\> | - |
| `getChainId` | () => `Promise`\<`number`\> | - |
| `getPermissions` | () => `Promise`\<`GetPermissionsReturnType`\> | - |
| `key` | `string` | A key for the client. |
| `name` | `string` | A name for the client. |
| `pollingInterval` | `number` | Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds. |
| `prepareTransactionRequest` | \<TRequest, TChainOverride, TAccountOverride\>(`args`: `PrepareTransactionRequestParameters`\<`undefined` \| `Chain`, `undefined` \| `Account`, `TChainOverride`, `TAccountOverride`, `TRequest`\>) => `Promise`\<\{ [K in string \| number \| symbol]: (UnionRequiredBy\<Extract\<UnionOmit\<(...), (...)\> & ((...) extends (...) ? (...) : (...)) & ((...) extends (...) ? (...) : (...)), IsNever\<(...)\> extends true ? unknown : ExactPartial\<(...)\>\> & Object, ParameterTypeToParameters\<TRequest["parameters"] extends readonly PrepareTransactionRequestParameterType[] ? any[any][number] : "gas" \| "nonce" \| "blobVersionedHashes" \| "chainId" \| "type" \| "fees"\>\> & (unknown extends TRequest["kzg"] ? Object : Pick\<TRequest, "kzg"\>))[K] }\> | - |
| `request` | `EIP1193RequestFn`\<`WalletRpcSchema`\> | Request function wrapped with friendly error handling |
| `requestAddresses` | () => `Promise`\<`RequestAddressesReturnType`\> | - |
| `requestPermissions` | (`args`: \{ `eth_accounts`: `Record`\<`string`, `any`\>  }) => `Promise`\<`RequestPermissionsReturnType`\> | - |
| `sendRawTransaction` | (`args`: `SendRawTransactionParameters`) => `Promise`\<\`0x$\{string}\`\> | - |
| `sendTransaction` | \<TRequest, TChainOverride\>(`args`: `SendTransactionParameters`\<`undefined` \| `Chain`, `undefined` \| `Account`, `TChainOverride`, `TRequest`\>) => `Promise`\<\`0x$\{string}\`\> | - |
| `signMessage` | (`args`: `SignMessageParameters`\<`undefined` \| `Account`\>) => `Promise`\<\`0x$\{string}\`\> | - |
| `signTransaction` | \<TChainOverride\>(`args`: `SignTransactionParameters`\<`undefined` \| `Chain`, `undefined` \| `Account`, `TChainOverride`\>) => `Promise`\<\`0x02$\{string}\` \| \`0x01$\{string}\` \| \`0x03$\{string}\` \| `TransactionSerializedLegacy`\> | - |
| `signTypedData` | \<TTypedData, TPrimaryType\>(`args`: `SignTypedDataParameters`\<`TTypedData`, `TPrimaryType`, `undefined` \| `Account`\>) => `Promise`\<\`0x$\{string}\`\> | - |
| `switchChain` | (`args`: `SwitchChainParameters`) => `Promise`\<`void`\> | - |
| `transport` | `TransportConfig`\<`string`, `EIP1193RequestFn`\> & `Record`\<`string`, `any`\> | The RPC transport |
| `type` | `string` | The type of client. |
| `uid` | `string` | A unique ID for the client. |
| `watchAsset` | (`args`: `WatchAssetParams`) => `Promise`\<`boolean`\> | - |
| `writeContract` | \<abi, functionName, args, TChainOverride\>(`args`: `WriteContractParameters`\<`abi`, `functionName`, `args`, `undefined` \| `Chain`, `undefined` \| `Account`, `TChainOverride`\>) => `Promise`\<\`0x$\{string}\`\> | - |

#### Inherited from

NFTsBaseApi.walletClient

#### Defined in

[src/Instantiable.abstract.ts:100](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L100)

## Methods

### \_details

▸ **_details**(`did`, `ercType`): `Promise`\<\{ `blockNumberUpdated`: `number` ; `lastChecksum`: `any` ; `lastUpdatedBy`: `any` ; `mintCap`: `bigint` ; `nftContractAddress`: `any` ; `nftInitialized`: `any` ; `nftSupply`: `bigint` ; `nftURI`: `string` ; `owner`: `any` ; `providers`: `any` ; `royalties`: `number` ; `royaltyScheme`: [`RoyaltyKind`](../enums/RoyaltyKind.md) ; `url`: `any`  }\>

Get the details of an NFT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The Decentralized Identifier of the NFT asset. |
| `ercType` | [`ERCType`](../enums/ERCType.md) | The type of NFT used |

#### Returns

`Promise`\<\{ `blockNumberUpdated`: `number` ; `lastChecksum`: `any` ; `lastUpdatedBy`: `any` ; `mintCap`: `bigint` ; `nftContractAddress`: `any` ; `nftInitialized`: `any` ; `nftSupply`: `bigint` ; `nftURI`: `string` ; `owner`: `any` ; `providers`: `any` ; `royalties`: `number` ; `royaltyScheme`: [`RoyaltyKind`](../enums/RoyaltyKind.md) ; `url`: `any`  }\>

The details of the NFT.

**`Example`**

```ts
const details = await nevermined.nfts1155.details(ddo.id)

// The `details` object includes the NFT information

assert.equal(details.mintCap, 5)
assert.equal(details.nftSupply, 5)
assert.equal(details.royaltyScheme, RoyaltyKind.Standard)
assert.equal(details.royalties, 100000)
assert.equal(details.owner, artist.getId())
```

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[_details](NFTsBaseApi.md#_details)

#### Defined in

[src/nevermined/api/nfts/NFTsBaseApi.ts:152](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFTsBaseApi.ts#L152)

___

### access

▸ **access**(`did`, `from`, `destination?`, `fileIndex?`, `agreementId?`, `buyer?`, `babysig?`, `serviceReference?`): `Promise`\<`boolean`\>

Access the files associated with an NFT.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | The Decentralized Identifier of the NFT asset. |
| `from` | [`NvmAccount`](NvmAccount.md) | `undefined` | The user account holding NFTs (after purchase) requesting the access |
| `destination?` | `string` | `undefined` | The download destination for the files. |
| `fileIndex?` | `number` | `undefined` | The index of the file. If unset will download all the files in the asset. |
| `agreementId` | `string` | `'0x'` | The NFT sales agreement id. |
| `buyer?` | `string` | `undefined` | Key which represent the buyer |
| `babysig?` | [`Babysig`](../interfaces/Babysig.md) | `undefined` | - |
| `serviceReference` | `number` \| [`ServiceType`](../code-reference.md#servicetype) | `'nft-access'` | The service reference to use. By default is nft-access. |

#### Returns

`Promise`\<`boolean`\>

true if the access was successful or file if isToDownload is false.

**`Remarks`**

This function will call the Node that will check if all the access conditions where fulfilled
before providing the files.

**`Example`**

```ts
const result = await nevermined.nfts1155.access(ddo.id, collector, '/tmp/')
```

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[access](NFTsBaseApi.md#access)

#### Defined in

[src/nevermined/api/nfts/NFTsBaseApi.ts:427](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFTsBaseApi.ts#L427)

___

### addRating

▸ **addRating**(`did`, `newRating`, `numVotesAdded?`, `from`, `publishMetadata?`, `txParams?`): [`SubscribablePromise`](SubscribablePromise.md)\<[`UpdateProgressStep`](../enums/UpdateProgressStep.md), [`DDO`](DDO.md)\>

Given a DID, it adds a vote to the asset curation information.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | Decentralized ID representing the unique id of an asset in a Nevermined network. |
| `newRating` | `number` | `undefined` | New average rating of the asset |
| `numVotesAdded` | `number` | `1` | Number of new votes added to the rating, typically just 1 |
| `from` | [`NvmAccount`](NvmAccount.md) | `undefined` | Account of the user updating the metadata |
| `publishMetadata` | [`PublishMetadataOptions`](../enums/PublishMetadataOptions.md) | `PublishMetadataOptions.OnlyMetadataAPI` | It allows to specify where to store the metadata |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Optional transaction parameters |

#### Returns

[`SubscribablePromise`](SubscribablePromise.md)\<[`UpdateProgressStep`](../enums/UpdateProgressStep.md), [`DDO`](DDO.md)\>

[DDO](DDO.md) The DDO updated

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[addRating](NFTsBaseApi.md#addrating)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:534](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L534)

___

### balance

▸ **balance**(`did`, `account`): `Promise`\<`bigint`\>

Get the NFT balance for a particular did associated to an account/address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The Decentralized Identifier of the NFT asset. |
| `account` | `string` \| [`NvmAccount`](NvmAccount.md) | The account/address to check the balance of. |

#### Returns

`Promise`\<`bigint`\>

The number of editions of a NFT owned by the account/address.

**`Example`**

```ts
const balance = await nevermined.nfts1155.balance(ddo.id, artist)
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:464](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L464)

___

### burn

▸ **burn**(`tokenId`, `nftAmount`, `from`, `txParams?`): `Promise`\<`any`\>

It burns NFTs associated with an asset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenId` | `string` | The Decentralized Identifier of the NFT asset. |
| `nftAmount` | `bigint` | The amount of NFTs to burn. |
| `from` | [`NvmAccount`](NvmAccount.md) | The account of the publisher of the NFT with permissions to burn. |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Optional transaction parameters. |

#### Returns

`Promise`\<`any`\>

The TransactionReceipt

**`Remarks`**

The publisher can only burn NFTs that it owns. NFTs that were already transferred cannot be burned by the publisher.

**`Example`**

```ts
await nevermined.nfts1155.burn(
          did,
          2n,
          artist
)
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:189](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L189)

___

### burnFromHolder

▸ **burnFromHolder**(`holder`, `tokenId`, `nftAmount`, `from`, `txParams?`): `Promise`\<`any`\>

Burns NFTs associated with an asset of a specific account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `holder` | `string` | The address of the account that holds the NFTs. |
| `tokenId` | `string` | The TokenId of the NFT |
| `nftAmount` | `bigint` | The amount of NFTs to burn. |
| `from` | [`NvmAccount`](NvmAccount.md) | The account of the publisher of the NFT. |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Optional transaction parameters. |

#### Returns

`Promise`\<`any`\>

The TransactionReceipt

**`Remarks`**

The publisher can only burn NFTs of an account if is an operator. NFTs that were already transferred cannot be burned by the publisher.

**`Example`**

```ts
await nevermined.nfts1155.burnTo(
          holder,
          tokenId,
          2n,
          artist
)
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:217](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L217)

___

### buySecondaryMarketNft

▸ **buySecondaryMarketNft**(`from`, `nftAmount?`, `agreementIdSeed`, `conditionsTimeout?`, `txParams?`): `Promise`\<`boolean`\>

Buys a number of listed NFTs on secondary markets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | [`NvmAccount`](NvmAccount.md) | The account of the buyer/consumer. |
| `nftAmount` | `bigint` | The number of assets to buy. 1 by default. |
| `agreementIdSeed` | `string` | The seed of the initial sales agreement created off-chain. |
| `conditionsTimeout` | `number`[] | The timeout for the conditions. |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Optional transaction parameters |

#### Returns

`Promise`\<`boolean`\>

true if the buy was successful.

**`Example`**

```ts
const result = await nevermined.nfts1155.buySecondaryMarketNft(
              collector,
              1n,
              agreementId
          )
```

**`Throws`**

[NFTError](NFTError.md)
Thrown if there is an error buying the NFT.

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[buySecondaryMarketNft](NFTsBaseApi.md#buysecondarymarketnft)

#### Defined in

[src/nevermined/api/nfts/NFTsBaseApi.ts:345](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFTsBaseApi.ts#L345)

___

### claim

▸ **claim**(`agreementId`, `nftHolder`, `nftReceiver`, `numberEditions?`, `did?`, `serviceIndex?`): `Promise`\<`boolean`\>

Claims the transfer of a NFT to the Nevermined Node on behalf of the publisher.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agreementId` | `string` | The NFT sales agreement id. |
| `nftHolder` | `string` | The address of the current owner of the NFT. |
| `nftReceiver` | `string` | The address where the NFT should be transferred. |
| `numberEditions` | `bigint` | The number of NFT editions to transfer. If the NFT is ERC-1155 it should be 1 |
| `did?` | `string` | The Decentralized Identifier of the asset. |
| `serviceIndex?` | `number` | The index of the service in the DDO that will be claimed |

#### Returns

`Promise`\<`boolean`\>

true if the transfer was successful.

**`Remarks`**

This is useful when the consumer does not want to wait for the publisher
to transfer the NFT once the payment is made. Assuming the publisher delegated
transfer permissions to the Node.

One example would be a marketplace where the user wants to get access to the NFT
as soon as the payment is made

**`Example`**

```ts
const receipt = await nevermined.nfts1155.claim(
          agreementId,
          publisherAddress,
          subscriberAddress,
          1n,
          did
      )
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:320](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L320)

___

### claimNFT

▸ **claimNFT**(`agreementId`, `nftHolder`, `nftReceiver`, `numberEditions?`, `ercType?`, `did?`, `serviceIndex?`): `Promise`\<`boolean`\>

Claims the transfer of a NFT to the Nevermined Node on behalf of the publisher.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `agreementId` | `string` | `undefined` | The NFT sales agreement id. |
| `nftHolder` | `string` | `undefined` | The address of the current owner of the NFT. |
| `nftReceiver` | `string` | `undefined` | The address where the NFT should be transferred. |
| `numberEditions` | `bigint` | `undefined` | The number of NFT editions to transfer. If the NFT is ERC-721 it should be 1 |
| `ercType` | [`ERCType`](../enums/ERCType.md) | `1155` | The Type of the NFT ERC (1155 or 721). |
| `did?` | `string` | `undefined` | The DID of the asset. |
| `serviceIndex?` | `number` | `undefined` | The index of the service in the DDO that will be claimed |

#### Returns

`Promise`\<`boolean`\>

true if the transfer was successful.

**`Remarks`**

This is useful when the consumer does not want to wait for the publisher
to transfer the NFT once the payment is made. Assuming the publisher delegated
transfer permissions to the Node.

One example would be a marketplace where the user wants to get access to the NFT
as soon as the payment is made

**`Example`**

```ts
const receipt = await nevermined.nfts721.claim(
          agreementId,
          editor.getId(),
          subscriber.getId(),
          nftAmount,
          721
      )
```

**`Throws`**

[NFTError](NFTError.md) if Nevermined is not an operator for this NFT

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[claimNFT](NFTsBaseApi.md#claimnft)

#### Defined in

[src/nevermined/api/nfts/NFTsBaseApi.ts:52](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFTsBaseApi.ts#L52)

___

### create

▸ **create**(`nftAttributes`, `from`, `publicationOptions?`, `txParams?`): [`SubscribablePromise`](SubscribablePromise.md)\<[`CreateProgressStep`](../enums/CreateProgressStep.md), [`DDO`](DDO.md)\>

Creates a new Nevermined asset associated to a NFT (ERC-1155).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftAttributes` | [`NFTAttributes`](NFTAttributes.md) | Attributes describing the NFT (ERC-1155) associated to the asset |
| `from` | [`NvmAccount`](NvmAccount.md) | The account publishing the asset |
| `publicationOptions` | [`AssetPublicationOptions`](AssetPublicationOptions.md) | Allows to specify the publication options of the off-chain and the on-chain data. |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Optional transaction parameters |

#### Returns

[`SubscribablePromise`](SubscribablePromise.md)\<[`CreateProgressStep`](../enums/CreateProgressStep.md), [`DDO`](DDO.md)\>

The newly registered [DDO](DDO.md).

**`Example`**

```ts
const assetAttributes = AssetAttributes.getInstance({
          metadata,
          price: assetPrice,
          serviceTypes: ['nft-sales', 'nft-access']
      })
const nftAttributes = NFTAttributes.getNFT1155Instance({
          ...assetAttributes,
          nftContractAddress: nftUpgradeable.address,
          cap: cappedAmount,
          amount: numberNFTs,
          royaltyAttributes,
          preMint
      })
const ddo = await nevermined.nfts1155.create(
          nftAttributes,
          publisher
      )
```

**`See`**

[PublishOnChainOptions](../enums/PublishOnChainOptions.md) and [PublishMetadataOptions](../enums/PublishMetadataOptions.md)

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:107](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L107)

___

### details

▸ **details**(`did`): `Promise`\<\{ `blockNumberUpdated`: `number` ; `lastChecksum`: `any` ; `lastUpdatedBy`: `any` ; `mintCap`: `bigint` ; `nftContractAddress`: `any` ; `nftInitialized`: `any` ; `nftSupply`: `bigint` ; `nftURI`: `string` ; `owner`: `any` ; `providers`: `any` ; `royalties`: `number` ; `royaltyScheme`: [`RoyaltyKind`](../enums/RoyaltyKind.md) ; `url`: `any`  }\>

Get the details of a NFT

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The Decentralized Identifier of the NFT asset. |

#### Returns

`Promise`\<\{ `blockNumberUpdated`: `number` ; `lastChecksum`: `any` ; `lastUpdatedBy`: `any` ; `mintCap`: `bigint` ; `nftContractAddress`: `any` ; `nftInitialized`: `any` ; `nftSupply`: `bigint` ; `nftURI`: `string` ; `owner`: `any` ; `providers`: `any` ; `royalties`: `number` ; `royaltyScheme`: [`RoyaltyKind`](../enums/RoyaltyKind.md) ; `url`: `any`  }\>

The details of the NFT.

**`Example`**

```ts
const details = await nevermined.nfts1155.details(ddo.id)

// The `details` object includes the NFT information

assert.equal(details.mintCap, 5)
assert.equal(details.nftSupply, 5)
assert.equal(details.royaltyScheme, RoyaltyKind.Standard)
assert.equal(details.royalties, 100000)
assert.equal(details.owner, artist.getId())
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:676](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L676)

___

### getSubscriptionToken

▸ **getSubscriptionToken**(`did`, `from`): `Promise`\<[`SubscriptionToken`](../interfaces/SubscriptionToken.md)\>

Get a JWT token for an asset associated with a webService

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The did of the asset with a webService resource and an associated subscription |
| `from` | [`NvmAccount`](NvmAccount.md) | Account of the user requesting the token |

#### Returns

`Promise`\<[`SubscriptionToken`](../interfaces/SubscriptionToken.md)\>

[SubscriptionToken](../interfaces/SubscriptionToken.md)

**`Example`**

```ts
const response = await nevermined.nfts721.getSubscriptionToken(serviceDDO.id, subscriber)

assert.isDefined(response.accessToken)
assert.isDefined(response.neverminedProxyUri)
```

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[getSubscriptionToken](NFTsBaseApi.md#getsubscriptiontoken)

#### Defined in

[src/nevermined/api/nfts/NFTsBaseApi.ts:490](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFTsBaseApi.ts#L490)

___

### grantOperatorRole

▸ **grantOperatorRole**(`operatorAddress`, `from`, `txParams?`): `Promise`\<`any`\>

Adds a minter (`minterAddress`) to the NFT Contract.
Granting and revoking minting permissions only can be done by the NFT Contract owner

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operatorAddress` | `string` | The address of the account to be added as operator in the NFT Contract |
| `from` | [`NvmAccount`](NvmAccount.md) | The account giving operator permissions |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Optional transaction parameters. |

#### Returns

`Promise`\<`any`\>

The TransactionReceipt

**`Example`**

```ts
await nevermined.nfts1155.grantOperatorRole(
              someoneElse,
              artist
)
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:622](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L622)

___

### isApprovedForAll

▸ **isApprovedForAll**(`operatorAddress`, `from`): `Promise`\<`unknown`\>

Returns if the `operatorAddress` is approved

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operatorAddress` | `string` | The address to check the permissions |
| `from` | `string` | The address of the account granting or revoking the permissions via `setApprovalForAll`. |

#### Returns

`Promise`\<`unknown`\>

Boolean saying if the `operatorAddress` is approved

**`See`**

[claim](NFT1155Api.md#claim)

**`Example`**

```ts
await nevermined.nfts1155.isApprovedForAll(someoneElse, artist.getId())
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:538](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L538)

___

### isOperator

▸ **isOperator**(`nftContractAddress`, `operatorAddress`, `ercType?`): `Promise`\<`boolean`\>

Check if a particular address is the operator of given a NFT address.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `nftContractAddress` | `string` | `undefined` | The DID of the NFT to check |
| `operatorAddress` | `string` | `undefined` | The address to check if operator status |
| `ercType` | [`ERCType`](../enums/ERCType.md) | `1155` | The erc type of the NFT. |

#### Returns

`Promise`\<`boolean`\>

operator status of address as a boolean

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[isOperator](NFTsBaseApi.md#isoperator)

#### Defined in

[src/nevermined/api/nfts/NFTsBaseApi.ts:118](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFTsBaseApi.ts#L118)

___

### isOperatorOfDID

▸ **isOperatorOfDID**(`did`, `address`, `ercType?`): `Promise`\<`boolean`\>

Check if a particular address is the operator of a DID.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | The DID of the NFT to check |
| `address` | `string` | `undefined` | The address to check if operator status |
| `ercType` | [`ERCType`](../enums/ERCType.md) | `1155` | The erc type of the NFT. |

#### Returns

`Promise`\<`boolean`\>

operator status of address as a boolean

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[isOperatorOfDID](NFTsBaseApi.md#isoperatorofdid)

#### Defined in

[src/nevermined/api/nfts/NFTsBaseApi.ts:93](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFTsBaseApi.ts#L93)

___

### list

▸ **list**(`did`, `list`, `from`, `publishMetadata?`, `txParams?`): [`SubscribablePromise`](SubscribablePromise.md)\<[`UpdateProgressStep`](../enums/UpdateProgressStep.md), [`DDO`](DDO.md)\>

Given a DID, updates the metadata associated to the asset allowing to list or unlist it. It also can upload this metadata to a remote decentralized stored depending on the `publishMetadata` parameter.
In a Nevermined environment, when an asset is unlisted, it is not possible to be found and accessed by any user.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | Decentralized ID representing the unique id of an asset in a Nevermined network. |
| `list` | `boolean` | `undefined` | Needs the asset to be listed or unlisted |
| `from` | [`NvmAccount`](NvmAccount.md) | `undefined` | Account of the user updating the metadata |
| `publishMetadata` | [`PublishMetadataOptions`](../enums/PublishMetadataOptions.md) | `PublishMetadataOptions.OnlyMetadataAPI` | It allows to specify where to store the metadata |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Optional transaction parameters |

#### Returns

[`SubscribablePromise`](SubscribablePromise.md)\<[`UpdateProgressStep`](../enums/UpdateProgressStep.md), [`DDO`](DDO.md)\>

[DDO](DDO.md) The DDO updated

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[list](NFTsBaseApi.md#list)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:482](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L482)

___

### listOnSecondaryMarkets

▸ **listOnSecondaryMarkets**(`ddo`, `assetPrice`, `nftAmount`, `nftTransfer`, `provider`, `token`, `from`): `Promise`\<`string`\>

After purchase re-list an NFT to enable secondary market sales.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ddo` | [`DDO`](DDO.md) | The DDO of the asset. |
| `assetPrice` | [`AssetPrice`](AssetPrice.md) | The current setup of asset rewards. |
| `nftAmount` | `bigint` | The number of NFTs put up for secondary sale. |
| `nftTransfer` | `boolean` | - |
| `provider` | `string` | The address that will be the provider of the secondary sale. |
| `token` | [`Token`](Token.md) | - |
| `from` | [`NvmAccount`](NvmAccount.md) | The account of the current owner. |

#### Returns

`Promise`\<`string`\>

the agreementId of the secondary sale.

**`Example`**

```ts
const agreementId = await nevermined.nfts1155.listOnSecondaryMarkets(
              ddo,
              assetPrice,
              numberNFTs,
              collector.getId(),
              token,
              collector.getId()
          )
```

**`Throws`**

[NFTError](NFTError.md)
Thrown if there is an error listing the NFT.

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[listOnSecondaryMarkets](NFTsBaseApi.md#listonsecondarymarkets)

#### Defined in

[src/nevermined/api/nfts/NFTsBaseApi.ts:262](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFTsBaseApi.ts#L262)

___

### mint

▸ **mint**(`did`, `nftAmount`, `receiver`, `from`, `data?`, `txParams?`): `Promise`\<`any`\>

It mints the NFTs associated with an asset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The Decentralized Identifier of the NFT asset. |
| `nftAmount` | `bigint` | The amount of NFTs to mint. |
| `receiver` | `undefined` \| `string` | Account address of the NFT receiver, if `undefined` the minter account will receive the NFT/s |
| `from` | [`NvmAccount`](NvmAccount.md) | The account minting the NFT. * |
| `data?` | `string` | Data |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Optional transaction parameters. |

#### Returns

`Promise`\<`any`\>

The TransactionReceipt

**`Remarks`**

This function can be called multiple times as long as the minting does not exceed the maximum cap set during creation.

**`Example`**

```ts
await nevermined.nfts1155.mint(
          did,
          10n,
          artist
)
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:149](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L149)

___

### order

▸ **order**(`did`, `numberEditions`, `from`, `serviceReference?`, `txParams?`): [`SubscribablePromise`](SubscribablePromise.md)\<[`OrderProgressStep`](../enums/OrderProgressStep.md), `string`\>

It orders NFTs.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | The Decentralized Identifier of the NFT asset. |
| `numberEditions` | `bigint` | `undefined` | The amount of NFTs to buy. |
| `from` | [`NvmAccount`](NvmAccount.md) | `undefined` | The account of the NFT buyer. |
| `serviceReference` | `number` \| [`ServiceType`](../code-reference.md#servicetype) | `'nft-sales'` | The reference to identify wich service within the DDO to order |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Optional transaction parameters. |

#### Returns

[`SubscribablePromise`](SubscribablePromise.md)\<[`OrderProgressStep`](../enums/OrderProgressStep.md), `string`\>

The agreement ID.

**`Remarks`**

This will lock the funds of the consumer in escrow pending the transfer of the NFTs
from the publisher.

**`Example`**

```ts
agreementId = await nevermined.nfts1155.order(ddo.id, numberNFTs, collector)
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:250](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L250)

___

### orderAsset

▸ **orderAsset**(`did`, `serviceReference`, `from`, `txParams?`): [`SubscribablePromise`](SubscribablePromise.md)\<[`OrderProgressStep`](../enums/OrderProgressStep.md), `string`\>

Start the purchase/order of an asset's service. Starts by signing the service agreement
then sends the request to the publisher via the service endpoint (Node http service).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | Decentralized ID. |
| `serviceReference` | `number` \| [`ServiceType`](../code-reference.md#servicetype) | Service. |
| `from` | [`NvmAccount`](NvmAccount.md) | Consumer account. |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Transaction parameters |

#### Returns

[`SubscribablePromise`](SubscribablePromise.md)\<[`OrderProgressStep`](../enums/OrderProgressStep.md), `string`\>

The agreement ID.

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[orderAsset](NFTsBaseApi.md#orderasset)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:585](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L585)

___

### owner

▸ **owner**(): `Promise`\<`string`\>

Gets the contract owner

#### Returns

`Promise`\<`string`\>

Address of the contract owner

**`Example`**

```ts
const nftContractOwner = new NvmAccount(
     await nevermined.nfts1155.owner()
)
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:483](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L483)

___

### registerNeverminedAsset

▸ **registerNeverminedAsset**(`assetAttributes`, `from`, `publicationOptions`, `nftAttributes?`, `txParams?`): [`SubscribablePromise`](SubscribablePromise.md)\<[`CreateProgressStep`](../enums/CreateProgressStep.md), [`DDO`](DDO.md)\>

It registers a new asset in a Nevermined network. This method is protected and not exposed
via the Nevermined APIs directly. It must accessed via the `assets`, `compute`, and `nfts` APIs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetAttributes` | [`AssetAttributes`](AssetAttributes.md) | Attributes describing the asset |
| `from` | [`NvmAccount`](NvmAccount.md) | The account publishing the asset |
| `publicationOptions` | [`AssetPublicationOptions`](AssetPublicationOptions.md) | Allows to specify the publication options of the off-chain and the on-chain data. |
| `nftAttributes?` | [`NFTAttributes`](NFTAttributes.md) | Attributes describing the NFT (ERC-721) associated to the asset |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Optional transaction parameters |

#### Returns

[`SubscribablePromise`](SubscribablePromise.md)\<[`CreateProgressStep`](../enums/CreateProgressStep.md), [`DDO`](DDO.md)\>

The metadata of the asset created (DDO)

**`See`**

[PublishOnChainOptions](../enums/PublishOnChainOptions.md) and [PublishMetadataOptions](../enums/PublishMetadataOptions.md)

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[registerNeverminedAsset](NFTsBaseApi.md#registerneverminedasset)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:52](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L52)

___

### releaseRewards

▸ **releaseRewards**(`agreementId`, `did`, `serviceReference?`, `nftAmount`, `from`, `txParams?`): `Promise`\<`boolean`\>

Release the funds from escrow.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `agreementId` | `string` | `undefined` | The NFT sales agreement id. |
| `did` | `string` | `undefined` | The Decentralized identifier of the NFT asset. |
| `serviceReference` | `number` \| [`ServiceType`](../code-reference.md#servicetype) | `'nft-sales'` | The reference to identify wich service within the DDO to release rewards |
| `nftAmount` | `bigint` | `undefined` | The amount of NFTs to transfer. |
| `from` | [`NvmAccount`](NvmAccount.md) | `undefined` | The current owner of the NFTs. |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Optional transaction parameters. |

#### Returns

`Promise`\<`boolean`\>

true if the funds release was successful.

**`Remarks`**

A publisher is able to release the funds put on escrow by the consumer after transferring the NFTs.

**`Example`**

```ts
const receipt = await nevermined.nfts1155.releaseRewards(
          agreementId,
          ddo.id,
          numberNFTs,
          artist
      )
```

**`Throws`**

[NFTError](NFTError.md)
Thrown if there is an error releasing the rewards

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:423](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L423)

___

### releaseSecondaryMarketRewards

▸ **releaseSecondaryMarketRewards**(`owner`, `consumer`, `agreementIdSeed`, `serviceReference?`, `txParams?`): `Promise`\<`boolean`\>

Used to release the secondary market NFT & the locked rewards.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `owner` | [`NvmAccount`](NvmAccount.md) | `undefined` | The owner account. |
| `consumer` | [`NvmAccount`](NvmAccount.md) | `undefined` | The consumer account. |
| `agreementIdSeed` | `string` | `undefined` | the Id of the underlying service agreement seed. |
| `serviceReference` | `number` \| [`ServiceType`](../code-reference.md#servicetype) | `'nft-sales'` | The reference to identify wich service within the DDO to release rewards |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Optional transaction parameters. |

#### Returns

`Promise`\<`boolean`\>

true if the transaction was successful.

**`Example`**

```ts
// TODO
```

**`Throws`**

[NFTError](NFTError.md)
Thrown if there is an error releasing the rewards.

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:560](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L560)

___

### resolveAsset

▸ **resolveAsset**(`did`, `policy?`): `Promise`\<[`DDO`](DDO.md)\>

Given an asset DID it returns the metadata of that asset represented by a DDO object.
Depending of the resolution policy it prioritize fetching that Metadata from the Marketplace API or Immutable urls (like IPFS).

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | Decentralized ID. |
| `policy` | [`DIDResolvePolicy`](../enums/DIDResolvePolicy.md) | `DIDResolvePolicy.MetadataAPIFirst` | It specifies the resolve policy to apply. It allows to select that priorities during the asset resolution via Metadata API or Immutable URLs (IPFS, Filecoin, etc) |

#### Returns

`Promise`\<[`DDO`](DDO.md)\>

[DDO](DDO.md)

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[resolveAsset](NFTsBaseApi.md#resolveasset)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:324](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L324)

___

### revokeOperatorRole

▸ **revokeOperatorRole**(`operatorAddress`, `from`, `txParams?`): `Promise`\<`any`\>

Revokes an address (`operatorAddress`) of the NFT Contract as operator.
Granting and revoking minting permissions only can be done by the NFT Contract owner

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operatorAddress` | `string` | The address of the account to be revoked as operator in the NFT Contract |
| `from` | [`NvmAccount`](NvmAccount.md) | The account revoking operator permissions |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Optional transaction parameters. |

#### Returns

`Promise`\<`any`\>

The TransactionReceipt

**`Example`**

```ts
await nevermined.nfts1155.revokeOperatorRole(
              someoneElse,
              artist
)
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:648](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L648)

___

### setApprovalForAll

▸ **setApprovalForAll**(`operatorAddress`, `approved`, `from`, `txParams?`): `Promise`\<`any`\>

Enable or disable NFT permissions for an operator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operatorAddress` | `string` | The address that of the operator we want to give transfer rights to. |
| `approved` | `boolean` | Give or remove transfer rights from the operator. |
| `from` | [`NvmAccount`](NvmAccount.md) | The account that wants to give transfer rights to the operator. |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Transaction additional parameters |

#### Returns

`Promise`\<`any`\>

The TransactionReceipt

**`See`**

[claim](NFT1155Api.md#claim)

**`Example`**

```ts
await nevermined.nfts1155.setApprovalForAll(
              someoneElse,
              true,
              artist
)
```

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:508](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L508)

___

### setInstanceConfig

▸ **setInstanceConfig**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`InstantiableConfig`](../interfaces/InstantiableConfig.md) |

#### Returns

`void`

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[setInstanceConfig](NFTsBaseApi.md#setinstanceconfig)

#### Defined in

[src/Instantiable.abstract.ts:158](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L158)

___

### transfer

▸ **transfer**(`agreementId`, `did`, `nftAmount`, `from`, `serviceReference?`, `txParams?`): `Promise`\<`boolean`\>

Transfer NFTs to the consumer.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `agreementId` | `string` | `undefined` | The NFT sales agreement id. |
| `did` | `string` | `undefined` | The Decentralized identifier of the NFT asset. |
| `nftAmount` | `bigint` | `undefined` | The number of NFTs to transfer. |
| `from` | [`NvmAccount`](NvmAccount.md) | `undefined` | The current owner of the NFTs. |
| `serviceReference` | `number` \| [`ServiceType`](../code-reference.md#servicetype) | `'nft-sales'` | The reference to identify wich service within the DDO to transfer |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Optional transaction parameters. |

#### Returns

`Promise`\<`boolean`\>

true if the transfer was successful.

**`Remarks`**

A publisher/provider will check if the consumer put the funds in escrow and
execute the transfer in order to be able to release the rewards.

**`Example`**

```ts
const receipt = await nevermined.nfts1155.transfer(
          agreementId,
          ddo.id,
          numberNFTs,
          artist
      )
```

**`Throws`**

[NFTError](NFTError.md)
Thrown if there is an error transferring the NFT

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:367](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L367)

___

### updateAsset

▸ **updateAsset**(`did`, `metadata`, `from`, `publishMetadataOptions?`, `txParams?`): [`SubscribablePromise`](SubscribablePromise.md)\<[`UpdateProgressStep`](../enums/UpdateProgressStep.md), [`DDO`](DDO.md)\>

Given a DID, updates the metadata associated to the asset. It also can upload this metadata to a remote decentralized stored depending on the `publishMetadata` parameter.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | Decentralized ID representing the unique id of an asset in a Nevermined network. |
| `metadata` | [`MetaData`](../interfaces/MetaData.md) | `undefined` | Metadata describing the asset |
| `from` | [`NvmAccount`](NvmAccount.md) | `undefined` | Account of the user updating the metadata |
| `publishMetadataOptions` | [`PublishMetadataOptions`](../enums/PublishMetadataOptions.md) | `PublishMetadataOptions.OnlyMetadataAPI` | It allows to specify where to store the metadata |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Optional transaction parameters |

#### Returns

[`SubscribablePromise`](SubscribablePromise.md)\<[`UpdateProgressStep`](../enums/UpdateProgressStep.md), [`DDO`](DDO.md)\>

[DDO](DDO.md) The DDO updated

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[updateAsset](NFTsBaseApi.md#updateasset)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:367](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L367)

___

### getInstance

▸ **getInstance**(`config`, `nftContractInstance?`, `nftContractAddress?`): `Promise`\<[`NFT1155Api`](NFT1155Api.md)\>

Create a new Nevermined NFTs (ERC-1155) instance allowing to interact with that kind of NFTs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`InstantiableConfig`](../interfaces/InstantiableConfig.md) | The Nevermined config |
| `nftContractInstance?` | [`Nft1155Contract`](Nft1155Contract.md) | If there is already deployed an instance of `Nft1155Contract` |
| `nftContractAddress?` | `string` | If the `Nft1155Contract` is deployed in an address it will connect to that contract |

#### Returns

`Promise`\<[`NFT1155Api`](NFT1155Api.md)\>

The NFTs 1155 API instance [NFT1155Api](NFT1155Api.md).

**`Example`**

```ts
nfts1155 = await Nft1155Api.getInstance(
     instanceConfig,
     nft1155Contract
)
```

#### Overrides

[NFTsBaseApi](NFTsBaseApi.md).[getInstance](NFTsBaseApi.md#getinstance)

#### Defined in

[src/nevermined/api/nfts/NFT1155Api.ts:44](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFT1155Api.ts#L44)

___

### getNFTContractAddress

▸ **getNFTContractAddress**(`ddo`, `serviceReference?`): `any`

Gets the NFT contract address associated with a Nevermined asset from the DDO.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ddo` | [`DDO`](DDO.md) | `undefined` | The DDO of the asset. |
| `serviceReference` | `number` \| [`ServiceType`](../code-reference.md#servicetype) | `'nft-access'` | The service type to look for the contract address |

#### Returns

`any`

The NFT contract address.

**`Example`**

```ts
const nftContractAddress = NFT1155Api.getNFTContractAddress(ddo)
```

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[getNFTContractAddress](NFTsBaseApi.md#getnftcontractaddress)

#### Defined in

[src/nevermined/api/nfts/NFTsBaseApi.ts:221](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/nfts/NFTsBaseApi.ts#L221)

___

### getServicePlugin

▸ **getServicePlugin**(`config`): `Object`

Initializes the default Nevermined service plugins and return that instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`InstantiableConfig`](../interfaces/InstantiableConfig.md) | Nevermined config |

#### Returns

`Object`

The Nevermined Service Plugin instance

| Name | Type |
| :------ | :------ |
| `access` | [`AccessService`](AccessService.md) |
| `compute` | [`EscrowComputeExecutionTemplate`](EscrowComputeExecutionTemplate.md) |
| `nft-access` | [`NFTAccessService`](NFTAccessService.md) |
| `nft-sales` | [`NFTSalesService`](NFTSalesService.md) |

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[getServicePlugin](NFTsBaseApi.md#getserviceplugin)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:640](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L640)

___

### setInstanceConfig

▸ **setInstanceConfig**\<`T`\>(`instance`, `instantiableConfig`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Instantiable`](Instantiable.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `T` |
| `instantiableConfig` | [`InstantiableConfig`](../interfaces/InstantiableConfig.md) |

#### Returns

`void`

#### Inherited from

[NFTsBaseApi](NFTsBaseApi.md).[setInstanceConfig](NFTsBaseApi.md#setinstanceconfig-1)

#### Defined in

[src/Instantiable.abstract.ts:149](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L149)