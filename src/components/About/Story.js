import React from 'react'
import Linkheader from '../Linkheader/Linkheader';
import Footer from '../Footer/Footer';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";
const Story = () => {
  return (
    <Container>
      <Linkheader/>
      <TextArea>
        <Fade direction='left'>
        <p>My journey into tech began in high school with my first programming class in Java. We explored basic concepts like loops and printing patterns, and while it was all new to me, the logic behind it sparked my curiosity. Around the same time, I became fascinated with space and the cosmos after watching Cosmos in 2014, which inspired me to pursue a field where I could blend curiosity with technical problem-solving.
        </p>
        </Fade>
        <Fade direction='right'>
        <p>I started as a Mechanical Engineering major at Iowa State University, aiming to eventually work in Aerospace. During an introductory course, I was reintroduced to programming through MATLAB. This time, something clicked. I found joy in breaking down problems and building solutions from scratch, which led me to switch to Computer Science and explore the power of code more deeply.
         </p>
          </Fade>
          <Fade direction='left'>
          <p>
          Looking for greater opportunities, I transferred to Arizona State University with a $16,000 New American University Scholarship. Eager to challenge myself further, I later transferred to the University of Maryland, College Park, even though it meant restarting several core courses. I saw it as an opportunity to deepen my foundation and grow, both technically and personally.
          </p>
          </Fade>
          <Fade direction='right'>
          <p>
          At UMD, I’ve immersed myself in courses like Algorithms, Operating Systems, Artificial Intelligence, Databases, and Software Engineering, building a solid technical toolkit while sharpening analytical thinking, collaboration, and adaptability. I've also worked on cross-functional teams, developed dashboards for insights, and used machine learning to solve real-world problems.
         </p>
          </Fade>
          <Fade direction='left'>
          <p>
          Beyond academics, I’ve valued every opportunity to work with diverse teams, from campus jobs to internships, learning the importance of clear communication, feedback, and resilience. My passion lies in using technology to create practical, impactful solutions, especially in machine learning and mobile development.
          </p>
          </Fade>
          <Fade direction='right'>
          <p>
            Outside of tech, I’m constantly exploring, whether it’s philosophy, quantitative finance, cooking, or staying updated on emerging technologies. I'm deeply committed to lifelong learning and excited by the chance to collaborate, solve meaningful problems, and grow alongside others who share the same drive.
            </p>
        </Fade>
      </TextArea>
      <Footer/>
    </Container>
  )
}

export default Story

const Container = styled.div`
min-height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  background-image: url('/images/bkg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

`

const TextArea = styled.div`
flex: 1;
display flex;
align-items: center;
justify-content: center;
margin : 10rem;
p{
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  font-weight: 400;
  font-family: 'Poppins';font-size: 19px;
}
@media only screen and (max-width: 485px){
  margin: 2rem;
  padding-top: 3rem;
}

`