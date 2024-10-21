import Navbar from "./components/navbar";
import Footer from "./components/footer.component";
import { Tabs, Tab } from "@nextui-org/react";
import SupplyCustodyContainer from "./pages/supply-custody/containers/supply-custody.container";
import TokenContractContainer from "./pages/token-contract/containers/token-contract.container";
import TokenContractInfo from "./pages/token-contract-info/containers/token-contract-info.component";

function App() {
  return (
    <div className="relative flex flex-col gap-4">
      <Navbar />
      <div className="w-full flex justify-center">
        <main className="container px-6 pb-6 sm:px-10 max-w-[1024px] grid grid-cols-[2fr_1fr] gap-4">
          <section className="">
            <Tabs aria-label="Options">
              <Tab key="supplyCustody" title="Supply Custody">
                <SupplyCustodyContainer />
              </Tab>
              <Tab key="tokenContract" title="Token Contract">
                <TokenContractContainer />
              </Tab>
            </Tabs>
          </section>
          <TokenContractInfo />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
