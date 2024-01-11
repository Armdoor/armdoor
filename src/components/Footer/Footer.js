import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
      <Wrap>
          Copyright &#169; 2023 Aarambh Sanoria. All Rights Reserved.
    </Wrap>
  )
}

export default Footer

const Wrap = styled.div`
width: 100vw;
height: 4rem;
background: rgb(40,40,40);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-weight: 300;
font-size: medium;
color: white;

`