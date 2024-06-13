[@nevermined-io/sdk](../code-reference.md) / AssetsApi

# Class: AssetsApi

Nevermined Assets API. It allows the registration and management of digital assets in a
Nevermined digital ecosystem.
You can find more information about you can do in a Nevermined information here:
[https://docs.nevermined.io/docs/architecture/what-can-i-do](https://docs.nevermined.io/docs/architecture/what-can-i-do)

## Hierarchy

- [`RegistryBaseApi`](RegistryBaseApi.md)

  ↳ **`AssetsApi`**

## Table of contents

### Constructors

- [constructor](AssetsApi.md#constructor)

### Properties

- [providers](AssetsApi.md#providers)
- [servicePlugin](AssetsApi.md#serviceplugin)

### Accessors

- [artifactsFolder](AssetsApi.md#artifactsfolder)
- [circuitsFolder](AssetsApi.md#circuitsfolder)
- [client](AssetsApi.md#client)
- [config](AssetsApi.md#config)
- [instanceConfig](AssetsApi.md#instanceconfig)
- [instantiableConfig](AssetsApi.md#instantiableconfig)
- [logger](AssetsApi.md#logger)
- [nevermined](AssetsApi.md#nevermined)
- [publicClient](AssetsApi.md#publicclient)
- [walletClient](AssetsApi.md#walletclient)

### Methods

- [access](AssetsApi.md#access)
- [addRating](AssetsApi.md#addrating)
- [consumerAssets](AssetsApi.md#consumerassets)
- [create](AssetsApi.md#create)
- [download](AssetsApi.md#download)
- [getNftContractAddress](AssetsApi.md#getnftcontractaddress)
- [getPermissions](AssetsApi.md#getpermissions)
- [grantPermissions](AssetsApi.md#grantpermissions)
- [list](AssetsApi.md#list)
- [order](AssetsApi.md#order)
- [orderAsset](AssetsApi.md#orderasset)
- [owner](AssetsApi.md#owner)
- [ownerAssets](AssetsApi.md#ownerassets)
- [ownerSignature](AssetsApi.md#ownersignature)
- [registerNeverminedAsset](AssetsApi.md#registerneverminedasset)
- [resolve](AssetsApi.md#resolve)
- [resolveAsset](AssetsApi.md#resolveasset)
- [retire](AssetsApi.md#retire)
- [revokePermissions](AssetsApi.md#revokepermissions)
- [setInstanceConfig](AssetsApi.md#setinstanceconfig)
- [transferOwnership](AssetsApi.md#transferownership)
- [update](AssetsApi.md#update)
- [updateAsset](AssetsApi.md#updateasset)
- [getInstance](AssetsApi.md#getinstance)
- [getServicePlugin](AssetsApi.md#getserviceplugin)
- [setInstanceConfig](AssetsApi.md#setinstanceconfig-1)

## Constructors

### constructor

• **new AssetsApi**(`config`): [`AssetsApi`](AssetsApi.md)

Creates a new AssetsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`InstantiableConfig`](../interfaces/InstantiableConfig.md) | Configuration of the Nevermined instance |

#### Returns

[`AssetsApi`](AssetsApi.md)

[AssetsApi](AssetsApi.md)

#### Overrides

[RegistryBaseApi](RegistryBaseApi.md).[constructor](RegistryBaseApi.md#constructor)

#### Defined in

[src/nevermined/api/AssetsApi.ts:87](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L87)

## Properties

### providers

• **providers**: [`Providers`](Providers.md)

Utilities about the providers associated to an asset

#### Defined in

[src/nevermined/api/AssetsApi.ts:80](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L80)

___

### servicePlugin

• **servicePlugin**: `Object`

#### Index signature

▪ [key: `string`]: [`ServicePlugin`](../interfaces/ServicePlugin.md)\<[`Service`](../code-reference.md#service)\>

#### Inherited from

[RegistryBaseApi](RegistryBaseApi.md).[servicePlugin](RegistryBaseApi.md#serviceplugin)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:39](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L39)

## Accessors

### artifactsFolder

• `get` **artifactsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

RegistryBaseApi.artifactsFolder

#### Defined in

[src/Instantiable.abstract.ts:132](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L132)

___

### circuitsFolder

• `get` **circuitsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

RegistryBaseApi.circuitsFolder

#### Defined in

[src/Instantiable.abstract.ts:136](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L136)

___

### client

• `get` **client**(): [`Web3Clients`](../interfaces/Web3Clients.md)

#### Returns

[`Web3Clients`](../interfaces/Web3Clients.md)

#### Inherited from

RegistryBaseApi.client

#### Defined in

[src/Instantiable.abstract.ts:84](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L84)

___

### config

• `get` **config**(): [`NeverminedOptions`](NeverminedOptions.md)

#### Returns

[`NeverminedOptions`](NeverminedOptions.md)

#### Inherited from

RegistryBaseApi.config

#### Defined in

[src/Instantiable.abstract.ts:115](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L115)

___

### instanceConfig

• `get` **instanceConfig**(): [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

[`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

RegistryBaseApi.instanceConfig

#### Defined in

[src/Instantiable.abstract.ts:140](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L140)

___

### instantiableConfig

• `get` **instantiableConfig**(): `undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

`undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

RegistryBaseApi.instantiableConfig

#### Defined in

[src/Instantiable.abstract.ts:108](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L108)

___

### logger

• `get` **logger**(): `Logger`

#### Returns

`Logger`

#### Inherited from

RegistryBaseApi.logger

#### Defined in

[src/Instantiable.abstract.ts:123](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L123)

___

### nevermined

• `get` **nevermined**(): [`Nevermined`](Nevermined.md)

#### Returns

[`Nevermined`](Nevermined.md)

#### Inherited from

RegistryBaseApi.nevermined

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

RegistryBaseApi.publicClient

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

RegistryBaseApi.walletClient

#### Defined in

[src/Instantiable.abstract.ts:100](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L100)

## Methods

### access

▸ **access**(`agreementId`, `did`, `serviceReference`, `from`, `resultPath?`, `fileIndex?`, `buyer?`, `babysig?`): `Promise`\<`string` \| ``true``\>

Having previously ordered an "access" service (referenced via an "agreementId").
This method allows to download the assets associated to that service.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `agreementId` | `string` | `undefined` | The unique identifier of the order placed for a service |
| `did` | `string` | `undefined` | Unique identifier of the asset ordered |
| `serviceReference` | `number` \| [`ServiceType`](../code-reference.md#servicetype) | `undefined` | The service to download. By default is the access service, but it can be specified the service.index to refer a different specific service |
| `from` | [`NvmAccount`](NvmAccount.md) | `undefined` | The account of the user who ordered the asset and is downloading the files |
| `resultPath?` | `string` | `undefined` | Where the files will be downloaded |
| `fileIndex` | `number` | `-1` | The file to download. If not given or is -1 it will download all of them. |
| `buyer?` | `string` | `undefined` | Key which represent the buyer |
| `babysig?` | [`Babysig`](../interfaces/Babysig.md) | `undefined` | An elliptic curve signature |

#### Returns

`Promise`\<`string` \| ``true``\>

The result path or true if everything went okay

#### Defined in

[src/nevermined/api/AssetsApi.ts:217](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L217)

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

[RegistryBaseApi](RegistryBaseApi.md).[addRating](RegistryBaseApi.md#addrating)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:534](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L534)

___

### consumerAssets

▸ **consumerAssets**(`consumerAccount`): `Promise`\<`string`[]\>

Returns the assets of a consumer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `consumerAccount` | `string` | Consumer address. |

#### Returns

`Promise`\<`string`[]\>

List of DIDs.

#### Defined in

[src/nevermined/api/AssetsApi.ts:360](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L360)

___

### create

▸ **create**(`assetAttributes`, `from`, `publicationOptions?`, `txParams?`): [`SubscribablePromise`](SubscribablePromise.md)\<[`CreateProgressStep`](../enums/CreateProgressStep.md), [`DDO`](DDO.md)\>

Registers a new asset in Nevermined.
You can find more information about how different data is stored in Nevermined here:
[https://docs.nevermined.io/docs/architecture/nevermined-data](https://docs.nevermined.io/docs/architecture/nevermined-data)

   *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetAttributes` | [`AssetAttributes`](AssetAttributes.md) | Attributes describing the asset |
| `from` | [`NvmAccount`](NvmAccount.md) | The account publishing the asset |
| `publicationOptions` | [`AssetPublicationOptions`](AssetPublicationOptions.md) | Allows to specify the publication options of the off-chain and the on-chain data. |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Optional transaction parameters |

#### Returns

[`SubscribablePromise`](SubscribablePromise.md)\<[`CreateProgressStep`](../enums/CreateProgressStep.md), [`DDO`](DDO.md)\>

The metadata of the asset created (DDO)

[DDO](DDO.md)

**`Example`**

```ts
const assetAttributes = AssetAttributes.getInstance({
          metadata,
          price: assetPrice,
          serviceTypes: ['sales', 'access']
})
const ddo = await nevermined.assets.create(
     assetAttributes,
     publisher,
     PublishMetadata.IPFS
)
```

**`See`**

[PublishOnChainOptions](../enums/PublishOnChainOptions.md) and [PublishMetadataOptions](../enums/PublishMetadataOptions.md)

#### Defined in

[src/nevermined/api/AssetsApi.ts:134](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L134)

___

### download

▸ **download**(`did`, `from`, `resultPath?`, `fileIndex?`, `serviceType?`, `buyer?`, `babysig?`): `Promise`\<`string`\>

It allows to download of the files attached to the asset by their owner or provider.
This method only can be called successfully by the owner of the asset or a provider.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | The Decentralized Identifier of the asset. |
| `from` | [`NvmAccount`](NvmAccount.md) | `undefined` | The account of the asset owner |
| `resultPath?` | `string` | `undefined` | Path to be the files downloader |
| `fileIndex` | `number` | `-1` | The index of the file |
| `serviceType` | [`ServiceType`](../code-reference.md#servicetype) | `'access'` | Service type. 'access' by default |
| `buyer?` | `string` | `undefined` | Key which represent the buyer |
| `babysig?` | [`Babysig`](../interfaces/Babysig.md) | `undefined` | An elliptic curve signature |

#### Returns

`Promise`\<`string`\>

Status, path destination if resultPath is provided

#### Defined in

[src/nevermined/api/AssetsApi.ts:390](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L390)

___

### getNftContractAddress

▸ **getNftContractAddress**(`ddo`, `serviceType?`): `string`

Get the NFT contract address associated with a Nevermined asset.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ddo` | [`DDO`](DDO.md) | `undefined` | The DDO of the asset. |
| `serviceType` | [`ServiceType`](../code-reference.md#servicetype) | `'nft-access'` | The service type to use to get the NFT contract address. |

#### Returns

`string`

The NFT contract address.

**`Example`**

```ts
nevermined.assets.getNftContractAddress(ddo)
```

**`Throws`**

DDOError - If the NFT contract address is not found in the DDO.

#### Defined in

[src/nevermined/api/AssetsApi.ts:509](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L509)

___

### getPermissions

▸ **getPermissions**(`did`, `address`): `Promise`\<`boolean`\>

Checks if an account with a specific address has permissions to a specific asset represented by a DID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the asset to check the permissions |
| `address` | `string` | The address of the account to check the permissions |

#### Returns

`Promise`\<`boolean`\>

True if the address has permissions on the asset

#### Defined in

[src/nevermined/api/AssetsApi.ts:491](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L491)

___

### grantPermissions

▸ **grantPermissions**(`did`, `grantAddress`, `from`, `txParams?`): `Promise`\<`any`\>

It grants permissions to an account for a specific asset represented by a DID.
Only can be called by the asset owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the assert |
| `grantAddress` | `string` | The account address to grant the permissions |
| `from` | [`NvmAccount`](NvmAccount.md) | Account sending the request. It must be the owner of the asset |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Transaction parameters |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/nevermined/api/AssetsApi.ts:448](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L448)

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

[RegistryBaseApi](RegistryBaseApi.md).[list](RegistryBaseApi.md#list)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:482](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L482)

___

### order

▸ **order**(`did`, `serviceReference?`, `from`, `txParams?`): [`SubscribablePromise`](SubscribablePromise.md)\<[`OrderProgressStep`](../enums/OrderProgressStep.md), `string`\>

Start the purchase/order of an access service. Starts by signing the service agreement
then sends the request to the publisher via the service endpoint (Node http service).
If the access service to purchase is having associated some price, it will make the payment
for that service.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | Unique identifier of the asset to order |
| `serviceReference` | `number` \| [`ServiceType`](../code-reference.md#servicetype) | `'access'` | The service to order. By default is the access service, but it can be specified the service.index to refer a different specific service |
| `from` | [`NvmAccount`](NvmAccount.md) | `undefined` | The account of the user ordering the asset |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Optional transaction parameters |

#### Returns

[`SubscribablePromise`](SubscribablePromise.md)\<[`OrderProgressStep`](../enums/OrderProgressStep.md), `string`\>

The agreement ID identifying the order

#### Defined in

[src/nevermined/api/AssetsApi.ts:194](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L194)

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

[RegistryBaseApi](RegistryBaseApi.md).[orderAsset](RegistryBaseApi.md#orderasset)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:585](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L585)

___

### owner

▸ **owner**(`did`): `Promise`\<`string`\>

Returns the owner of an asset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | Decentralized ID. |

#### Returns

`Promise`\<`string`\>

The address of the owner of the asset

#### Defined in

[src/nevermined/api/AssetsApi.ts:276](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L276)

___

### ownerAssets

▸ **ownerAssets**(`owner`): `Promise`\<`string`[]\>

Returns the assets owned by an address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | The address to check |

#### Returns

`Promise`\<`string`[]\>

List of DIDs owned by the address

#### Defined in

[src/nevermined/api/AssetsApi.ts:305](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L305)

___

### ownerSignature

▸ **ownerSignature**(`did`): `Promise`\<`string`\>

Returns the owner from the signature included in the DDO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | Decentralized ID. |

#### Returns

`Promise`\<`string`\>

The address of the owner of the asset

#### Defined in

[src/nevermined/api/AssetsApi.ts:285](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L285)

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

[RegistryBaseApi](RegistryBaseApi.md).[registerNeverminedAsset](RegistryBaseApi.md#registerneverminedasset)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:52](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L52)

___

### resolve

▸ **resolve**(`did`, `policy?`): `Promise`\<[`DDO`](DDO.md)\>

Returns a DDO by DID. Depending of the resolution policy it prioritize the Metadata API or Immutable urls.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | Decentralized ID. |
| `policy` | [`DIDResolvePolicy`](../enums/DIDResolvePolicy.md) | `DIDResolvePolicy.NoRegistry` | It specifies the resolve policy to apply. It allows to select that priorities during the asset resolution via Metadata API or Immutable URLs (IPFS, Filecoin, etc) |

#### Returns

`Promise`\<[`DDO`](DDO.md)\>

[DDO](DDO.md)

#### Defined in

[src/nevermined/api/AssetsApi.ts:100](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L100)

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

[RegistryBaseApi](RegistryBaseApi.md).[resolveAsset](RegistryBaseApi.md#resolveasset)

#### Defined in

[src/nevermined/api/RegistryBaseApi.ts:324](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/RegistryBaseApi.ts#L324)

___

### retire

▸ **retire**(`did`): `Promise`\<`Response`\>

Retires the metadata of an asset from the Marketplace API. This allows the owner to unlist the asset from the marketplace.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | the unique identifier of the asset |

#### Returns

`Promise`\<`Response`\>

the HTTP response

#### Defined in

[src/nevermined/api/AssetsApi.ts:373](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L373)

___

### revokePermissions

▸ **revokePermissions**(`did`, `revokeAddress`, `from`, `txParams?`): `Promise`\<`any`\>

It revokes permissions to an account for a specific asset represented by a DID.
Only can be called by the asset owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the assert |
| `revokeAddress` | `string` | The account address to revoke the permissions |
| `from` | [`NvmAccount`](NvmAccount.md) | Account sending the request. It must be the owner of the asset |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Transaction parameters |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/nevermined/api/AssetsApi.ts:471](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L471)

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

[RegistryBaseApi](RegistryBaseApi.md).[setInstanceConfig](RegistryBaseApi.md#setinstanceconfig)

#### Defined in

[src/Instantiable.abstract.ts:158](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L158)

___

### transferOwnership

▸ **transferOwnership**(`did`, `newOwner`, `from`, `newUserId?`, `txParams?`): `Promise`\<`any`\>

Transfer ownership of an asset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | Asset DID. |
| `newOwner` | `string` | Ethereum address of the new owner of the DID. |
| `from` | [`NvmAccount`](NvmAccount.md) | Account owning the DID and doing the transfer of ownership |
| `newUserId?` | `string` | User Id of the new user getting the ownership of the asset |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Transaction parameters |

#### Returns

`Promise`\<`any`\>

Returns transaction receipt.

#### Defined in

[src/nevermined/api/AssetsApi.ts:318](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L318)

___

### update

▸ **update**(`did`, `metadata`, `from`, `publishMetadata?`, `txParams?`): [`SubscribablePromise`](SubscribablePromise.md)\<[`UpdateProgressStep`](../enums/UpdateProgressStep.md), [`DDO`](DDO.md)\>

Given a DID, updates the metadata associated to the asset. It also can upload this metadata to a remote decentralized stored depending on the `publishMetadata` parameter.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | Decentralized ID representing the unique id of an asset in a Nevermined network. |
| `metadata` | [`MetaData`](../interfaces/MetaData.md) | `undefined` | Metadata describing the asset |
| `from` | [`NvmAccount`](NvmAccount.md) | `undefined` | Account of the user updating the metadata |
| `publishMetadata` | [`PublishMetadataOptions`](../enums/PublishMetadataOptions.md) | `PublishMetadataOptions.OnlyMetadataAPI` | It allows to specify where to store the metadata |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Optional transaction parameters |

#### Returns

[`SubscribablePromise`](SubscribablePromise.md)\<[`UpdateProgressStep`](../enums/UpdateProgressStep.md), [`DDO`](DDO.md)\>

[DDO](DDO.md) The DDO updated

**`Example`**

```ts
const ddoUpdated = await nevermined.assets.update(
     ddo.shortId(),
     updatedMetadata,
     publisher,
     PublishMetadata.IPFS
)
```

#### Defined in

[src/nevermined/api/AssetsApi.ts:172](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/api/AssetsApi.ts#L172)

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

[RegistryBaseApi](RegistryBaseApi.md).[updateAsset](RegistryBaseApi.md#updateasset)

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

[RegistryBaseApi](RegistryBaseApi.md).[getInstance](RegistryBaseApi.md#getinstance)

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

#### Inherited from

[RegistryBaseApi](RegistryBaseApi.md).[getServicePlugin](RegistryBaseApi.md#getserviceplugin)

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

[RegistryBaseApi](RegistryBaseApi.md).[setInstanceConfig](RegistryBaseApi.md#setinstanceconfig-1)

#### Defined in

[src/Instantiable.abstract.ts:149](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L149)