import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CounterContainer from '../Counter/CounterContainer'
const Item = ({p}) => {
  return (
    <Link to= {'/item/'+ p.id} className='text-decoration-none'>
      <div >
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={p.imagen} />
        <Card.Body>
            <Card.Title>{p.titulo}</Card.Title>
            <Card.Title>${p.precio}</Card.Title>
            {/* <CounterContainer stock={5} initial ={1}/> */}
        </Card.Body>
    </Card>
    </div>
    </Link>
  )
}

export default Item