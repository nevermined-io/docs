[@nevermined-io/sdk](../code-reference.md) / Provider

# Interface: Provider

## Table of contents

### Properties

- [description](Provider.md#description)
- [environment](Provider.md#environment)
- [type](Provider.md#type)

## Properties

### description

• **description**: `string`

#### Defined in

[src/types/DDOTypes.ts:14](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L14)

___

### environment

• **environment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cluster` | \{ `type`: `string` ; `url`: `string`  } |
| `cluster.type` | `string` |
| `cluster.url` | `string` |
| `supportedContainers` | \{ `checksum`: `string` ; `image`: `string` ; `tag`: `string`  }[] |
| `supportedServers` | \{ `cpu`: `string` ; `disk`: `string` ; `gpu`: `string` ; `maxExecutionTime`: `number` ; `memory`: `string` ; `price`: `string` ; `serverId`: `string` ; `serverType`: `string`  }[] |

#### Defined in

[src/types/DDOTypes.ts:15](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L15)

___

### type

• **type**: `string`

#### Defined in

[src/types/DDOTypes.ts:13](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/DDOTypes.ts#L13)