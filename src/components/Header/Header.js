import React, {useState} from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import {MenuFoldOutlined } from '@ant-design/icons'
import {CloseOutlined} from '@ant-design/icons';
const Header = () => {
  const [showMenu,setMenu] = useState(false);

  

  return (
    <Container>
      <Logo src='/images/log.png' alt='logo' />
      <Menu>
        <li> <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to="link" spy={true} smooth={true} offset={-70} duration={500}>Links</ScrollLink></li>
        <li><ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</ScrollLink></li>
      </Menu>
      <BurgerBtn onClick={() => setMenu(!showMenu)}>
        {showMenu ? (
          <CustClose onClick={() => setMenu(false)} />
        ) : (
          <CustMenu />
        )}
      </BurgerBtn>

      <BurgerMenu style={{ display: showMenu ? 'flex' : 'none' }}>
        <CloseWrap>
          {showMenu && <CustClose onClick={() => setMenu(false)} />}
        </CloseWrap>
        <li> <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={()=>setMenu(false)}>Home</ScrollLink></li>
        <li><ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={()=>setMenu(false)}>About</ScrollLink></li>
        <li><ScrollLink to="link" spy={true} smooth={true} offset={-70} duration={500} onClick={()=>setMenu(false)}>Links</ScrollLink></li>
        <li><ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={()=>setMenu(false)}>Contact</ScrollLink></li>
      
      </BurgerMenu>
      

    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  backdrop-filter: blur(0.5px);
  // background-color: rgba(255, 255, 255);
  border-bottom: 2px solid #1F1F1F;
`;



const Menu = styled.div`
list-style: none;
display: flex;
align-items: center;
justify-content: space;
font-weight: 600;
text-transform: uppercase;

padding: 0 10px;
flex-wrap: nowrap;
cursor: pointer;
color: white;
li{
  font-weight: 600;
  text-transform: uppercase;
  
  padding: 0 10px;
  flex-wrap: nowrap;
  cursor: pointer;
}

  @media only screen and (max-width: 485px){
    display: none;
  }
  
`;

const Logo = styled.img`
  object-fit: cover;
  height: 40px;
  width: 120px;
`;

const CustMenu = styled(MenuFoldOutlined)`
cursor: pointer;



`

const BurgerMenu = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
height: 100vh;
background: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;

li{
  padding: 15px 0; 
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  font-weight: 600;
 
}

@media only screen and (min-width: 400px){
  display: none;
}


`
const BurgerBtn = styled.div`
cursor: pointer;

@media only screen and (min-width: 485px){
  display: none;
}


`

const CustClose = styled(CloseOutlined )`
cursor: pointer;
`

const CloseWrap = styled.div`
display: flex;
justify-content: flex-end;
`