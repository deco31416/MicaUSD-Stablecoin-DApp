import { useWriteContract, useAccount } from "wagmi";
import { useWeb3Config } from "./use-web3-config.hook";
import { useCallback } from "react";
import { parseUnits } from "viem";

export function useSupplyCustodianWrite() {
  const { custodyContract } = useWeb3Config();
  const { isDisconnected } = useAccount();
  const { writeContractAsync: supplyCustodianWriteAsync } = useWriteContract();

  const handleWithdrawGas = useCallback(async () => {
    if (isDisconnected) {
      alert("Please connect your wallet");
      return;
    }

    if (!custodyContract) {
      return;
    }

    try {
      await supplyCustodianWriteAsync({
        abi: custodyContract.abi,
        address: custodyContract.address,
        functionName: "withdrawAllGas",
        args: [],
      });
    } catch (error) {
      console.error(error);
    }
  }, [custodyContract, supplyCustodianWriteAsync, isDisconnected]);

  const handleWithdrawSpecificToken = useCallback(
    async (tokenAddress: `0x${string}`, amount: string) => {
      if (isDisconnected) {
        alert("Please connect your wallet");
        return;
      }

      if (!custodyContract || !tokenAddress) {
        return;
      }

      const parsedAmount = parseUnits(amount, 18);

      console.log("parsedAmount", parsedAmount);

      try {
        await supplyCustodianWriteAsync({
          abi: custodyContract.abi,
          address: custodyContract.address,
          functionName: "withdrawTokenToOwner",
          args: [tokenAddress],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [custodyContract, supplyCustodianWriteAsync, isDisconnected]
  );

  return {
    handleWithdrawGas,
    handleWithdrawSpecificToken,
  };
}
