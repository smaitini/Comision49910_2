import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos} ) => {
  return (
    <div className='Caards'>
        {productos.map(p => 
        <div key= {p.id} >
            <Item p={p}/>
        </div>  
            
        )}
    </div>
  )
}

export default ItemList