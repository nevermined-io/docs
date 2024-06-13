[@nevermined-io/sdk](../code-reference.md) / EventOptions

# Interface: EventOptions

## Table of contents

### Properties

- [eventName](EventOptions.md#eventname)
- [filterJsonRpc](EventOptions.md#filterjsonrpc)
- [filterSubgraph](EventOptions.md#filtersubgraph)
- [fromBlock](EventOptions.md#fromblock)
- [result](EventOptions.md#result)
- [toBlock](EventOptions.md#toblock)

## Properties

### eventName

• **eventName**: `string`

#### Defined in

[src/types/EventTypes.ts:8](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/EventTypes.ts#L8)

___

### filterJsonRpc

• `Optional` **filterJsonRpc**: [`FilterContractEvent`](FilterContractEvent.md)

#### Defined in

[src/types/EventTypes.ts:9](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/EventTypes.ts#L9)

___

### filterSubgraph

• `Optional` **filterSubgraph**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/EventTypes.ts:10](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/EventTypes.ts#L10)

___

### fromBlock

• `Optional` **fromBlock**: `bigint` \| `BlockTag`

#### Defined in

[src/types/EventTypes.ts:12](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/EventTypes.ts#L12)

___

### result

• `Optional` **result**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/types/EventTypes.ts:11](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/EventTypes.ts#L11)

___

### toBlock

• `Optional` **toBlock**: `bigint` \| `BlockTag`

#### Defined in

[src/types/EventTypes.ts:13](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/types/EventTypes.ts#L13)