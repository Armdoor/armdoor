import React from 'react'
import Linkheader from '../../Linkheader/Linkheader.js';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";
import Footer from '../../Footer/Footer.js';


const Projects = () => {

    const projectsML = [
        {
          title: "AI Sudoku Solver (Group Project)",
          image: "/images/sudoku.jpg",
          stack: ["Python", "AC3" ,"algorithm", "backtracking",  "heuristics"] ,
          link: "https://armdoor.github.io/SudokuSolver/"
        },
        {
          title: "Stock Prediction",
          image: "/images/stock.webp",
          stack: ["Seaborn", "Numpy", "Python", "Pandas", "NumPy", "Statistical Analysis"],
          link: "https://github.com/yourusername/StockPrediction"
        },
        {
          title: "Photo Classifier",
          image: "/images/image_classifier.png",
          stack: ["Python", "Jupyter" ,"Notebooks", "PyTorch"],
          link: "https://github.com/yourusername/PhotoClassifier"
        },
        {
          title: "Car Market Analysis (Group Project)",
          image: "/images/car.jpeg",
          stack: ["Python", "Jupyter" ,"Notebooks", "PyTorch"],
          link: "https://github.com/yourusername/CarMarketAnalysis"
        },
        {
          title: "FlixFriends",
          image: "",
          stack: ["React.js", "ASP.NET", "SQL", "Python"],
          link: ""
        },
        {
          title: "WhatFlower",
          image: "",
          stack: ["Swift", "UIKit", "Core ML"],
          link: ""
        },
        {
          title: "Frozen Lake ",
          image: "",
          stack:[ "OpenAI Gymnasium", "Python", "Numpy", "Pygame", "OpenCV"],
          link: ""
        },
        {
          title: "BitConnect",
          image: "",
          stack: [],
          link: ""
        },
        {
          title: "Flash Chat",
          image: "",
          stack: [],
          link: ""
        }
        // {
        //   title: "",
        //   image: "",
        //   description: "",
        //   link: ""
        // }
      ];





  return (
    
    <Container>
        <Linkheader/>
        <Page>
        <Grid>
          {projectsML.map((project, index) => (
            <a key={index} href={project.link} style={{ textDecoration: 'none' }}>
              <CardContainer>
                <CardImage src={project.image} alt={project.title} />
                <Contents>
                  <h2>{project.title}</h2>
                  <StackButt>{project.stack.map((s,i)=>(
                    <Stack key={i}>{s}</Stack>
                  ))}</StackButt>
                </Contents>
              </CardContainer>
            </a>
          ))}
        </Grid>
        </Page>
       
      <Footer/>
        
    </Container>
  )
}


export default Projects;

const Container = styled.div`
    height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: url('/images/bkg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;

`;


const Grid = styled.div`
margin-top: 15vh;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 20px;
grid-auto-rows: minmax(100px, auto);
padding-bottom: 50px;

@media only screen and (max-width: 650px) {
  display: columns;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  padding-bottom: 50px;
  }

/* Tablets */
@media only screen and (min-width: 651px) and (max-width: 1100px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  padding-bottom: 50px;
}

/* Laptops and small screens */
@media only screen and (min-width: 1101px) and (max-width: 1600px) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  padding-bottom: 50px;
}`



const CardContainer = styled.div`
  height: 325px;
  width: 370px;
  border-radius: 1rem;
  backdrop-filter: blur(.5px);
  background: rgba(51, 51, 51, 0.8);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05); /* Increase scale on hover */
  }
  @media only screen and (max-width: 650px) {
    min-height: 255px;
    height: auto;
    width: 270px;
    overflow: hidden;
  }

  /* Tablets */
  @media only screen and (min-width: 651px) and (max-width: 1100px) {
    height: 255px;
    width: 270px;
  }

  /* Laptops and small screens */
  @media only screen and (min-width: 1101px) and (max-width: 1600px) {
    height: 275px;
    width: 320px;

  }
`;



const Page = styled.div``

const CardImage = styled.img`
    display: inline;
    height: 175px;
    width: 370px;
    border-radius: .5rem .5rem 0px 0px; 

  @media only screen and (max-width: 650px) {
    height: 145px;
    width: 270px;
  }

/* Tablets */
@media only screen and (min-width: 651px) and (max-width: 768px) {
  height: 175px;
    width: 270px;
}

/* Laptops and small screens */
@media only screen and (min-width: 769px) and (max-width: 1200px) {
  height: 175px;
    width: 320px;
}
}
  `

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  h2{
    color: white;
    font-size: 1.3rem;
    padding: .8rem 0 0 1rem;
  }
 

  @media only screen and (max-width: 650px) {
  h2{
    font-size: 1.1rem;
    padding: .4rem 0 0 .5rem;
  }
  
  }

/* Tablets */
@media only screen and (min-width: 651px) and (max-width: 768px) {
  
}

/* Laptops and small screens */
@media only screen and (min-width: 769px) and (max-width: 1200px) {
  
}
  `


  const StackButt = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: .85em;
    padding: .4rem 0 .5rem .4rem;
    gap: .4rem;`

  const Stack = styled.div`
    display: flex;
    border: 2px solid #495057;
    border-radius: 5px;
    background-color: #495057;
    color: white;
    text-align: center;
    cursor: pointer;
    padding: 0.3rem; /* Adjust padding if necessary */
    min-width: fit-content;
    &:hover {
      background-color: #0056b3;
    }
    `