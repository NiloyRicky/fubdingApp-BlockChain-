# 🚀 Fundraiser dApp

A decentralized crowdfunding platform built with **Next.js**, **Ethers.js**, **IPFS**, and **MetaMask** on the **Sepolia** test network.

## ✨ Features

- **Create Campaigns** with title, description, target amount, deadline, image (IPFS), and story (IPFS).
- **Connect MetaMask** wallet to interact with the dApp.
- **Donate** to campaigns via MetaMask transactions.
- **Upload Images and Stories** securely to **IPFS**.
- **View Campaigns** dynamically from blockchain.
- **Filter Campaigns** based on categories.
- **View Detailed Campaign** information including donation history.
-**Toggle theme** Allow user to toggle between dark and light theme
---

## 🛠 Tech Stack

- **Frontend**: Next.js (App Router) + Tailwind CSS + Styled Components
- **Blockchain**: Solidity + Hardhat
- **Ethereum Testnet**: Sepolia (via Alchemy)
- **Wallet Connection**: MetaMask + Ethers.js
- **Storage**: IPFS (through Pinata)
- **Deployment**: Netlify / Vercel

---

🧩 How it Works
Connect your MetaMask wallet.

Create Campaign by filling the form and uploading image + story (uploaded to IPFS).

Campaign gets created on blockchain with IPFS links.

View Campaigns on home page.

Filter campaigns based on category.

Donate to any campaign via MetaMask.


---

Images and Story files are uploaded to IPFS via Pinata.

IPFS CIDs are stored on the blockchain.

IPFS Gateway used for fetching assets:
https://gateway.pinata.cloud/ipfs/<CID>



---



Follow these steps if you want to clone and run my project locally:


## 🔧 Getting Started – Clone & Run Locally

Follow these steps to clone and run the project locally:

### 1. **Clone the Repository**
```bash
git clone https://github.com/NiloyRicky/fubdingApp-BlockChain-.git
cd fubdingApp-BlockChain-

### 2. **Install Dependencies**
npm install

### 3. **Set up Enviroment Variables**

Create a .env.local file in the root of the project and add the required environment variables.
Refer to the .env.example file for the format.
Example:
NEXT_PUBLIC_PINATA_API_KEY=your_pinata_api_key
NEXT_PUBLIC_PINATA_SECRET_API_KEY=your_pinata_secret
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address

### 4. ** Run the Development Server**
npm run dev


### 5. ** Requirements**
MetaMask browser extension

Connected to Sepolia testnet

Have some test ETH (you can use https://sepoliafaucet.com/)




