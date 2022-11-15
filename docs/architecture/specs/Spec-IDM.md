---
sidebar_position: 11
description: Identity management with on-chain access control
---

# Identity management with on-chain access control

```
shortname:      IDM
name:           Identity management with on-chain access control
type:           Draft
status:         Valid
version:        0.1
editor:         Aitor Argomaniz <aitor@nevermined.io>
contributors:
```


This SPEC introduces a pattern for integrating independent Domain Controller
system to manage the identity authorization with the Nevermined **Service
Execution Agreements (SEAs)** (also called "Service Agreements" or "Agreements")
 as contracts between parties interacting in a transaction.

## Introduction

Corporate environments utilize complex identity management and access control
via Domain Controllers (i.e Active Directory). These solutions allow to
authenticate and authorize corporate users of a specific domain or network.
Implementations like Active Directory enable the management of individual or
group permissions within the organization assigning security policies.
At the same time, decentralized ecosystems allow the interaction and
collaboration between different users part of the network using Decentralized
Ledger Technologies (DLT) as source of truth of the shared network.
In the data ecosystems where different organizations are members of the same
network or consortia, it’s a challenge to handle how the identity is managed
within the organization (centralized) and how these different organizations can
interact with each other re-using their existing Domain Controllers without
moving all the existing identity management rules to a new silo or environment
(centralized or decentralized).

The intention of this document is to detail how independent organizations can
integrate their existing corporate Domain Controllers in a Decentralized data
ecosystem allowing the decentralized access control without replicating the
existing organization permissions to the decentralized network.

### Motivation

The main motivations of the solution described are:

* Understand how in a decentralized environment, different organizations with
  totally independent (and probably incompatible) Domain controllers can manage
  the permissions of the their decentralized assets (subjects) without
  replicating the permission policies in a new solution
* Understand what are the different actors involved and how these actors
  interact
* Identify the main interfaces required for the interactions
* Identify the credentials generation and management
* Understand how the credentials issued can map to a DLT user identity via keys
* Facilitate the interoperability between actors in the system

## Concepts

### Specifications

