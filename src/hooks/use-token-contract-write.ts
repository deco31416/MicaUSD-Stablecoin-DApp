import { useWriteContract, useAccount } from "wagmi";
import { useWeb3Config } from "./use-web3-config.hook";
import { useCallback } from "react";
import { parseUnits } from "viem";

export function useTokenContractWrite() {
  const { tokenContract } = useWeb3Config();
  const { isDisconnected } = useAccount();
  const { writeContractAsync: tokenWriteAsync } = useWriteContract();

  const handleSetWalletSupplyCustodian = useCallback(
    async (address: `0x${string}`) => {
      if (isDisconnected) {
        alert("Please connect your wallet");
        return;
      }

      if (!tokenContract || !address) {
        return;
      }

      try {
        await tokenWriteAsync({
          abi: tokenContract.abi,
          address: tokenContract.address,
          functionName: "setWalletSupplyCustodian",
          args: [address],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [tokenContract, tokenWriteAsync, isDisconnected]
  );

  const handleSetSupplyCustodian = useCallback(
    async (address: `0x${string}`) => {
      if (isDisconnected) {
        alert("Please connect your wallet");
        return;
      }

      if (!tokenContract || !address) {
        return;
      }

      try {
        await tokenWriteAsync({
          abi: tokenContract.abi,
          address: tokenContract.address,
          functionName: "setSupplyCustodian",
          args: [address],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [tokenContract, tokenWriteAsync, isDisconnected]
  );

  const handlePause = useCallback(async () => {
    if (isDisconnected) {
      alert("Please connect your wallet");
      return;
    }

    if (!tokenContract) {
      return;
    }

    try {
      await tokenWriteAsync({
        abi: tokenContract.abi,
        address: tokenContract.address,
        functionName: "pause",
        args: [],
      });
    } catch (error) {
      console.error(error);
    }
  }, [tokenContract, tokenWriteAsync, isDisconnected]);

  const handleUnpause = useCallback(async () => {
    if (isDisconnected) {
      alert("Please connect your wallet");
      return;
    }

    if (!tokenContract) {
      return;
    }

    try {
      await tokenWriteAsync({
        abi: tokenContract.abi,
        address: tokenContract.address,
        functionName: "unpause",
        args: [],
      });
    } catch (error) {
      console.error(error);
    }
  }, [tokenContract, tokenWriteAsync, isDisconnected]);

  const handleAddToBlackList = useCallback(
    async (address: `0x${string}`) => {
      if (isDisconnected) {
        alert("Please connect your wallet");
        return;
      }

      if (!tokenContract || !address) {
        return;
      }

      try {
        await tokenWriteAsync({
          abi: tokenContract.abi,
          address: tokenContract.address,
          functionName: "addToBlacklist",
          args: [address],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [tokenContract, tokenWriteAsync, isDisconnected]
  );

  const handleRemoveFromBlacklist = useCallback(
    async (address: `0x${string}`) => {
      if (isDisconnected) {
        alert("Please connect your wallet");
        return;
      }

      if (!tokenContract || !address) {
        return;
      }

      try {
        await tokenWriteAsync({
          abi: tokenContract.abi,
          address: tokenContract.address,
          functionName: "removeFromBlacklist",
          args: [address],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [tokenContract, tokenWriteAsync, isDisconnected]
  );

  const handleAddToWhiteList = useCallback(
    async (address: `0x${string}`) => {
      if (isDisconnected) {
        alert("Please connect your wallet");
        return;
      }

      if (!tokenContract || !address) {
        return;
      }

      try {
        await tokenWriteAsync({
          abi: tokenContract.abi,
          address: tokenContract.address,
          functionName: "addToWhitelist",
          args: [address],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [tokenContract, tokenWriteAsync, isDisconnected]
  );

  const handleRemoveFromWhitelist = useCallback(
    async (address: `0x${string}`) => {
      if (isDisconnected) {
        alert("Please connect your wallet");
        return;
      }

      if (!tokenContract || !address) {
        return;
      }

      try {
        await tokenWriteAsync({
          abi: tokenContract.abi,
          address: tokenContract.address,
          functionName: "removeFromWhitelist",
          args: [address],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [tokenContract, tokenWriteAsync, isDisconnected]
  );

  const handleMintSupply = useCallback(
    async (amount: string, address: `0x${string}`) => {
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
          functionName: "MintSupply",
          args: [address, amountInWei],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [tokenContract, tokenWriteAsync, isDisconnected]
  );

  // const handleWithdrawGas = useCallback(async () => {
  //   if (isDisconnected) {
  //     alert("Please connect your wallet");
  //     return;
  //   }

  //   if (!tokenContract) {
  //     return;
  //   }

  //   try {
  //     await tokenWriteAsync({
  //       abi: tokenContract.abi,
  //       address: tokenContract.address,
  //       functionName: "withdraw4",
  //       args: [],
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [tokenContract, tokenWriteAsync, isDisconnected]);

  const handleWithdrawSpecificToken = useCallback(
    async (addressContract: `0x${string}`, amount: string) => {
      if (isDisconnected) {
        alert("Please connect your wallet");
        return;
      }

      if (!tokenContract) {
        return;
      }

      const amountInWei = parseUnits(amount, 18);
      console.log(amountInWei.toString());

      try {
        await tokenWriteAsync({
          abi: tokenContract.abi,
          address: tokenContract.address,
          functionName: "withdrawTokenToOwner",
          args: [addressContract],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [tokenContract, tokenWriteAsync, isDisconnected]
  );

  // const handleReceiveMoney = useCallback(
  //   async (amount: string) => {
  //     if (isDisconnected) {
  //       alert("Please connect your wallet");
  //       return;
  //     }

  //     if (!tokenContract) {
  //       return;
  //     }

  //     const amountInWei = parseUnits(amount, 18);

  //     try {
  //       await tokenWriteAsync({
  //         abi: tokenContract.abi,
  //         address: tokenContract.address,
  //         functionName: "de",
  //         args: [],
  //         value: amountInWei,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  //   [tokenContract, tokenWriteAsync, isDisconnected]
  // );

  // const handleDeposit = useCallback(
  //   async (amount: string) => {
  //     if (isDisconnected) {
  //       alert("Please connect your wallet");
  //       return;
  //     }

  //     if (!tokenContract) {
  //       return;
  //     }

  //     const amountInWei = parseUnits(amount, 18);

  //     try {
  //       await tokenWriteAsync({
  //         abi: tokenContract.abi,
  //         address: tokenContract.address,
  //         functionName: "depositGas",
  //         args: [],
  //         value: amountInWei,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  //   [tokenContract, tokenWriteAsync, isDisconnected]
  // );

  const handleBurnSupply = useCallback(
    async (amount: string) => {
      if (isDisconnected) {
        alert("Please connect your wallet");
        return;
      }

      if (!tokenContract) {
        return;
      }

      const amountInWei = parseUnits(amount, 6);

      try {
        await tokenWriteAsync({
          abi: tokenContract.abi,
          address: tokenContract.address,
          functionName: "BurnSupply",
          args: [amountInWei],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [tokenContract, tokenWriteAsync, isDisconnected]
  );

  const handleTransferOwnership = useCallback(
    async (newOwner: `0x${string}`) => {
      if (isDisconnected) {
        alert("Please connect your wallet");
        return;
      }

      if (!tokenContract) {
        return;
      }

      try {
        await tokenWriteAsync({
          abi: tokenContract.abi,
          address: tokenContract.address,
          functionName: "transferOwnership",
          args: [newOwner],
        });
      } catch (error) {
        console.error(error);
      }
    },
    [tokenContract, tokenWriteAsync, isDisconnected]
  );

  return {
    handleSetWalletSupplyCustodian,
    handleSetSupplyCustodian,
    handlePause,
    handleUnpause,
    handleAddToBlackList,
    handleRemoveFromBlacklist,
    handleAddToWhiteList,
    handleRemoveFromWhitelist,
    handleMintSupply,
    // handleWithdrawGas,
    handleWithdrawSpecificToken,
    // handleReceiveMoney,
    // handleDeposit,
    handleBurnSupply,
    handleTransferOwnership,
  };
}
