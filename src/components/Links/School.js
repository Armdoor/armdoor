import React from 'react';
import Linkheader from '../Linkheader/Linkheader';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import { Fade } from "react-awesome-reveal";

const School = () => {
  return (
    <Container>
      <Linkheader />
      <h1>University Of Maryland, College Park</h1>

      <Grid>
            <Fade direction='left'>
            <CardContainer>
            <h2>Fall 2022</h2>
            <p>CMSC 131: Object-Oriented Programming I</p>
            <p>ECON 181: Putting a Price on the Environment</p>
            <p>EDCP 210: Peer Counseling Skills</p>
            <p>GEOG 330: Society and Sustainability</p>
            <p>PHYS 235: The Manhattan Project</p>
            </CardContainer>
            </Fade>
            <Fade direction='right'>
            <CardContainer>
            <h2>Spring 2023</h2>
            <p>CMSC 132: Object-Oriented Programming II</p>
            <p>CMSC 250: Discrete Structures</p>
            <p>COMM 107: Oral Communication: Principles and Practices</p>
            <p>MUSC 210: The Impact of Music on Life </p>
            </CardContainer>
            </Fade>
            <Fade direction='left'>
            <CardContainer>
                <h2>Summer 2023</h2>
                <p>CMSC 216: Introduction to Computer Systems</p>
                <p>MATH 461: Linear Algebra for Scientists and Engineers</p>
                <p>ENGL 393: Technical Writing</p>
            </CardContainer>
            </Fade>
            <Fade direction='right'>
            <CardContainer>
                <h2>Fall 2023</h2>
                <p>CMSC 330: Organization of Programming Languages</p>
                <p>CMSC 351: Algorithms</p>
                <p>CMSC 388J: Web Applications with Python and Flask</p>
                <p>EDHD 200: Paradigms and Perspectives in Human Development</p>
                <p>EDHD 306: Research Methods in Human Development</p>
            </CardContainer>
            </Fade>
            <Fade direction='left'>
            <CardContainer>
                <h2>Spring 2024</h2>
                <p>CMSC 320: Introduction to Data Science</p>
                <p>CMSC 433: Programming Language Technologies</p>
                <p>CMSC 421: Introduction to Artificial Intelligence</p>
                <p>EDHD 320: Human Development Through the Lifespan</p>
                <p>PHIL 220: Bioethics: Regulating Right and Wrong</p>
            </CardContainer>
            </Fade>
            <Fade direction='right'>
            <CardContainer>
                <h2>Fall 2024</h2>
                <p>CMSC 422: Introduction to Machine Learning</p>
                <p>CMSC 452: Design and Analysis of Computer Algorithms</p>
                <p>CMSC 471: Introduction to Data Visualization</p>
                <p>CMSC 390O: Special Topics in CS; The Coding Interview</p>
                <p>EDHD 4xx: </p>
                <p>EDHD 4xx: </p>
            </CardContainer>
            </Fade>
        </Grid>
      <Footer/>
    </Container>
  );
};

export default School;

const Container = styled.div`

  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: url('/images/scbg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  h1{
    padding-top: 15vh;
    padding-bottom: 50px;
  }

  @media only screen and (max-width: 485px) {
    h1{
      font-size: 25px;
      padding-left: 20px;
    }
  }
`;



const CardContainer = styled.div`
  height: 250px;
  width: 500px;
  padding-left: 25px;
  border-radius: 2rem;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center; 
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05); /* Increase scale on hover */
  }
  h2{
    color: #81B8D7;
    padding-top: 0px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center; 
  }
  p{
    margin-bottom: 5px;
    font-weight: 400;
  }
  @media only screen and (max-width: 485px) {
    height: auto;
  width: 300px;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-top: 8px;
    padding-bottom: 10px;
    justify-content: center;
    h2{
      color: #81B8D7;
      padding-top: 0px;
      padding-bottom: 0px;
      display: flex;
      justify-content: center; 
      font-size: 18px;
    }
    p{
      margin-bottom: 5px;
      font-weight: 400;
      padding-top: 5px;
      font-size: 12px;
    }
  }
`;

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
grid-auto-rows: minmax(100px, auto);
padding-bottom: 50px;
@media only screen and (max-width: 485px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}`;