---
sidebar_position: 1
title: Getting started
description: Nevermined Catalog Providers API Reference
---

# Getting started

The Catalog exposes a package facilitating the interaction with Web3 providers like Metamask. You can see more about in the [documentation](https://docs.nevermined.io/docs/catalog/intro)

## Providers supported

* Metamask
* WalletConnect
* Coinbase Wallet

## Pre-requisites

The Nevermined providers is a package built with React and Typescript.
It requires [Node JS](https://nodejs.org/) v14 or higher. You can find online instructions about [How to install Node JS](https://nodejs.dev/en/learn/how-to-install-nodejs/).

## How to install ?

```
yarn add @nevermined-io/catalog-providers
or
npm install --save @nevermined-io/catalog-providers
```

## How to integrate ?

```typescript
import { WalletProvider, getClient, useWallet } from "@nevermined-io/catalog-providers";
import App from "app";

ReactDOM.render(
    <div>
        <WalletProvider
            client={getClient()}
        >
            <App />
        </WalletProvider>
    </div>,
    document.getElementById("root") as HTMLElement
);
```

## How to use ?

```typescript
const ConnectToMetaMask = () => {
    const { login, walletAddress, getConnectors } = useWallet();

    return (
        <>
            <div> {walletAddress}</div>
            {!walletAddress && (
                <button onClick={() => login(getConnectors()[0])}>Connect To MM</button>
            )}
        </>
    );
};
```

Here you can find [here a complete example](https://docs.nevermined.io/docs/catalog/example)
