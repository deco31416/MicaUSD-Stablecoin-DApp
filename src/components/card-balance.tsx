import { Card, CardHeader, CardBody, Divider, Input } from "@nextui-org/react";

interface CardBalanceProps {
  title: string;
  symbol: string;
  balance: string;
}
function CardBalance({ balance, symbol, title }: CardBalanceProps) {
  return (
    <Card>
      <CardHeader>
        <h5 className="text-xl font-bold">{title}</h5>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col px-4 py-8 gap-4">
        <Input label={symbol} value={balance} disabled />
      </CardBody>
    </Card>
  );
}

export default CardBalance;
