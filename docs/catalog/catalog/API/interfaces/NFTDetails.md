# Interface: NFTDetails

Details of the NFT asset agreement

## Table of contents

### Properties

- [blockNumberUpdated](NFTDetails.md#blocknumberupdated)
- [lastChecksum](NFTDetails.md#lastchecksum)
- [lastUpdatedBy](NFTDetails.md#lastupdatedby)
- [mintCap](NFTDetails.md#mintcap)
- [nftContractAddress](NFTDetails.md#nftcontractaddress)
- [nftInitialized](NFTDetails.md#nftinitialized)
- [nftSupply](NFTDetails.md#nftsupply)
- [nftURI](NFTDetails.md#nfturi)
- [owner](NFTDetails.md#owner)
- [providers](NFTDetails.md#providers)
- [royalties](NFTDetails.md#royalties)
- [royaltyScheme](NFTDetails.md#royaltyscheme)
- [url](NFTDetails.md#url)

## Properties

### blockNumberUpdated

• **blockNumberUpdated**: `number`

The block number from blockchain where the asset was updated

#### Defined in

[types/index.ts:318](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L318)

___

### lastChecksum

• **lastChecksum**: `string`

The last checksum generated to verify the sources

#### Defined in

[types/index.ts:312](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L312)

___

### lastUpdatedBy

• **lastUpdatedBy**: `string`

The modification of the asset

#### Defined in

[types/index.ts:316](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L316)

___

### mintCap

• **mintCap**: `BigNumber`

The amount limit of nft which can be minted

#### Defined in

[types/index.ts:330](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L330)

___

### nftContractAddress

• **nftContractAddress**: `string`

Contract NFT address which was created the NFT asset

#### Defined in

[types/index.ts:324](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L324)

___

### nftInitialized

• **nftInitialized**: `string`

When the NFT asset was initialized

#### Defined in

[types/index.ts:326](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L326)

___

### nftSupply

• **nftSupply**: `BigNumber`

The amount of ntfs that are in circulation

#### Defined in

[types/index.ts:322](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L322)

___

### nftURI

• `Optional` **nftURI**: `string`

Uri of the NFT

#### Defined in

[types/index.ts:328](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L328)

___

### owner

• **owner**: `string`

The owner of the asset

#### Defined in

[types/index.ts:310](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L310)

___

### providers

• **providers**: [`string`]

Which services provide the asset

#### Defined in

[types/index.ts:320](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L320)

___

### royalties

• **royalties**: `number`

The rewards that the owner can get for every sale

#### Defined in

[types/index.ts:332](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L332)

___

### royaltyScheme

• **royaltyScheme**: `RoyaltyKind`

Royalty scheme of the NFT asset

#### Defined in

[types/index.ts:334](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L334)

___

### url

• **url**: `string`

Url where is located the asset

#### Defined in

[types/index.ts:314](https://github.com/nevermined-io/react-components/blob/1ea201f/catalog/src/types/index.ts#L314)
