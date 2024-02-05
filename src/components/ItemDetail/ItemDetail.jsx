import React from 'react'
import Card from 'react-bootstrap/Card';
import CounterContainer from '../Counter/CounterContainer';
import { Button } from 'react-bootstrap';


 

const ItemDetail = ({produc, onAdd, initial}) => {
  return (

    <div key={produc.id}>
      {
        initial &&  <h4>Ya tienes {initial} unidades </h4>
      }
   
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={produc.imagen} />
        <Card.Body>
            <Card.Title>{produc.titulo}</Card.Title>
            <Card.Title>${produc.precio}</Card.Title>
            <Card.Title>-{produc.descripcion}</Card.Title>
            <h5>Ya tienes {initial} en el carrito</h5>
        </Card.Body>
        <CounterContainer stock={produc.stock} initial={initial} onAdd={onAdd}/>
        
    </Card>
</div>
  )
}

export default ItemDetail