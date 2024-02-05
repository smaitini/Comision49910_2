import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList';
import { BeatLoader } from 'react-spinners';
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../../firebaseConfig';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    
    if (!id){
      let productsCollection = collection(db, "productos");
      getDocs(productsCollection).then((res)=>{
        let newArray = res.docs.map( product => {
          return {id: product.id, ...product.data()}
        })
      setProductos(newArray)
      })
  
    }else {
      let productsCollection = collection(db, "productos");
      let collectionFiltered = query(productsCollection, where("categoria", "==", id ));
      getDocs(collectionFiltered).then((res)=>{
        let newArray = res.docs.map( product => {
          return {id: product.id, ...product.data()}
        })
      setProductos(newArray)
      })
    }

    

  }, [id])

  if(productos.length === 0){
    return <div>
            <h2>Cargando...</h2>
            <BeatLoader size = {40} color= "red"/>
            </div>
            }
    

  return (
    <div >
      
      <div className='Caards'>
        
        <ItemList productos = {productos}/> 
      </div>
    </div>
  )
}

export default ItemListContainer