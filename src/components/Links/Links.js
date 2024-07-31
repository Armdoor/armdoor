import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
const Links = () => {


  const [hoverStates, setHoverStates] = useState({
    resume: false,
    github: false,
    linkedin: false,
    school: false
  });

  const handleHover = (button, isHovered) => {
    setHoverStates(prev => ({ ...prev, [button]: isHovered }));
  };

  return (
      <Container id='link'>

        <TextArea>
            <Fade direction='down'>
            <h2>Links</h2>
            </Fade>
        </TextArea>

        <Buttons>
        <Fade direction='left'>
          <Button 
            href="https://github.com/Armdoor/Resume/blob/main/Final_res.pdf"
            onMouseEnter={() => handleHover('resume', true)} 
            onMouseLeave={() => handleHover('resume', false)}
          >
            <img src={hoverStates.resume ? "/images/cv-dark.png" : "/images/cv-light.png"} alt='Resume' />
          </Button>
          <Button 
            href="https://github.com/Armdoor"
            onMouseEnter={() => handleHover('github', true)} 
            onMouseLeave={() => handleHover('github', false)}
          >
            <img src={hoverStates.github ? "/images/github-dark.png" : "/images/github-light.png"} alt='Github' />
          </Button>
        </Fade>
        <Fade direction='right'>
          <Button 
            href="https://www.linkedin.com/in/akshit-sanoria/"
            onMouseEnter={() => handleHover('linkedin', true)} 
            onMouseLeave={() => handleHover('linkedin', false)}
          >
            <img src={hoverStates.linkedin ? "/images/lk-dark.png" : "/images/linkedin.png"} alt='Linkedin' />
          </Button>
          <Link to='/school'>
            <Button 
              onMouseEnter={() => handleHover('school', true)} 
              onMouseLeave={() => handleHover('school', false)}
            >
              <img src={hoverStates.school ? "/images/sch-dark.png" : "/images/sch.png"} alt='School' />
            </Button>
          </Link>
        </Fade>
      </Buttons>


      </Container>
  )
}

export default Links

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    `;


const TextArea = styled.div`
    font-size: 2rem;
    font-weight: 600;
    padding-top: 3rem;
    margin-bottom: 1.5rem;
    h1{
        color: white;
    }
    @media only screen and (max-width: 485px){
    font-size: 1.5rem;
    font-weight: 400;
    padding-top: 1.5rem;
    margin-bottom: 1rem;
    }

`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 414px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Button = styled.a`
  height: 200px;
  width: 200px;
  border-radius: 2rem;
  backdrop-filter: blur(2px);
  background-color: #333333;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.75rem;
  text-decoration: none; /* Add this line to remove the default underline */
  color: inherit; /* Add this line to inherit the text color from the parent */
  
  &:hover {
    background-color: #dcdcdc; /* Add a hover effect */

  }

  img {
    height: 150px;
    width: 150px;
  }
  @media only screen and (max-width: 485px){

    height: 75px;
    width: 75px;
    margin: 0.25rem;
  border-radius: 1rem;
  img{
    height: 65px;
    width: 65px;
  }
  }

  @media only screen and (max-width: 900px){
    height: 125px;
  width: 125px;
  border-radius: 1.5rem;
  img{
    height: 100px;
    width: 100px;
  }
  }
`;

