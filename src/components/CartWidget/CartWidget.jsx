import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
 const {getTotalQuantity} = useContext( CartContext );

 let total = getTotalQuantity();
  return (
    <div>
        <button><IoCartOutline /><span>{total}</span></button>
        
    </div>
  )
}

export default CartWidget