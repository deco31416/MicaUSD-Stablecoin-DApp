import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { useWeb3Config } from "../../../hooks/use-web3-config.hook";
import { useAccount, useReadContract } from "wagmi";

function YourWalletInfo() {
  const { address } = useAccount();
  const { tokenContract } = useWeb3Config();
  const { data = false } = useReadContract({
    abi: tokenContract.abi,
    address: tokenContract.address,
    functionName: "isBlacklisted",
    args: [address as `0x${string}`],
    query: {
      // each 30 seconds
      refetchInterval: 30000,
      enabled: !!address,
    },
  });

  return (
    <Card>
      <CardHeader>
        <h5 className="text-xl font-bold">Your Wallet Info</h5>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col px-4 py-4 gap-4">
        <ul className="flex flex-col gap-2">
          <li className="flex flex-row justify-between">
            <span className="font-bold">Your wallet is Blacklisted:</span>{" "}
            {data ? "Yes" : "No"}
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default YourWalletInfo;
