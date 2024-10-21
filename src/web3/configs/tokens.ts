import { Token } from "../types";
import { bsc, bscTestnet } from "./chains";

export const testToken: Token = {
  contractAddress: "0x0D990f4D877cF586EE27738D421889e9aC108b8e",
  symbol: "Pruebas-T",
  name: "Pruebas",
  decimals: 6,
  logoUrl:
    "https://res.cloudinary.com/dtwcswdd8/image/upload/v1729440270/mica-usd.png",
  networkId: bscTestnet.id,
  blockExplorerUrl: "https://testnet.bscscan.com/",
};

export const testTokenMainnet: Token = {
  contractAddress: "0x43940C2626f3227D3400fc522F51d9E8221C727E",
  symbol: "Pruebas-T",
  name: "Pruebas",
  decimals: 6,
  logoUrl:
    "https://res.cloudinary.com/dtwcswdd8/image/upload/v1729440270/mica-usd.png",
  networkId: bsc.id,
  blockExplorerUrl: "https://bscscan.com/",
};
