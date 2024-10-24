import Navbar from "./components/navbar";
import Footer from "./components/footer.component";
import { Tabs, Tab } from "@nextui-org/react";
import SupplyCustodyContainer from "./pages/supply-custody/containers/supply-custody.container";
import TokenContractContainer from "./pages/token-contract/containers/token-contract.container";
import TokenContractInfo from "./pages/token-contract-info/containers/token-contract-info.component";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Contenedor principal con flex-grow para que empuje el footer */}
      <div className="flex-grow w-full flex justify-center">
        <main className="container px-4 sm:px-6 lg:px-10 pb-6 max-w-[1024px] grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* Tabs y contenido a la izquierda (en pantallas grandes se mostrarán en dos columnas) */}
          <section className="mt-6">
            <Tabs aria-label="Options">
              <Tab key="supplyCustody" title="Supply Custody">
                <SupplyCustodyContainer />
              </Tab>
              <Tab key="tokenContract" title="Token Contract">
                <TokenContractContainer />
              </Tab>
            </Tabs>
          </section>
          
          {/* Información de TokenContract a la derecha (en pantallas pequeñas, debajo de las pestañas) */}
          <div className="mt-6 lg:mt-0">
            <TokenContractInfo />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
