import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { useWeb3Config } from "../../../hooks/use-web3-config.hook";
import { useReadContract } from "wagmi";

function VerifiedWallets() {
  const { tokenContract } = useWeb3Config();
  const { data: walletInWhitelisted = 0n } = useReadContract({
    abi: tokenContract.abi,
    address: tokenContract.address,
    functionName: "WalletInWhitelist",
    query: {
      // each 30 seconds
      refetchInterval: 30000,
    },
  });

  return (
    <Card>
      <CardHeader>
        <h5 className="text-xl font-bold">Verified Wallets</h5>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col px-4 py-4">
        <ul className="flex flex-col gap-2">
          <li className="flex flex-row justify-between">
            <span className="font-bold">Wallet In Whitelisted:</span>{" "}
            {walletInWhitelisted?.toString()}
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default VerifiedWallets;
