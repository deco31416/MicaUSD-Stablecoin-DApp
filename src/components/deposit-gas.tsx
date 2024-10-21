import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Divider,
} from "@nextui-org/react";
import { useState } from "react";
// import { useTokenContractWrite } from "../../../hooks/use-token-contract-write";

function DepositGas() {
  const [amount, setAmount] = useState<string>("");
//   const { handleDeposit, handleReceiveMoney } = useTokenContractWrite();

  const handleSubmitDeposit = () => {
    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    // handleDeposit(amount);
  };

  const handleSubmitReceiveMoney = () => {
    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    // handleReceiveMoney(amount);
  };

  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Deposit Gas</h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">Welcome to the Deposit Gas</h4>
          <p className="text-md">
            This is a simple contract to test the Next.js and Rainbow SDK
            integration.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            label="Amount"
            placeholder="Enter the amount of tokens to deposit"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button
            className="w-full"
            color="primary"
            onClick={handleSubmitDeposit}
          >
            Deposit Gas
          </Button>
          <Button
            className="w-full"
            color="primary"
            onClick={handleSubmitReceiveMoney}
          >
            Receive Money
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default DepositGas;
