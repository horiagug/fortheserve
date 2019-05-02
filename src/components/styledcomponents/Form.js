import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    margin:auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;
const Input = styled.input`
text-align: center;
margin: 2px, auto;
width:30%;
height:1.5rem;
`;

export {Form, Input}