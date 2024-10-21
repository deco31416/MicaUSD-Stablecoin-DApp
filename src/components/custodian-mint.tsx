import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Divider,
} from "@nextui-org/react";
import { useCustodianMint } from "../hooks/use-custodian-mint.hook";

function CustodianMint() {
  const { handleAmountChange, handleMintSupply } = useCustodianMint();
  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Custodian Mint</h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">Welcome to the Custodian Mint</h4>
          <p className="text-md">
            This is a simple contract to test the Next.js and Rainbow SDK
            integration.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            label="Amount"
            placeholder="Enter the amount of tokens to mint"
            type="number"
            onChange={handleAmountChange}
          />
        </div>
        <Button className="w-full" color="primary" onClick={handleMintSupply}>
          Mint Supply
        </Button>
      </CardBody>
    </Card>
  );
}

export default CustodianMint;
