import React from 'react'
import { Button } from 'react-bootstrap'

const Counter = ({manejoStock, contador, onAdd}) => {
  return (
    <div>
    
    <Button variant="outline-danger" onClick={() => manejoStock(true)}  >Sumar</Button>
    <h4>{contador}</h4>
    <Button variant="outline-danger" onClick={() => manejoStock(false)}  >Restar</Button>
    {/* <Button variant="success"  >Agregar al carrito </Button> */}
    <Button variant="success" onClick={()=>onAdd(contador)}>Agregar al carrito </Button> 

</div>
  )
}

export default Counter