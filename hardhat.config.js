const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:"./.env.local"})

/** @type import('hardhat/config').HardhatUserConfig */
task("accounts","Prints the list of accounts",async(taskArgs,hre)=>{
const accounts=await hre.ethers.getSigners();
for(const account of accounts){
  console.log(account.address);
}
})
const privateKey=process.env.NEXT_PRIVATE_KEY //metamask ka account
module.exports = {
  solidity: "0.8.28",
  defaultNetwork:"sepolia",
  networks:{
    hardhat:{},
    sepolia:{
      url:process.env.NEXT_PUBLIC_RPC_URL,
      accounts:[privateKey]
    }
  }
};
