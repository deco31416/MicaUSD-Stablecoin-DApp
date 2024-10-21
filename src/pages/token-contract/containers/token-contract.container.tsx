import { useIsOwner } from "../../../hooks/use-is-owner.hook";
import AddToBlackList from "../components/add-to-black-list";
import AddToWhiteList from "../components/add-to-white-list";
import BurnSupply from "../components/burn-supply";
import YourWalletInfo from "../components/your-wallet-info";
import MintSupply from "../components/mint-supply";
import PauseSupplyCustody from "../components/pause-supply-custody";
import RemoveFromBlacklist from "../components/remove-from-blacklist";
import RemoveFromWhitelist from "../components/remove-from-whitelist";
import SetSupplyCustodian from "../components/set-supply-custodian";
import SetWalletSupplyCustodian from "../components/set-wallet-supply-custodian";
import TransferOnwership from "../components/transfer-onwership";
import WithdrawSpecificToken from "../components/withdraw-specific-token";
import CheckWalletInBlacklist from "../components/check-wallet-in-blacklist.component";

function TokenContractContainer() {
  const { isOwnerToken } = useIsOwner();

  if (!isOwnerToken) {
    return (
      <div className="flex flex-col gap-4">
        <YourWalletInfo />
        <CheckWalletInBlacklist />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <SetWalletSupplyCustodian />
      <SetSupplyCustodian />
      <MintSupply />
      <BurnSupply />
      <PauseSupplyCustody />
      <AddToBlackList />
      <RemoveFromBlacklist />
      <AddToWhiteList />
      <RemoveFromWhitelist />
      <WithdrawSpecificToken />
      <TransferOnwership />
    </div>
  );
}

export default TokenContractContainer;
