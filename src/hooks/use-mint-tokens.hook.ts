import {
  useWriteContract,
  useAccount,
  useWaitForTransactionReceipt,
} from "wagmi";
import { useWeb3Config } from "./use-web3-config.hook";
import { useState, useCallback, useEffect } from "react";
import { parseUnits } from "viem";

export function useMintTokens() {
  // const [address, setAddress] = useState<`0x${string}`>();
  const [amount, setAmount] = useState("");
  const [hash, setHash] = useState<`0x${string}`>();
  const { isDisconnected, address } = useAccount();
  const { custodyContract, tokenContract } = useWeb3Config();
  const { writeContractAsync: tokenWriteAsync } = useWriteContract();
  const { writeContractAsync: custodyWriteAsync } = useWriteContract();
  const { data } = useWaitForTransactionReceipt({ hash });

  // const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAddress(event.target.value as `0x${string}`);
  // };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    if (data?.status === "success") {
      handleMintTokens();
    }

    return () => {
      setHash(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.status]);

  const handleRequestMintTokens = useCallback(async () => {
    if (isDisconnected) {
      alert("Please connect your wallet");
      return;
    }

    if (!(address && tokenContract)) {
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
    address,
    amount,
    isDisconnected,
    tokenContract,
    tokenWriteAsync,
    custodyContract,
  ]);

  const handleMintTokens = useCallback(async () => {
    if (!(custodyContract && address)) {
      return;
    }

    try {
      const amountInWei = parseUnits(amount, 6);
      await custodyWriteAsync({
        abi: custodyContract.abi,
        address: custodyContract.address,
        functionName: "mintTokens",
        args: [address, amountInWei],
      });
    } catch (error) {
      console.error(error);
    }
  }, [address, amount, custodyContract, custodyWriteAsync]);

  return {
    // handleAddressChange,
    handleAmountChange,
    handleRequestMintTokens,
    handleMintTokens,
  };
}
