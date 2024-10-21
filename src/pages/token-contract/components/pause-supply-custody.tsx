import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import { useTokenContractWrite } from "../../../hooks/use-token-contract-write";

function PauseSupplyCustody() {
  const { handlePause, handleUnpause } = useTokenContractWrite();

  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Pause Supply Custody</h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">
            Welcome to the Pause Supply Custody
          </h4>
          <p className="text-md">
            This is a simple contract to test the Next.js and Rainbow SDK
            integration.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="w-full" color="primary" onClick={handlePause}>
            Pause Supply Custody
          </Button>
          <Button className="w-full" color="primary" onClick={handleUnpause}>
            Unpause Supply Custody
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default PauseSupplyCustody;
