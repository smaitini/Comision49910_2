import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import { db } from '../../firebaseConfig';
import { getDoc, collection, doc } from "firebase/firestore"


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  const {addToCart, getQuantityById} = useContext(CartContext)

  let totalQuantity = getQuantityById(id)
  

  useEffect(() => {
   let itemCollection = collection(db, "productos");
   let redDoc = doc(itemCollection, id)
   getDoc(redDoc).then((res)=>{setProducto({id: res.id, ...res.data()})
  })
  }, [id])

  const onAdd = ( cantidad ) =>{

    let item = {
      ...producto,
      quantity: cantidad,
    };
    addToCart (item)

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500
    });
   
  }
  return (
   
      <div >
        {producto && <ItemDetail produc={producto} onAdd= {onAdd} initial={totalQuantity}/> }
          
      </div>
    
  )
}

export default ItemDetailContainer