import React, { useRef, useState, useEffect,useMemo } from 'react';
import Home from './components/home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Links from './components/Links/Links';
import Contact from './components/Contact/Conatct';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

function App() {
  const sections = useMemo(() => ['home', 'about', 'link', 'contact'], []);
  const [currentSection, setCurrentSection] = useState(0);
  const [showDownArrow, setShowDownArrow] = useState(true);
  const appRef = useRef(null);

  const handleDownArrowClick = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prevSection) => {
        scrollToSection(sections[prevSection + 1]);
        return prevSection + 1;
      });
    }
  };

  const scrollToSection = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      const isContactVisible = contactSection ? isElementInViewport(contactSection) : false;
      setShowDownArrow(!isContactVisible);
  
      // Update currentSection based on scroll position
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      let updatedSection = 0;
  
      for (let i = 0; i < sections.length; i++) {
        const sectionElement = document.getElementById(sections[i]);
        if (sectionElement) {
          const sectionOffset = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
  
          if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
            updatedSection = i;
            break;
          }
        }
      }
  
      setCurrentSection(updatedSection);
    };

    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  
  }, [sections, setCurrentSection, setShowDownArrow]);
  

  return (
    <div className="App" ref={appRef}>
      {showDownArrow && <DownArrow src='/images/arrow.png' onClick={handleDownArrowClick} />}
      <Header />
      <Home id="home" />
      <About id="about" />
      <Links id="link" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

const DownArrow = styled.img`
  position: fixed;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  bottom: 20px;
  left: 50%;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
  z-index: 100;
  
  @media only screen and (min-width: 400px){
    display: none;
  }
`;

export default App;