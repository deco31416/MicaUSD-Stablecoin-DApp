import { useIsOwner } from "../../../hooks/use-is-owner.hook";
import BurnTokens from "../components/burn-tokens";
import MintTokens from "../components/mint-tokens";
import SupplyWithdrawGas from "../components/supply-withdraw-gas";
import SupplyWithdrawSpecificToken from "../components/supply-withdraw-specific-token";

function SupplyCustodyContainer() {
  const { isOwnerToken } = useIsOwner();

  return (
    <div className="flex flex-col gap-4">
      <BurnTokens />
      <MintTokens />
      {isOwnerToken && (
        <>
          <SupplyWithdrawGas />
          <SupplyWithdrawSpecificToken />
        </>
      )}
    </div>
  );
}

export default SupplyCustodyContainer;
