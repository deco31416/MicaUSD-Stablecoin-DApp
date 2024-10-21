import {
  //   Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import { useState } from "react";
import { useWeb3Config } from "../../../hooks/use-web3-config.hook";
import { useReadContract } from "wagmi";

function CheckWalletInBlacklist() {
  const [address, setAddress] = useState<`0x${string}`>();
  const { tokenContract } = useWeb3Config();
  const { data = false, isSuccess } = useReadContract({
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

  //   const handleCheck = () => {
  //     if (!address) {
  //       alert("Please enter a valid address");
  //       return;
  //     }

  //     refetch();
  //   };

  return (
    <Card>
      <CardHeader>
        <h5 className="text-xl font-bold">Check Wallet in Blacklist</h5>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col px-4 py-4 gap-4">
        <div className="flex flex-col gap-4">
          <h6 className="font-bold">Do you want to check another address?</h6>
          <Input
            label="Address"
            placeholder="0x"
            onChange={(e) => setAddress(e.target.value as `0x${string}`)}
          />
          {isSuccess ? (
            data ? (
              <span className="text-red-500">This wallet is blacklisted</span>
            ) : (
              <span className="text-green-500">
                This wallet is not blacklisted
              </span>
            )
          ) : null}
          {/* <Button color="primary" onClick={handleCheck}>
            Check
          </Button> */}
        </div>
      </CardBody>
    </Card>
  );
}

export default CheckWalletInBlacklist;
