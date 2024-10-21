import { useChainId } from "wagmi";
import { bsc, bscTestnet } from "../web3/configs/chains";
import { testToken, testTokenMainnet } from "../web3/configs/tokens";
import {
  CustodybscAbi,
  CustodybscAddressMainnet,
  CustodybscAddressTestnet,
} from "../web3/abis/custody-bsc.abi";
import {
  TokenbscAbi,
  TokenbscAddressMainnet,
  TokenbscAddressTestnet,
} from "../web3/abis/token-bsc.abi"; 

export function useWeb3Config() {
  const chainId = useChainId();
  const chain = [bsc, bscTestnet ].find((c) => c.id === chainId);

  const mainnetApi = "https://api.bscscan.com/api";
  const testnetApi = "https://api-testnet.bscscan.com/api";

  return {
    chain,
    api: chain?.testnet ? testnetApi : mainnetApi,
    tokenContract: {
      address: chain?.testnet
        ? TokenbscAddressTestnet
        : (TokenbscAddressMainnet as `0x${string}`),
      abi: TokenbscAbi,
    },
    custodyContract: {
      address: chain?.testnet
        ? CustodybscAddressTestnet
        : (CustodybscAddressMainnet as `0x${string}`),
      abi: CustodybscAbi,
    },
    tokens: {
      testToken: chain?.testnet ? testToken : testTokenMainnet,
      mainToken: chain?.testnet ? testTokenMainnet : testToken,
    },
  };
}
