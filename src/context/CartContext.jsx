import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Agrega al carrito. Con ...cart, item le estoy dando al arra cart el valor de item tambien
  const addToCart = (producto) => {
    //console.log(producto)
    if (isInCart(producto.id)){
      console.log("entro porque encontro el producto")
      let newProducts = cart.map((item) => {
        if (item.id === producto.id) {
          return{
            ...item,
            cantidad: item.cantidad + producto.cantidad,};
          }else
          {
            return item
          }
        })
     setCart(newProducts)
     console.log("Puso el cantidad de producto")
    } else {
      setCart([...cart,producto])
      console.log("producto despues de insertarlo")
    }
    ver()
    
   //console.log(quantityByItem(producto.id))
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const itemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0);
  };

  const removeItem = (id) => {
    console.log("saco id " , id)
    setCart(cart.filter((item) => item.id !== id));
    console.log("remove", cart)
  };

  const quantityByItem = (id) => {
    //Acá hace la cantidad de productos por ID
    console.log("quantityDeProductos")
    const productos = cart.find((item) => item.id === id)
    console.log("Cantidad de productos" , productos.cantidad)
    return productos.cantidad
  }

 const ver = () => {
  console.log("veo el cart", cart)
 }



 
  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addToCart,
        clearCart,
        itemsInCart,
        totalCart,
        removeItem,
        // acavanlosnombresdelasfunciones,
        // ovaloresdevariablesdelcontexto
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
