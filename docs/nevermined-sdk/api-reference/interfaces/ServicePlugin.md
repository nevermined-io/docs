[@nevermined-io/sdk](../code-reference.md) / ServicePlugin

# Interface: ServicePlugin\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Service`](../code-reference.md#service) |

## Implemented by

- [`AccessService`](../classes/AccessService.md)
- [`BaseTemplate`](../classes/BaseTemplate.md)
- [`NFTAccessService`](../classes/NFTAccessService.md)
- [`NFTSalesService`](../classes/NFTSalesService.md)

## Table of contents

### Methods

- [accept](ServicePlugin.md#accept)
- [createService](ServicePlugin.md#createservice)
- [process](ServicePlugin.md#process)
- [track](ServicePlugin.md#track)

## Methods

### accept

▸ **accept**(`params`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ValidationParams`](ValidationParams.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/types/DDOTypes.ts:805](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L805)

___

### createService

▸ **createService**(`publisher`, `metadata`, `serviceAttributes`, `nftAttributes?`, `pricedData?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publisher` | [`NvmAccount`](../classes/NvmAccount.md) |
| `metadata` | [`MetaData`](MetaData.md) |
| `serviceAttributes` | [`ServiceAttributes`](ServiceAttributes.md) |
| `nftAttributes?` | [`NFTAttributes`](../classes/NFTAttributes.md) |
| `pricedData?` | [`PricedMetadataInformation`](../code-reference.md#pricedmetadatainformation) |

#### Returns

`T`

#### Defined in

[src/types/DDOTypes.ts:795](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L795)

___

### process

▸ **process**(`params`, `from`, `txparams?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ValidationParams`](ValidationParams.md) |
| `from` | [`NvmAccount`](../classes/NvmAccount.md) |
| `txparams?` | [`TxParameters`](TxParameters.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/DDOTypes.ts:803](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L803)

___

### track

▸ **track**(`params`, `from`, `txparams?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ValidationParams`](ValidationParams.md) |
| `from` | [`NvmAccount`](../classes/NvmAccount.md) |
| `txparams?` | [`TxParameters`](TxParameters.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/types/DDOTypes.ts:807](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L807)