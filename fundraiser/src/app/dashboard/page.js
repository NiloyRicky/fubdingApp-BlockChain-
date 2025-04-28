
"use client"
import styled from "styled-components";
import Image from "next/image";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaidIcon from '@mui/icons-material/Paid';
import EventIcon from '@mui/icons-material/Event';
import {ethers,Contract,JsonRpcProvider,BrowserProvider} from "ethers";

import CampaignFactory from "../../../../artifacts/contracts/Campaign.sol/CampaignFactory.json"
import { useEffect,useState } from "react";

import Link from "next/link";
export default function Dashboard()
 {

  
  const[camapaignsData,setCampaignsData]=useState([])




  useEffect(()=>{





    const Request=async()=>{
       
    
        
        await window.ethereum.request({
          method:'eth_requestAccounts'
        });
        const Web3provider=new BrowserProvider(window.ethereum);
         const signer= await Web3provider.getSigner();
         const Address=await signer.getAddress();

      
    
      const provider=new JsonRpcProvider(
        "https://eth-sepolia.g.alchemy.com/v2/MVt2Vg2Q3iKT6meJSlpO9tF1I10_YtRh"
    );
    const contract=new Contract(
        "0x352C3502253dfA6289Bb1f947577a2eFF12Bb093",
        CampaignFactory.abi,
        provider
    );
    
    
    //All campaigns: Health+education+ Animal
    const getAllCampaigns=contract.filters.campaignCreated(null,null,null,null,Address);//solidity function,to read all dtat don't give arguments
    const AllCampaigns= await contract.queryFilter(getAllCampaigns);
    
    const AllData=AllCampaigns.map((e)=>{
      return{
        title:e.args.title,
        image:e.args.imgurl,
        owner:e.args.owner,
        category:e.args.category,
        timeStamp:parseInt(e.args.timeStamp),
        amount:parseInt(e.args.requiredAmount)
      }
    });
    setCampaignsData(AllData);
    
    
    //Filter for Health campaigns
    
  }
    
    
    
    
    Request();
    
     
  },[])



  return (
    
      <>
        <LayoutWrapper>
   <HomeWrapper>
    
     

    {/*Card Container*/}
    <CardsWrapper>
{
      camapaignsData.map((e)=>{
        return (
<Card key={e.title}>
        <CardImg>
        <Image  fill
          src={`https://gateway.pinata.cloud/ipfs/${e.image}`}
alt={e.title}/>
        </CardImg>
        <Title>
          {e.title}
        </Title>
        <CardData>
          <Text>owner<AccountBoxIcon/></Text>
          <Text>{e.owner.slice(0,6)}...{e.owner.slice(39)}</Text>
        </CardData>
        <CardData>
          <Text>Amount <PaidIcon/></Text>
          <Text>{e.amount}ETH</Text>
        </CardData>
        <CardData>
          <Text><EventIcon/></Text>
          <Text>{new Date(e.timeStamp * 1000).toLocaleString()}</Text>
        </CardData>
       
       <Button>
          Go to Campaign
        </Button>
      </Card>
        )
      })
    }
    </CardsWrapper>

   </HomeWrapper>
        </LayoutWrapper>
      </>
      
    
  );


}







const LayoutWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  background-image: ${(props) => props.theme.bgImage};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
`;


const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`


const Category = styled.div`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.bgDiv};
  margin: 0px 15px;
  border-radius: 8px;
  font-family: 'Poppins';
  font-weight: normal;
  cursor: pointer;
`
const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 25px;
`
const Card = styled.div`
  width: 30%;
  margin-top: 20px;
  background-color: ${(props) => props.theme.bgDiv};

  &:hover{
    transform: translateY(-10px);
    transition: transform 0.5s;
  }
  
  &:not(:hover){
    transition: transform 0.5s;
  }
`
const CardImg = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
  object-fit:cover;
`
const Title = styled.h2`
  font-family: 'Roboto';
  font-size: 18px;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
  font-weight: normal;
`
const CardData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
  `
const Text = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
`
const Button = styled.button`
  padding: 8px;
  text-align: center;
  width: 100%;
  background-color:#00b712 ;
  background-image:
      linear-gradient(180deg, #00b712 0%, #5aff15 80%); 
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`