import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
} from "wagmi";
import { useWeb3Config } from "./use-web3-config.hook";
import { useEffect, useState, useCallback } from "react";
import { parseUnits } from "viem";

export function useBurnTokens() {
  //   const [address, setAddress] = useState<`0x${string}`>();
  const [amount, setAmount] = useState("");
  const [hash, setHash] = useState<`0x${string}`>();
  const { custodyContract, tokenContract } = useWeb3Config();
  const { isDisconnected, address } = useAccount();
  const { writeContractAsync: tokenWriteAsync } = useWriteContract();
  const { writeContractAsync: custodyWriteAsync } = useWriteContract();
  const { data } = useWaitForTransactionReceipt({ hash });

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    if (data?.status === "success") {
      handleBurnTokens();
    }

    return () => {
      setHash(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.status]);

  const handleRequestBurnTokens = useCallback(async () => {
    if (isDisconnected) {
      alert("Please connect your wallet");
      return;
    }

    if (!(tokenContract && custodyContract && address)) {
      return;
    }

    try {
      const amountInWei = parseUnits(amount, 6);
      const receipt = await tokenWriteAsync({
        abi: tokenContract.abi,
        address: tokenContract.address,
        functionName: "approve",
        args: [custodyContract.address, amountInWei],
      });
      setHash(receipt);
    } catch (error) {
      console.error(error);
    }
  }, [
    amount,
    custodyContract,
    tokenContract,
    tokenWriteAsync,
    address,
    isDisconnected,
  ]);

  const handleBurnTokens = useCallback(async () => {
    if (!(custodyContract && address)) {
      return;
    }

    try {
      await custodyWriteAsync({
        abi: custodyContract.abi,
        address: custodyContract.address,
        functionName: "burnTokens",
        args: [address, parseUnits(amount, 6)],
      });
    } catch (error) {
      console.error(error);
    }
  }, [address, custodyContract, amount, custodyWriteAsync]);

  return {
    handleRequestBurnTokens,
    handleBurnTokens,
    handleAmountChange,
  };
}
