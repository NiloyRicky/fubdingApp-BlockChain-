



<img width="1894" height="874" alt="Screenshot 2025-05-10 170915" src="https://github.com/user-attachments/assets/22e297ab-3ef3-4218-b3f3-caa984ff4430" />
<img width="1920" height="1080" alt="Screenshot 2025-05-10 171054" src="https://github.com/user-attachments/assets/f7870ff2-91b5-41f3-961a-6202c5ff49e0" />
<img width="1920" height="1008" alt="Screenshot 2025-05-10 171019" src="https://github.com/user-attachments/assets/ddc56a0a-59d2-4aab-9028-1d2841c9ec83" />


# 🚀 Fundraiser DApp

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







