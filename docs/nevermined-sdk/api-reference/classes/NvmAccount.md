[@nevermined-io/sdk](../code-reference.md) / NvmAccount

# Class: NvmAccount

Account information.

## Table of contents

### Constructors

- [constructor](NvmAccount.md#constructor)

### Properties

- [accountSigner](NvmAccount.md#accountsigner)
- [accountType](NvmAccount.md#accounttype)
- [babySecret](NvmAccount.md#babysecret)
- [babyX](NvmAccount.md#babyx)
- [babyY](NvmAccount.md#babyy)
- [id](NvmAccount.md#id)
- [kernelClient](NvmAccount.md#kernelclient)
- [password](NvmAccount.md#password)
- [zeroDevSigner](NvmAccount.md#zerodevsigner)

### Methods

- [getAccountSigner](NvmAccount.md#getaccountsigner)
- [getAddress](NvmAccount.md#getaddress)
- [getId](NvmAccount.md#getid)
- [getKernelClient](NvmAccount.md#getkernelclient)
- [getPassword](NvmAccount.md#getpassword)
- [getPublic](NvmAccount.md#getpublic)
- [getType](NvmAccount.md#gettype)
- [getZeroDevSigner](NvmAccount.md#getzerodevsigner)
- [isZeroDev](NvmAccount.md#iszerodev)
- [setId](NvmAccount.md#setid)
- [setPassword](NvmAccount.md#setpassword)
- [signTextLocally](NvmAccount.md#signtextlocally)
- [fromAccount](NvmAccount.md#fromaccount)
- [fromAddress](NvmAccount.md#fromaddress)
- [fromZeroDevSessionKey](NvmAccount.md#fromzerodevsessionkey)
- [fromZeroDevSigner](NvmAccount.md#fromzerodevsigner)

## Constructors

### constructor

• **new NvmAccount**(`id`, `accountType?`): [`NvmAccount`](NvmAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `accountType` | `NvmAccountType` |

#### Returns

[`NvmAccount`](NvmAccount.md)

#### Defined in

[src/models/NvmAccount.ts:86](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L86)

## Properties

### accountSigner

• `Private` `Optional` **accountSigner**: `Account` \| `PrivateKeyAccount`

#### Defined in

[src/models/NvmAccount.ts:15](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L15)

___

### accountType

• **accountType**: `NvmAccountType`

#### Defined in

[src/models/NvmAccount.ts:23](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L23)

___

### babySecret

• `Optional` **babySecret**: `string`

#### Defined in

[src/models/NvmAccount.ts:14](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L14)

___

### babyX

• `Optional` **babyX**: `string`

#### Defined in

[src/models/NvmAccount.ts:12](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L12)

___

### babyY

• `Optional` **babyY**: `string`

#### Defined in

[src/models/NvmAccount.ts:13](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L13)

___

### id

• `Private` **id**: `string`

#### Defined in

[src/models/NvmAccount.ts:87](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L87)

___

### kernelClient

• `Private` `Optional` **kernelClient**: `KernelAccountClient`\<``"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"``, `Transport`, `Chain`, `any`\>

#### Defined in

[src/models/NvmAccount.ts:16](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L16)

___

### password

• `Private` `Optional` **password**: `string`

#### Defined in

[src/models/NvmAccount.ts:11](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L11)

___

### zeroDevSigner

• `Private` `Optional` **zeroDevSigner**: `any`

#### Defined in

[src/models/NvmAccount.ts:22](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L22)

## Methods

### getAccountSigner

▸ **getAccountSigner**(): `any`

#### Returns

`any`

#### Defined in

[src/models/NvmAccount.ts:94](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L94)

___

### getAddress

▸ **getAddress**(): \`0x$\{string}\`

#### Returns

\`0x$\{string}\`

#### Defined in

[src/models/NvmAccount.ts:113](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L113)

___

### getId

▸ **getId**(): \`0x$\{string}\`

#### Returns

\`0x$\{string}\`

#### Defined in

[src/models/NvmAccount.ts:117](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L117)

___

### getKernelClient

▸ **getKernelClient**(): `undefined` \| `KernelAccountClient`\<``"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"``, `Transport`, `Chain`, `any`\>

#### Returns

`undefined` \| `KernelAccountClient`\<``"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"``, `Transport`, `Chain`, `any`\>

#### Defined in

[src/models/NvmAccount.ts:98](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L98)

___

### getPassword

▸ **getPassword**(): `undefined` \| `string`

Returns account password.

#### Returns

`undefined` \| `string`

The account password.

#### Defined in

[src/models/NvmAccount.ts:153](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L153)

___

### getPublic

▸ **getPublic**(): `string`

#### Returns

`string`

#### Defined in

[src/models/NvmAccount.ts:125](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L125)

___

### getType

▸ **getType**(): ``"local"`` \| ``"json-rpc"`` \| ``"zerodev"`` \| ``"sessionKey"``

#### Returns

``"local"`` \| ``"json-rpc"`` \| ``"zerodev"`` \| ``"sessionKey"``

#### Defined in

[src/models/NvmAccount.ts:102](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L102)

___

### getZeroDevSigner

▸ **getZeroDevSigner**(): `any`

#### Returns

`any`

#### Defined in

[src/models/NvmAccount.ts:105](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L105)

___

### isZeroDev

▸ **isZeroDev**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/models/NvmAccount.ts:109](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L109)

___

### setId

▸ **setId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[src/models/NvmAccount.ts:121](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L121)

___

### setPassword

▸ **setPassword**(`password`): `void`

Set account password.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `password` | `string` | Password for account. |

#### Returns

`void`

#### Defined in

[src/models/NvmAccount.ts:145](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L145)

___

### signTextLocally

▸ **signTextLocally**(`text`): `Promise`\<\`0x$\{string}\`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` \| `Uint8Array` |

#### Returns

`Promise`\<\`0x$\{string}\`\>

#### Defined in

[src/models/NvmAccount.ts:129](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L129)

___

### fromAccount

▸ **fromAccount**(`account`): [`NvmAccount`](NvmAccount.md)

Returns a nevermined Account from a viem account

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Account` \| `PrivateKeyAccount` | A viem local account |

#### Returns

[`NvmAccount`](NvmAccount.md)

The nevermined account

#### Defined in

[src/models/NvmAccount.ts:31](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L31)

___

### fromAddress

▸ **fromAddress**(`address`): [`NvmAccount`](NvmAccount.md)

Returns a nevermined Account from an address. This method is used for browser integration (i.e Metamask)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | \`0x$\{string}\` | A wallet address |

#### Returns

[`NvmAccount`](NvmAccount.md)

The nevermined account

#### Defined in

[src/models/NvmAccount.ts:44](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L44)

___

### fromZeroDevSessionKey

▸ **fromZeroDevSessionKey**(`kernelClient`): [`NvmAccount`](NvmAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kernelClient` | `KernelAccountClient`\<``"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"``, `Transport`, `Chain`, `any`\> |

#### Returns

[`NvmAccount`](NvmAccount.md)

#### Defined in

[src/models/NvmAccount.ts:71](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L71)

___

### fromZeroDevSigner

▸ **fromZeroDevSigner**(`kernelClient`): `Promise`\<[`NvmAccount`](NvmAccount.md)\>

Returns a nevermined Account from a zerodev signer

#### Parameters

| Name | Type |
| :------ | :------ |
| `kernelClient` | `KernelAccountClient`\<``"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"``, `Transport`, `Chain`, `any`\> |

#### Returns

`Promise`\<[`NvmAccount`](NvmAccount.md)\>

The nevermined account

#### Defined in

[src/models/NvmAccount.ts:56](https://github.com/nevermined-io/sdk-js/blob/4d0a0baa5afc98578a0eec8d32b14e61f501c376/src/models/NvmAccount.ts#L56)