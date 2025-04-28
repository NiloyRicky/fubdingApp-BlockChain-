
"use client";

import React from 'react'
import styled from 'styled-components';
import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Wallet from './Wallet';

import { ThemeToggleContext } from '../Layout';
import {useContext} from 'react';

function HeaderRight() {
  const {toggleTheme,themeMode}=useContext(ThemeToggleContext);
  return (
   <>
     <HeaderRightWrapper>
      <Wallet/>
      <ThemeToggle>
        {themeMode=="light"?
        <DarkModeIcon onClick={toggleTheme}/>:
         <SunnyIcon onClick={toggleTheme}/>
          }
       
      </ThemeToggle>
      </HeaderRightWrapper>
   </>
  )
}

const HeaderRightWrapper=styled.div`
 margin-right:15px;
 height:50%;
 display:flex;
justify-content:center;
align-items:center;

`

const ThemeToggle=styled.div`
background-color:${(props)=>props.theme.bgDiv};
height:100%;
padding:5px;
width:45px;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;
cursor:pointer;
`
export default HeaderRight