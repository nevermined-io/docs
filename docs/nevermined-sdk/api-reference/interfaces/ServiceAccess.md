[@nevermined-io/sdk](../code-reference.md) / ServiceAccess

# Interface: ServiceAccess

## Hierarchy

- [`ServiceCommon`](ServiceCommon.md)

- [`PricedMetadataInformation`](../code-reference.md#pricedmetadatainformation)

  ↳ **`ServiceAccess`**

## Table of contents

### Properties

- [attributes](ServiceAccess.md#attributes)
- [index](ServiceAccess.md#index)
- [serviceEndpoint](ServiceAccess.md#serviceendpoint)
- [templateId](ServiceAccess.md#templateid)
- [type](ServiceAccess.md#type)

## Properties

### attributes

• **attributes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `additionalInformation` | \{ `description`: `string` ; `priceHighestDenomination`: `number`  } |
| `additionalInformation.description` | `string` |
| `additionalInformation.priceHighestDenomination` | `number` |
| `main` | \{ `creator`: `string` ; `datePublished`: `string` ; `name`: `string` ; `price`: `string` ; `timeout`: `number`  } |
| `main.creator` | `string` |
| `main.datePublished` | `string` |
| `main.name` | `string` |
| `main.price` | `string` |
| `main.timeout` | `number` |
| `serviceAgreementTemplate?` | [`ServiceAgreementTemplate`](ServiceAgreementTemplate.md) |

#### Overrides

[ServiceCommon](ServiceCommon.md).[attributes](ServiceCommon.md#attributes)

#### Defined in

[src/types/DDOTypes.ts:683](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L683)

___

### index

• **index**: `number`

#### Inherited from

[ServiceCommon](ServiceCommon.md).[index](ServiceCommon.md#index)

#### Defined in

[src/types/DDOTypes.ts:636](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L636)

___

### serviceEndpoint

• `Optional` **serviceEndpoint**: `string`

#### Inherited from

[ServiceCommon](ServiceCommon.md).[serviceEndpoint](ServiceCommon.md#serviceendpoint)

#### Defined in

[src/types/DDOTypes.ts:637](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L637)

___

### templateId

• `Optional` **templateId**: `string`

#### Overrides

[ServiceCommon](ServiceCommon.md).[templateId](ServiceCommon.md#templateid)

#### Defined in

[src/types/DDOTypes.ts:682](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L682)

___

### type

• **type**: ``"access"``

#### Overrides

[ServiceCommon](ServiceCommon.md).[type](ServiceCommon.md#type)

#### Defined in

[src/types/DDOTypes.ts:681](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L681)