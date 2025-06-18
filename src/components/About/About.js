import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";
// import { Link } from 'react-router-dom';
// import { Button } from 'react-scroll';

const About = () => {

  return (
     <Container id='about'>
        <Fade direction='down'>
        <TextItem>
            <h1>What I Do? </h1>
        </TextItem>
        </Fade>
        
        <Cards>
            <Fade direction='down'>
                <Card>
                    <img src='/images/monitor.png' alt='apple'/>
                    <Con>
                    <h2>Machine Learning and Data Science</h2>  
                    <p>Delve into the fascinating fields of machine learning and data science, extracting insights and creating intelligent systems.</p>
                    </Con>
                </Card>
            </Fade>
            <Fade direction='left'>
                <Card>
                    <img src='/images/page.png' alt='apple'/>
                    <Con>
                    <h2>Web Development</h2>  
                    <p>Dive into the realm of web development, crafting seamless user interfaces and building interactive web applications.</p>
                    </Con>
                </Card>
            </Fade>
            <Fade direction='up'>
            
                
                <Card>
                <img src='/images/apple-logo.png' alt='apple'/>
                <Con>
                <h2>iOS Development </h2>  
                <p>Explore the world of iOS development and create powerful, user-friendly applications for Apple devices.</p>
                </Con>
            </Card>
            
            </Fade>
        </Cards>
        {/* <Link to="ml">
            <Button>
                 Projects
                <img src='/images/arrwr.png' alt="arrow right" />
            </Button>
        </Link> */}
     </Container>
  )
}

export default About

const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    // background-image: url('/images/bkg3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin:  0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    
`;

const TextItem = styled.div`
font-size: 2rem;
font-weight: 600;
padding-top: 3rem;
margin-bottom: 3rem;
h1{color: white;}

@media only screen and (max-width: 485px){
    font-size: 1.3rem;
    font-weight: 400;
    padding-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
}
`;

const Cards = styled.div`
    width: 1000px;
    margin: 0 auto;  
    max-width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    h2{
        color: white;
        font-weight: 300;
        }
    
    `;

const Card = styled.div`
    min-height: 120px; /* Set a minimum height for all cards */
    width: 80%;
    backdrop-filter: blur(2px);
    background-color: #333333;
    border-radius: 0.75rem;
    display: flex;
    align-items: flex-start; 
    justify-content: flex-start;
    padding: 1rem;
    margin-bottom: 1rem;
    img {
      height: 60px; 
      width: 60px; 
      margin-right: 1rem; 
    }
  
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  
    @media only screen and (max-width: 485px) {
      img {
        display: none;
      }
    }
  `;

const Con = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align content to the top */
    align-items: flex-start;
    h2{
        color: white;
        font-weight: 300;
    }
    p{
        padding-top: 8px;
        color: white;
    }

    @media only screen and (max-width: 485px) {
        h2{
            font-size: 18px;
            font-weight: 300;
        }
        p{
            padding-top: 5px;
            font-size: 12px;

        }
      }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: white;
    border: none;
    height: 45px;
    width: 135px;
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 1rem 1rem;
    border-radius: .75rem;
    transition: background-color 0.3s ease-in-out;

   
img{
width: 35px;
height: 35px;
}`;

