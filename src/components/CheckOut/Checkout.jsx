import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { serverTimestamp } from '@firebase/firestore'
import { db } from '../../firebaseConfig'
import { collection, addDoc, updateDoc, doc } from "firebase/firestore"
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [userData, setUserData] = useState({
        name:"",
        phone:"",
        email: ""
    })
    const [errores, setErrores] = useState({
        name:"",
        phone:"",
        email: ""
    })
    const [orderId, setOrderId] = useState(null);

    const {cart, getTotalPrice, clearCart} = useContext ( CartContext )
    const total = getTotalPrice();

    const handleChange = (e)=>{
        setUserData({...userData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let order = {
            buyer : userData,
            items : cart, 
            total, 
            date: serverTimestamp()
        }

        const ordersCollection = collection (db , "orders")
        addDoc(ordersCollection , order).then((res)=>setOrderId(res.id))

        cart.forEach( (elemento) => {
            updateDoc( doc(db, "productos", elemento.id ), {stock: elemento.stock - elemento.quantity} )
        });

        clearCart();
    }

    return (
        <>
        {orderId ? (
        <div>
            <h2>Gracias por su compra, comprobante  {orderId}</h2>
            <Link to="/">Seguir comprando</Link>
        </div> ) : (
           

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Ingresa tu nombre' onChange={handleChange} />
                <span style={{color: "crimson"}}>{errores.nombre}</span>
                <input type="text" name="phone" placeholder='Ingresa tu telefono' onChange={handleChange} />
                <span style={{color: "crimson"}}>{errores.apellido}</span>
                <input type="text" name="email" placeholder="Ingresa tu mail" onChange={handleChange} />
                <span style={{color: "crimson"}}>{errores.email}</span>
                <button type="submit" >Comprar</button>
            </form>

        
        )}
        </>
    )
}

export default Checkout