[@nevermined-io/sdk - v3.1.1](../code-reference.md) / Provider

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

[src/types/DDOTypes.ts:14](https://github.com/nevermined-io/sdk-js/blob/9319fcdb83e6987b924bbe35233879f79a0603bc/src/types/DDOTypes.ts#L14)

---

### environment

• **environment**: `Object`

#### Type declaration

| Name                  | Type                                                                                                                                                                                |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cluster`             | \{ `type`: `string` ; `url`: `string` }                                                                                                                                             |
| `cluster.type`        | `string`                                                                                                                                                                            |
| `cluster.url`         | `string`                                                                                                                                                                            |
| `supportedContainers` | \{ `checksum`: `string` ; `image`: `string` ; `tag`: `string` }[]                                                                                                                   |
| `supportedServers`    | \{ `cpu`: `string` ; `disk`: `string` ; `gpu`: `string` ; `maxExecutionTime`: `number` ; `memory`: `string` ; `price`: `string` ; `serverId`: `string` ; `serverType`: `string` }[] |

#### Defined in

[src/types/DDOTypes.ts:15](https://github.com/nevermined-io/sdk-js/blob/9319fcdb83e6987b924bbe35233879f79a0603bc/src/types/DDOTypes.ts#L15)

---

### type

• **type**: `string`

#### Defined in

[src/types/DDOTypes.ts:13](https://github.com/nevermined-io/sdk-js/blob/9319fcdb83e6987b924bbe35233879f79a0603bc/src/types/DDOTypes.ts#L13)
