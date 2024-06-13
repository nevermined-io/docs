[@nevermined-io/sdk](../code-reference.md) / DIDRegistry

# Class: DIDRegistry

## Hierarchy

- [`ContractBase`](ContractBase.md)

  ↳ **`DIDRegistry`**

## Table of contents

### Constructors

- [constructor](DIDRegistry.md#constructor)

### Properties

- [address](DIDRegistry.md#address)
- [contract](DIDRegistry.md#contract)
- [contractName](DIDRegistry.md#contractname)
- [events](DIDRegistry.md#events)
- [version](DIDRegistry.md#version)

### Accessors

- [artifactsFolder](DIDRegistry.md#artifactsfolder)
- [circuitsFolder](DIDRegistry.md#circuitsfolder)
- [client](DIDRegistry.md#client)
- [config](DIDRegistry.md#config)
- [instanceConfig](DIDRegistry.md#instanceconfig)
- [instantiableConfig](DIDRegistry.md#instantiableconfig)
- [logger](DIDRegistry.md#logger)
- [nevermined](DIDRegistry.md#nevermined)
- [publicClient](DIDRegistry.md#publicclient)
- [walletClient](DIDRegistry.md#walletclient)

### Methods

- [actedOnBehalf](DIDRegistry.md#actedonbehalf)
- [addDidProvenanceDelegate](DIDRegistry.md#adddidprovenancedelegate)
- [addProvider](DIDRegistry.md#addprovider)
- [burn](DIDRegistry.md#burn)
- [call](DIDRegistry.md#call)
- [enableAndMintDidNft](DIDRegistry.md#enableandmintdidnft)
- [enableAndMintDidNft721](DIDRegistry.md#enableandmintdidnft721)
- [getAttributesByDid](DIDRegistry.md#getattributesbydid)
- [getAttributesByOwner](DIDRegistry.md#getattributesbyowner)
- [getBlockNumberUpdated](DIDRegistry.md#getblocknumberupdated)
- [getDIDOwner](DIDRegistry.md#getdidowner)
- [getDIDProvenanceEvents](DIDRegistry.md#getdidprovenanceevents)
- [getDIDProvenanceMethodEvents](DIDRegistry.md#getdidprovenancemethodevents)
- [getDIDRegister](DIDRegistry.md#getdidregister)
- [getDIDRoyalties](DIDRegistry.md#getdidroyalties)
- [getFromAddress](DIDRegistry.md#getfromaddress)
- [getNFTInfo](DIDRegistry.md#getnftinfo)
- [getPermission](DIDRegistry.md#getpermission)
- [getProvenanceEntry](DIDRegistry.md#getprovenanceentry)
- [getProvenanceOwner](DIDRegistry.md#getprovenanceowner)
- [getProviders](DIDRegistry.md#getproviders)
- [getTransactionLogs](DIDRegistry.md#gettransactionlogs)
- [grantPermission](DIDRegistry.md#grantpermission)
- [grantRegistryOperatorRole](DIDRegistry.md#grantregistryoperatorrole)
- [hashDID](DIDRegistry.md#hashdid)
- [init](DIDRegistry.md#init)
- [isDIDProvider](DIDRegistry.md#isdidprovider)
- [isProvenanceDelegate](DIDRegistry.md#isprovenancedelegate)
- [mint](DIDRegistry.md#mint)
- [registerAttribute](DIDRegistry.md#registerattribute)
- [registerDID](DIDRegistry.md#registerdid)
- [registerMintableDID](DIDRegistry.md#registermintabledid)
- [registerMintableDID721](DIDRegistry.md#registermintabledid721)
- [removeDidProvenanceDelegate](DIDRegistry.md#removedidprovenancedelegate)
- [removeProvider](DIDRegistry.md#removeprovider)
- [revokePermission](DIDRegistry.md#revokepermission)
- [send](DIDRegistry.md#send)
- [sendFrom](DIDRegistry.md#sendfrom)
- [setDIDRoyalties](DIDRegistry.md#setdidroyalties)
- [setInstanceConfig](DIDRegistry.md#setinstanceconfig)
- [someLog](DIDRegistry.md#somelog)
- [transferDIDOwnership](DIDRegistry.md#transferdidownership)
- [updateMetadataUrl](DIDRegistry.md#updatemetadataurl)
- [used](DIDRegistry.md#used)
- [wasAssociatedWith](DIDRegistry.md#wasassociatedwith)
- [wasDerivedFrom](DIDRegistry.md#wasderivedfrom)
- [getInstance](DIDRegistry.md#getinstance)
- [setInstanceConfig](DIDRegistry.md#setinstanceconfig-1)

## Constructors

### constructor

• **new DIDRegistry**(`contractName`): [`DIDRegistry`](DIDRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractName` | `string` |

#### Returns

[`DIDRegistry`](DIDRegistry.md)

#### Inherited from

[ContractBase](ContractBase.md).[constructor](ContractBase.md#constructor)

#### Defined in

[src/keeper/contracts/ContractBase.ts:24](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L24)

## Properties

### address

• **address**: \`0x$\{string}\`

#### Inherited from

[ContractBase](ContractBase.md).[address](ContractBase.md#address)

#### Defined in

[src/keeper/contracts/ContractBase.ts:22](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L22)

___

### contract

• **contract**: `any`

#### Inherited from

[ContractBase](ContractBase.md).[contract](ContractBase.md#contract)

#### Defined in

[src/keeper/contracts/ContractBase.ts:19](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L19)

___

### contractName

• `Readonly` **contractName**: `string`

#### Inherited from

[ContractBase](ContractBase.md).[contractName](ContractBase.md#contractname)

#### Defined in

[src/keeper/contracts/ContractBase.ts:18](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L18)

___

### events

• **events**: [`ContractEvent`](ContractEvent.md) \| [`SubgraphEvent`](SubgraphEvent.md)

#### Inherited from

[ContractBase](ContractBase.md).[events](ContractBase.md#events)

#### Defined in

[src/keeper/contracts/ContractBase.ts:20](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L20)

___

### version

• **version**: `string`

#### Inherited from

[ContractBase](ContractBase.md).[version](ContractBase.md#version)

#### Defined in

[src/keeper/contracts/ContractBase.ts:21](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L21)

## Accessors

### artifactsFolder

• `get` **artifactsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ContractBase.artifactsFolder

#### Defined in

[src/Instantiable.abstract.ts:132](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L132)

___

### circuitsFolder

• `get` **circuitsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ContractBase.circuitsFolder

#### Defined in

[src/Instantiable.abstract.ts:136](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L136)

___

### client

• `get` **client**(): [`Web3Clients`](../interfaces/Web3Clients.md)

#### Returns

[`Web3Clients`](../interfaces/Web3Clients.md)

#### Inherited from

ContractBase.client

#### Defined in

[src/Instantiable.abstract.ts:84](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L84)

___

### config

• `get` **config**(): [`NeverminedOptions`](NeverminedOptions.md)

#### Returns

[`NeverminedOptions`](NeverminedOptions.md)

#### Inherited from

ContractBase.config

#### Defined in

[src/Instantiable.abstract.ts:115](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L115)

___

### instanceConfig

• `get` **instanceConfig**(): [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

[`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

ContractBase.instanceConfig

#### Defined in

[src/Instantiable.abstract.ts:140](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L140)

___

### instantiableConfig

• `get` **instantiableConfig**(): `undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

`undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

ContractBase.instantiableConfig

#### Defined in

[src/Instantiable.abstract.ts:108](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L108)

___

### logger

• `get` **logger**(): `Logger`

#### Returns

`Logger`

#### Inherited from

ContractBase.logger

#### Defined in

[src/Instantiable.abstract.ts:123](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L123)

___

### nevermined

• `get` **nevermined**(): [`Nevermined`](Nevermined.md)

#### Returns

[`Nevermined`](Nevermined.md)

#### Inherited from

ContractBase.nevermined

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

ContractBase.publicClient

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

ContractBase.walletClient

#### Defined in

[src/Instantiable.abstract.ts:100](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L100)

## Methods

### actedOnBehalf

▸ **actedOnBehalf**(`provId`, `did`, `delegateAgentId`, `responsibleAgentId`, `activityId`, `signatureDelegate`, `attributes`, `owner`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provId` | `string` |
| `did` | `string` |
| `delegateAgentId` | `string` |
| `responsibleAgentId` | `string` |
| `activityId` | `string` |
| `signatureDelegate` | `string` |
| `attributes` | `string` |
| `owner` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:552](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L552)

___

### addDidProvenanceDelegate

▸ **addDidProvenanceDelegate**(`did`, `delegateAddress`, `owner`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `delegateAddress` | `string` |
| `owner` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:579](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L579)

___

### addProvider

▸ **addProvider**(`did`, `provider`, `from`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `provider` | `string` |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:623](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L623)

___

### burn

▸ **burn**(`did`, `amount`, `from`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `amount` | `bigint` |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:619](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L619)

___

### call

▸ **call**\<`T`\>(`functionName`, `args`, `from?`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `string` |
| `args` | `any`[] |
| `from?` | `string` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[ContractBase](ContractBase.md).[call](ContractBase.md#call)

#### Defined in

[src/keeper/contracts/ContractBase.ts:91](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L91)

___

### enableAndMintDidNft

▸ **enableAndMintDidNft**(`did`, `cap`, `royalties`, `preMint`, `owner`, `nftMetadata`, `txParams?`): `Promise`\<`any`\>

It activates a NFT associated to a NFT (ERC-1155) and allows to pre-mint. This method only can be called once per DID, so if this was called
or executed before internally the method will fail.
Only use if the intention is to register a mintable asset and it was registered via `registerDID` or `registerAttribute`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the asset |
| `cap` | `number` | Max number of editions |
| `royalties` | `number` | Asset royalties in the secondary market |
| `preMint` | `boolean` | If true pre-mints the editions of NFT |
| `owner` | [`NvmAccount`](NvmAccount.md) | Account of the user registering the DID |
| `nftMetadata` | `string` | URL to the metadata describing the NFT |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Transaction additional parameters |

#### Returns

`Promise`\<`any`\>

Contract Receipt

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:216](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L216)

___

### enableAndMintDidNft721

▸ **enableAndMintDidNft721**(`did`, `royalties`, `preMint`, `owner`, `nftMetadata`, `txParams?`): `Promise`\<`any`\>

It activates a NFT associated to a NFT (ERC-721) and allows to pre-mint. This method only can be called once per DID, so if this was called
or executed before internally the method will fail.
Only use if the intention is to register a mintable asset and it was registered via `registerDID` or `registerAttribute`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the asset |
| `royalties` | `number` | Asset royalties in the secondary market |
| `preMint` | `boolean` | If true pre-mints the editions of NFT |
| `owner` | [`NvmAccount`](NvmAccount.md) | Account of the user registering the DID |
| `nftMetadata` | `string` | URL to the metadata describing the NFT |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Transaction additional parameters |

#### Returns

`Promise`\<`any`\>

Contract Receipt

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:246](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L246)

___

### getAttributesByDid

▸ **getAttributesByDid**(`did`): `Promise`\<\{ `checksum`: `string` ; `did`: `string` ; `immutableUrl`: `string` ; `nftInitialized`: `boolean` ; `owner`: `string` ; `providers`: `string`[] ; `royalties`: `bigint` ; `serviceEndpoint`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<\{ `checksum`: `string` ; `did`: `string` ; `immutableUrl`: `string` ; `nftInitialized`: `boolean` ; `owner`: `string` ; `providers`: `string`[] ; `royalties`: `bigint` ; `serviceEndpoint`: `string`  }\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:300](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L300)

___

### getAttributesByOwner

▸ **getAttributesByOwner**(`owner`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:275](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L275)

___

### getBlockNumberUpdated

▸ **getBlockNumberUpdated**(`did`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:266](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L266)

___

### getDIDOwner

▸ **getDIDOwner**(`did`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:262](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L262)

___

### getDIDProvenanceEvents

▸ **getDIDProvenanceEvents**(`did`): `Promise`\<\{ `activityId`: `string` ; `agentId`: `string` ; `agentInvolvedId`: `string` ; `attributes?`: `string` ; `blockNumberUpdated`: `number` ; `did`: `string` ; `id`: `string` ; `method`: `number` ; `provId`: `string` ; `relatedDid`: `string`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<\{ `activityId`: `string` ; `agentId`: `string` ; `agentInvolvedId`: `string` ; `attributes?`: `string` ; `blockNumberUpdated`: `number` ; `did`: `string` ; `id`: `string` ; `method`: `number` ; `provId`: `string` ; `relatedDid`: `string`  }[]\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:371](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L371)

___

### getDIDProvenanceMethodEvents

▸ **getDIDProvenanceMethodEvents**\<`T`\>(`did`, `method`): `Promise`\<[`ProvenanceEvent`](../code-reference.md#provenanceevent)\<`T`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ProvenanceMethod`](../enums/ProvenanceMethod.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `method` | `T` |

#### Returns

`Promise`\<[`ProvenanceEvent`](../code-reference.md#provenanceevent)\<`T`\>[]\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:416](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L416)

___

### getDIDRegister

▸ **getDIDRegister**(`did`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:636](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L636)

___

### getDIDRoyalties

▸ **getDIDRoyalties**(`did`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:353](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L353)

___

### getFromAddress

▸ **getFromAddress**(`from?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | `string` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

[ContractBase](ContractBase.md).[getFromAddress](ContractBase.md#getfromaddress)

#### Defined in

[src/keeper/contracts/ContractBase.ts:67](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L67)

___

### getNFTInfo

▸ **getNFTInfo**(`did`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:640](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L640)

___

### getPermission

▸ **getPermission**(`did`, `grantee`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `grantee` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:357](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L357)

___

### getProvenanceEntry

▸ **getProvenanceEntry**(`provId`): `Promise`\<`undefined` \| \{ `activityId`: `any` ; `agentId`: `any` ; `agentInvolvedId`: `any` ; `blockNumberUpdated`: `any` ; `createdBy`: `any` ; `did`: `any` ; `method`: [`ProvenanceMethod`](../enums/ProvenanceMethod.md) ; `relatedDid`: `any` ; `signatureDelegate`: `any`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provId` | `string` |

#### Returns

`Promise`\<`undefined` \| \{ `activityId`: `any` ; `agentId`: `any` ; `agentInvolvedId`: `any` ; `blockNumberUpdated`: `any` ; `createdBy`: `any` ; `did`: `any` ; `method`: [`ProvenanceMethod`](../enums/ProvenanceMethod.md) ; `relatedDid`: `any` ; `signatureDelegate`: `any`  }\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:465](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L465)

___

### getProvenanceOwner

▸ **getProvenanceOwner**(`did`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:611](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L611)

___

### getProviders

▸ **getProviders**(`did`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:631](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L631)

___

### getTransactionLogs

▸ **getTransactionLogs**(`txReceipt`, `eventName`): `ParseEventLogsReturnType`\<`any`, `string`, ``false``, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txReceipt` | `TransactionReceipt` |
| `eventName` | `string` |

#### Returns

`ParseEventLogsReturnType`\<`any`, `string`, ``false``, `string`\>

#### Inherited from

[ContractBase](ContractBase.md).[getTransactionLogs](ContractBase.md#gettransactionlogs)

#### Defined in

[src/keeper/contracts/ContractBase.ts:75](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L75)

___

### grantPermission

▸ **grantPermission**(`did`, `grantee`, `owner`, `txParams?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `grantee` | `string` |
| `owner` | [`NvmAccount`](NvmAccount.md) |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:326](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L326)

___

### grantRegistryOperatorRole

▸ **grantRegistryOperatorRole**(`manager`, `from`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | `string` |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:648](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L648)

___

### hashDID

▸ **hashDID**(`didSeed`, `creator`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didSeed` | `string` |
| `creator` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:644](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L644)

___

### init

▸ **init**(`config`, `optional?`, `contractAddress?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | [`InstantiableConfig`](../interfaces/InstantiableConfig.md) | `undefined` |
| `optional` | `boolean` | `false` |
| `contractAddress?` | `string` | `undefined` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[ContractBase](ContractBase.md).[init](ContractBase.md#init)

#### Defined in

[src/keeper/contracts/ContractBase.ts:29](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L29)

___

### isDIDProvider

▸ **isDIDProvider**(`did`, `provider`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `provider` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:271](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L271)

___

### isProvenanceDelegate

▸ **isProvenanceDelegate**(`did`, `delegateAddress`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `delegateAddress` | `string` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:607](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L607)

___

### mint

▸ **mint**(`did`, `amount`, `from`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `amount` | `bigint` |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:615](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L615)

___

### registerAttribute

▸ **registerAttribute**(`did`, `checksum`, `providers`, `url`, `owner`, `txParams?`): `Promise`\<`any`\>

It registers a decentralized identifier (aka DID) in the `DIDRegistry` smart contract

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the asset |
| `checksum` | `string` | Checksum resulted of hash the asset metadata |
| `providers` | `string`[] | List of addresses in charge of interact with the asset |
| `url` | `string` | URL to the metadata in the Metadata/Marketplace API |
| `owner` | [`NvmAccount`](NvmAccount.md) | Account of the user registering the DID |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | Transaction additional parameters |

#### Returns

`Promise`\<`any`\>

Contract Receipt

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:38](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L38)

___

### registerDID

▸ **registerDID**(`did`, `checksum`, `providers`, `owner`, `url`, `immutableUrl?`, `activityId?`, `txParams?`): `Promise`\<`any`\>

It registers a decentralized identifier (aka DID) in the `DIDRegistry` smart contract

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | The unique identifier of the asset |
| `checksum` | `string` | `undefined` | Checksum resulted of hash the asset metadata |
| `providers` | `string`[] | `undefined` | List of addresses in charge of interact with the asset |
| `owner` | [`NvmAccount`](NvmAccount.md) | `undefined` | Account of the user registering the DID |
| `url` | `string` | `undefined` | URL to the metadata in the Metadata/Marketplace API |
| `immutableUrl` | `string` | `''` | Hash or URL to the metadata stored in a immutable data store like IPFS, Filecoin, etc |
| `activityId` | `string` | `undefined` | Provenance identifier about the asset registration action |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Transaction additional parameters |

#### Returns

`Promise`\<`any`\>

Contract Receipt

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:67](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L67)

___

### registerMintableDID

▸ **registerMintableDID**(`did`, `nftContractAddress`, `checksum`, `providers`, `owner`, `nftAttributes`, `url`, `immutableUrl?`, `activityId?`, `txParams?`): `Promise`\<`any`\>

It registers a decentralized identifier (aka DID) in the `DIDRegistry` smart contract with a ERC-1155 NFT attached to it

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | The unique identifier of the asset |
| `nftContractAddress` | `string` | `undefined` | - |
| `checksum` | `string` | `undefined` | Checksum resulted of hash the asset metadata |
| `providers` | `string`[] | `undefined` | List of addresses in charge of interact with the asset |
| `owner` | [`NvmAccount`](NvmAccount.md) | `undefined` | Address of the user registering the DID |
| `nftAttributes` | [`NFTAttributes`](NFTAttributes.md) | `undefined` | Attributes of the NFT associated to the NFT |
| `url` | `string` | `undefined` | URL to the metadata in the Metadata/Marketplace API |
| `immutableUrl` | `string` | `''` | Hash or URL to the metadata stored in a immutable data store like IPFS, Filecoin, etc |
| `activityId` | `string` | `undefined` | Provenance identifier about the asset registration action |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Transaction additional parameters |

#### Returns

`Promise`\<`any`\>

Contract Receipt

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:99](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L99)

___

### registerMintableDID721

▸ **registerMintableDID721**(`did`, `nftContractAddress`, `checksum`, `providers`, `owner`, `nftAttributes`, `url`, `immutableUrl?`, `activityId?`, `txParams?`): `Promise`\<`any`\>

It registers a decentralized identifier (aka DID) in the `DIDRegistry` smart contract with a ERC-721 NFT attached to it

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | The unique identifier of the asset |
| `nftContractAddress` | `string` | `undefined` | - |
| `checksum` | `string` | `undefined` | Checksum resulted of hash the asset metadata |
| `providers` | `string`[] | `undefined` | List of addresses in charge of interact with the asset |
| `owner` | [`NvmAccount`](NvmAccount.md) | `undefined` | Account of the user registering the DID |
| `nftAttributes` | [`NFTAttributes`](NFTAttributes.md) | `undefined` | Attributes of the NFT associated to the NFT |
| `url` | `string` | `undefined` | URL to the metadata in the Metadata/Marketplace API |
| `immutableUrl` | `string` | `''` | Hash or URL to the metadata stored in a immutable data store like IPFS, Filecoin, etc |
| `activityId` | `string` | `undefined` | Provenance identifier about the asset registration action |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Transaction additional parameters |

#### Returns

`Promise`\<`any`\>

Contract Receipt

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:145](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L145)

___

### removeDidProvenanceDelegate

▸ **removeDidProvenanceDelegate**(`did`, `delegateAddress`, `owner`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `delegateAddress` | `string` |
| `owner` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:593](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L593)

___

### removeProvider

▸ **removeProvider**(`did`, `provider`, `from`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `provider` | `string` |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:627](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L627)

___

### revokePermission

▸ **revokePermission**(`did`, `grantee`, `owner`, `txParams?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `grantee` | `string` |
| `owner` | [`NvmAccount`](NvmAccount.md) |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:335](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L335)

___

### send

▸ **send**(`functionName`, `from`, `args`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `string` |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `args` | `any`[] |
| `params` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ContractBase](ContractBase.md).[send](ContractBase.md#send)

#### Defined in

[src/keeper/contracts/ContractBase.ts:127](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L127)

___

### sendFrom

▸ **sendFrom**(`functionName`, `args`, `from`, `value?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `string` |
| `args` | `any`[] |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `value?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ContractBase](ContractBase.md).[sendFrom](ContractBase.md#sendfrom)

#### Defined in

[src/keeper/contracts/ContractBase.ts:108](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L108)

___

### setDIDRoyalties

▸ **setDIDRoyalties**(`did`, `scheme`, `owner`, `txParams?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `scheme` | `string` |
| `owner` | [`NvmAccount`](NvmAccount.md) |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:344](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L344)

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

[ContractBase](ContractBase.md).[setInstanceConfig](ContractBase.md#setinstanceconfig)

#### Defined in

[src/Instantiable.abstract.ts:158](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L158)

___

### someLog

▸ **someLog**(`logs`): `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `logs` | `any`[] |

#### Returns

`undefined`

#### Inherited from

[ContractBase](ContractBase.md).[someLog](ContractBase.md#somelog)

#### Defined in

[src/keeper/contracts/ContractBase.ts:84](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L84)

___

### transferDIDOwnership

▸ **transferDIDOwnership**(`did`, `newOwnerAddress`, `owner`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `newOwnerAddress` | `string` |
| `owner` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:361](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L361)

___

### updateMetadataUrl

▸ **updateMetadataUrl**(`did`, `checksum`, `owner`, `url`, `immutableUrl?`, `txParams?`): `Promise`\<`any`\>

It registers a decentralized identifier (aka DID) in the `DIDRegistry` smart contract with a ERC-721 NFT attached to it

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `did` | `string` | `undefined` | The unique identifier of the asset |
| `checksum` | `string` | `undefined` | Checksum resulted of hash the asset metadata |
| `owner` | [`NvmAccount`](NvmAccount.md) | `undefined` | Account of the user registering the DID |
| `url` | `string` | `undefined` | URL to the metadata in the Metadata/Marketplace API |
| `immutableUrl` | `string` | `''` | Hash or URL to the metadata stored in a immutable data store like IPFS, Filecoin, etc |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | `undefined` | Transaction additional parameters |

#### Returns

`Promise`\<`any`\>

Contract Receipt

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:186](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L186)

___

### used

▸ **used**(`provId`, `did`, `agentId`, `activityId`, `signatureUsing`, `attributes`, `owner`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provId` | `string` |
| `did` | `string` |
| `agentId` | `string` |
| `activityId` | `string` |
| `signatureUsing` | `string` |
| `attributes` | `string` |
| `owner` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:485](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L485)

___

### wasAssociatedWith

▸ **wasAssociatedWith**(`provId`, `did`, `agentId`, `activityId`, `attributes`, `owner`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provId` | `string` |
| `did` | `string` |
| `agentId` | `string` |
| `activityId` | `string` |
| `attributes` | `string` |
| `owner` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:535](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L535)

___

### wasDerivedFrom

▸ **wasDerivedFrom**(`provId`, `newEntityDid`, `usedEntityDid`, `agentId`, `activityId`, `attributes`, `owner`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `provId` | `string` |
| `newEntityDid` | `string` |
| `usedEntityDid` | `string` |
| `agentId` | `string` |
| `activityId` | `string` |
| `attributes` | `string` |
| `owner` | [`NvmAccount`](NvmAccount.md) |
| `params?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:510](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L510)

___

### getInstance

▸ **getInstance**(`config`): `Promise`\<[`DIDRegistry`](DIDRegistry.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`InstantiableConfig`](../interfaces/InstantiableConfig.md) |

#### Returns

`Promise`\<[`DIDRegistry`](DIDRegistry.md)\>

#### Overrides

[ContractBase](ContractBase.md).[getInstance](ContractBase.md#getinstance)

#### Defined in

[src/keeper/contracts/DIDRegistry.ts:21](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/DIDRegistry.ts#L21)

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

[ContractBase](ContractBase.md).[setInstanceConfig](ContractBase.md#setinstanceconfig-1)

#### Defined in

[src/Instantiable.abstract.ts:149](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L149)