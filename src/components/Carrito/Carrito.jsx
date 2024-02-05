import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'


const Carrito = () => {
   const {cart, clearCart, deleteProductoById, getTotalPrice} = useContext( CartContext )

   let total = getTotalPrice()

   const clearCartWithAlert =() =>{
    Swal.fire({
        title: "Seguro deseas eliminar el carrito?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Si, eliminar",
        denyButtonText: `No, no eliminar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            clearCart();
          Swal.fire("Carrito eliminado!", "", "success");
         
        } else if (result.isDenied) {
          Swal.fire("No hay cambios en el carrito", "", "info");
        }
      });
   }

    return (
        <div>
            <h1>Carrito</h1>

            {
                cart.map((producto)=>(
                    
                    <div key={producto.id} style={{border: "2px solid black"}}>
                    <h2>{producto.titulo}</h2>
                    <h3>{producto.descripcion}</h3>
                    <h2>${producto.precio}</h2>
                    <h2>cantidad: {producto.quantity}</h2>
                    <img src={producto.imagen} alt={producto.titulo} className='img-carrito' />
                    <Button variant="outline-danger" onClick={() => deleteProductoById(producto.id)}> Eliminar </Button>
                    </div>
                    )
                )
            }

            {
             cart.length >0  &&      

                 <div>
                <h4>El total a pagar es : {total}</h4>
                <Link to="/checkout">
                    <Button variant="success" > Finalizar compra</Button>
                </Link>
                <Button variant="outline-danger" onClick={clearCartWithAlert} > Vaciar Carrito </Button>

                </div>
            }
     
         
        </div>
    )
}

export default Carrito