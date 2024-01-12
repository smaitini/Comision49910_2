import ItemList from "../ItemList/ItemList";
// import pedirDatos from "../../utils/utils";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import Contador from "../Contador/Contador";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { green } from "@mui/material/colors";


const ItemListContainer = () => {
  //console.log(categoria)
  //const { productos, loading } = useProductos('Categoria',categoria)

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();
  
  useEffect(() => {
    setLoading(true);
      const productosRef = collection(db,'productos')
      const consulta = categoria ? query(productosRef, where('category','==', categoria.toLowerCase())) : productosRef
      getDocs(consulta)
      .then((prod) => {
        const docs = prod.docs.map(item => {
          return {...item.data(),
                  id: item.id}
        })
        console.log(docs)
        setProductos(docs)
      })
      .finally(() => setLoading(false))
  //     .then((data) => {
  //       let itemData = categoria
  //         ? data.filter(
  //             (prop) => prop.category.toLowerCase() === categoria.toLowerCase()
  //           )
  //         : data;
  //       setProductos(itemData);
  //       setLoading(false);
  //     });
   }, [categoria]);

  return (
    <div className="container mx-auto content-center">
      {loading ? (
        <h2 className="text-center text-4xl mt-8 ">Cargando...</h2>
      ) : (
        <>
          {/* <Contador/> */}
          <div>
            <ItemList productos={productos} />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
