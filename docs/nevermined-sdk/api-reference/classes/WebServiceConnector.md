[@nevermined-io/sdk](../code-reference.md) / WebServiceConnector

# Class: WebServiceConnector

Provides a common interface to web services.

## Table of contents

### Constructors

- [constructor](WebServiceConnector.md#constructor)

### Properties

- [config](WebServiceConnector.md#config)

### Methods

- [\_sleep](WebServiceConnector.md#_sleep)
- [delete](WebServiceConnector.md#delete)
- [downloadFile](WebServiceConnector.md#downloadfile)
- [downloadUrl](WebServiceConnector.md#downloadurl)
- [fetch](WebServiceConnector.md#fetch)
- [fetchCID](WebServiceConnector.md#fetchcid)
- [fetchToken](WebServiceConnector.md#fetchtoken)
- [get](WebServiceConnector.md#get)
- [getFileResponse](WebServiceConnector.md#getfileresponse)
- [post](WebServiceConnector.md#post)
- [put](WebServiceConnector.md#put)
- [uploadFile](WebServiceConnector.md#uploadfile)
- [uploadMessage](WebServiceConnector.md#uploadmessage)
- [getIPFSAuthToken](WebServiceConnector.md#getipfsauthtoken)

## Constructors

### constructor

• **new WebServiceConnector**(`config`): [`WebServiceConnector`](WebServiceConnector.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`InstantiableConfig`](../interfaces/InstantiableConfig.md) |

#### Returns

[`WebServiceConnector`](WebServiceConnector.md)

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:26](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L26)

## Properties

### config

• **config**: [`InstantiableConfig`](../interfaces/InstantiableConfig.md)

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:24](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L24)

## Methods

### \_sleep

▸ **_sleep**(`ms`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:226](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L226)

___

### delete

▸ **delete**(`url`, `payload?`, `headers?`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `payload?` | `BodyInit` |
| `headers` | `Object` |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:71](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L71)

___

### downloadFile

▸ **downloadFile**(`url`, `destination?`, `index?`, `headers?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `destination?` | `string` |
| `index?` | `number` |
| `headers?` | `Object` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:86](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L86)

___

### downloadUrl

▸ **downloadUrl**(`url`, `headers?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `headers?` | `any` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:139](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L139)

___

### fetch

▸ **fetch**(`url`, `opts`, `numberTries?`): `Promise`\<`Response`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `any` | `undefined` |
| `opts` | `RequestInit` | `undefined` |
| `numberTries` | `number` | `1` |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:209](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L209)

___

### fetchCID

▸ **fetchCID**(`cid`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cid` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:181](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L181)

___

### fetchToken

▸ **fetchToken**(`url`, `grantToken`, `numberTries?`): `Promise`\<`Response`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `grantToken` | `string` | `undefined` |
| `numberTries` | `number` | `1` |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:165](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L165)

___

### get

▸ **get**(`url`, `headers?`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `any` |
| `headers` | `Object` |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:47](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L47)

___

### getFileResponse

▸ **getFileResponse**(`url`, `index?`, `headers?`): `Promise`\<\{ `name`: `string` ; `response`: `Response`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `index?` | `number` |
| `headers?` | `Object` |

#### Returns

`Promise`\<\{ `name`: `string` ; `response`: `Response`  }\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:113](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L113)

___

### post

▸ **post**(`url`, `payload`, `headers?`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `payload` | `BodyInit` |
| `headers` | `Object` |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:32](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L32)

___

### put

▸ **put**(`url`, `payload`, `headers?`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `payload` | `BodyInit` |
| `headers` | `Object` |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:56](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L56)

___

### uploadFile

▸ **uploadFile**(`url`, `data`, `encrypt?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | `ReadStream` |
| `encrypt?` | `boolean` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:156](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L156)

___

### uploadMessage

▸ **uploadMessage**(`url`, `data`, `encrypt?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data` | `string` |
| `encrypt?` | `boolean` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:147](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L147)

___

### getIPFSAuthToken

▸ **getIPFSAuthToken**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/nevermined/utils/WebServiceConnector.ts:199](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/nevermined/utils/WebServiceConnector.ts#L199)