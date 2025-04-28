
import styled from "styled-components"
import HeaderLogo from "./component/HeaderLogo"
import HeaderNav from "./component/HeaderNav"
import HeaderRight from "./component/HeaderRight"
const Header = () => {
  return (
  <>
      <HeaderWrapper>
      <HeaderLogo/>
      <HeaderNav/>
      <HeaderRight/>
    </HeaderWrapper>
  </>
  )
}

const HeaderWrapper=styled.div`
width:100%;
height:70px;
flex-direction:row;
display:flex;
justify-content:space-between;
align-items:center;



`
export default Header