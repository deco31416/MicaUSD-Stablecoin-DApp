import { useQuery } from "@tanstack/react-query";
import { Currency } from "../interfaces/currency";

/* Función para obtener el precio actual del token 
USDT en la red de binance desde un API exyterna*/

//https://backendglobal.herokuapp.com/api/currencies/v2/public

export function useQueryCurrencies() {
  const backendApi = "https://backendglobal.herokuapp.com/api";

  const handleFetch = async () => {
    const res = await fetch(`${backendApi}/currencies/v2/public`);
    return res.json();
  };

  const { data = [], isLoading } = useQuery<Currency[]>({
    queryKey: ["currencies"],
    queryFn: handleFetch,
  });

  return {
    currencies: data,
    isLoading,
  };
}

