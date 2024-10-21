import { useWriteContract, useAccount } from "wagmi";
import { useWeb3Config } from "./use-web3-config.hook";
import { useState, useCallback } from "react";
import { parseUnits } from "viem";

export function useCustodianMint() {
  const [amount, setAmount] = useState("");
  const { tokenContract } = useWeb3Config();
  const { isDisconnected, address } = useAccount();
  const { writeContractAsync: tokenWriteAsync } = useWriteContract();

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleMintSupply = useCallback(async () => {
    if (isDisconnected) {
      alert("Please connect your wallet");
      return;
    }

    if (!tokenContract || !address) {
      return;
    }

    try {
      const amountInWei = parseUnits(amount, 6);
      await tokenWriteAsync({
        abi: tokenContract.abi,
        address: tokenContract.address,
        functionName: "CustodianMint",
        args: [address, amountInWei],
      });
    } catch (error) {
      console.error(error);
    }
  }, [amount, tokenContract, address, tokenWriteAsync, isDisconnected]);

  return {
    handleAmountChange,
    handleMintSupply,
  };
}
