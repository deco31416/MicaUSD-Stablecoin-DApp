![MicaUSD Stablecoin](https://github.com/deco31416/MicaUSD-Stablecoin/blob/main/public/header.svg)

# MicaUSD DApp

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1.0-646cff?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38b2ac?logo=tailwindcss&logoColor=white)
![RainbowKit](https://img.shields.io/badge/RainbowKit-2.0.0-ff5620?logo=rainbowkit&logoColor=white)
![Wagmi](https://img.shields.io/badge/Wagmi-2.5.7-0a0a0a?logo=ethereum&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-8.56.0-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-2.8.8-F7B93E?logo=prettier&logoColor=white)

**[MicaUSD DApp](https://github.com/deco31416/MicaUSD-Stablecoin)** is the graphical interface for the MicaUSD stablecoin project, which aims to provide a stable and transparent solution for value exchange while adhering to international regulations, including the **MiCA** (Markets in Crypto-Assets Regulation) framework of the European Union.

This DApp interacts with the MicaUSD protocol deployed on the **[MicaUSDT - Binance Smart Chain Testnet](https://testnet.bscscan.com/address/0x04c385f999dddc8be75a4384c26864abe496139a)** and offers a seamless user interface to manage and visualize key aspects of the stablecoin, such as supply custody, balances, and token operations.

## Key Features of the MicaUSD DApp

1. **Real-Time Token Data**: Users can view real-time token data, including balance, total supply, and other token information.
2. **Web3 Integration**: The DApp allows users to connect their wallets and interact with the protocol using Web3 technology.
3. **Wallet Connectivity**: Through the **RainbowKit** integration, users can connect their wallets and access their MicaUSD balances, and interact with the smart contracts directly.
4. **Customizable Fees and Token Controls**: This interface allows the admin or users with permissions to manage minting/burning fees and view the current token configuration.
5. **Full Compatibility**: The DApp is fully compatible with Binance Smart Chain and uses modern Web3 libraries such as **Wagmi** and **RainbowKit**.

## Contracts

### 1. `SupplyCustodian.sol`
This contract manages the issuance and burning of tokens under strict custody rules. Key functionalities include:

- Token issuance with adjustable fees.
- Token burning under the control of the custody contract.
- Ability to adjust token prices and fees.
- Pausing operations when necessary.

### 2. `BaseStableToken.sol`
This contract handles the token itself, allowing it to be used as a stablecoin on the Binance Smart Chain Testnet. Key features include:

- ERC-20 token transfers.
- Blacklist and whitelist functionalities to ensure security and regulatory compliance.
- Minting and burning capabilities under the supervision of the custody contract.
- Full compatibility with ERC-20 compliant wallets and exchanges.

## Deployment

MicaUSD is currently deployed on the Binance Smart Chain Testnet for testing and development. The contracts are available for review and audit in the repository.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/deco31416/MicaUSD-DApp.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Roadmap

- **Emission Orders:** Advanced tools to manage token issuance more efficiently.
  
- **Emission Declarations:** Automated reports on token issuance, aligned with international regulations.
  
- **Decentralized Governance:** Governance module for community participation in key protocol decision-making.

## License

This project is protected under the [Creative Commons Attribution 3.0 license](https://creativecommons.org/licenses/by/3.0/us/deed.en), and the underlying source code used to format and display this content is licensed under the [MIT license](https://github.com/deco31416/MicaUSD-Stablecoin/blob/main/LICENSE).

## Developed by

**[Deco31416](https://github.com/deco31416)**  
For more information, Visit: [deco31416.com](https://www.deco31416.com/)