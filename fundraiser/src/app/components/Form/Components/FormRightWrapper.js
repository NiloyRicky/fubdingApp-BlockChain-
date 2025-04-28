"use client";
import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { FormState } from '../Form';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import {create as IPFSHTTPClient} from "ipfs-http-client" 




import axios from "axios";

const API_KEY = "21d2a7a340979026db29";
const SECRET_KEY = "49533386e59490ecbc86a75fe1842f6675e2f68895309f735f3e39487f861fbd";

const uploadToPinata = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(url, formData, {
    maxBodyLength: "Infinity",
    headers: {
      "Content-Type": "multipart/form-data",
      pinata_api_key: API_KEY,
      pinata_secret_api_key: SECRET_KEY,
    },
  });

  return res.data.IpfsHash;
};


// For uploading story (string as JSON)
export const uploadStoryToPinata = async (storyText) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  const body = {
    story: storyText,
  };

  const res = await axios.post(url, body, {
    headers: {
      pinata_api_key: API_KEY,
      pinata_secret_api_key: SECRET_KEY,
    },
  });

  return res.data.IpfsHash;
};

//const client=IPFSHTTPClient("https://ipfs.infura.io:50001/api/v0");
//const client = IPFSHTTPClient({ url: "https://ipfs.infura.io:5001/api/v0" });




function FormRightWrapper() {
  const Handler =useContext(FormState);

const[uploading,setUploading]=useState(false);
const[uploaded,setUploaded]=useState(false);

const uploadFiles= async(e)=>{
  e.preventDefault();
  setUploading(true);
  if(Handler.form.story !==""){
    try {
      const storyHash = await uploadStoryToPinata(Handler.form.story);
      await Handler.setStoryUrl(storyHash);
    } catch (error) {
      toast.warn("Error uploading story")
      console.log(error);
      
    }
  }

  if(Handler.image !==null){
  try {
    const imageHash = await uploadToPinata(Handler.image);
    await Handler.setImageUrl(imageHash);
  } catch (error) {
    toast.warn("Error while uploading image")
    console.log(error);
  }
  }
  setUploading(false);
  setUploaded(true);
  Handler.setUploaded(true);
  toast.success("File uploaded successfully")
}

  return (
    
    <>
    <FormRight>

<FormInput>
<FormRow>
<RowFirstInput>
            <label>Required Amount</label>
            <Input
            onChange={Handler.FormHandler}  
            value={Handler.form.requiredAmount} 
            name="requiredAmount" type={'number'} placeholder='Required Amount'></Input>
          </RowFirstInput>
          <RowSecondInput>
            <label>Choose Category</label>
            <Select 
            onChange={Handler.FormHandler}
            value={Handler.form.category} name="category">
              <option>Education</option>
              <option>Health</option>
              <option>Animal</option>
            </Select>
          </RowSecondInput>
</FormRow>
<FormInput>
  <label>select Image</label>
  <Image
  onChange={Handler.ImageHandler} 
  type={"file"} accept= "image/*" 
  alt="handler">
  </Image>
</FormInput>
</FormInput>
{ uploading==true?
<Button style={{cursor:"no-drop"}}><TailSpin color="#fff"
height={20}/></Button>:
uploaded==false?
<Button $active={true} onClick={uploadFiles}>
Upload Files to IPFS
</Button>
 :
 <Button>Files uploaded Successfully</Button>
}
<Button onClick={Handler.startCampaign}>
  Start Campaign
</Button>
    </FormRight>
    </>
  )
}







const FormRight = styled.div`
  width:45%;
`

const FormInput = styled.div`
  display:flex ;
  flex-direction:column;
  font-family:'poppins';
  margin-top:10px ;
`

const FormRow = styled.div`
  display: flex;
  justify-content:space-between;
  width:100% ;
`

const Input = styled.input`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:large;
  width:100% ;
` 

const RowFirstInput = styled.div`
  display:flex ;
  flex-direction:column ;
  width:45% ;
`

const RowSecondInput = styled.div`
  display:flex ;
  flex-direction:column ;
  width:45% ;
`

const Select = styled.select`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:large;
  width:100% ;
`

const Image = styled.input`
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:large;
  width:100% ;

  &::-webkit-file-upload-button {
    padding: 15px ;
    background-color: ${(props) => props.theme.bgSubDiv} ;
    color: ${(props) => props.theme.color} ;
    outline:none ;
    border:none ;
    font-weight:bold ;
  }  
`

const Button = styled.button`
  display: flex;
  justify-content:center;
  width:100% ;
  padding:15px ;
  color:white ;
  background-color: ${({ $active }) => ($active ? "green" : "gray")}; ;
  background-image:
      linear-gradient(180deg, #00b712 0%, #5aff15 80%) ;
  border:none;
  margin-top:30px ;
  cursor: pointer;
  font-weight:bold ;
  font-size:large ;
`
export default FormRightWrapper
//API Key: 1aafffc62c3585bf163e
//API Secret: 3c82fce7eb5123baaf4a5885facfda1743af838eb021ee1283ae9620e486c6d2
//JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwNzZlNzM3NS1mMzY1LTRiNTktODgwNC0wYWU0NDRiMTgyY2EiLCJlbWFpbCI6Im5pbG95cTkzM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMWFhZmZmYzYyYzM1ODViZjE2M2UiLCJzY29wZWRLZXlTZWNyZXQiOiIzYzgyZmNlN2ViNTEyM2JhYWY0YTU4ODVmYWNmZGExNzQzYWY4MzhlYjAyMWVlMTI4M2FlOTYyMGU0ODZjNmQyIiwiZXhwIjoxNzc2NDUxNzgwfQ.UuhMPOJGrrNn5-xNVcZPmi6NROCWPYwDD9CnnfRnyAY



// API Key: 21d2a7a340979026db29
// API Secret: 49533386e59490ecbc86a75fe1842f6675e2f68895309f735f3e39487f861fbd
// JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwNzZlNzM3NS1mMzY1LTRiNTktODgwNC0wYWU0NDRiMTgyY2EiLCJlbWFpbCI6Im5pbG95cTkzM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMjFkMmE3YTM0MDk3OTAyNmRiMjkiLCJzY29wZWRLZXlTZWNyZXQiOiI0OTUzMzM4NmU1OTQ5MGVjYmM4NmE3NWZlMTg0MmY2Njc1ZTJmNjg4OTUzMDlmNzM1ZjNlMzk0ODdmODYxZmJkIiwiZXhwIjoxNzc2NDUzNDc0fQ.xAgA_dDwJCWnrsN9528N5KgNMFXNHtIlwK9S3U6mwIY