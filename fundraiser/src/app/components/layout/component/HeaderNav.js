import React from 'react'
import styled from 'styled-components'
import { useRouter,usePathname } from 'next/navigation';
import Link from 'next/link';

function HeaderNav() {
  //const Router=useRouter()
  const pathname=usePathname();
  return (
    <div
    style={{
      padding: '6px',
      height: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent:"center",
      
      borderRadius: '10px',
    }}>
    <HeaderNavWrapper>
      <Link href={'/'}>
      <HeaderNavLinks $active={pathname=="/"}>
        Campaigns
      </HeaderNavLinks>
      </Link>
      <Link href={'/createcampaign'}>
      <HeaderNavLinks $active={pathname=="/createcampaign"}>
        Create Campaign
      </HeaderNavLinks>
      </Link>
      <Link href={'/dashboard'}>
      <HeaderNavLinks $active={pathname=="/dashboard"}>
        Dashboard
      </HeaderNavLinks>
      </Link>
    </HeaderNavWrapper>
    </div>)
}
 const HeaderNavWrapper=styled.div`
 padding:6px;
 height:60%;
 display:flex;
 align-items:center;
 background-color:${(props)=>props.theme.bgDiv};
 border-radius:10px;
 height:50%;
 padding:6px;
 gap:12px;
 `

 const HeaderNavLinks=styled.div
 .withConfig({
  shouldForwardProp: (prop) => prop !== '$active', // This filters out $active prop from being passed to the DOM
})`
 margin:7px;
 display:flex;
 align-items:center;
 background-color:${(props)=>props.$active ? props.theme.bgSubDiv: "transparent"};
  height:100%;
  border-radius:10px;
   padding:0 6px;
   cursor:pointer;
   text-transform:uppercase;
   font-weight:bold;
    font-size:small;
    border:1.5px solid white;

    
  
  
 `
export default HeaderNav