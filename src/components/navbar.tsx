import { useState } from "react";
import {
  Navbar as NavbarUi,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWeb3Config } from "../hooks/use-web3-config.hook";

function Navbar() {
  const { tokens } = useWeb3Config();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar el menú responsive
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarUi className="bg-gray-900 text-white">
      <NavbarBrand className="flex items-center gap-2">
        <img src={tokens.mainToken.logoUrl} alt="logo" className="w-8 h-8" />
        <h2 className="font-bold text-inherit text-primary">
          {tokens.mainToken.name} Dapp
        </h2>
      </NavbarBrand>

      {/* Botón de menú hamburguesa para pantallas pequeñas */}
      <NavbarMenuToggle
        aria-label="toggle navigation"
        className="lg:hidden" // Oculto en pantallas grandes
        onClick={toggleMenu}
      />

      {/* Contenido del Navbar para pantallas grandes */}
      <NavbarContent justify="end" className="hidden lg:flex">
        <NavbarItem>
          <ConnectButton showBalance={false} />
        </NavbarItem>
      </NavbarContent>

      {/* Menú desplegable para pantallas pequeñas */}
      <ul className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <NavbarMenuItem>
          <ConnectButton showBalance={false} />
        </NavbarMenuItem>
      </ul>
    </NavbarUi>
  );
}

export default Navbar;
