import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Divider,
} from "@nextui-org/react";
import { useState } from "react";
import { useTokenContractWrite } from "../../../hooks/use-token-contract-write";

function MintSupply() {
  const [amount, setAmount] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const { handleMintSupply } = useTokenContractWrite();

  const handleSubmit = () => {
    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    handleMintSupply(amount, address as `0x${string}`);
  };

  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Mint Supply</h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">Welcome to the Mint Supply</h4>
          <p className="text-md">
            This is a simple contract to test the Next.js and Rainbow SDK
            integration.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            label="Address"
            placeholder="Enter the address to mint tokens"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            label="Amount"
            placeholder="Enter the amount of tokens to mint"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button className="w-full" color="primary" onClick={handleSubmit}>
          Mint Supply
        </Button>
      </CardBody>
    </Card>
  );
}

export default MintSupply;
