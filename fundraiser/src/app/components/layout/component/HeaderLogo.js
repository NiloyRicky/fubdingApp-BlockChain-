import React from 'react'
import styled from 'styled-components'
function HeaderLogo() {
  return (
   <div>
     <Logo>FundRaiser</Logo>
   </div>
  )
}
const Logo=styled.h1`
font-weight:bold;
font-size:larger;
margin-left:10px`

export default HeaderLogo