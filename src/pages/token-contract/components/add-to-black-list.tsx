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

function AddToBlackList() {
  const [address, setAddress] = useState<`0x${string}`>();
  const { handleAddToBlackList } = useTokenContractWrite();

  const handleSubmit = () => {
    if (!address) {
      alert("Please enter an address");
      return;
    }

    handleAddToBlackList(address);
  };

  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Add to Black List</h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">
            Welcome to the Add to Black List
          </h4>
          <p className="text-md">
            This is a simple contract to test the Next.js and Rainbow SDK
            integration.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            label="Address"
            placeholder="Enter the address to add to the black list"
            onChange={(e) => setAddress(e.target.value as `0x${string}`)}
          />
        </div>
        <Button className="w-full" color="primary" onClick={handleSubmit}>
          Add to Black List
        </Button>
      </CardBody>
    </Card>
  );
}

export default AddToBlackList;
