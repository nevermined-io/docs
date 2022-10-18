---
sidebar_position: 1
title: Getting started
description: Nevermined Catalog Core
---

# Getting started

**Catalog core** includes all the Nevermined functionalities splitted in the `Catalog provider` and `Services`.

### Catalog provider

Catalog provider loads the **Nevermined sdk** in the context of a **React application** and provides some parametes
and objects to handle it:

* account - contains all the functionalities to handle authentications and collections belonged to an account
* assets - contains all the functionalities to handle assets for example get, mint, transfer, order or download asset
* subscribe - contains all the functionalities to handle events
* subscription - contains all the functionalities to handle asset subscritions by payment

### Services

The Services includes custom react hooks and providers to cover specific scenarios avoiding to the developer thinking in the logic to implement it and make possible for them focus just in the view in a react application. Currently the services is splitted in 4 groups:

* AccountService - custom hooks and provider to handle user accounts and profiles
* AssetService - custom hooks to handle assets
* EventService - custom hooks to operate with events
* SubscribeService - custom hooks to handle event listeners

## Pre-requisites

The Nevermined Components Catalog is a package built with React and Typescript.
It requires [Node JS](https://nodejs.org/) v14 or higher. You can find online instructions about [How to install Node JS](https://nodejs.dev/en/learn/how-to-install-nodejs/).

## How to install ?

```bash
yarn add @nevermined-io/catalog-core
or
npm install --save @nevermined-io/catalog-core
```

## How to integrate ?

```typescript
import { Catalog, AssetService } from '@nevermined-io/components-catalog';
import App from 'app';
import { ethers } from 'ethers'
import { Config } from '@nevermined-io/nevermined-sdk-js';

const appConfig: Config = {
  web3Provider: typeof window !== 'undefined' ? window.ethereum : new ethers.providers.JsonRpcProvider(nodeUri),
  nodeUri,
  gatewayUri,
  faucetUri,
  verbose,
  gatewayAddress,
  secretStoreUri,
  graphHttpUri,
  marketplaceAuthToken,
  marketplaceUri,
  artifactsFolder
};

ReactDOM.render(
  <div>
    <Catalog.NeverminedProvider config={appConfig}>
      <App />
    </Catalog.NeverminedProvider>
  </div>,
  document.getElementById('root') as HTMLElement
);
```

## How to use ?

```typescript
const SingleAsset = () => {
  const did = 'did:nv:f8a00...';
  const assetData: AssetState = AssetService.useAsset(did);

  return (
    <>
      <div>Asset {did}:</div>
      <div>{JSON.stringify(assetData.ddo)}</div>
    </>
  );
};

```

For a full [example](https://github.com/nevermined-io/components-catalog/tree/main/example).
