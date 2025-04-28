import React, { useContext } from 'react'
import styled from 'styled-components';
import { FormState } from '../Form';

function FormLeftWrapper() {
  const Handler=useContext(FormState);
  return (
    <div>
    <FormLeft>
      <FormInput>
          <label>Campaign title</label>
          <Input onChange={Handler.FormHandler}
           value={Handler.form.campaignTitle} placeholder='Campaign title' name="campaignTitle">

          </Input>
      </FormInput>

      <FormInput >
          <label>Story</label>
           
           <TextArea 
           onChange={Handler.FormHandler}
           value={Handler.form.story}  name="story"
          placeholder='Describe your story'>

          </TextArea>
      </FormInput>

    </FormLeft>
    </div>
  )
}
const FormLeft=styled.div`
width:48%;
`

const FormInput = styled.div`
  display:flex ;
  flex-direction:column;
  font-family:'poppins';
  margin-top:10px ;
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

const TextArea = styled.textarea`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none;
  border-radius:8px ;
  outline:none;
  font-size:large;
  max-width:100%;
  min-width:100%;
  overflow-x:hidden;
  min-height:160px ;
`
export default FormLeftWrapper