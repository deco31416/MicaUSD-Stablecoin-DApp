import { useAccount, useBalance } from "wagmi";
import { Token } from "../web3/types";

export function useGetBalance(token?: Token) {
  const { address } = useAccount();
  const result = useBalance({
    address,
    ...(token && { token: token.contractAddress }),
  });

  return result;
}
