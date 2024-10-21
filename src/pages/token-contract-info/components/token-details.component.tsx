import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Token } from "../../../web3/types";

interface TokenDetailsProps {
  token: Token;
  paused: boolean;
}

function TokenDetails({ paused, token }: TokenDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <h5 className="text-xl font-bold">Token Details</h5>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col px-4 py-4">
        <ul className="flex flex-col gap-2">
          <li className="flex flex-row justify-between">
            <span className="font-bold">Name:</span> {token.name}
          </li>
          <li className="flex flex-row justify-between">
            <span className="font-bold">Symbol:</span> {token.symbol}
          </li>
          <li className="flex flex-row justify-between">
            <span className="font-bold">Decimals:</span>
            {token.decimals}
          </li>
          <li className="flex flex-row justify-between">
            <span className="font-bold">Is Paused:</span>
            {paused?.toString()}
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default TokenDetails;
