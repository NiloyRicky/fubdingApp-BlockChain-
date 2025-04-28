"use client"

import React from 'react'
import styled from 'styled-components'
import FormLeftWrapper from './Components/FormLeftWrapper'
import FormRightWrapper from './Components/FormRightWrapper'
import { createContext,useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import {BrowserProvider, Contract, parseEther} from "ethers";
import { toast } from 'react-toastify';
import CampaignFactory from "../../../../../artifacts/contracts/Campaign.sol/CampaignFactory.json"


const FormState=createContext();

function Form() {
  const[form,setForm]=useState({
    campaignTitle:"",
    story:"",
    requiredAmount:"",
    category:""
  })
  const[image,setImage]=useState(null);
  const[storyUrl,setStoryUrl]=useState();
  const[imageUrl,setImageUrl]=useState();
  const[loading,setLoading]=useState(false);
  const[address,setAddress]=useState("");
  const [uploaded,setUploaded]=useState(false)
const ImageHandler=(e)=>{
 setImage(e.target.files[0]);
}


//strtCampaign
const startCampaign=async(e)=>{
  e.preventDefault();
  const provider=new BrowserProvider(window.ethereum);
  const signer= await  provider.getSigner();
  if(form.campaignTitle==""){
    toast.warn("Title is empty")
  }
  else if(form.story==""){
    toast.warn("story is empty")
  }
  else if(form.requiredAmount==""){
    toast.warn("Require amount is empty")
  }
  else if(uploaded=== false){
    toast.warn("Files is empty")
  }
  else{
    setLoading(true)
  }
  
const contract=new Contract(//new instance of already deployed contract
"0x352C3502253dfA6289Bb1f947577a2eFF12Bb093",
CampaignFactory.abi,
signer
)

const camapignData=await contract.createCampaign(//solidity je function ki trarget kr rh ah
  form.campaignTitle,
  parseInt(form.requiredAmount),
  imageUrl,
  storyUrl,
  form.category,
)
await camapignData.wait();
setAddress(camapignData.to)
}
const FormHandler=(e)=>{
  
  setForm({...form,
    [e.target.name]:e.target.value}
  )

}
  return (
    <>
    <FormState.Provider
    value={{form,image,setImage,setForm,ImageHandler,FormHandler
      ,imageUrl,setImageUrl,storyUrl,setStoryUrl,setLoading,setAddress,
      startCampaign,setUploaded,uploaded
    }}>
    <FormWrapper>
        <FormMain>
            
              {loading == true?
              address ==""?
              <Spinner>
                <TailSpin height={60}/>
              </Spinner>:
              <Address> 
                 <h1>Campaign started successfully</h1>
                 <h1>{address}</h1>
                <Button>
                 Go to Camapaign
                </Button>
              </Address>
             
              :
            
            <FormInputsWrapper>
              <FormLeftWrapper/>
              <FormRightWrapper/>
            </FormInputsWrapper>
}
        </FormMain>
    </FormWrapper>
    </FormState.Provider>
  
    </>
  )
}
const FormWrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;

`
const FormMain=styled.div`
width:50%;

`




const FormInputsWrapper = styled.div`
    display:flex;
    justify-content:space-between ;
    margin-top:45px ;
`
const Spinner = styled.div`
    width:100%;
    height:80vh;
    display:flex ;
    justify-content:center ;
    align-items:center ;
`
const Address = styled.div`
    width:100%;
    height:80vh;
    display:flex ;
    display:flex ;
    flex-direction:column;
    align-items:center ;
    background-color:${(props) => props.theme.bgSubDiv} ;
    border-radius:8px;
`

const Button = styled.button`
    display: flex;
  justify-content:center;
  width:30% ;
  padding:15px ;
  color:white ;
  background-color:#00b712 ;
  background-image:
      linear-gradient(180deg, #00b712 0%, #5aff15 80%) ;
  border:none;
  margin-top:30px ;
  cursor: pointer;
  font-weight:bold ;
  font-size:large ;
`


export default Form;
export {FormState};