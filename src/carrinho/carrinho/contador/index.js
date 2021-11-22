
import { useEffect, useState } from 'react'
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 400;

  & > * {
    margin: .5em;
    background-color: #f5f5f5;
    padding: 0.3em .8em;
    user-select: none;
  }

  .menos {
    border-radius: 100%;
    cursor: pointer;
  }

  .quantidade {
    padding: 0.3em 1em;
  }

  .mais {
    border-radius: 100%;
    cursor: pointer;
  }
`



export default function Contador(props) {
  const [quantidade, setQtd] = useState(props.value);


  function incrementar() {
    if (quantidade >= 10)
      return;
    setQtd(quantidade+1)
  }

  function decrementar() {
    if (quantidade === 0) 
      return;
    setQtd(quantidade-1)
  }


  useEffect(() => {
   
    props.onChange(quantidade);
  
  }, [quantidade])



  return (
    <Container>
      <div className="menos" onClick={decrementar}>
        -
      </div>

      <div className="quantidade">
        {quantidade}
      </div>

      <div className="mais" onClick={incrementar}>
        +
      </div>
    </Container>
  )
}