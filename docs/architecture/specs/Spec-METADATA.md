---
sidebar_position: 2
description: Metadata Ontology
---

# Metadata Ontology

```
shortname:      META
name:           Metadata Ontology
type:           Standard
status:         Valid
version:        0.2
editor:         Aitor Argomaniz <aitor@nevermined.io>
contributors:   
```

## Motivation

Every asset (dataset, algorithm) in Nevermined has an associated Decentralized Identifier (DID) and DID document / DID
Descriptor Object (DDO). Because assets without proper descriptive metadata have poor visibility and discoverability.

See [DID SPEC](Spec-DID.md) for information about the overall structure of Nevermined DDOs and DIDs.This OEP is about one
particular part of Nevermined DDOs: the asset metadata, a JSON object with information about the asset.

This SPEC defines the assets metadata ontology, i.e. the schema for the asset metadata. It's based on the public
schema.org [DataSet schema](https://schema.org/Dataset).

This SPEC doesn't detail the exact method of registering assets on-chain or storing DDOs.

The main motivations of this SPEC are to:

* Specify the common attributes that MUST be included in any asset metadata stored in Nevermined networks
* Normalize the attributes to use in any curation process, to provide a common structure to sort and filter the DDOs
* Identify the recommended additional attributes that SHOULD be included in a DDO to facilitate asset search
* Provide an example of an asset metadata object and additional links for reference

## Life Cycle of Metadata

### Local Metadata

Metadata is first created by the publisher of the asset. The publisher has knowledge of the file URLs, and they are
stored in plaintext in the `files` object. This initial metadata is the _local metadata_.

### Remote Metadata

A publisher publishes (registers) an asset using Nevermined SDKs, which might be running on their local machine or
remotely. When they do, the local metadata is passed to the SDK, which makes some changes and additions in the metadata,
 puts it into a DDO, and sends that DDO to a metadata API.

The Metadata API may also make some changes and additions to the metadata, such as the `datePublished` or parts of the
`curation` object. The metadata that finally gets stored by the Metadata API is the _remote metadata_.

> A marketplace can and might also act as a publisher. [SPEC ACCESS](Spec-ACCESS.md) describes the publishing flow in
more detail.

## Metadata Attributes

An asset is the representation of different type of resources in Nevermined. Typically can asset could be one of the
following asset types:

* _Dataset_. An asset representing a dataset or data resource. It could be for example a CSV file or a multiple JPG
files.
* _Algorithm_. An asset representing a piece of software. It could be a python script using tensorflow, a spark job,
etc.

Each kind of asset require a different subset of metadata attributes. The distinction between the type of asset
(dataset, algorithm) is given by the attribute `DDO.services["metadata"].main.type`

A `metadata` object has the following attributes, all of which are objects.

Attribute                   | Required | Description
----------------------------|----------|----------
**`main`**                  | Yes      | Main attributes used to calculate the service checksum 
**`curation`**              | (remote) | Curation attributes
**`additionalInformation`** | No       | Optional attributes
**`encryptedFiles`**        | (remote) | Encrypted string of the `attributes.main.files` object.
**`encryptedServices`**      | (remote) | Encrypted string of the `attributes.main.services` object.

The `main`, `curation` and `additionalInformation` attributes are independent of the asset type, all assets have those
metadata sections.

### Main Attributes

**This list of attributes can't be modified after creation**, because these are considered as the metadata essence of
the asset created. This information is used to calculate the unique checksum of the asset. If any change would be
necessary in the following attributes, it would be necessary to create a new asset derived from the existing one.

The `main` object has the following attributes, not all are required. Some are required by only the metadata store
(_remote_) and others are mandatory for _local_ metadata only. If required or not by both, they are marked with _Yes/No_
 in the _Required_ column.

Attribute       |   Type        |   Required    | Description
----------------|---------------|---------------|----------------------
**`name`**        | Text          | Yes           | Descriptive name or title of the asset.
**`type`**        | Text          | Yes            | Type of the asset. Helps to filter by the type of asset. It could be for example ("dataset", "algorithm").
**`dateCreated`** | DateTime      | Yes   | The date on which the asset was created by the originator. ISO 8601 format, Coordinated Universal Time, e.g. `2019-01-31T08:38:32Z`.
**`datePublished`** | DateTime      | (remote)   | The date on which the asset DDO is registered into the metadata store (Metadata API)
**`author`**      | Text          | Yes           | Name of the entity generating this data (e.g. Tfl, Disney Corp, etc.).
**`license`**     | Text          | Yes           | Short name referencing the license of the asset (e.g. Public Domain, CC-0, CC-BY, No License Specified, etc. ). If it's not specified, the following value will be added: "No License Specified".
**`price`**       | String        | Yes           | Price of the asset. It must be an integer encoded as a string, e.g. `"123000000000000000000"`.
**`files`**       | Array of files object | Yes     | Array of `File` objects including the encrypted file urls. Further metadata about each file is stored, see [File Attributes](#file-attributes)


#### File Attributes

File attributes are a subset of the `main` section.

A file object has the following attributes, with the details necessary to consume and validate the data.

| Attribute         | Required | Description                                         |
| ----------------- | -------- | --------------------------------------------------- |
| **`url`**           | (local)  | Content URL. Omitted from the remote metadata. Supports `http(s)://` and `ipfs://` URLs. |
| **`name`**          | no       | File name. |
| **`index`**         | yes      | Index number starting from 0 of the file. |
| **`contentType`**   | yes      | File format. |
| **`checksum`**      | no       | Checksum of the file using your preferred format (i.e. MD5). Format specified in `checksumType`. If it's not provided can't be validated if the file was not modified after registering. |
| **`checksumType`**  | no       | Format of the provided checksum. Can vary according to server (i.e Amazon vs. Azure) |
| **`contentLength`** | no       | Size of the file in bytes.                        |
| **`encoding`**      | no       | File encoding (e.g. UTF-8). |
| **`compression`**   | no       | File compression (e.g. no, gzip, bzip2, etc). |
| **`encrypted`**     | no       | Boolean. Is the file encrypted? If is not set is assumed the file is not encrypted |
| **`encryptionMode`**| no       | Encryption mode used. Just valid if `encrypted=true`. Currently only `dtp` is implemented |
| **`resourceId`**    | no       | Remote identifier of the file in the external provider. It is typically the remote id in the cloud provider. |
| **`attributes`**    | no       | Key-Value hash map with additional attributes describing the asset file. It could include details like the Amazon S3 bucket, region, etc. |
| **`ercType`**       | no       | If the service refers to a NFT (ERC-721 or ERC-1155), this will store a `721` or `1155` values |

### Additional Attributes

All the additional information will be stored as part of the `additionalInformation` section.

| Attribute         | Type | Required                                         |
| ----------------- | -------- | --------------------------------------------------- |
| **`categories`**  | Array of Text | No            | Optional array of categories associated to the asset. |
| **`tags`**        | Array of Text | No            | Array of keywords or tags used to describe this content. Empty by default. |
| **`description`** | Text          | No            | Details of what the resource is. For a dataset, this attribute explains what the data represents and what it can be used for. |
| **`copyrightHolder`**| Text       | No            | The party holding the legal copyright. Empty by default. |
| **`workExample`** | Text          | No            | Example of the concept of this asset. This example is part of the metadata, not an external link. |
| **`links`**       | Array of Link | No            | Mapping of links for data samples, or links to find out more information. Links may be to either a URL or another Asset. We expect marketplaces to converge on agreements of typical formats for linked data: Nevermined itself does not mandate any specific formats as these requirements are likely to be domain-specific. The links array can be an empty array, but if there is a link object in it, then an "url" is required in that link object. |
| **`poseidonHash`**  | Text        | No            | For DTP: Poseidon hash of the key. |
| **`providerKey.x`**  | Text       | No            | For DTP: The Babyjubjub public key of the provider. |
| **`providerKey.y`**  | Text       | No            | For DTP: The Babyjubjub public key of the provider. |


#### Other Suggested Additional Attributes

These are examples of attributes that can enhance the discoverability of a resource:

| Attribute             | Description                                                                                                                  |
| -                     | -                                                                                                                            |
| **`sla`**               | Service Level Agreement.                                                                                                      |
| **`industry`**          |                                                                                                                              |
| **`updateFrequency`**   | An indication of update latency - i.e. How often are updates expected (seldom, annually, quarterly, etc.), or is the resource static that is never expected to get updated. |
| **`termsOfService`**    |                                                                                                                              |
| **`privacy`**           |                                                                                                                              |
| **`keyword`**           | A list of keywords/tags describing a dataset.                                                                                 |
| **`structuredMarkup`** | A link to machine-readable structured markup (such as ttl/json-ld/rdf) describing the dataset.                                |

The publisher of a DDO MAY add additional attributes or change the above object definition.

### Curation Attributes

A `curation` object has the following attributes.

Attribute       |   Type           |   Required    | Description
----------------|------------------|---------------|----------------------
**`rating`**      | Number (decimal) | Yes           | Decimal value between 0 and 1. 0 is the default value.
**`numVotes`**    | Integer          | Yes           | Number of votes. 0 is the default value.
**`schema`**      | Text             | No            | Schema applied to calculate the rating.
**`isListed`**    | Boolean          | No            | Flag unsuitable content. False by default. If it's true, the content must not be returned.

## Example of Local Metadata

```json
{  
  "main": {
    "name": "Madrid Weather forecast",
    "dateCreated": "2019-05-16T12:36:14.535Z",
    "author": "Norwegian Meteorological Institute",
    "type": "dataset",
    "license": "Public Domain",
    "price": "123000000000000000000",
    "files": [  
      {
        "index": 0,
        "url": "https://example-url.net/weather/forecast/madrid/350750305731.xml",
        "contentLength": "0",
        "contentType": "text/xml",
        "compression": "none"
      }
    ]
  },
  "additionalInformation":{  
    "description": "Weather forecast of Europe/Madrid in XML format",
    "copyrightHolder": "Norwegian Meteorological Institute",
    "categories": ["Other"],
    "links": [],
    "tags": [],
    "updateFrequency": null,
    "structuredMarkup": []
  }
}
```

## Example of Remote Metadata

Similarly, this is how the metadata file would look as a response to querying Metadata API (remote metadata).
Note that `url` is removed from all objects in the `files` array, and `encryptedFiles` & `curation` are added.

```json
{  
  "service": [
    {  
      "index": 0,
      "serviceEndpoint": "http://metadata:5000/api/v1/metadata/assets/ddo/{did}",
      "immutableServiceEndpoint": "cid://QmVT3wfySvZJqAvkBCyxoz3EvD3yeLqf3cvAssFDpFFXNm",
      "type": "metadata",
      "attributes": {  
        "main": {  
          "type": "dataset",
          "name": "Madrid Weather forecast",
          "dateCreated": "2019-05-16T12:36:14.535Z",
          "author": "Norwegian Meteorological Institute",
          "license": "Public Domain",
          "price": "123000000000000000000",
          "files":[  
            {  
              "contentLength": "0",
              "contentType": "text/xml",
              "compression": "none",
              "index": 0
            }
          ],          
          "datePublished": "2019-05-16T12:41:01Z"
        },
        "encryptedFiles": "0x7a0d1c66ae861…df43aa9",
        "curation":{  
          "rating": 1,
          "numVotes": 7,
          "schema": "BINARY",
          "isListed": true
        },
        "additionalInformation": {  
          "description": "Weather forecast of Europe/Madrid in XML format",
          "copyrightHolder": "Norwegian Meteorological Institute",
          "categories": ["Other"],
          "links": [],
          "tags": [],
          "updateFrequency": null,
          "structuredMarkup": []
        }
      }
    }
  ]
}
```

### Specific attributes per asset type

Depending on the asset type (dataset, algorithm), there are different metadata attributes supported:

#### Algorithm attributes

An asset of type `algorithm` has the following additional attributes under `main.algorithm`:

| Attribute           |   Type                |   Required  | Description                                         |
| ------------------- | ----------------------| ----------- |--------------------------------------------------- |
| **`language`**      | `string`              | no          | Language used to implement the software |
| **`format`**        | `string`              | no          | Packaging format of the software. |
| **`version`**       | `string`              | no          | Version of the software. |
| **`container`**     | `Object`              | yes         | Object describing the Docker container image. |

The `container` object has the following attributes:

| Attribute           |   Type   | Required  | Description                                         |
| ------------------- | -------- | --------- | --------------------------------------------------- |
| **`entrypoint`**    | `string` | yes       | The command to execute, or script to run inside the Docker image. |
| **`image`**         | `string` | yes       | Name of the Docker image. |
| **`tag`**           | `string` | yes       | Tag of the Docker image. |

```json
{
      "index": 0,
      "serviceEndpoint": "http://localhost:5000/api/v1/metadata/assets/ddo/{did}",
      "immutableServiceEndpoint": "cid://QmVT3wfySvZJqAvkBCyxoz3EvD3yeLqf3cvAssFDpFFXNm",
      "type": "metadata",
      "attributes": {
        "main": {
          "author": "John Doe",
          "dateCreated": "2019-02-08T08:13:49Z",
          "license": "CC-BY",
          "name": "My super algorithm",
          "price": "1",
          "type": "algorithm",
          "algorithm": {
            "language": "scala",
            "format": "docker-image",
            "version": "0.1",
            "container": {
              "entrypoint": "node $ALGO",
              "image": "node",
              "tag": "10"
            }
          },
          "files": [
            {
              "name": "build_model",
              "url": "https://raw.githubusercontent.com/keyko-io/test-algorithm/master/javascript/algo.js",
              "index": 0,
              "checksum": "efb2c764274b745f5fc37f97c6b0e761",
              "contentLength": "4535431",
              "contentType": "text/plain",
              "encoding": "UTF-8",
              "compression": "zip"
            }
          ]
        },
        "additionalInformation": {
          "description": "Workflow to aggregate weather information",
          "tags": [
            "weather",
            "uk",
            "2011",
            "workflow",
            "aggregation"
          ],
          "copyrightHolder": "John Doe"
        }
      }
    }


```

## References

[Schema.org](https://schema.org/) is a collaborative, community activity with a mission to create, maintain, and promote
 schemas for structured data on the Internet. Data types use the [Schema.org primitive data types](https://schema.org/DataType).

* [Schema.org: DataSet](https://schema.org/Dataset)
* [Schema.org: FileSize](https://schema.org/fileSize)
* [Common license types for datasets](https://help.data.world/hc/en-us/articles/115006114287-Common-license-types-for-datasets)
