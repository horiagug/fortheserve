import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
    margin: auto;
    text-transform: uppercase;
    line-height: 1;
    font-size: 2.8rem;
    font-weight: 800;
    color: ${props => props.dark ? "#000" : "#fff"}
    text-align: center;
    flex: 1 100%;
`;

const H2 = styled.h2`
    margin: 20px, auto;
    text-transform: uppercase;
    line-height: 1;
    font-size:2 rem;
    font-weight: 600;
    text-align: center;
    flex: 1 100%`;

export {H1, H2}