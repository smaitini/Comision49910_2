import React, { useState } from 'react'
import Counter from './Counter'

const CounterContainer = ({stock, initial=1, onAdd}) => {
    const [stocki, setStocki] = useState(stock)
    const [contador, setContador] = useState(initial) 

    const manejoStock = (estado)=>{
        if(estado && stocki >0){
            setStocki(stocki-1);
            setContador(contador+1);
        }else if (!estado && contador>0){
            setContador(contador-1)
            setStocki(stocki+1);
        }else if (stocki <=0){
            alert("No nos quedo mas")
        }
        
    }
  return (
    <Counter manejoStock={manejoStock} contador={contador} onAdd= {onAdd}/>

  )
}

export default CounterContainer