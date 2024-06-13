[@nevermined-io/sdk](../code-reference.md) / RegistryBaseApi

# Class: RegistryBaseApi

Abstract class proving common functionality related with Assets registration.

## Hierarchy

- [`Instantiable`](Instantiable.md)

  ↳ **`RegistryBaseApi`**

  ↳↳ [`AssetsApi`](AssetsApi.md)

  ↳↳ [`ComputeApi`](ComputeApi.md)

  ↳↳ [`NFTsBaseApi`](NFTsBaseApi.md)

## Table of contents

### Constructors

- [constructor](RegistryBaseApi.md#constructor)

### Properties

- [servicePlugin](RegistryBaseApi.md#serviceplugin)

### Accessors

- [artifactsFolder](RegistryBaseApi.md#artifactsfolder)
- [circuitsFolder](RegistryBaseApi.md#circuitsfolder)
- [client](RegistryBaseApi.md#client)
- [config](RegistryBaseApi.md#config)
- [instanceConfig](RegistryBaseApi.md#instanceconfig)
- [instantiableConfig](RegistryBaseApi.md#instantiableconfig)
- [logger](RegistryBaseApi.md#logger)
- [nevermined](RegistryBaseApi.md#nevermined)
- [publicClient](RegistryBaseApi.md#publicclient)
- [walletClient](RegistryBaseApi.md#walletclient)

### Methods

- [addRating](RegistryBaseApi.md#addrating)
- [getPriced](RegistryBaseApi.md#getpriced)
- [list](RegistryBaseApi.md#list)
- [orderAsset](RegistryBaseApi.md#orderasset)
- [registerNeverminedAsset](RegistryBaseApi.md#registerneverminedasset)
- [resolveAsset](RegistryBaseApi.md#resolveasset)
- [setInstanceConfig](RegistryBaseApi.md#setinstanceconfig)
- [updateAsset](RegistryBaseApi.md#updateasset)
- [getInstance](RegistryBaseApi.md#getinstance)
- [getServicePlugin](RegistryBaseApi.md#getserviceplugin)
- [setInstanceConfig](RegistryBaseApi.md#setinstanceconfig-1)

## Constructors

### constructor

• **new RegistryBaseApi**(): [`RegistryBaseApi`](RegistryBaseApi.md)

#### Returns

[`RegistryBaseApi`](RegistryBaseApi.md)

#### Inherited from

[Instantiable](Instantiable.md).[constructor](Instantiable.md#constructor)

## Properties

### servicePlugin

• **servicePlugin**: `Object`

#### Index signature

▪ [key: `string`]: [`ServicePlugin`](../interfaces/ServicePlugin.md)\<[`Service`](../code-reference.md#service)\>

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:39](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L39)

## Accessors

### artifactsFolder

• `get` **artifactsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Instantiable.artifactsFolder

#### Defined in

[src/Instantiable.abstract.ts:132](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L132)

___

### circuitsFolder

• `get` **circuitsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

Instantiable.circuitsFolder

#### Defined in

[src/Instantiable.abstract.ts:136](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L136)

___

### client

• `get` **client**(): [`Web3Clients`](../interfaces/Web3Clients.md)

#### Returns

[`Web3Clients`](../interfaces/Web3Clients.md)

#### Inherited from

Instantiable.client

#### Defined in

[src/Instantiable.abstract.ts:84](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L84)

___

### config

• `get` **config**(): [`NeverminedOptions`](NeverminedOptions.md)

#### Returns

[`NeverminedOptions`](NeverminedOptions.md)

#### Inherited from

Instantiable.config

#### Defined in

[src/Instantiable.abstract.ts:115](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L115)

___

### instanceConfig

• `get` **instanceConfig**(): [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

[`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

Instantiable.instanceConfig

#### Defined in

[src/Instantiable.abstract.ts:140](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L140)

___

### instantiableConfig

• `get` **instantiableConfig**(): `undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

`undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

Instantiable.instantiableConfig

#### Defined in

[src/Instantiable.abstract.ts:108](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L108)

___

### logger

• `get` **logger**(): `Logger`

#### Returns

`Logger`

#### Inherited from

Instantiable.logger

#### Defined in

[src/Instantiable.abstract.ts:123](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L123)

___

### nevermined

• `get` **nevermined**(): [`Nevermined`](Nevermined.md)

#### Returns

[`Nevermined`](Nevermined.md)

#### Inherited from

Instantiable.nevermined

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

Instantiable.publicClient

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

Instantiable.walletClient

#### Defined in

[src/Instantiable.abstract.ts:100](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L100)

## Methods

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

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:534](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L534)

___

### getPriced

▸ **getPriced**(`assetPrice`): `Promise`\<[`PricedMetadataInformation`](../code-reference.md#pricedmetadatainformation)\>

It returns the priced metadata information of an asset

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetPrice` | `undefined` \| [`AssetPrice`](AssetPrice.md) | the asset price |

#### Returns

`Promise`\<[`PricedMetadataInformation`](../code-reference.md#pricedmetadatainformation)\>

[PricedMetadataInformation](../code-reference.md#pricedmetadatainformation)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:654](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L654)

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

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:482](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L482)

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

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:585](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L585)

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

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:52](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L52)

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

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:324](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L324)

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

[Instantiable](Instantiable.md).[setInstanceConfig](Instantiable.md#setinstanceconfig)

#### Defined in

[src/Instantiable.abstract.ts:158](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L158)

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

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:367](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L367)

___

### getInstance

▸ **getInstance**(`..._args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `any` |

#### Returns

`any`

#### Inherited from

[Instantiable](Instantiable.md).[getInstance](Instantiable.md#getinstance)

#### Defined in

[src/Instantiable.abstract.ts:145](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L145)

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

[Instantiable](Instantiable.md).[setInstanceConfig](Instantiable.md#setinstanceconfig-1)

#### Defined in

[src/Instantiable.abstract.ts:149](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L149)