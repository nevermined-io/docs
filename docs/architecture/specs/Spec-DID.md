---
sidebar_position: 2
description: Decentralized Identifiers
---


# Decentralized Identifiers

```
shortname:      DID
name:           Decentralized Identifiers
type:           Standard
status:         Valid
version:        0.3
editor:         Aitor Argomaniz <aitor@nevermined.io>
contributors:   
```


This specification is based on the [W3C DID specification](https://w3c-ccg.github.io/did-spec/), which was at version
0.11 as of August 2018.

## Motivation

The main motivations of this SPEC are:

* Design a solution to extend the current architecture to use **Decentralized Identifiers (DIDs)** and **DID Documents
(DDOs)**
* Understand how to register information on-chain with off-chain integrity associated
* Understand how to resolve DIDs into DDOs
* Design a solution facilitating alignment of on-chain and off-chain information
* Establishing the mechanism to know if the DDO associated with a DID was modified
* Defining the common mechanisms, interfaces and APIs to implemented the designed solution
* Define how Nevermined assets can be modeled with a DID/DDO data model
* Understand how DID hubs are formed, and how they integrate a business and storage layer

## Specification

Requirements are:

* The DID resolving capabilities MUST be exposed in the client libraries, enabling to resolve a DDO directly in a
totally transparent way
* ASSETS are DATA objects describing RESOURCES under control of a PUBLISHER
* DLT stores on-chain only the essential information about ASSETS
* PROVIDERS store the ASSET metadata off-chain
* DLT doesn't store any ASSET metadata
* Nevermined doesn't store ASSET contents (e.g. files)
* An ASSET is modeled in Nevermined as on-chain information stored in the DLT and metadata stored in METADATA API
* ASSETS on-chain information only can be modified by OWNERS or DELEGATED USERS
* ASSETS can be resolved using a Decentralized ID (DID) included on-chain and off-chain
* A DID Document (DDO) should include the ASSET metadata
* Any kind of object registered in Nevermined MUST have a DID allowing one to uniquely identify that object in the system
* ASSET DDO (and the metadata included as part of the DDO) is associated to the ASSET information stored on-chain using
a common DID
* A DID can be resolved to get access to a DDO
* ASSET DDOs can be updated without updating the on-chain information
* ASSET information stored in the DLT will include a checksum attribute
* The ASSET on-chain checksum attribute SHOULD include a one-way HASH calculated using the DDO content
* After the DDO resolving, the DDO HASH can be calculated off-chain to validate if the on-chain and off-chain
information is aligned
* A HASH not matching with the checksum on-chain means the DDO was modified without the on-chain update
* The function to calculate the hash MUST BE standard

## Proposed Solution

### Decentralized IDs (DIDs)

A DID is a unique identifier that can be resolved or de-referenced to a standard resource describing the entity
(a DID Document or DDO).
If we apply this to Nevermined, the DID would be the unique identifier of an object represented in Nevermined
(i.e. the Asset ID of an ASSET or the Actor ID of a USER).
The DDO SHOULD include the METADATA information associated with this object.
The DDO is stored off-chain in Nevermined.

In Nevermined, a DID is a string that looks like:

```text
did:nv:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea
```

which follows [the generic DID scheme](https://w3c-ccg.github.io/did-spec/#the-generic-did-scheme).
Details about how to compute the DID are given below.

### Publishing and Consumption Flow

Here you have the complete flow using as example a new ASSET:

![DID Resolver](images/did/did-flow.png)

Steps:

1. A Data Publisher, using the Smart Contracts, register the new Resource (ie. ASSET) providing the DID and the DID of the
Provider acting as Public service returning the DDO of the Resource (ASSET)
2. The DLT register the Resource using the Service Agreement Smart Contract and after of that register the identity
using the DidRegistry Smart Contract. In this point, the attribute is raised as a new event
3. The Data Publisher publishes the DDO in the Metadata api
4. A Data Consumer (it could be a frontend application or a backend software), having a DID and using a client library
(Python, Javascript, Java, etc) get the **service-ddo** attribute associated to the DID directly from the Smart
Contracts
5. The Data Consumer, using the provider public url, query directly to the provider passing the DID to obtain the DDO


### DID Documents (DDOs)

If a DID is the index key in a key-value pair, then the DID Document is the value to which the index key points.
The combination of a DID and its associated DID Document forms the root record for a decentralized identifier.

A DDO document is composed of standard DDO attributes:

* `@context`
* `id`
* `created`
* `updated`
* `publicKey`
* `authentication`
* `proof`
* `verifiableCredential`
* `service`

Asset metadata can be included as one of the objects inside the `"service"` array, with type `"metadata"`.

#### DDO Services

Each type of asset (dataset, algorithm, workflow, etc, ..) typically will have associated different kind of services.
There are 2 type of services that are commonly added to all the assets:

* metadata - describing the asset
* provenance - describing the asset provenance

Each service include a `serviceEndpoint` attribute with a URL to the server or document completing that service.
Optionally, the service can include a `immutableServiceEndpoint` attribute with a URL to a repository/service where 
additional information is stored in an immutable way (i.e IPFS, Filecoin, Arweave, etc).

Each service is distinguished by the `DDO.service.type` attribute.

Each service has an `attributes` section where all the information related to the service is added.
As mandatory content, the attributes section will have a `main` sub-section.
This one is important because it must include all the mandatory information that a service has to provide and **never**
change because it is used to calculate the integrity checksum of the service.

A part of the `attributes.main` sub-section, other optional sub-sections can be added
(like: `attributes.curation` or `attributes.extra`) depending on the service type.

Example:

```json
"service": [  
  {  
    "index": 0,
    "type": "metadata",
    "serviceEndpoint": "https://service/api/v1/metadata/assets/ddo/did:nv:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea",
    "immutableServiceEndpoint": "cid://QmVT3wfySvZJqAvkBCyxoz3EvD3yeLqf3cvAssFDpFFXNm",
    "attributes": {  
      "main": {},
      "additionalInformation": {},
      "curation": {}
    }
  },
  {  
    "index": 1,
    "type": "provenance",
    "serviceEndpoint": "https://service/api/v1/provenance/assets/ddo/did:nv:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea",
    "attributes": {  
      "main": {},
      "additionalInformation": {}
    }
  },
  {  
    "index": 2,
    "type": "access",
    "serviceEndpoint": "https://service/api/v1/access/assets/ddo/did:nv:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea",
    "attributes": {  
      "main": {},
      "additionalInformation": {}
    }
  }
]
```

- You can find a [complete example of a DDO](https://github.com/nevermined-docs/tree/master/architecture/specs/did/examples/ddo-example.json).
- You can find a complete reference of the asset metadata in [METADATA SPEC](Spec-METADATA.md).
- You can find a complete [real world example of a DDO](https://w3c-ccg.github.io/did-spec/#real-world-example)
with extended services added, as part of the W3C DID spec.

### DDO Meta information

This section (named `meta`) provides additional information about the DDO itself including versions, and networks where this DDO is valid.
It will include 2 main blocks of information:

#### Versions

Allows to register the different linear versions of the DDO created. It is an array sorted by version creation including the following information:

* Version Id (`_id`) - Unique identifier of the version, it could be a DID
* Tag or Version number (`tag`)
* Created date time - Datetime refereing when it was created without sub-second decimal precision
* Change checksum (`checksum`) - Optional attribute with a checksum of the metadata change compared with the previous version  

#### Networks

Identify in which networks is the DDO valid. It is an unsorted array including the `chainId` of the network where this DID is available.

#### Example

Here an example of the `meta` section of a DDO:

```json

"meta": {
  "versions": [
    {
      "_id": "dsadsa",
      "tag": "v0.1",
      "createdAt": "2016-02-08T16:02:20Z",
      "checksum": "4329042309a02394032"
    },
    {
      "_id": "ccacd",
      "tag": "v0.2",
      "createdAt": "2018-02-08T16:02:20Z",
      "checksum": "0000010992349"
    }    
  ],
  "networks": [
    { "chainId": 1},
    { "chainId": 23},
    { "chainId": 8001}
  ]
}

```


### Integrity

The Integrity policy for identity and metadata is a sub-specification allowing to validate the
integrity of the Metadata associated to an on-chain object (initially an ASSET).

#### How to compute the integrity checksum

An ASSET in the system is composed by on-chain information maintained by the DLT and off-chain Metadata information
(DDO) stored by the PROVIDER.

Technically a user could update the DDO accessing directly to the off-chain database, modifying attributes
(e.g. License information, description, etc.) relevant to a previous consumption agreement with an user.

The motivation of this is to facilitate a mechanism allowing to the CONSUMER of an object, to validate if the DDO was
modified after a previous agreement.

This hash composing the **integrity checksum** is calculated in the following way:

- The complete content of the `service[index].attributes.main` is serialized in a common string
- The string generated is is Hashed using SHA3-256 algorithm  (You might have to convert the string to bytes first.)
- The hash generated as a result of this process is stored in the `proof.checksum[index].checksum` attribute
- The previous 3 steps are repeated for every individual service include in the `service` array. The hash generated is
always stored in the `proof.checksum` array using as key the `index` of the service computed
- During the serialization process, the objects to serialize (`service[index].attributes.main` are prepared using the
following process:
  * The object is sorted alphabetically independently of the existing nested levels
  * In the JSON generated, all the characters between entries are removed (`\n`, `\t`, `\r`, whitespaces, etc.)
  * As a result must be generated a string of only one line
- After hashing, in the DDO, the checksums should be represented as a hex string beginning with `0x` and ending with
64 hex characters (e.g. `0x52b5c93b82dd9e7ecc3d9fdf4755f7f69a54484941897dc517b4adfe3bbc3377`)
- After generating each individual checksum the complete `proof.checksum` entry is sorted, serialized and hashed as
previously described in the other checksums
- The final hash generated as a result of hashing the checksums (DID CHECKSUM or DID HASH) will be the ID part of the
DID (the string after the prefix `did:nv:`)

Because this DID HASH will be stored on-chain and emitted as an event, a validator could use this information to check
if something changed regarding the initial registration.

#### DID Document Proof

A proof on a DID Document is cryptographic proof of the integrity of the DID Document. In the DID Specification the
`proof` attribute is optional.
We enforce the usage of the `proof` attribute to demonstrate the Owner of an Asset is signing the proof of integrity of
some Asset attributes.
The information to sign by the owner is the **integrity checksum** defined in the above section.

```js
const signature = Sign.signMessage(DID)
```

The DID Document (DDO) SHOULD include the following `proof` information:

* `type` - Type of proof, in our case `"DDOIntegritySignature"`
* `created` - Date and time when the proof was created
* `creator` - Address of the user providing the proof
* `signatureValue` - Result of the signature given by the creator
* `checksum` - Checksums of the individual services included in the DDO
* `inmutableUrl` - Url to a copy of the DDO in an inmutable repository like IPFS, Arweave, etc.

Here is an example `proof` section to add in the DDO:

```json
"proof": {
    "type": "DDOIntegritySignature",
    "created": "2016-02-08T16:02:20Z",
    "creator": "0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e",
    "signatureValue": "0xc9eeb2b8106e…6abfdc5d1192641b",
    "inmutableUrl": "ipfs://QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A",
    "checksum": {
        "0": "0x52b5c93b82dd9e7ecc3d9fdf4755f7f69a54484941897dc517b4adfe3bbc3377",
        "1": "0x999999952b5c93b82dd9e7ecc3d9fdf4755f7f69a54484941897dc517b4adfe3"
    }    
}
```

Using the `proof` information, a third-party with access to the DDO could validate the `creator` signed a specific
integrity checksum referring to an Asset.

#### Length of a DID

The length of a DID must be compliant with the underlying storage layer and function calls. Given that decentralized
virtual machines make use of contract languages such as Solidity and WASM, it is advised to fit the DID in structures
such as `bytes32`.

It would be nice to store the `did:nv:` prefix in those 32 bytes, but that means fewer than 32 bytes would be left for
storing the rest (25 bytes since "did:nv:" takes 7 bytes if using UTF-8). If the rest is a secure hash, then we need a
25-byte secure hash, but secure hashes typically have 28, 32 or more bytes, so that won't work.

Only the hash value _needs_ to be stored, not the `did:nv:` prefix, because it should be clear from context that the
value is a Nevermined DID.

#### How to compute a DID

The DID (`id`) string begins with `did:nv:` and is followed by a string representation of a bytes32.

As is described previously, the DID is calculating doing the Hash (SHA3-256) of the `DDO.proof.checksum` entry

### Registry

To register the different kind of objects can be stored in a **simple** register contract named **DidRegistry**.
This DidRegistry can act as generic/flexible way to associate Resources (ie. Assets) to the public providers resolving
the DDO (and Metadata included) of those resources.

The key of the Identity entity in Nevermined is the **DID**. Each entity will have a unique DID.

To resolve the DDO associated to a Resource (Asset), associated to this Resource DID we have the DID of the Provider
giving access to this Resource. The Provider will have associated a mapping (key - value) of attributes.
One of those can be used to related with the public service returning the DDO of a specific resource.

Applied to Assets, typically are part of a Service Agreement. The suggested approach to implement this is:

* Associate the Resource (ie. Asset DID) to the Provider DID
* Each Provider will have associated a Public URL where the provider is exposing the DDOs

Here is a draft **DidRegistry** implementation:

```solidity
// This piece of code is for reference only!
// Doesn't include any validation, types could be reviewed, enums, etc

contract DidRegistry {

    event DIDAttributeRegistered(
        bytes32 indexed did,
        address indexed owner,
        bytes32 indexed checksum,
        string value,
        uint updatedAt
    );

    mapping(bytes32 => DIDRegister) private didRegister;
    function registerAttribute(bytes32 _did, bytes32 _checksum, string _value) public {
        // ....

        emit DIDAttributeRegistered(_did, msg.sender, _checksum, _value, block.number);
    }

}
```

To register the provider publicly resolving the DDO associated to a DID, we will register an attribute with the public
hostname of that provider:

```solidity
registerAttribute("21tDAKCERh95uGgKbJNHYp", "328aabb94534935864312", "https://myprovider.example.com/ddo")
```

### Resolver

The resolving capabilities will be encapsulated in the Nevermined SDK libraries (JavaScript, Python, etc.), allowing to
resolve a DDO directly speaking with the Smart Contracts.

No third-party requests or API need to be integrated. This allows to have a simple a seam-less integration from the
consumer side.

This is a generic definition of what could be exposed in the client libraries from an API point of view:

```java
function DDO resolve(String did)  {
  // black magic
  return ddo;
}
```

To resolve a DID to the associated DDO, some information is stored on-chain associated to the DID.
In the approach recommended in the scope of this SPEC, this is stored as an attribute associated to the
`DidAttributeRegistered` event.

Because the DID and key are indexed parameters of the event, a consumer in any supported web3 language could filter the
`DidAttributeRegistered` events filtering by the DID and the key named **"service-ddo"**.

A DDO pointing to a DID could be resolved hierarchically using the same mechanism.

This is an example in JavaScript using web3.js:

```js
const event = contractInstance.DidAttributeRegistered(
    { did: '21tDAKCERh95uGgKbJNHYp' },
    { fromBlock: 0, toBlock: 'latest' }
);
```

Here in Python using web3.py:

```python
event = mycontract.events.DidAttributeRegistered.createFilter(fromBlock='latest', argument_filters={'did': '21tDAKCERh95uGgKbJNHYp'})
```

This logic could be encapsulated in the client libraries (**SDK**) in different languages, allowing to the client
applications to get the attributes enabling to resolve the DDO associated to the DID.

Using this information a consumer can query directly to the provider able to return the DDO.


## References

* [DID Spec from the W3C Credentials Community Group](https://w3c-ccg.github.io/did-spec/)
