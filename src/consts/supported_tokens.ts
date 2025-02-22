import type { Chain } from "thirdweb";
import { bsc } from "./chains";

export type Token = {
  tokenAddress: string;
  symbol: string;
  icon: string;
};

export type SupportedTokens = {
  chain: Chain;
  tokens: Token[];
};

/**
 * By default you create listings with the payment currency in the native token of the network (eth, avax, matic etc.)
 *
 * If you want to allow users to transact using different ERC20 tokens, you can add them to the config below
 * Keep in mind this is for front-end usage. Make sure your marketplace v3 contracts accept the ERC20s
 * check that in https://thirdweb.com/<chain-id>/<marketplace-v3-address>/permissions -> Asset
 * By default the Marketplace V3 contract supports any asset (token)
 */
export const SUPPORTED_TOKENS: SupportedTokens[] = [
  {
    chain: bsc,
    tokens: [
      {
        tokenAddress: "0x092aC429b9c3450c9909433eB0662c3b7c13cF9A",
        symbol: "GCC",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0x82dcec6aa3c8bfe2c96d40d8805ee0da15708643",
        symbol: "USDT",
        icon: "/erc20-icons/usdt.png",
      },
      // Add more ERC20 here...
    ],
  },

  

  
];

export const NATIVE_TOKEN_ICON_MAP: { [key in Chain["id"]]: string } = {
  1: "/native-token-icons/GCC.png",
  [bsc.id]: "/native-token-icons/bsc.png",
  
};
