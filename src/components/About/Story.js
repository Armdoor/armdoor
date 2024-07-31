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
        <p>My freshman year of high school when we were introduced to Java. We started with the basics, like loops and printing statements on BlueJ, and by the end of the course, we were creating simple shapes like triangles and diamonds using loops. I hated that class. However, I was always fascinated by space and the cosmos, ever since watching "Cosmos" in 2014. I dreamed of pursuing a career related to space, rockets, and the unknown.
        </p>
        </Fade>
        <Fade direction='right'>
        <p>Because of my interest in space and rockets, combined with a desire to engage in technical problem-solving, I decided to pursue Mechanical Engineering with the hope of pivoting to Aerospace Engineering for my master's. I accepted an offer from Iowa State University (ISU). During my freshman year at ISU, all engineering students were required to take an introductory engineering course that included learning MATLAB. When coding appeared on the syllabus, my immediate reaction was, "Not this again!" (insert crying emoji here).
         </p>
          </Fade>
          <Fade direction='left'>
          <p>
          To my surprise, I enjoyed the coding aspect of the course so much that I decided to switch my major to Computer Science. Embracing this newfound passion, I began seeking financial opportunities and applied for a transfer to Arizona State University. I was thrilled to be accepted with a New American University Scholarship worth $16,000.
          </p>
          </Fade>
          <Fade direction='right'>
          <p>
          Fast forward to my second semester at ASU, I found myself craving more academic challenges. I applied to more competitive schools and was accepted at both Stony Brook University and the University of Maryland, College Park. Ultimately, I chose to transfer to the University of Maryland, even though many of my CS and other course credits didn't transfer, requiring me to start from scratch. Despite this setback, I embraced the challenge and dove into my new courses with renewed determination.
         </p>
          </Fade>
          <Fade direction='left'>
          <p>
          At the University of Maryland, I have taken advantage of every opportunity to expand my knowledge and skills. I have developed a strong foundation and working extensively with technologies. Some of the key courses I've taken include: 
          
          <br />
          <ul>
            <li>Introduction to Algorithms: This course solidified my understanding of fundamental algorithms and data structures, emphasizing problem-solving and analytical thinking.
            </li>
            <li>
            Operating Systems: I learned about the inner workings of operating systems, including process management, memory management, and file systems.

            </li>
            <li>
            Database Systems: This class provided me with a deep understanding of database design, SQL, and the importance of efficient data management.

            </li>
            <li>Artificial Intelligence: I explored the principles and techniques used in AI, including machine learning, neural networks, and natural language processing.
            </li>
            <li>Software Engineering: Here, I gained practical experience in software development methodologies, project management, and collaborative teamwork.
            </li>
            <li>Introduction to Data Science: This course introduced me to the essential concepts and techniques in data science, including data wrangling, visualization, statistical analysis, and machine learning.
            </li>
          </ul>
          </p>
          </Fade>
          <Fade direction='right'>
          <p>
            In addition to my coursework, I've gained valuable experience working with a diverse team at ISU Dining, where I learned the importance of collaboration, adaptability, and delivering quality service. These skills have been invaluable in my tech projects, where teamwork and communication are key. <br />
            My passion for technology extends beyond the classroom. I am particularly excited about the potential of machine learning and iOS development to create innovative solutions. Whether it's developing an app to simplify daily tasks or using machine learning to uncover new insights from data, I am eager to apply my skills to make a meaningful impact. <br />
            When I'm not coding, you'll find me buried in a book on quantitative finance, philosophy,  experimenting with new recipes in the kitchen, or exploring the latest tech trends. I believe in the power of continuous learning and am always on the lookout for new challenges and opportunities to grow. <br />
            I'm excited to connect with fellow tech enthusiasts, professionals, and anyone interested in collaborating on exciting projects. Feel free to reach out if you'd like to chat about the latest in tech, share coding tips, or just exchange favorite programming jokes!
            </p>
        </Fade>
      </TextArea>
      <Footer/>
    </Container>
  )
}

export default Story

const Container = styled.div`
height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url('/images/bkg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

`

const TextArea = styled.div`
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