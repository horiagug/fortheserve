import React from 'react'
import styled from 'styled-components'

const Scores = styled.div`
    display: flex;  
    flex-flow: row wrap;
   align-content: center;
`;

const SelectPlayerContainer = styled.div`
display: flex;  
flex-flow: row wrap;
align-content: center;
`
const Selector = styled.div`
flex: 1 48%
align-content: center;
`

const Player = styled.div`
flex: 1 50%;
text-align: center;
justify-content: space-around;
`;

const VerticalLine = styled.div`
border: 0;
width: 1px;
margin: 1px 0;
background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
`

const CTA = styled.div`
display: flex;
flex-wrap: wrap;
align-content:flex-end;
justify-content: space-around;
height: 15%
`

export {Scores, Player, SelectPlayerContainer, Selector,VerticalLine, CTA}