import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import { useMintTokens } from "../../../hooks/use-mint-tokens.hook";

function MintTokens() {
  const { handleAmountChange, handleMintTokens } = useMintTokens();
  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Mint Tokens</h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">Welcome to the Mint Tokens</h4>
          <p className="text-md">
            This is a simple contract to test the Next.js and Rainbow SDK
            integration.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {/* <Input
            label="Address"
            placeholder="Enter the address to mint tokens to"
            onChange={handleAddressChange}
          /> */}
          <Input
            label="Amount"
            placeholder="Enter the amount of tokens to mint"
            type="number"
            onChange={handleAmountChange}
          />
        </div>
        <Button className="w-full" color="primary" onClick={handleMintTokens}>
          Mint Tokens
        </Button>
      </CardBody>
    </Card>
  );
}

export default MintTokens;
