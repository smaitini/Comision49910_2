//import './CartWidget.css'

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// eslint-disable-next-line react/prop-types
function CartWidget({imagen,alt}) {
    const {itemsInCart} = useContext(CartContext)
    return (
        <div className='flex justify-between'>
            <img className="w-s h-8 gap-4" src={imagen} alt={alt} />
            <p className="text-white hover:text-red-200 text-lg font-semibold gap-2">{itemsInCart}</p>
        </div>
    )
}

export default CartWidget;