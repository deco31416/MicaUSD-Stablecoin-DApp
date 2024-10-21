import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import { useSupplyCustodianWrite } from "../../../hooks/use-supply-custodian.write";

function SupplyWithdrawGas() {
  const { handleWithdrawGas } = useSupplyCustodianWrite();

  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Withdraw Gas</h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold">Welcome to the Withdraw Gas</h4>
          <p className="text-md">
            This is a simple contract to test the Next.js and Rainbow SDK
            integration.
          </p>
        </div>
        <Button onClick={handleWithdrawGas} color="primary">
          Withdraw Gas
        </Button>
      </CardBody>
    </Card>
  );
}

export default SupplyWithdrawGas;
