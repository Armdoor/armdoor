import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
const Links = () => {
  return (
      <Container id='link'>

        <TextArea>
            <Fade direction='down'>
            <h2>Links</h2>
            </Fade>
        </TextArea>

        <Buttons>
            <Fade direction='left'>
            <Button href="https://github.com/Armdoor/Resume/blob/main/Final_res.pdf">
                <img src="/images/resume.png" alt='Resume'  ></img>
                
            </Button>
            <Button href="https://github.com/Armdoor">
                <img src="/images/git.png" alt='Github'  ></img>
                
            </Button>
            </Fade>
            <Fade direction='right'>
            <Button href="https://www.linkedin.com/in/akshit-sanoria/">
                <img src="/images/linkedin.png" alt='Linkedin'  ></img>
                
            </Button>
            <Link to = '/school'> 
            <Button>
                <img src="/images/school.png" alt='School'  ></img>
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
    background-size: cover;
    background-position: center;
    background-image: url('/images/linksbg.jpg');
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `


const TextArea = styled.div`
    font-size: 2rem;
    font-weight: 600;
    padding-top: 3rem;
    margin-bottom: 1.5rem;
    h1{
        color: white;
    }
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.a`
  height: 200px;
  width: 200px;
  border-radius: 2rem;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.5);
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
`;

