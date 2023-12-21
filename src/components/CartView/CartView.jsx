import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartView = () => {
    const {addToCart} = useContext(CartContext)
  return (
    //Aca va el contenido del carrito
    //todo los del producto + el boton de Borrar + los botones de agregar y quitar elementos
    <div>CartView</div>
  )
}

export default CartView