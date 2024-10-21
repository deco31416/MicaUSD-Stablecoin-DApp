import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Divider,
} from "@nextui-org/react";
import { useSupplyCustodianWrite } from "../../../hooks/use-supply-custodian.write";
import { useState } from "react";

function SupplyWithdrawSpecificToken() {
  const [address, setAddress] = useState<`0x${string}`>();
  const [amount, setAmount] = useState("");
  const { handleWithdrawSpecificToken } = useSupplyCustodianWrite();

  const handleSubmit = () => {
    if (!address) {
      alert("Please enter an address");
      return;
    }

    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    handleWithdrawSpecificToken(address, amount);
  };

  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Withdraw Specific Token</h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">
            Welcome to the Withdraw Specific Token
          </h4>
          <p className="text-md">
            This is a simple contract to test the Next.js and Rainbow SDK
            integration.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            label="Token Contract"
            placeholder="Enter the token Contract to withdraw"
            onChange={(e) => setAddress(e.target.value as `0x${string}`)}
          />
          <Input
            label="Amount"
            placeholder="Enter the amount to withdraw"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button className="w-full" color="primary" onClick={handleSubmit}>
          Withdraw Specific Token
        </Button>
      </CardBody>
    </Card>
  );
}

export default SupplyWithdrawSpecificToken;
