import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
    color: white;
    background: url(https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80);
    background-size: cover;
    background-position: center; 
    height: 20rem;
    display: flex;  
    flex-flow: row wrap;
   align-content: center;
`;

const P = styled.p`
margin: auto;
line-height: 1.5;
color: #fff;
font-size: 1.2rem;
text-align: center;
flex: 1 100%;
font-weight: 500;
`;

const CTA = styled.div`
flex: 1 100%;
text-align: center;
`;

export {Banner, P, CTA}