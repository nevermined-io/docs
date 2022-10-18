import React, { useEffect, useState } from 'react';
import AssetRewards from '@nevermined-io/nevermined-sdk-js/dist/node/models/AssetRewards';
import { MetaData, Logger, DDO } from '@nevermined-io/nevermined-sdk-js';
import BigNumber from '@nevermined-io/nevermined-sdk-js/dist/node/utils/BigNumber';
import { Catalog, AssetService, RoyaltyKind, getCurrentAccount, getRoyaltyScheme, Config } from '@nevermined-io/catalog-core';
import { MetaMask } from '@nevermined-io/catalog-providers';
import { UiText, UiLayout, BEM, UiButton } from '@nevermined-io/styles';
import { ethers } from 'ethers';
import styles from './styles.module.scss';
import { appConfig } from '../config';

const b = BEM('demo', styles);

const SDKInstance = () => {
  const { sdk, isLoadingSDK } = Catalog.useNevermined();

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Is Loading SDK:</UiText>
        <UiText className={b('detail')}>{isLoadingSDK ? 'Yes' : 'No'}</UiText>
      </UiLayout>

      <UiLayout>
        <UiText variants={['bold']} className={b('detail')}>Is SDK Avaialable:</UiText>
        <UiText className={b('detail')}>{sdk && Object.keys(sdk).length > 0 ? 'Yes' : 'No'}</UiText>
      </UiLayout>
    </>
  );
};

const SingleAsset = ({ddo}: {ddo: DDO}) => {

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Asset {ddo.id.slice(0, 10)}...:</UiText>
      </UiLayout>
      <UiText className={b('ddo')} variants={['detail']}>{JSON.stringify(ddo)}</UiText>
    </>
  );
};

const constructRewardMap = (
  recipientsData: any[],
  priceWithoutFee: number,
  ownerWalletAddress: string
): Map<string, BigNumber> => {
  const rewardMap: Map<string, BigNumber> = new Map();
  let recipients: any = [];
  if (recipientsData.length === 1 && recipientsData[0].split === 0) {
    recipients = [
      {
        name: ownerWalletAddress,
        split: 100,
        walletAddress: ownerWalletAddress
      }
    ];
  }
  let totalWithoutUser = 0;

  recipients.forEach((recipient: any) => {
    if (recipient.split && recipient.split > 0) {
      const ownSplit = ((priceWithoutFee * recipient.split) / 100).toFixed();
      rewardMap.set(recipient.walletAddress, BigNumber.from(+ownSplit));
      totalWithoutUser += recipient.split;
    }
  });

  if (!rewardMap.has(ownerWalletAddress)) {
    const ownSplitReinforced = +((priceWithoutFee * (100 - totalWithoutUser)) / 100).toFixed();
    rewardMap.set(ownerWalletAddress, BigNumber.from(ownSplitReinforced));
  }

  return rewardMap;
};

const PublishAsset = ({onPublish}: {onPublish: () => void}) => {
  const { assets } = Catalog.useNevermined();

  return (
    <>
      <UiButton type='secondary' onClick={onPublish} disabled={!Object.keys(assets).length}>
        mint
      </UiButton>
    </>
  );
};

const BuyAsset = ({ddo}: {ddo: DDO}) => {
  const { assets, account, isLoadingSDK, subscription, sdk } = Catalog.useNevermined();
  const { walletAddress } = MetaMask.useWallet();
  const [ownNFT1155, setOwnNFT1155] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const [owner, setOwner] = useState('');
  
  useEffect(() => {
    (async () => {
      setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress));
      setOwner(await sdk.assets.owner(ddo.id))
    })()
  }, [walletAddress, isBought])

  const buy = async () => {
    if (!account.isTokenValid()) {
      await account.generateToken();
    }

    const currentAccount = await getCurrentAccount(sdk);
    const response = await subscription.buySubscription(ddo.id, currentAccount, owner, BigNumber.from(1), 1155);
    setIsBought(Boolean(response));
  };

  const download = async () => {
    console.log(ddo.id);
    await assets.downloadNFT(ddo.id);
  };

  return (
    <UiLayout className={b('buy')}>
      {ownNFT1155 ? (
        <UiButton type='secondary' onClick={download} disabled={isLoadingSDK}>
          Download NFT
        </UiButton>
      ) : (
        owner !== walletAddress ?
        <UiButton type='secondary' onClick={buy} disabled={isLoadingSDK}>
          buy
        </UiButton>
        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
      )}
    </UiLayout>
  );
};

const MMWallet = () => {
  const { loginMetamask, walletAddress } = MetaMask.useWallet();
  return (
    <UiLayout>
      <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>
      <UiText>{walletAddress}</UiText>
      {!walletAddress && <UiButton type='secondary' onClick={loginMetamask}>Connect To MM</UiButton>}
    </UiLayout>
  );
};

const App = ({ gatewayAddress }: {gatewayAddress: string}) => {
  const { isLoadingSDK, sdk, account } = Catalog.useNevermined();
  const { publishNFT1155 } = AssetService.useAssetPublish()
  const { walletAddress } = MetaMask.useWallet()
  const [ddo, setDDO] = useState<DDO>({} as DDO)
  Logger.setLevel(3);

  const metadata: MetaData = {
    main: {
      name: '',
      files: [{
        index: 0,
        contentType: 'application/json',
        url: 'https://github.com/nevermined-io/docs/blob/master/docs/architecture/specs/metadata/examples/ddo-example.json'
      }],
      type: 'dataset',
      author: '',
      license: '',
      dateCreated: new Date().toISOString()
    }
  };

  const onPublish = async () => {
    try {
      const publisher = await getCurrentAccount(sdk);
      const rewardsRecipients: any[] = [];
      const assetRewardsMap = constructRewardMap(rewardsRecipients, 100, publisher.getId());
      const assetRewards = new AssetRewards(assetRewardsMap);
      const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
      };

      if (!account.isTokenValid()) {
        await account.generateToken();
      }
      const response = await publishNFT1155({
        gatewayAddress,
        assetRewards,
        metadata,
        nftAmount: BigNumber.from(1),
        preMint: true,
        cap: BigNumber.from(100),
        royaltyAttributes,
        erc20TokenAddress: "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e",
      });

      setDDO(response as DDO);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className={b('container')}>
      <SDKInstance />
      <MMWallet />
      {walletAddress && !ddo.id && (
        <PublishAsset onPublish={onPublish} />
      )}
      {!isLoadingSDK && ddo?.id &&  (
        <>
          <SingleAsset ddo={ddo}/>
          <BuyAsset ddo={ddo}/>
        </>
      )}
      
    </div>
  );
};

export const DemoCatalog = () => {
  const config: Config = appConfig();
  config.web3Provider = typeof window !== 'undefined'
    ? (window as any)?.ethereum
    : new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com');

  return(
    <Catalog.NeverminedProvider config={config} verbose={true}>
      <AssetService.AssetPublishProvider>
        <MetaMask.WalletProvider
          correctNetworkId="0x13881"
          nodeUri=""
        >
          <App gatewayAddress={config.gatewayAddress}/>
        </MetaMask.WalletProvider>
      </AssetService.AssetPublishProvider>
    </Catalog.NeverminedProvider>
  )
};
