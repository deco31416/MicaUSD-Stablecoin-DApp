import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { formatUnits } from "viem";
import { formatNumber } from "../../../utils/format-number";

interface SupplyDetailsProps {
  initialSupply: bigint;
  totalMintedTokensUser: bigint;
  totalBurnedTokens: bigint;
  totalSupply: bigint;
}
function SupplyDetails({
  initialSupply,
  totalBurnedTokens,
  totalMintedTokensUser,
  totalSupply,
}: SupplyDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <h5 className="text-xl font-bold">Sypply Details</h5>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col px-4 py-4">
        <ul className="flex flex-col gap-2">
          <li className="flex flex-row justify-between">
            <span className="font-bold">Initial Supply:</span>{" "}
            {formatNumber(+formatUnits(initialSupply, 6))}
          </li>
          <li className="flex flex-row justify-between">
            <span className="font-bold">Max Supply:</span> ∞
          </li>
          <li className="flex flex-row justify-between">
            <span className="font-bold">Total Minted Tokens:</span>{" "}
            {formatNumber(+formatUnits(totalMintedTokensUser, 6))}
          </li>
          <li className="flex flex-row justify-between">
            <span className="font-bold">Total Burned Tokens:</span> -{" "}
            {formatNumber(+formatUnits(totalBurnedTokens, 6))}
          </li>
          <Divider />
          <li className="flex flex-row justify-between">
            <span className="font-bold">Total Supply:</span>{" "}
            {formatNumber(+formatUnits(totalSupply, 6))}
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default SupplyDetails;
