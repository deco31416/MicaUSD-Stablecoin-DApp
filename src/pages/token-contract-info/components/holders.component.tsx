import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { useWeb3Config } from "../../../hooks/use-web3-config.hook";
import { useQuery } from "@tanstack/react-query";

function Holders() {
  const { api, tokenContract } = useWeb3Config();
  const handleFetch = async () => {
    const res = await fetch(
      `${api}/v2/tokens/${tokenContract.address}/holders`
    );

    return res.json();
  };

  const { data } = useQuery({
    queryKey: ["holders"],
    queryFn: handleFetch,
  });

  return (
    <Card>
      <CardHeader>
        <h5 className="text-xl font-bold">Holders</h5>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col px-4 py-4">
        <ul className="flex flex-col gap-2">
          <li className="flex flex-row justify-between">
            <span className="font-bold">Total Holders:</span>{" "}
            {data?.items?.length || 0}
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}

export default Holders;
