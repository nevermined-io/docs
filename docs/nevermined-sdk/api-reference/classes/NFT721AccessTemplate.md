[@nevermined-io/sdk](../code-reference.md) / NFT721AccessTemplate

# Class: NFT721AccessTemplate

## Hierarchy

- [`BaseTemplate`](BaseTemplate.md)\<`NFT721AccessTemplateParams`, [`ServiceNFTAccess`](../interfaces/ServiceNFTAccess.md)\>

  ↳ **`NFT721AccessTemplate`**

## Table of contents

### Constructors

- [constructor](NFT721AccessTemplate.md#constructor)

### Properties

- [address](NFT721AccessTemplate.md#address)
- [contract](NFT721AccessTemplate.md#contract)
- [contractName](NFT721AccessTemplate.md#contractname)
- [events](NFT721AccessTemplate.md#events)
- [version](NFT721AccessTemplate.md#version)

### Accessors

- [artifactsFolder](NFT721AccessTemplate.md#artifactsfolder)
- [circuitsFolder](NFT721AccessTemplate.md#circuitsfolder)
- [client](NFT721AccessTemplate.md#client)
- [config](NFT721AccessTemplate.md#config)
- [instanceConfig](NFT721AccessTemplate.md#instanceconfig)
- [instantiableConfig](NFT721AccessTemplate.md#instantiableconfig)
- [logger](NFT721AccessTemplate.md#logger)
- [nevermined](NFT721AccessTemplate.md#nevermined)
- [publicClient](NFT721AccessTemplate.md#publicclient)
- [walletClient](NFT721AccessTemplate.md#walletclient)

### Methods

- [accept](NFT721AccessTemplate.md#accept)
- [agreementId](NFT721AccessTemplate.md#agreementid)
- [call](NFT721AccessTemplate.md#call)
- [conditions](NFT721AccessTemplate.md#conditions)
- [createAgreement](NFT721AccessTemplate.md#createagreement)
- [createAgreementAndPay](NFT721AccessTemplate.md#createagreementandpay)
- [createAgreementFromDDO](NFT721AccessTemplate.md#createagreementfromddo)
- [createAgreementWithPaymentFromDDO](NFT721AccessTemplate.md#createagreementwithpaymentfromddo)
- [createService](NFT721AccessTemplate.md#createservice)
- [description](NFT721AccessTemplate.md#description)
- [extraGen](NFT721AccessTemplate.md#extragen)
- [getAgreementCreatedEvent](NFT721AccessTemplate.md#getagreementcreatedevent)
- [getAgreementData](NFT721AccessTemplate.md#getagreementdata)
- [getAgreementIdsFromDDO](NFT721AccessTemplate.md#getagreementidsfromddo)
- [getAgreementStatus](NFT721AccessTemplate.md#getagreementstatus)
- [getAgreementsForDID](NFT721AccessTemplate.md#getagreementsfordid)
- [getConditionTypes](NFT721AccessTemplate.md#getconditiontypes)
- [getConditions](NFT721AccessTemplate.md#getconditions)
- [getFromAddress](NFT721AccessTemplate.md#getfromaddress)
- [getServiceAgreementTemplate](NFT721AccessTemplate.md#getserviceagreementtemplate)
- [getServiceAgreementTemplateConditionByRef](NFT721AccessTemplate.md#getserviceagreementtemplateconditionbyref)
- [getServiceAgreementTemplateConditions](NFT721AccessTemplate.md#getserviceagreementtemplateconditions)
- [getServiceAgreementTemplateDependencies](NFT721AccessTemplate.md#getserviceagreementtemplatedependencies)
- [getTransactionLogs](NFT721AccessTemplate.md#gettransactionlogs)
- [init](NFT721AccessTemplate.md#init)
- [instanceFromDDO](NFT721AccessTemplate.md#instancefromddo)
- [lockConditionIndex](NFT721AccessTemplate.md#lockconditionindex)
- [lockTokens](NFT721AccessTemplate.md#locktokens)
- [name](NFT721AccessTemplate.md#name)
- [params](NFT721AccessTemplate.md#params)
- [paramsGen](NFT721AccessTemplate.md#paramsgen)
- [paymentData](NFT721AccessTemplate.md#paymentdata)
- [printAgreementStatus](NFT721AccessTemplate.md#printagreementstatus)
- [process](NFT721AccessTemplate.md#process)
- [send](NFT721AccessTemplate.md#send)
- [sendFrom](NFT721AccessTemplate.md#sendfrom)
- [service](NFT721AccessTemplate.md#service)
- [serviceEndpoint](NFT721AccessTemplate.md#serviceendpoint)
- [setInstanceConfig](NFT721AccessTemplate.md#setinstanceconfig)
- [someLog](NFT721AccessTemplate.md#somelog)
- [standardContext](NFT721AccessTemplate.md#standardcontext)
- [track](NFT721AccessTemplate.md#track)
- [validateAgreement](NFT721AccessTemplate.md#validateagreement)
- [getInstance](NFT721AccessTemplate.md#getinstance)
- [setInstanceConfig](NFT721AccessTemplate.md#setinstanceconfig-1)

## Constructors

### constructor

• **new NFT721AccessTemplate**(`contractName`): [`NFT721AccessTemplate`](NFT721AccessTemplate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractName` | `string` |

#### Returns

[`NFT721AccessTemplate`](NFT721AccessTemplate.md)

#### Inherited from

[BaseTemplate](BaseTemplate.md).[constructor](BaseTemplate.md#constructor)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:51](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L51)

## Properties

### address

• **address**: \`0x$\{string}\`

#### Inherited from

[BaseTemplate](BaseTemplate.md).[address](BaseTemplate.md#address)

#### Defined in

[src/keeper/contracts/ContractBase.ts:22](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L22)

___

### contract

• **contract**: `any`

#### Inherited from

[BaseTemplate](BaseTemplate.md).[contract](BaseTemplate.md#contract)

#### Defined in

[src/keeper/contracts/ContractBase.ts:19](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L19)

___

### contractName

• `Readonly` **contractName**: `string`

#### Inherited from

[BaseTemplate](BaseTemplate.md).[contractName](BaseTemplate.md#contractname)

#### Defined in

[src/keeper/contracts/ContractBase.ts:18](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L18)

___

### events

• **events**: [`ContractEvent`](ContractEvent.md) \| [`SubgraphEvent`](SubgraphEvent.md)

#### Inherited from

[BaseTemplate](BaseTemplate.md).[events](BaseTemplate.md#events)

#### Defined in

[src/keeper/contracts/ContractBase.ts:20](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L20)

___

### version

• **version**: `string`

#### Inherited from

[BaseTemplate](BaseTemplate.md).[version](BaseTemplate.md#version)

#### Defined in

[src/keeper/contracts/ContractBase.ts:21](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L21)

## Accessors

### artifactsFolder

• `get` **artifactsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

BaseTemplate.artifactsFolder

#### Defined in

[src/Instantiable.abstract.ts:132](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L132)

___

### circuitsFolder

• `get` **circuitsFolder**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

BaseTemplate.circuitsFolder

#### Defined in

[src/Instantiable.abstract.ts:136](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L136)

___

### client

• `get` **client**(): [`Web3Clients`](../interfaces/Web3Clients.md)

#### Returns

[`Web3Clients`](../interfaces/Web3Clients.md)

#### Inherited from

BaseTemplate.client

#### Defined in

[src/Instantiable.abstract.ts:84](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L84)

___

### config

• `get` **config**(): [`NeverminedOptions`](NeverminedOptions.md)

#### Returns

[`NeverminedOptions`](NeverminedOptions.md)

#### Inherited from

BaseTemplate.config

#### Defined in

[src/Instantiable.abstract.ts:115](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L115)

___

### instanceConfig

• `get` **instanceConfig**(): [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

[`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

BaseTemplate.instanceConfig

#### Defined in

[src/Instantiable.abstract.ts:140](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L140)

___

### instantiableConfig

• `get` **instantiableConfig**(): `undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Returns

`undefined` \| [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Inherited from

BaseTemplate.instantiableConfig

#### Defined in

[src/Instantiable.abstract.ts:108](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L108)

___

### logger

• `get` **logger**(): `Logger`

#### Returns

`Logger`

#### Inherited from

BaseTemplate.logger

#### Defined in

[src/Instantiable.abstract.ts:123](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L123)

___

### nevermined

• `get` **nevermined**(): [`Nevermined`](Nevermined.md)

#### Returns

[`Nevermined`](Nevermined.md)

#### Inherited from

BaseTemplate.nevermined

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

BaseTemplate.publicClient

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

BaseTemplate.walletClient

#### Defined in

[src/Instantiable.abstract.ts:100](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L100)

## Methods

### accept

▸ **accept**(`params`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ValidationParams`](../interfaces/ValidationParams.md) |

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[BaseTemplate](BaseTemplate.md).[accept](BaseTemplate.md#accept)

#### Defined in

[src/keeper/contracts/templates/NFT721AccessTemplate.ts:106](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/NFT721AccessTemplate.ts#L106)

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

[BaseTemplate](BaseTemplate.md).[agreementId](BaseTemplate.md#agreementid)

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

[BaseTemplate](BaseTemplate.md).[call](BaseTemplate.md#call)

#### Defined in

[src/keeper/contracts/ContractBase.ts:91](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L91)

___

### conditions

▸ **conditions**(): [[`NFT721HolderCondition`](NFT721HolderCondition.md), [`NFTAccessCondition`](NFTAccessCondition.md)]

#### Returns

[[`NFT721HolderCondition`](NFT721HolderCondition.md), [`NFTAccessCondition`](NFTAccessCondition.md)]

#### Overrides

[BaseTemplate](BaseTemplate.md).[conditions](BaseTemplate.md#conditions)

#### Defined in

[src/keeper/contracts/templates/NFT721AccessTemplate.ts:54](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/NFT721AccessTemplate.ts#L54)

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

[BaseTemplate](BaseTemplate.md).[createAgreement](BaseTemplate.md#createagreement)

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

[BaseTemplate](BaseTemplate.md).[createAgreementAndPay](BaseTemplate.md#createagreementandpay)

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
| `parameters` | `NFT721AccessTemplateParams` |  |
| `consumer` | [`NvmAccount`](NvmAccount.md) | - |
| `timeOuts?` | `number`[] | - |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) | - |

#### Returns

`Promise`\<`string`\>

true if the call was successful.

#### Inherited from

[BaseTemplate](BaseTemplate.md).[createAgreementFromDDO](BaseTemplate.md#createagreementfromddo)

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
| `parameters` | `NFT721AccessTemplateParams` |
| `consumer` | [`NvmAccount`](NvmAccount.md) |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `txParams?` | [`TxParameters`](../interfaces/TxParameters.md) |
| `observer?` | (`orderProgressStep`: [`OrderProgressStep`](../enums/OrderProgressStep.md)) => `void` |

#### Returns

`Promise`\<`string`\>

#### Inherited from

[BaseTemplate](BaseTemplate.md).[createAgreementWithPaymentFromDDO](BaseTemplate.md#createagreementwithpaymentfromddo)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:240](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L240)

___

### createService

▸ **createService**(`publisher`, `metadata`, `serviceAttributes`, `nftAttributes?`, `priceData?`): [`ServiceNFTAccess`](../interfaces/ServiceNFTAccess.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publisher` | [`NvmAccount`](NvmAccount.md) |
| `metadata` | [`MetaData`](../interfaces/MetaData.md) |
| `serviceAttributes` | [`ServiceAttributes`](../interfaces/ServiceAttributes.md) |
| `nftAttributes?` | [`NFTAttributes`](NFTAttributes.md) |
| `priceData?` | [`PricedMetadataInformation`](../code-reference.md#pricedmetadatainformation) |

#### Returns

[`ServiceNFTAccess`](../interfaces/ServiceNFTAccess.md)

#### Inherited from

[BaseTemplate](BaseTemplate.md).[createService](BaseTemplate.md#createservice)

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:48](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L48)

___

### description

▸ **description**(): `string`

#### Returns

`string`

#### Overrides

[BaseTemplate](BaseTemplate.md).[description](BaseTemplate.md#description)

#### Defined in

[src/keeper/contracts/templates/NFT721AccessTemplate.ts:39](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/NFT721AccessTemplate.ts#L39)

___

### extraGen

▸ **extraGen**(`_params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_params` | [`ValidationParams`](../interfaces/ValidationParams.md) |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[BaseTemplate](BaseTemplate.md).[extraGen](BaseTemplate.md#extragen)

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

[BaseTemplate](BaseTemplate.md).[getAgreementCreatedEvent](BaseTemplate.md#getagreementcreatedevent)

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

#### Inherited from

[BaseTemplate](BaseTemplate.md).[getAgreementData](BaseTemplate.md#getagreementdata)

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
| `params` | `NFT721AccessTemplateParams` | - |

#### Returns

`Promise`\<`string`[]\>

The condition IDs.

#### Inherited from

[BaseTemplate](BaseTemplate.md).[getAgreementIdsFromDDO](BaseTemplate.md#getagreementidsfromddo)

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

[BaseTemplate](BaseTemplate.md).[getAgreementStatus](BaseTemplate.md#getagreementstatus)

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

[BaseTemplate](BaseTemplate.md).[getAgreementsForDID](BaseTemplate.md#getagreementsfordid)

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

[BaseTemplate](BaseTemplate.md).[getConditionTypes](BaseTemplate.md#getconditiontypes)

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

[BaseTemplate](BaseTemplate.md).[getConditions](BaseTemplate.md#getconditions)

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

[BaseTemplate](BaseTemplate.md).[getFromAddress](BaseTemplate.md#getfromaddress)

#### Defined in

[src/keeper/contracts/ContractBase.ts:67](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L67)

___

### getServiceAgreementTemplate

▸ **getServiceAgreementTemplate**(): [`ServiceAgreementTemplate`](../interfaces/ServiceAgreementTemplate.md)

#### Returns

[`ServiceAgreementTemplate`](../interfaces/ServiceAgreementTemplate.md)

#### Overrides

[BaseTemplate](BaseTemplate.md).[getServiceAgreementTemplate](BaseTemplate.md#getserviceagreementtemplate)

#### Defined in

[src/keeper/contracts/templates/NFT721AccessTemplate.ts:83](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/NFT721AccessTemplate.ts#L83)

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

[BaseTemplate](BaseTemplate.md).[getServiceAgreementTemplateConditionByRef](BaseTemplate.md#getserviceagreementtemplateconditionbyref)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:314](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L314)

___

### getServiceAgreementTemplateConditions

▸ **getServiceAgreementTemplateConditions**(): [`ServiceAgreementTemplateCondition`](../interfaces/ServiceAgreementTemplateCondition.md)[]

#### Returns

[`ServiceAgreementTemplateCondition`](../interfaces/ServiceAgreementTemplateCondition.md)[]

#### Inherited from

[BaseTemplate](BaseTemplate.md).[getServiceAgreementTemplateConditions](BaseTemplate.md#getserviceagreementtemplateconditions)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:309](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L309)

___

### getServiceAgreementTemplateDependencies

▸ **getServiceAgreementTemplateDependencies**(): `Promise`\<\{ `[condition: string]`: `string`[];  }\>

#### Returns

`Promise`\<\{ `[condition: string]`: `string`[];  }\>

#### Inherited from

[BaseTemplate](BaseTemplate.md).[getServiceAgreementTemplateDependencies](BaseTemplate.md#getserviceagreementtemplatedependencies)

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

[BaseTemplate](BaseTemplate.md).[getTransactionLogs](BaseTemplate.md#gettransactionlogs)

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

[BaseTemplate](BaseTemplate.md).[init](BaseTemplate.md#init)

#### Defined in

[src/keeper/contracts/ContractBase.ts:29](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L29)

___

### instanceFromDDO

▸ **instanceFromDDO**(`agreementIdSeed`, `ddo`, `creator`, `parameters`): `Promise`\<`AgreementInstance`\<`NFT721AccessTemplateParams`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `agreementIdSeed` | `string` |
| `ddo` | [`DDO`](DDO.md) |
| `creator` | `string` |
| `parameters` | `NFT721AccessTemplateParams` |

#### Returns

`Promise`\<`AgreementInstance`\<`NFT721AccessTemplateParams`\>\>

#### Overrides

[BaseTemplate](BaseTemplate.md).[instanceFromDDO](BaseTemplate.md#instancefromddo)

#### Defined in

[src/keeper/contracts/templates/NFT721AccessTemplate.ts:59](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/NFT721AccessTemplate.ts#L59)

___

### lockConditionIndex

▸ **lockConditionIndex**(): `number`

#### Returns

`number`

#### Inherited from

[BaseTemplate](BaseTemplate.md).[lockConditionIndex](BaseTemplate.md#lockconditionindex)

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

[BaseTemplate](BaseTemplate.md).[lockTokens](BaseTemplate.md#locktokens)

#### Defined in

[src/keeper/contracts/templates/AgreementTemplate.abstract.ts:382](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/AgreementTemplate.abstract.ts#L382)

___

### name

▸ **name**(): `string`

#### Returns

`string`

#### Overrides

[BaseTemplate](BaseTemplate.md).[name](BaseTemplate.md#name)

#### Defined in

[src/keeper/contracts/templates/NFT721AccessTemplate.ts:36](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/NFT721AccessTemplate.ts#L36)

___

### params

▸ **params**(`holderAddress`): `NFT721AccessTemplateParams`

#### Parameters

| Name | Type |
| :------ | :------ |
| `holderAddress` | `string` |

#### Returns

`NFT721AccessTemplateParams`

#### Overrides

[BaseTemplate](BaseTemplate.md).[params](BaseTemplate.md#params)

#### Defined in

[src/keeper/contracts/templates/NFT721AccessTemplate.ts:50](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/NFT721AccessTemplate.ts#L50)

___

### paramsGen

▸ **paramsGen**(`«destructured»`): `Promise`\<`NFT721AccessTemplateParams`\>

Specialize params

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | [`ValidationParams`](../interfaces/ValidationParams.md) | Generic parameters |

#### Returns

`Promise`\<`NFT721AccessTemplateParams`\>

#### Overrides

[BaseTemplate](BaseTemplate.md).[paramsGen](BaseTemplate.md#paramsgen)

#### Defined in

[src/keeper/contracts/templates/NFT721AccessTemplate.ts:28](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/NFT721AccessTemplate.ts#L28)

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

[BaseTemplate](BaseTemplate.md).[paymentData](BaseTemplate.md#paymentdata)

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

[BaseTemplate](BaseTemplate.md).[printAgreementStatus](BaseTemplate.md#printagreementstatus)

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

#### Inherited from

[BaseTemplate](BaseTemplate.md).[process](BaseTemplate.md#process)

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

[BaseTemplate](BaseTemplate.md).[send](BaseTemplate.md#send)

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

[BaseTemplate](BaseTemplate.md).[sendFrom](BaseTemplate.md#sendfrom)

#### Defined in

[src/keeper/contracts/ContractBase.ts:108](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/ContractBase.ts#L108)

___

### service

▸ **service**(): [`ServiceType`](../code-reference.md#servicetype)

#### Returns

[`ServiceType`](../code-reference.md#servicetype)

#### Overrides

[BaseTemplate](BaseTemplate.md).[service](BaseTemplate.md#service)

#### Defined in

[src/keeper/contracts/templates/NFT721AccessTemplate.ts:43](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/NFT721AccessTemplate.ts#L43)

___

### serviceEndpoint

▸ **serviceEndpoint**(): [`ServiceType`](../code-reference.md#servicetype)

#### Returns

[`ServiceType`](../code-reference.md#servicetype)

#### Overrides

[BaseTemplate](BaseTemplate.md).[serviceEndpoint](BaseTemplate.md#serviceendpoint)

#### Defined in

[src/keeper/contracts/templates/NFT721AccessTemplate.ts:46](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/NFT721AccessTemplate.ts#L46)

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

[BaseTemplate](BaseTemplate.md).[setInstanceConfig](BaseTemplate.md#setinstanceconfig)

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

[BaseTemplate](BaseTemplate.md).[someLog](BaseTemplate.md#somelog)

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

[BaseTemplate](BaseTemplate.md).[standardContext](BaseTemplate.md#standardcontext)

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

#### Inherited from

[BaseTemplate](BaseTemplate.md).[track](BaseTemplate.md#track)

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
| `params` | `NFT721AccessTemplateParams` |
| `from` | [`NvmAccount`](NvmAccount.md) |
| `extra` | `any` |
| `txparams?` | [`TxParameters`](../interfaces/TxParameters.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[BaseTemplate](BaseTemplate.md).[validateAgreement](BaseTemplate.md#validateagreement)

#### Defined in

[src/keeper/contracts/templates/BaseTemplate.abstract.ts:141](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/BaseTemplate.abstract.ts#L141)

___

### getInstance

▸ **getInstance**(`config`): `Promise`\<[`NFT721AccessTemplate`](NFT721AccessTemplate.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`InstantiableConfig`](../interfaces/InstantiableConfig.md) |

#### Returns

`Promise`\<[`NFT721AccessTemplate`](NFT721AccessTemplate.md)\>

#### Overrides

[BaseTemplate](BaseTemplate.md).[getInstance](BaseTemplate.md#getinstance)

#### Defined in

[src/keeper/contracts/templates/NFT721AccessTemplate.ts:33](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/keeper/contracts/templates/NFT721AccessTemplate.ts#L33)

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

[BaseTemplate](BaseTemplate.md).[setInstanceConfig](BaseTemplate.md#setinstanceconfig-1)

#### Defined in

[src/Instantiable.abstract.ts:149](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/Instantiable.abstract.ts#L149)