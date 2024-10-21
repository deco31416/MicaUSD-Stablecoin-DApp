import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { formatUnits } from "viem";
import { Currency } from "../../../interfaces/currency";
import { formatNumber } from "../../../utils/format-number";

interface MarketPriceProps {
  totalSupply: bigint;
  currency?: Currency;
}
function MarketPrice({ totalSupply, currency }: MarketPriceProps) {
  const price = currency?.price || 0;

  return (
    <Card>
      <CardHeader>
        <h5 className="text-xl font-bold">Market Price</h5>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col px-4 py-4">
        <ul className="flex flex-col gap-2">
          <li className="flex flex-row justify-between">
            <span className="font-bold">Price:</span> $ {formatNumber(price)}
          </li>
          <li className="flex flex-row justify-between">
            <span className="font-bold">Market Cap:</span>${" "}
            {formatNumber(price * +formatUnits(totalSupply, 6))}
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default MarketPrice;