Nevermined Identity Management solution is designed based on the
[Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) &
[Decentralized Identifiers](https://w3c.github.io/did-core/) specifications  as
building block in the design of the solution. So some of the terms and concepts
used are based on these specifications.

### Actors

The actors identified in the solution described are:

* **Holder** - An actor possessing one or more credentials. This user presents
  these credentials for identification purposes
* **Issuer** - The actors asserting the claims about different organization
  subjects and creating the credentials for that claims and transmitting to the
  Holder
* **Verifier** - The actors receiving credential presentations from Holders for
  further verification
* **Verifiable data registry** - The actors associated with the organizations
  managing the internal user and groups permissions

![W3C Actors in Verifiable Credentials](images/idm/w3c_verifiable_credentials_actors.png)

## Use Case

### Preconditions

The specification and architecture designed is based in some environment
preconditions. These preconditions need to be taken into account in order to
adapt the solution designed to the environment where this solution is going to
be used. The main environment characteristics are:

* Multiple and independent organizations participate in a decentralized data
  ecosystem
* Each organization have independent Identity Services (like Active Directory)
  to manage the internal authentication and authorization of their users and
  groups
* Users belonging to the organizations need to make use of the decentralized
  ecosystem authenticating via their Identity Services
* Different organizations could use totally independent and different
  infrastructure and technical solutions
* The rules governing the authorization of users within the organization are
  kept in the Domain Controllers. It’s not recommended to replicate that
  information in a different centralized or decentralized repository
* Users belonging to an organization don’t want to add a new mechanism to
  authenticate. They are already using their single sign-on (SSO) solution
  within the organization
* DLT networks use credentials for identifying, authenticate and authorize users
  in a decentralized environment
* Users need to make a friction-less interaction with the decentralized
  applications connected to the ecosystem without knowing the underlying
  credentials management (DLT wallets)


### Requirements

The main requirements used to designed the solution are:

* Multiple and independent organizations need to manage the access control to
  the assets registered in a decentralized ecosystem
* A Subject manager or Admin wants to manage the access control to the subjects
  he/she controls using the Domain Controller solution used in the organization
* The Admin needs to manage the subjects access control via users and groups
* The users of a organization need to operate in the DLT network to interact
  with the subjects registered in that network
* The users of the decentralized ecosystem are identified in that network via
  credentials based in the Wallet technologies used in the DLT network
* The users need have a mapping between their organization identity and their
  decentralized ecosystem identity
* The Users or Holders keep their identity that only belongs to them. They need
  to present the credentials issued by the organizations they belong to verify
  their identity.
* The users can belong to one or many groups in one or many different
  organizations
* A user of the organization A wants to give permissions of a user or group of
  the organization B for making use of a subject or asset registered in a
  decentralized environment
* Users managing permissions on these decentralized assets should be able to add
  and revoke permissions
* The schemas and data existing in the individual deployments of the Identity
  Services shouldn't be replicated in the decentralized ecosystem. The source of
   truth are the Identity Services instances
* Information kept about the users and groups in the DLT network must be minimal
  and never store PI. Ideally only ids and hashes
* The decentralized ecosystem register assets and the conditions for who can
  interact and what is possible to do with these assets is kept on-chain
* Public information about users like users public keys should be available.
  User information should be resolvable via decentralized identifiers


## Architecture

###  Identity Management

The proposed solution involves the deployment of a component called
**Identity NODE**. Each Domain Controller in the Ecosystem needs to provide
one Identity NODE in charge of bridge the internals domain authorization
policies with the rest of the world. So it’s assumed for each independent Domain
 Controller available in the network, there should be at least one Identity
 NODE resolving for the Domain Controller policies.

 ![W3C Actors in Verifiable Credentials](images/idm/identity_management_with_onchain_acl.png)

In this scenario each Domain Controller keeps control of the identities of his
domain. The only actions that are done by the Domain Controllers are:

* They identify users as in part of the domain
* They identify users as part of a group within the domain
* They are network isolated and respond to authorization queries to the
  associated Identity NODE

#### Verifiable Credentials associated with Nevermined assets

In Nevermined an Asset can represent any kind of subject registered in the
network. Typically assets represent datasets, algorithms, services, etc.
Any registered asset within Nevermined always has associated a Decentralized
Identifier (DID) that can be resolved into a DID Object (DDO).

Typically a DDO includes metadata information describing the asset and the
services that are offered by that asset to the rest of the network (access,
  computation, etc.). In addition to this, a DDO can include a portion
  describing the users and/or groups that can interact with the asset.
  This is modeled in the DDO in the shape of W3C Verifiable Credentials.

Here you can see an example of a fragment of a DDO including the credentials of
an asset for different subjects:

```json
{
	"@context": "https://www.w3.org/2018/credentials/v1",
	"type": ["access"],
	"issuer": "0x610D9314EDF2ced7681BA1633C33fdb8cF365a12",
	"issuanceDate": "2019-01-01T19:73:24Z",
	"credentialSubject": [{
		"id": "0x1234",
		"type": "User"
	}, {
		"id": "0x5678",
		"type": "User"
	}, {
		"id": "Group XXX",
		"type": "Group"
	}]
}
```

In the above verifiable credential fragment we are associating access
permissions to any holder of the credentials able to authorize the users
“0x1234” or “0x5678” or as part of the group “Group XXX” of the domain.

### Json Web Tokens (JWT)

JSON Web Tokens (JWT) is a compact URL-safe means of representing claims to be
transferred between two parties. The claims in a JSON Web Tokens are encoded as
a JavaScript Object Notation (JSON) object that is used as the payload of a JSON
 Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption
 (JWE) structure, enabling the claims to be digitally signed or MACed and/or
 encrypted.

JSON Web Token (JWT) is an open standard [RFC 7519](https://tools.ietf.org/html/rfc7519)
that defines a compact and self-contained way for securely transmitting
information between parties as a JSON Object. This information can be verified
and trusted because it is digitally signed. JSON Web Tokens can be signed using
a secret (with HMAC algorithm) or a public/private key pair using RSA.

In the architecture design we use JWT for encapsulating the messages between the
 different parties.
JSON Web Tokens consist of three parts separated by dots (.), which are:

* Header
* Payload
* Signature

Therefore, a JWT typically looks like the following:
```
Xxxxx.yyyyy.zzzzz
```

In this architecture document, all the JWT messages sent from a client to a
server are using the HTTP Authorization header with the Bearer scheme. Example:

```http
HTTP GET /api/v1/node/resource

Authorization: Bearer eyJhbGciOiJIUzI1NiIXVCJ9TJV...r7E20RMHrHDcEfxjoYZgeFONFh7HgQ
```

#### JWT Structure

The header contains the metadata for the token and at a minimal contains the
type of the signature and/or encryption algorithm:

* "typ" - the type of the token, which is JWT
* "alg" - the hashing algorithm such as ES256. We are using ECDSA with SHA256.
* "cty" - Header Parameter defined by JSON Web Signature and JSON Web Encryption
 is used by this specification to convey structural information about the JWT.

In our case the header is gonna look like this:
```json
{
  "typ": "JWT",
  "alg": "ES256",
  "cty": "arbitrary"
}
```

#### JWT Payload

The payload contains the claims. Claims are statements about an entity
(typically, the user) and additional metadata. There are three types of claims:

* Reserved claims: These are a set of predefined claims, which are not mandatory
  but recommended, thought to provide a set of useful, interoperable claims.
* Public claims: These can be defined at will by those using JWTs. But to avoid
  collisions they should be defined in the IANA JSON Web Token Registry or be
  defined as a URI that contains a collision resistant namespace.
* Private claims: These are the custom claims created to share information
  between parties that agree on using them.

In our case the payload will have the following attributes:

* `iss` - Issuer. address of the holder
* `sub` - Subject, id of the service agreement
* `aud` - Audience, address of the node

Here an example of the payload:

```json
{
  "iss": "0x123456",
  "sub": "did:nv:abcde",
  "aud": "0xffffff"
}
```

### Identity Nodes

In this architecture the Identity Node is in charge of:

* Expose to the network the interface allowing to ask for the details of a
  Domain Controller.
* Resolve a Domain Controller DID into a DDO describing it. Each Domain
  Controller should have associated a unique Decentralized Identifier (DID) that
  resolves into URL where is kept the Decentralized Document (DDO) describing
  the Domain Controller.
* Verify the identity of a Holder. When a Holder presents a digital identity it
  authenticates the Holder. Typically this is happening verifying the signature
  given by the Holder for a specific Subject
* Check the authorization of a Holder over a Subject. When a Holder claims
  authorization for a Subject it integrates with the Domain Controller for
  verifying the authorization of that Holder.
* Generates, Signs and Issues credentials
* Can present some emitted credentials on-chain


### Interactions between the actors

The following flow describes the interaction between actors allowing a Holder to
 present credentials related to a subject authorized by a Domain Controller.

 ![Identity Management Flow](images/idm/identity_management_flow.png)

The different steps are:

1. The Holder presents a credentials request related to a subject
  ```http
   HTTP GET /api/v1/node/services/oauth2/token

   Authorization: Bearer eyJhbGciOiJIUzI1NiIXVCJ9TJV...r7E20RMHrHDcEfxjoYZgeFONFh7HgQ
  ```

  Where the JWT payload is:
  ```json
   {
     "iss": "0x123456", // address of the holder
     "sub": "0xabcde", // id of the service agreement
     "aud": "0xffffff" // address of the Nevermined Node
   }
  ```

2. The Node decodes the JWT message, and validates the identity of the Holder
   checking the signature and the issuer address provided
3. The Node queries the domain controller checking the access permissions of
   the Holder for a specific Subject. The identity Node could integrate
   different kinds of backends like Active Directory, LDAP, databases, etc.
   The verifiable credentials can include user or group types of
   credentials subjects. The identity Node must validate if the user just
   authenticated fulfill any of the following:
   - If is a user part of the Domain Controller
   - If the user is part of any of the credential groups within the Domain

4. If the Domain Controller validates the Holder has access permissions, the
   Identity Node will generate and sign a credential
5. The credential is issued to the Holder in the JWT format included in the
   `access_token` response parameter:

  ```json
   {
    "access_token": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIweDEyMzQ1NiIsInN1YiI6ImRpZDpudjphYmNkZSIsImF1ZCI6IjB4ZmZmZmZmIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyNTAwMjJ9.fiOSfeQwSiDi0ECFuDrHmhx8BHTHMl6MiyiJgJ6BIntjHvcFDFjPwtSYJrhYpeTcBPQ1FO5-fT-n4fQXBF92Vw"
   }
  ```

   Which decoded has the following payload:

  ```json
   {
     "iss": "0x123456",
     "sub": "0xabcde",
     "aud": "0xffffff",
     "iat": 1516239022,
     "exp": 1516250022
   }
   ```
   In this case it includes the “iat” (when the token was emitted) and “exp”
  (when the token is expiring).

6. The Holder can present the credentials to a Smart Contract or Optionally the
   Identity Node could present the credentials to a Smart Contract on behalf
   of the Holder.


### Node JWT implementation

The Node implements the [RFC6749: The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749) framework using [JWTs as Authorization Grants](https://tools.ietf.org/html/rfc7523) and [JWTs as Access Tokens](https://tools.ietf.org/html/draft-ietf-oauth-access-token-jwt-10)

#### JWT Authorization Grants

The claims that should be contained in a JWT Authorization Grant depend on the action that we want to perform on the Node. The claims validation follow [RFC7523](https://tools.ietf.org/html/rfc7523#section-3). Overall the claim options look like this:

**Registered name claims**

```json
{
  "iss": {"essential": true},
  "sub": {"essential": false},
  "aud": {
    "essential": true,
      "values": [
        "/api/v1/node/services/access",
        "/api/v1/node/services/compute",
        "/api/v1/node/services/download",
        "/api/v1/node/services/execute"
      ],
    },
    "exp": {"essential": true},
}
```

- `iss`: Is the ethereum address of the consumer
- `sub`: (optional): Is the Service Agreement Id if applicable
- `aud`: Is the path of the endpoint being called
- `exp`: Is the expiration time

**Private name claims**

These claims are specific to Nevermined

```json
{
  "did": {"essential": false},
  "execution_id": {"essential": false}
}
```

- `did` (optional): Is the DID of the related asset
- `execution_id` (optional): Is the execution id of the related compute job


To request a JWT access token a client needs to make a request to the token endpoint (`/api/v1/services/oauth2/token`) by sendinf the following parameters using `application/x-www-form-urlencoded` format as per [RFC6749](https://tools.ietf.org/html/rfc6749#section-4.1.3) with:

- `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer`: The grant type as per [RFC7523](https://tools.ietf.org/html/rfc7523#section-2.1)
- `assertion=<jwt grant token>`: The assertion with a single JWT grant token as per [RFC7523](https://tools.ietf.org/html/rfc7523#section-2.1)

For examples JWT Grant tokens check [Examples of JWT Grant Tokens](#examples-of-jwt-grant-tokens) in the [Annex](#annex).

### Adding and Revoking Permissions

The administrator of the Domain typically uses the Domain Controller as a unique
 source of truth for the access control of users and groups. Because the
 identity Node asks the Domain Controller for the belonging of users and
 groups as part of the domain, any modification of the permissions in the Domain
  Controller policies will be extended automatically to the new authorization
  queries responded by the Identity Node.

For the cases where an access token was already given to a user, this will be
valid during the lifetime of the credentials assigned to the user. During that
period of time, the credentials will be valid for access to the resources
granted. Because of that it is recommended to configure the identity Node to
not emit credentials with very long expiration time.

To complement this, the Identity Node could integrate a cache system to keep
track of the credentials granted during their life-cycle, and expose a method
for revoking credentials immediately. In that scenario if a Domain Account needs
 to revoke some credentials related to a Holder and a Subject, it should send a
 request to the Identity Node using the following format:


```http
 HTTP DELETE /api/v1/node/services/domain/credentials

 Authorization: Bearer eyJhbGciOiJIUzI1NiIXVCJ9TJV...r7E20RMHrHDcEfxjoYZgeFONFh7HgQ
```

 Where the JWT payload is:
```json
 {
   "iss": "0x123456", // address of the domain controller
   "sub": "0xabcd", // id of the service agreement
   "aud": "0xffffff" // address of the Node
 }
```

For this request the Identity Node needs to authenticate the Domain Account
via the signature. If all the validations are correct the Identity Node needs
 to send a revoke request to the Smart Contract keeping the authorization
 permissions on-chain.

This scenario is valid when the Identity Node integrates a DLT network to
backup the authorization permissions. If the Identity Node performs the
validation for each request, this revocation won’t be necessary because the next
 authorization request via the Node will query the Domain Controller that
 should have already revoked the authorization permissions.



## Annex

### Serializing DID Documents

Having a standard JSON document or subtract, the common operations used to
serialize fragments of DID Documents is as follows:

* The object is sorted alphabetically by key, of the existing nested levels
* In the JSON generated, all the characters between entries are removed
  (\n, \t, \r, whitespaces, etc.)
* As a result must be generated a string of only one line
* After serializing a DID Document or a fragment into a string line, typically
  it’s necessary to hash that line to include as part of a different document or
   adding it on-chain. The common method used to do that is using the SHA3-256
   (Keccak-256) algorithm (you might have to convert the string to bytes first.)
   , making sure that final hash generated is prefixed by `0x`.


### Examples of JWT Grant Tokens

**`/api/v1/node/services/access`**

```json
// header
{
  "alg": "ES256K",
  "typ": "JWT"
}

// assertion
{
  "iss": "0x068Ed00cF0441e4829D9784fCBe7b9e26D4BD8d0",
  "aud": "/api/v1/node/services/access",
  "sub": "0xf527a6bbc35547f782dda34d64bb9070e743531107994899b1f97d4451aacbe1",
  "iat": 1607967375,
  "exp": 1607970975,
  "did": "did:nv:5c19aaf5f7c12ef0a9d898d5a89ca5428f3d0315b0f0a36f5b5d097166e53788"
}
```

**`/api/v1/node/services/compute`**

```json
// header
{
  "alg": "ES256K",
  "typ": "JWT"
}

// assertion
{
  "iss": "0x068Ed00cF0441e4829D9784fCBe7b9e26D4BD8d0",
  "aud": "/api/v1/node/services/compute",
  "sub": "0x3228c55d6e444cdc87bd5425896d5cdfa1e42e0734d04866a6c4386ef4f20144",
  "iat": 1607968935,
  "exp": 1607972535,
  "execution_id": "nevermined-compute-82v5j"
}
```

**`/api/v1/node/services/download`**
```json
// header
{
  "alg": "ES256K",
  "typ": "JWT"
}

// assertion
{
  "iss": "0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e",
  "aud": "/api/v1/node/services/download",
  "iat": 1607969122,
  "exp": 1607972722,
  "did": "did:nv:2379d3e2d03f25b8e5fb2fae6e6adeb45cd7674d20905fc172d84915ff68cc73"
}
```

**`/api/v1/node/services/execute`**
```json
// header
{
  "alg": "ES256K",
  "typ": "JWT"
}

// assertion
{
  "iss": "0x068Ed00cF0441e4829D9784fCBe7b9e26D4BD8d0",
  "aud": "/api/v1/node/services/execute",
  "sub": "0x715954fd8a9b48968983ae9b9813e169b4be0d861ccb4bbd8489298cda59c6a9",
  "iat": 1607969247,
  "exp": 1607972847,
  "did": "did:nv:e689ed382b15e190a5937f5c070843cce249a692ff09931d570e288bd91e5b81"
}
```