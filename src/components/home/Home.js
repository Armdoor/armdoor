import React from 'react';
import { Fade } from "react-awesome-reveal";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  


  return (
      <Wrap id='home'>
        <ItemText>
          <Fade direction='down'>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800' }}>Hello,</h2>
            <h1 style={{ fontSize: '3rem' }}>I'm <HighlightedText>Aarambh</HighlightedText></h1>
            <p> Computer Science Student</p>
            <p style={{ fontSize: 'large', fontWeight: '520', paddingBottom: '15px'}}>At University of Maryland, College Park.</p>
          </Fade>
          <Fade direction='up'>
          <Link to = '/story'> 
            <StoryButton>
                My Story
            </StoryButton>
            </Link>
          </Fade>
          
        </ItemText>
        <Buttons>
        </Buttons>
      </Wrap>
     
  )
}

export default Home;


const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-image: url('/images/homebg.jpg');
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;`;

const ItemText = styled.div`
  position: absolute;
  top: 35vh; 
  left: 5vw;
  padding: 0;  
  font-size: 3rem;
  font-weight: 700;
  p{
    font-size: 2rem;
  font-weight: 700;
  }
`;

const HighlightedText = styled.span`
  color: red;
`;



const StoryButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);  
  height: 45px;
  width: 125px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.8;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;
`;

const Buttons = styled.div`
padding-top: 92.5vh;
text-align: center;`;
