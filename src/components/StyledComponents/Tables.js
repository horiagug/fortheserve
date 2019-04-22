import React from 'react'
import styled from 'styled-components'

const TH = styled.th`
   background: #f0f0f0;
   margin: auto;
   width:13%
   text-align: center;

`;

const Table= styled.table`
   margin: auto;
   width: 80%
`;

const TR = styled.tr`
`;

const TD = styled.td`
   text-align: center;
   border-bottom: 2px dashed rgba(192, 192, 192, .3);
`;

export {TH, TR, TD, Table}