const CampaignFactory =require("./artifacts/contracts/Campaign.sol/CampaignFactory.json");
const {Contract,JsonRpcProvider}=require("ethers");
require('dotenv').config({path:'./.env.local'});


const main=async()=>{
const provider=new JsonRpcProvider(
    process.env.NEXT_PUBLIC_RPC_URL
);
const contract=new Contract(
    "0x352C3502253dfA6289Bb1f947577a2eFF12Bb093",
    CampaignFactory.abi,
    provider
);

const getDeployedCampaign=contract.filters.campaignCreated();

let events=await contract.queryFilter(getDeployedCampaign);
let event=events.reverse();
console.log(event);

}
main();