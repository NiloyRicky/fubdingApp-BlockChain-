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

