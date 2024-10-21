import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { useReadContract } from "wagmi";
import { useWeb3Config } from "../../../hooks/use-web3-config.hook";

function BlockedWallets() {
  const { tokenContract } = useWeb3Config();
  const { data: walletInBlacklisted = 0n } = useReadContract({
    abi: tokenContract.abi,
    address: tokenContract.address,
    functionName: "WalletInBlacklisted",
    query: {
      // each 30 seconds
      refetchInterval: 30000,
    },
  });

  return (
    <Card>
      <CardHeader>
        <h5 className="text-xl font-bold">Blocked Wallets</h5>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col px-4 py-4">
        <ul className="flex flex-col gap-2">
          <li className="flex flex-row justify-between">
            <span className="font-bold">Wallet In Blacklisted:</span>{" "}
            {walletInBlacklisted.toString()}
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default BlockedWallets;
