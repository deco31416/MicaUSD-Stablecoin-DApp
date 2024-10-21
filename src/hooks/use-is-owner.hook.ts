import { useAccount, useReadContract } from "wagmi";
import { useWeb3Config } from "./use-web3-config.hook";

export function useIsOwner() {
  const { tokenContract, custodyContract } = useWeb3Config();
  const { address } = useAccount();

  const { data: ownerToken } = useReadContract({
    abi: tokenContract.abi,
    address: tokenContract.address,
    functionName: "owner",
    query: {
      // each 30 seconds
      refetchInterval: 30000,
    },
  });

  const { data: ownerSupply } = useReadContract({
    abi: custodyContract.abi,
    address: custodyContract.address,
    functionName: "owner",
    query: {
      // each 30 seconds
      refetchInterval: 30000,
    },
  });

  const isOwnerToken = address ? ownerToken === address : false;
  const isOwnerSupply = address ? ownerSupply === address : false;

  return { isOwnerToken, isOwnerSupply };
}
