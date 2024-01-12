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
        <p>
        Hi, I'm Akshit Sanoria, but you can call me Aarambh. My journey in the States began on January 13, 2021, where I spent my initial 11 days at Red Roof Inn Ames and one more night at Best Western Plus University Park Inn & Suites. On January 25, I moved into my first apartment with no mattress, but thankfully, my roommates shared their couch until my mattress arrived. As a 19-year-old, I embarked on my new life in a new country, devoid of friends and family.
        </p>
        </Fade>
        <Fade direction='right'>
        <p>
At that time, I was studying Mechanical Engineering at Iowa State University, Ames. My first job at Friley's Windows, part of Iowa State Dining, began to shape my interpersonal skills, teamwork, and adaptability. Working at a campus dining facility taught me valuable lessons in customer service and communication, enhanced my attention to detail and multitasking abilities, and provided significant personal and professional growth.
</p>
</Fade>
<Fade direction='left'>
<p>
Amidst the ongoing COVID cases, my classes were offline, and a specific class, "Engineering Problem with Computer Applications Laboratory," changed my perspective on coding. Despite previous struggles, I discovered my enjoyment for coding and decided to switch my major to computer science. During the summer, I applied to more schools and received acceptance from Arizona State University with a $16,000 scholarship.
</p>
</Fade>
<Fade direction='right'>
<p>
In August, I moved to Arizona, starting my first semester as a computer science student with in-person classes. After a year, feeling unchallenged, I sought advice from a senior friend and decided to transfer. By April, I got an admission offer from the University of Maryland, College Park, and despite a substantial scholarship, I chose to transfer. I also had admission letters from the University of Massachusetts Amherst and Stony Brook University.
</p>
</Fade>
<Fade direction='left'>
<p>
Unable to take classes or apply for internships due to visa constraints, I spent the summer back home. Refreshed, I joined UMD College Park and immediately felt the challenge. After the first semester, I realized I was truly learning. The second semester brought new experiences, friends, and the highlight – Bitcamp hackathon. To close the gap, I took additional classes during the summer.
</p>
</Fade>
<Fade direction='right'>
<p>
Now in my third semester, I can confidently say it's been the most challenging yet. I learned new concepts, including a programming language (lambda) using Ocaml. Here I am today, proud of my journey and the growth I've achieved
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
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: url('/images/storybg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

`

const TextArea = styled.div`
display flex;
align-items: center;
justify-content: center;
padding-top: 20vh;
padding-right: 150px;
padding-bottom: 50px;
padding-left: 150px;
p{
  padding-top: 10px;
  padding-bottom: 10px;
  color: #333333;
  font-weight: 600;
  font-family: 'Poppins';font-size: 19px;
}
@media (min-width: 768px) {
  padding: 20px;
  p {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  padding: 50px;
  p {
    font-size: 19px;
  }
}
`