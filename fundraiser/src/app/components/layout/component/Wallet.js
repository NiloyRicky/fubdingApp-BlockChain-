"use client";

import React,{useState} from 'react'
import styled from 'styled-components'
import {BrowserProvider,formatEther} from 'ethers'
//sepolia.etherscan.io
const networks = {
  sepolia: {
    chainId: "0xaa36a7",
    chainName: "Ethereum Sepolia Testnet",
    nativeCurrency: {
      name: "SepoliaETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.sepolia.org/"],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
  },
};
function Wallet() {
  //useState
  const[address,setAddress]=useState("");
  const[balance,setBalance]=useState(null);




 //connecting wallet/Metamask
 const connectWallet=async()=>{
  try {

//tequesting to connect to address/account
    await window.ethereum.request({
      method:"eth_requestAccounts"
    });
    const provider=new BrowserProvider(window.ethereum,"any");
    const network=await provider.getNetwork();
    
    if(network.chainId !==11155111){
      await window.ethereum.request({
        method:"wallet_switchEthereumChain",
        params:[//all params must return an array of object
          
            {chainId:"0xaa36a7"}
        
        ]
      })
    }
    
    
    
    const account= await provider.getSigner();
    console.log(await provider.network);
    const Address= await account.getAddress();
   
    setAddress(Address);
  
    // console.log(Balance);
    // console.log(Address);

  const Balance= formatEther(await provider.getBalance(Address));
  setBalance(Balance);

    
  } catch (switchError) {
    if(switchError.code===4902){
      await window.ethereum.request({
        method:"wallet_addEthereumChain",
        params:[networks.sepolia]
      })
    }
    
  }


}


  return (
    <>
    <ConnectWalletwrapper onClick={ connectWallet}>
     
     {balance=="" || balance === null ? <Balance></Balance>:<Balance>{balance.slice(0,6)+" ETH"}</Balance>}
    {address=="" ? <Address>Connect wallet</Address>:
    <Address>{address.slice(0,8)}...{address.slice(39)}</Address>}
     
   
    </ConnectWalletwrapper>
    </>
  )
}

const ConnectWalletwrapper=styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
background-color:black;
height:100%;
padding: 5px 9px;
border-radius:10px;
margin-right:15px;
color:white;
font-weight:bold;

`


const Address = styled.h2`
    background-color: ${(props) => props.theme.bgSubDiv};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px 0 5px;
    border-radius: 10px;
    color:red;
    
`

const Balance = styled.h2`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`
export default Wallet