const Button = styled.button`
  background : ${props => props.primary ? '#6fc13e' : '#0002'};
  color : #fff;
  
  font-size : 1em;
  margin : 1em;
  padding : 0.25em 1em;
`;

render (
    <div>
        <Button >Normal</Button>
        <Button Primary>Primary</Button>
    </div>
)