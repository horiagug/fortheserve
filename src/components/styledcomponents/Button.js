import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.primary ? "#6fc13e" : "#0002"};
  
  color: white;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;

  margin: 1em;
  padding: 0.25em 1em;
  border: ${props => props.primary? "2px solid transparent" : "2px solid white"};
  border-radius : 100px;
  transition: background 0.5s;

  :hover {
      background: ${props => props.primary ? "#1c880d" : "white"}
      color: ${props => props.primary ? "white" : "black"};
  }
`;

export {Button}