import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Divider,
} from "@nextui-org/react";
import { useBurnTokens } from "../../../hooks/use-burn.tokens.hook";

function BurnTokens() {
  const { handleAmountChange, handleBurnTokens } = useBurnTokens();

  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Burn Tokens</h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">Welcome to the Burn Tokens</h4>
          <p className="text-md">
            This is a simple contract to test the Next.js and Rainbow SDK
            integration.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {/* <Input
            label="Address"
            placeholder="Enter the address to burn tokens from"
            onChange={handleAddressChange}
          /> */}
          <Input
            label="Amount"
            placeholder="Enter the amount of tokens to burn"
            type="number"
            onChange={handleAmountChange}
          />
        </div>
        <Button
          className="w-full"
          color="primary"
          onClick={handleBurnTokens}
        >
          Burn Tokens
        </Button>
      </CardBody>
    </Card>
  );
}

export default BurnTokens;
