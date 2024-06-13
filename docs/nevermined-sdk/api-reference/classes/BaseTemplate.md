[@nevermined-io/sdk](../code-reference.md) / BaseTemplate

# Class: BaseTemplate\<Params, S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | `Params` |
| `S` | extends [`Service`](../code-reference.md#service) |

## Hierarchy

- [`AgreementTemplate`](AgreementTemplate.md)\<`Params`\>

  ↳ **`BaseTemplate`**

  ↳↳ [`AccessTemplate`](AccessTemplate.md)

  ↳↳ [`DIDSalesTemplate`](DIDSalesTemplate.md)

  ↳↳ [`EscrowComputeExecutionTemplate`](EscrowComputeExecutionTemplate.md)

  ↳↳ [`NFT721AccessTemplate`](NFT721AccessTemplate.md)

  ↳↳ [`NFT721SalesTemplate`](NFT721SalesTemplate.md)

  ↳↳ [`NFTAccessTemplate`](NFTAccessTemplate.md)

  ↳↳ [`NFTSalesTemplate`](NFTSalesTemplate.md)

## Implements

- [`ServicePlugin`](../interfaces/ServicePlugin.md)\<`S`\>

## Table of contents

### Constructors

- [constructor](BaseTemplate.md#constructor)

### Properties

- [address](BaseTemplate.md#address)
- [contract](BaseTemplate.md#contract)
- [contractName](BaseTemplate.md#contractname)
- [events](BaseTemplate.md#events)
- [version](BaseTemplate.md#version)

### Accessors

- [artifactsFolder](BaseTemplate.md#artifactsfolder)
- [circuitsFolder](BaseTemplate.md#circuitsfolder)
- [client](BaseTemplate.md#client)
- [config](BaseTemplate.md#config)
- [instanceConfig](BaseTemplate.md#instanceconfig)
- [instantiableConfig](BaseTemplate.md#instantiableconfig)
- [logger](BaseTemplate.md#logger)
- [nevermined](BaseTemplate.md#nevermined)
- [publicClient](BaseTemplate.md#publicclient)
- [walletClient](BaseTemplate.md#walletclient)

### Methods

- [accept](BaseTemplate.md#accept)
- [agreementId](BaseTemplate.md#agreementid)
- [call](BaseTemplate.md#call)
- [conditions](BaseTemplate.md#conditions)
- [createAgreement](BaseTemplate.md#createagreement)
- [createAgreementAndPay](BaseTemplate.md#createagreementandpay)
- [createAgreementFromDDO](BaseTemplate.md#createagreementfromddo)
- [createAgreementWithPaymentFromDDO](BaseTemplate.md#createagreementwithpaymentfromddo)
- [createService](BaseTemplate.md#createservice)
- [description](BaseTemplate.md#description)
- [extraGen](BaseTemplate.md#extragen)
- [getAgreementCreatedEvent](BaseTemplate.md#getagreementcreatedevent)
- [getAgreementData](BaseTemplate.md#getagreementdata)
- [getAgreementIdsFromDDO](BaseTemplate.md#getagreementidsfromddo)
- [getAgreementStatus](BaseTemplate.md#getagreementstatus)
- [getAgreementsForDID](BaseTemplate.md#getagreementsfordid)
- [getConditionTypes](BaseTemplate.md#getconditiontypes)
- [getConditions](BaseTemplate.md#getconditions)
- [getFromAddress](BaseTemplate.md#getfromaddress)
- [getServiceAgreementTemplate](BaseTemplate.md#getserviceagreementtemplate)
- [getServiceAgreementTemplateConditionByRef](BaseTemplate.md#getserviceagreementtemplateconditionbyref)
- [getServiceAgreementTemplateConditions](BaseTemplate.md#getserviceagreementtemplateconditions)
- [getServiceAgreementTemplateDependencies](BaseTemplate.md#getserviceagreementtemplatedependencies)
- [getTransactionLogs](BaseTemplate.md#gettransactionlogs)
- [init](BaseTemplate.md#init)
- [instanceFromDDO](BaseTemplate.md#instancefromddo)
- [lockConditionIndex](BaseTemplate.md#lockconditionindex)
- [lockTokens](BaseTemplate.md#locktokens)
- [name](BaseTemplate.md#name)
- [params](BaseTemplate.md#params)
- [paramsGen](BaseTemplate.md#paramsgen)
- [paymentData](BaseTemplate.md#paymentdata)
- [printAgreementStatus](BaseTemplate.md#printagreementstatus)
- [process](BaseTemplate.md#process)
- [send](BaseTemplate.md#send)
- [sendFrom](BaseTemplate.md#sendfrom)
- [service](BaseTemplate.md#service)
- [serviceEndpoint](BaseTemplate.md#serviceendpoint)
- [setInstanceConfig](BaseTemplate.md#setinstanceconfig)
- [someLog](BaseTemplate.md#somelog)
- [standardContext](BaseTemplate.md#standardcontext)
- [track](BaseTemplate.md#track)
- [validateAgreement](BaseTemplate.md#validateagreement)
- [getInstance](BaseTemplate.md#getinstance)
- [setInstanceConfig](BaseTemplate.md#setinstanceconfig-1)

## Constructors

### constructor

• **new BaseTemplate**\<`Params`, `S`\>(`contractName`): [`BaseTemplate`](BaseTemplate.md)\<`Params`, `S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | `Params` |
| `S` | extends [`ServiceCommon`](../interfaces/ServiceCommon.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractName` | `string` |

#### Returns

[`BaseTemplate`](BaseTemplate.md)\<`Params`, `S`\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[constructor](AgreementTemplate.md#constructor)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:51](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L51)

## Properties

### address

• **address**: \`0x$\{string}\`

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[address](AgreementTemplate.md#address)

#### Defined in

[src/keeper/contracts/ContractBase.ts:22](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L22)

___

### contract

• **contract**: `any`

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[contract](AgreementTemplate.md#contract)

#### Defined in

[src/keeper/contracts/ContractBase.ts:19](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L19)

___

### contractName

• `Readonly` **contractName**: `string`

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[contractName](AgreementTemplate.md#contractname)

#### Defined in

[src/keeper/contracts/ContractBase.ts:18](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L18)

___

### events

• **events**: [`ContractEvent`](ContractEvent.md) \| [`SubgraphEvent`](SubgraphEvent.md)

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[events](AgreementTemplate.md#events)

#### Defined in

[src/keeper/contracts/ContractBase.ts:20](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L20)

___

### version

• **version**: `string`

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[version](AgreementTemplate.md#version)

#### Defined in

[src/keeper/contracts/ContractBase.ts:21](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L21)

## Accessors

### artifactsFolder

• `get` **artifactsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

AgreementTemplate.artifactsFolder

#### Defined in

[src/Instantiable.abstract.ts:132](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L132)

___

### circuitsFolder

• `get` **circuitsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

AgreementTemplate.circuitsFolder

#### Defined in

[src/Instantiable.abstract.ts:136](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L136)

___

### client

• `get` **client**(): [`Web3Clients`](../interfaces/Web3Clients.md)

#### Returns

[`Web3Clients`](../interfaces/Web3Clients.md)

#### Inherited from

AgreementTemplate.client

#### Defined in

[src/Instantiable.abstract.ts:84](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L84)

___

### config

• `get` **config**(): [`NeverminedOptions`](NeverminedOptions.md)

#### Returns

[`NeverminedOptions`](NeverminedOptions.md)

#### Inherited from

AgreementTemplate.config

#### Defined in

[src/Instantiable.abstract.ts:115](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L115)

___

### instanceConfig

• `get` **instanceConfig**(): [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

[`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

AgreementTemplate.instanceConfig

#### Defined in

[src/Instantiable.abstract.ts:140](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L140)

___

### instantiableConfig

• `get` **instantiableConfig**(): `undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

`undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

AgreementTemplate.instantiableConfig

#### Defined in

[src/Instantiable.abstract.ts:108](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L108)

___

### logger

• `get` **logger**(): `Logger`

#### Returns

`Logger`

#### Inherited from

AgreementTemplate.logger

#### Defined in

[src/Instantiable.abstract.ts:123](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L123)

___

### nevermined

• `get` **nevermined**(): [`Nevermined`](Nevermined.md)

#### Returns

[`Nevermined`](Nevermined.md)

#### Inherited from

AgreementTemplate.nevermined

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

AgreementTemplate.publicClient

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

AgreementTemplate.walletClient

#### Defined in

[src/Instantiable.abstract.ts:100](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L100)

## Methods

### accept

▸ **accept**(`_params`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_params` | [`ValidationParams`](../interfaces/ValidationParams.md) |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[ServicePlugin](../interfaces/ServicePlugin.md).[accept](../interfaces/ServicePlugin.md#accept)

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:114](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L114)

___

### agreementId

▸ **agreementId**(`agreementIdSeed`, `creator`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementIdSeed` | `string` |
| `creator` | `string` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[agreementId](AgreementTemplate.md#agreementid)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:202](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L202)

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

[AgreementTemplate](AgreementTemplate.md).[call](AgreementTemplate.md#call)

#### Defined in

[src/keeper/contracts/ContractBase.ts:91](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L91)

___

### conditions

▸ **conditions**(): `Condition`\<`any`, `any`\>[]

#### Returns

`Condition`\<`any`, `any`\>[]

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:42](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L42)

___

### createAgreement

▸ **createAgreement**(`agreementId`, `did`, `conditionIds`, `timeLocks`, `timeOuts`, `extraArgs`, `from`, `txParams?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |
| `did` | `string` |
| `conditionIds` | `string`[] |
| `timeLocks` | `number`[] |
| `timeOuts` | `number`[] |
| `extraArgs` | `any`[] |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[createAgreement](AgreementTemplate.md#createagreement)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:73](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L73)

___

### createAgreementAndPay

▸ **createAgreementAndPay**(`agreementId`, `did`, `conditionIds`, `timeLocks`, `timeOuts`, `accessConsumer`, `condIdx`, `rewardAddress`, `tokenAddress`, `amounts`, `receivers`, `from`, `txParams?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |
| `did` | `string` |
| `conditionIds` | `string`[] |
| `timeLocks` | `number`[] |
| `timeOuts` | `number`[] |
| `accessConsumer` | `string` |
| `condIdx` | `number` |
| `rewardAddress` | `string` |
| `tokenAddress` | `string` |
| `amounts` | `bigint`[] |
| `receivers` | `string`[] |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[createAgreementAndPay](AgreementTemplate.md#createagreementandpay)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:98](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L98)

___

### createAgreementFromDDO

▸ **createAgreementFromDDO**(`agreementIdSeed`, `ddo`, `parameters`, `consumer`, `timeOuts?`, `txParams?`): `Promise`\<`string`\>

Create a new agreement using the data of a DDO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agreementIdSeed` | `string` | - |
| `ddo` | [`DDO`](DDO.md) | DDO. |
| `parameters` | `Params` |  |
| `consumer` | [`NvmAccount`](NvmAccount.md) | - |
| `timeOuts?` | `number`[] | - |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | - |

#### Returns

`Promise`\<`string`\>

true if the call was successful.

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[createAgreementFromDDO](AgreementTemplate.md#createagreementfromddo)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:211](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L211)

___

### createAgreementWithPaymentFromDDO

▸ **createAgreementWithPaymentFromDDO**(`agreementIdSeed`, `ddo`, `serviceReference`, `parameters`, `consumer`, `from`, `txParams?`, `observer?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementIdSeed` | `string` |
| `ddo` | [`DDO`](DDO.md) |
| `serviceReference` | `number` \| [`ServiceType`](../code-reference.md#servicetype) |
| `parameters` | `Params` |
| `consumer` | [`NvmAccount`](NvmAccount.md) |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) |
| `observer?` | (`orderProgressStep`: [`OrderProgressStep`](../enums/OrderProgressStep.md)) => `void` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[createAgreementWithPaymentFromDDO](AgreementTemplate.md#createagreementwithpaymentfromddo)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:240](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L240)

___

### createService

▸ **createService**(`publisher`, `metadata`, `serviceAttributes`, `nftAttributes?`, `priceData?`): `S`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publisher` | [`NvmAccount`](NvmAccount.md) |
| `metadata` | [`MetaData`](../interfaces/MetaData.md) |
| `serviceAttributes` | [`ServiceAttributes`](../interfaces/ServiceAttributes.md) |
| `nftAttributes?` | [`NFTAttributes`](NFTAttributes.md) |
| `priceData?` | [`PricedMetadataInformation`](../code-reference.md#pricedmetadatainformation) |

#### Returns

`S`

#### Implementation of

[ServicePlugin](../interfaces/ServicePlugin.md).[createService](../interfaces/ServicePlugin.md#createservice)

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:48](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L48)

___

### description

▸ **description**(): `string`

#### Returns

`string`

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:41](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L41)

___

### extraGen

▸ **extraGen**(`_params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_params` | [`ValidationParams`](../interfaces/ValidationParams.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:110](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L110)

___

### getAgreementCreatedEvent

▸ **getAgreementCreatedEvent**(`agreementId`): `Promise`\<`any`[]\>

Generates and returns the agreement creation event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agreementId` | `string` | Agreement ID. |

#### Returns

`Promise`\<`any`[]\>

Agreement created event.

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[getAgreementCreatedEvent](AgreementTemplate.md#getagreementcreatedevent)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:450](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L450)

___

### getAgreementData

▸ **getAgreementData**(`agreementId`): `Promise`\<\{ `accessConsumer`: `string` ; `accessProvider`: `string` ; `did`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementId` | `string` |

#### Returns

`Promise`\<\{ `accessConsumer`: `string` ; `accessProvider`: `string` ; `did`: `string`  }\>

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:29](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L29)

___

### getAgreementIdsFromDDO

▸ **getAgreementIdsFromDDO**(`agreementId`, `ddo`, `creator`, `params`): `Promise`\<`string`[]\>

Get agreement conditions IDs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agreementId` | `string` | Agreement ID. |
| `ddo` | [`DDO`](DDO.md) | DDO. |
| `creator` | `string` | - |
| `params` | `Params` | - |

#### Returns

`Promise`\<`string`[]\>

The condition IDs.

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[getAgreementIdsFromDDO](AgreementTemplate.md#getagreementidsfromddo)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:169](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L169)

___

### getAgreementStatus

▸ **getAgreementStatus**(`agreementId`): `Promise`\<``false`` \| [`AgreementConditionsStatus`](../interfaces/AgreementConditionsStatus.md)\>

Returns the status of the conditions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agreementId` | `string` | Agreement ID. |

#### Returns

`Promise`\<``false`` \| [`AgreementConditionsStatus`](../interfaces/AgreementConditionsStatus.md)\>

The conditions status.

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[getAgreementStatus](AgreementTemplate.md#getagreementstatus)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:331](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L331)

___

### getAgreementsForDID

▸ **getAgreementsForDID**(`did`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[getAgreementsForDID](AgreementTemplate.md#getagreementsfordid)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:476](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L476)

___

### getConditionTypes

▸ **getConditionTypes**(): `Promise`\<`string`[]\>

Conditions address list.

#### Returns

`Promise`\<`string`[]\>

A list of condition addresses.

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[getConditionTypes](AgreementTemplate.md#getconditiontypes)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:137](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L137)

___

### getConditions

▸ **getConditions**(): `Promise`\<`ConditionSmall`[]\>

List of condition contracts.

#### Returns

`Promise`\<`ConditionSmall`[]\>

A list of condition contracts.

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[getConditions](AgreementTemplate.md#getconditions)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:148](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L148)

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

[AgreementTemplate](AgreementTemplate.md).[getFromAddress](AgreementTemplate.md#getfromaddress)

#### Defined in

[src/keeper/contracts/ContractBase.ts:67](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L67)

___

### getServiceAgreementTemplate

▸ **getServiceAgreementTemplate**(): [`ServiceAgreementTemplate`](../interfaces/ServiceAgreementTemplate.md)

#### Returns

[`ServiceAgreementTemplate`](../interfaces/ServiceAgreementTemplate.md)

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[getServiceAgreementTemplate](AgreementTemplate.md#getserviceagreementtemplate)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:307](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L307)

___

### getServiceAgreementTemplateConditionByRef

▸ **getServiceAgreementTemplateConditionByRef**(`ref`): `Promise`\<`undefined` \| `ConditionSmall`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `string` |

#### Returns

`Promise`\<`undefined` \| `ConditionSmall`\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[getServiceAgreementTemplateConditionByRef](AgreementTemplate.md#getserviceagreementtemplateconditionbyref)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:314](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L314)

___

### getServiceAgreementTemplateConditions

▸ **getServiceAgreementTemplateConditions**(): [`ServiceAgreementTemplateCondition`](../interfaces/ServiceAgreementTemplateCondition.md)[]

#### Returns

[`ServiceAgreementTemplateCondition`](../interfaces/ServiceAgreementTemplateCondition.md)[]

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[getServiceAgreementTemplateConditions](AgreementTemplate.md#getserviceagreementtemplateconditions)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:309](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L309)

___

### getServiceAgreementTemplateDependencies

▸ **getServiceAgreementTemplateDependencies**(): `Promise`\<\{ `[condition: string]`: `string`[];  }\>

#### Returns

`Promise`\<\{ `[condition: string]`: `string`[];  }\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[getServiceAgreementTemplateDependencies](AgreementTemplate.md#getserviceagreementtemplatedependencies)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:321](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L321)

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

[AgreementTemplate](AgreementTemplate.md).[getTransactionLogs](AgreementTemplate.md#gettransactionlogs)

#### Defined in

[src/keeper/contracts/ContractBase.ts:75](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L75)

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

[AgreementTemplate](AgreementTemplate.md).[init](AgreementTemplate.md#init)

#### Defined in

[src/keeper/contracts/ContractBase.ts:29](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L29)

___

### instanceFromDDO

▸ **instanceFromDDO**(`agreementIdSeed`, `ddo`, `creator`, `parameters`, `serviceIndex?`): `Promise`\<`AgreementInstance`\<`Params`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementIdSeed` | `string` |
| `ddo` | [`DDO`](DDO.md) |
| `creator` | `string` |
| `parameters` | `Params` |
| `serviceIndex?` | `number` |

#### Returns

`Promise`\<`AgreementInstance`\<`Params`\>\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[instanceFromDDO](AgreementTemplate.md#instancefromddo)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:179](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L179)

___

### lockConditionIndex

▸ **lockConditionIndex**(): `number`

#### Returns

`number`

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[lockConditionIndex](AgreementTemplate.md#lockconditionindex)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:57](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L57)

___

### lockTokens

▸ **lockTokens**(`tokenAddress`, `amounts`, `from`, `txParams?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenAddress` | `any` |
| `amounts` | `any` |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[lockTokens](AgreementTemplate.md#locktokens)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:382](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L382)

___

### name

▸ **name**(): `string`

#### Returns

`string`

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:40](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L40)

___

### params

▸ **params**(`...args`): `Params`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Params`

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[params](AgreementTemplate.md#params)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:55](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L55)

___

### paramsGen

▸ **paramsGen**(`params`): `Promise`\<`Params`\>

Specialize params

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`ValidationParams`](../interfaces/ValidationParams.md) | Generic parameters |

#### Returns

`Promise`\<`Params`\>

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:108](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L108)

___

### paymentData

▸ **paymentData**(`service`): `Promise`\<[`PaymentData`](../interfaces/PaymentData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`ServiceCommon`](../interfaces/ServiceCommon.md) |

#### Returns

`Promise`\<[`PaymentData`](../interfaces/PaymentData.md)\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[paymentData](AgreementTemplate.md#paymentdata)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:61](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L61)

___

### printAgreementStatus

▸ **printAgreementStatus**(`agreementId`): `Promise`\<`void`\>

Prints the agreement status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agreementId` | `string` | Agreement ID. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[printAgreementStatus](AgreementTemplate.md#printagreementstatus)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:418](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L418)

___

### process

▸ **process**(`params`, `from`, `txparams?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ValidationParams`](../interfaces/ValidationParams.md) |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `txparams?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[ServicePlugin](../interfaces/ServicePlugin.md).[process](../interfaces/ServicePlugin.md#process)

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:126](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L126)

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

[AgreementTemplate](AgreementTemplate.md).[send](AgreementTemplate.md#send)

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

[AgreementTemplate](AgreementTemplate.md).[sendFrom](AgreementTemplate.md#sendfrom)

#### Defined in

[src/keeper/contracts/ContractBase.ts:108](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L108)

___

### service

▸ **service**(): [`ServiceType`](../code-reference.md#servicetype)

#### Returns

[`ServiceType`](../code-reference.md#servicetype)

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[service](AgreementTemplate.md#service)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:187](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L187)

___

### serviceEndpoint

▸ **serviceEndpoint**(): `string`

#### Returns

`string`

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:44](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L44)

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

[AgreementTemplate](AgreementTemplate.md).[setInstanceConfig](AgreementTemplate.md#setinstanceconfig)

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

[AgreementTemplate](AgreementTemplate.md).[someLog](AgreementTemplate.md#somelog)

#### Defined in

[src/keeper/contracts/ContractBase.ts:84](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L84)

___

### standardContext

▸ **standardContext**(`ddo`, `creator`, `serviceIndex?`): `ConditionContext`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ddo` | [`DDO`](DDO.md) |
| `creator` | `string` |
| `serviceIndex?` | `number` |

#### Returns

`ConditionContext`

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[standardContext](AgreementTemplate.md#standardcontext)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:189](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L189)

___

### track

▸ **track**(`_params`, `_from`, `_txparams?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_params` | [`ValidationParams`](../interfaces/ValidationParams.md) |
| `_from` | [`NvmAccount`](NvmAccount.md) |
| `_txparams?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[ServicePlugin](../interfaces/ServicePlugin.md).[track](../interfaces/ServicePlugin.md#track)

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:118](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L118)

___

### validateAgreement

▸ **validateAgreement**(`agreement_id`, `did`, `params`, `from`, `extra?`, `txparams?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreement_id` | `string` |
| `did` | `string` |
| `params` | `Params` |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `extra` | `any` |
| `txparams?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:141](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L141)

___

### getInstance

▸ **getInstance**\<`Params`\>(`config`, `templateContractName`, `templateClass`, `optional?`): `Promise`\<`any`\>

#### Type parameters

| Name |
| :------ |
| `Params` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `config` | [`InstantiableConfig`](../interfaces/InstantiableConfig.md) | `undefined` |
| `templateContractName` | `string` | `undefined` |
| `templateClass` | `any` | `undefined` |
| `optional` | `boolean` | `false` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[AgreementTemplate](AgreementTemplate.md).[getInstance](AgreementTemplate.md#getinstance)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:38](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L38)

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

[AgreementTemplate](AgreementTemplate.md).[setInstanceConfig](AgreementTemplate.md#setinstanceconfig-1)

#### Defined in

[src/Instantiable.abstract.ts:149](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L149)