import { createContext, useState } from "react"


export const CartContext = createContext()

const CartContextComponent = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const addToCart = (product)=>{
   let exist= isInCart(product.id)
   if(exist){
     let newArr = cart.map( (elemento)=>{
      if(elemento.id === product.id){
        return {...elemento, quantity:product.quantity}
      }else {
        return elemento
      }
     })
     setCart (newArr)
     localStorage.setItem("cart", JSON.stringify(newArr))
   } else{
    setCart( [ ...cart, product ] )
    localStorage.setItem("cart", JSON.stringify([...cart, product]))
   }
   
  }

  const isInCart = (id)=>{
    let exist =cart.some(elemento=> elemento.id=== id)
    return exist
  }

  const getQuantityById = (id) =>{
    let product = cart.find((elemento)=>elemento.id===id)
    return product?.quantity;
  }

  //Limpiar el carrito

  const clearCart = () => {
    setCart ([])
    localStorage.removeItem("cart")
  }
  //Obtener el total del carrito
  const getTotalPrice = () =>{
    let total = cart.reduce((acc, elemento)=> {
      return acc + (elemento.precio * elemento.quantity)
    }, 0)
    return total
  }


  //Borrar un elemento particular del carrito
  const deleteProductoById = (id) =>{
    let newArr = cart.filter((producto)=> producto.id !== id)//
    setCart(newArr)
    localStorage.setItem("cart", JSON.stringify( newArr ))
  }

  //Obtener la cantidad de elementos

  const getTotalQuantity = () => {
    let total = cart.reduce ((acc, elemento) => {
      return acc + elemento.quantity
    }, 0)
    return total;
  }

    const data = {
        cart: cart,
        addToCart: addToCart,
        getQuantityById: getQuantityById,
        clearCart: clearCart,
        deleteProductoById: deleteProductoById,
        getTotalPrice: getTotalPrice,
        getTotalQuantity: getTotalQuantity

    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextComponent