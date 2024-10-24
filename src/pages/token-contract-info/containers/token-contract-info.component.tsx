import { useReadContract } from "wagmi";
import { useGetBalance } from "../../../hooks/use-get-balance.hook";
import { useWeb3Config } from "../../../hooks/use-web3-config.hook";
import CardBalance from "../../../components/card-balance";
import TokenDetails from "../components/token-details.component";
import SupplyDetails from "../components/supply-details.component";
import MarketPrice from "../components/market-price.component";
import Holders from "../components/holders.component";
import BlockedWallets from "../components/blocked-wallets.component";
import VerifiedWallets from "../components/verified-wallets.component";
import { useQueryCurrencies } from "../../../hooks/use-query-currencies.hook";
import { formatNumber } from "../../../utils/format-number";

function TokenContractInfo() {
  const { tokens, tokenContract } = useWeb3Config();
  const { currencies } = useQueryCurrencies();

  const { data: nativeCurrency } = useGetBalance();
  const { data: token } = useGetBalance(tokens?.mainToken);
  const { data: paused } = useReadContract({
    abi: tokenContract.abi,
    address: tokenContract.address,
    functionName: "paused",
    query: {
      // each 30 seconds
      refetchInterval: 30000,
    },
  });

  const { data: totalSupply = 0n } = useReadContract({
    abi: tokenContract.abi,
    address: tokenContract.address,
    functionName: "totalSupply",
    query: {
      // each 30 seconds
      refetchInterval: 30000,
    },
  });

  const { data: totalMintedTokensUser = 0n } = useReadContract({
    abi: tokenContract.abi,
    address: tokenContract.address,
    functionName: "totalMintedTokensUser",
    query: {
      // each 30 seconds
      refetchInterval: 30000,
    },
  });

  const { data: totalBurnedTokens = 0n } = useReadContract({
    abi: tokenContract.abi,
    address: tokenContract.address,
    functionName: "totalBurnedTokens",
    query: {
      // each 30 seconds
      refetchInterval: 30000,
    },
  });

  /*Obtener el precio actual del token USDT mediante API 
  en la red de binance desde use-query-currencies.hook.ts*/

  const bsc = currencies.find((currency) => currency.legacyTicker === "usdtbsc");

  const initialSupply =
    totalSupply - (totalMintedTokensUser - totalBurnedTokens);

  return (
    <section className="flex flex-col pt-20 gap-4">
      <CardBalance
        title="Balance Gas MetaMask"
        symbol={nativeCurrency?.symbol || "-"}
        balance={formatNumber(+(nativeCurrency?.formatted || "0.000000"))}
      />
      <CardBalance
        title="Balance Token MetaMask"
        symbol={token?.symbol || "."}
        balance={formatNumber(+(token?.formatted || "0.000000"))}
      />
      <TokenDetails token={tokens.mainToken} paused={!!paused} />
      <SupplyDetails
        totalSupply={totalSupply}
        totalMintedTokensUser={totalMintedTokensUser}
        totalBurnedTokens={totalBurnedTokens}
        initialSupply={initialSupply}
      />
      {/* Aquí va la red blockchain y se muestra el precio actual del token en USDT */}
      <MarketPrice totalSupply={totalSupply} currency={bsc} />
      <Holders />
      <BlockedWallets />
      <VerifiedWallets />
    </section>
  );
}

export default TokenContractInfo;
