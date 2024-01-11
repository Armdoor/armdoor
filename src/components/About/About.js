import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
     <Container id='about'>
        <Fade top>
        <TextItem>
            <h1>What I Do? </h1>
        </TextItem>
        </Fade>
        
        <Cards>
        <Fade bottom>
            <Card>
                <img src='/images/ios.png' alt='apple'/>
                <Con>
                <h2>iOS Development </h2>  
                <p>Explore the world of iOS development and create powerful, user-friendly applications for Apple devices.</p>
                </Con>
            </Card>
            <Card>
                <img src='/images/ui.png' alt='apple'/>
                <Con>
                <h2>Web Development</h2>  
                <p>Dive into the realm of web development, crafting seamless user interfaces and building interactive web applications.</p>
                </Con>
            </Card>
            <Card>
                <img src='/images/web.png' alt='apple'/>
                <Con>
                <h2>Machine Learning and Data Science</h2>  
                <p>Delve into the fascinating fields of machine learning and data science, extracting insights and creating intelligent systems.</p>
                </Con>
            </Card>
            </Fade>
        </Cards>
     </Container>
  )
}

export default About

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-image: url('/images/aboutbg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin:  0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const TextItem = styled.div`
font-size: 2rem;
font-weight: 600;
padding-top: 3rem;
margin-bottom: 3rem;
h1{
    color: #e0e0e0;
}
`

const Cards = styled.div`
    
    margin: 1.5rem;
    width: 100vw;
    max-width: 50%;
    text-align: left;
    color: white;`

const Card = styled.div`
height: 110px;
width: 800px;
backdrop-filter: blur(2px);
background-color: rgba(255, 255, 255, 0.5);
border-radius: 0.75rem;
display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
img {
    margin-right: 1rem;
    max-width: 100px; 
    height: auto;
  }
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05); /* Increase scale on hover */
  }r
`
const Con = styled.div`
display: flex;
    flex-direction: column;
    h2,
    p {
      margin: 0;
    }
    h2{
        color: #333333;
    }
    p{
        padding-top: 8px;
    }
`


