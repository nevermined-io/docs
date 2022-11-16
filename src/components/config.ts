import { AuthToken } from "@nevermined-io/catalog-core"

export const appConfig = () => ({
  nodeUri: "https://matic-mumbai.chainstacklabs.com",
  gatewayUri: "https://node.mumbai.public.nevermined.network",
  verbose: 2,
  gatewayAddress: "0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc",
  graphHttpUri: "https://api.thegraph.com/subgraphs/name/nevermined-io/public",
  marketplaceAuthToken:
    AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token,
  marketplaceUri: "https://marketplace-api.mumbai.public.nevermined.network",
  artifactsFolder: `${location.protocol}//${location.host}/contracts`,
  newGateway: true,
})
