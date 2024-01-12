import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import pedirDatos from "../../utils/utils";
//import ItemCard from "../ItemCard/ItemCard";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db,'productos',itemId)
    getDoc(docRef)
      .then((docItem) => {
        const doc = {
          ...docItem.data(),
          id: docItem.id          
        }
        setItem(doc)
        // console.log(doc)
      })
      .finally(() => setLoading(false))
    // pedirDatos() // <= Promise
    //   .then((data) => {
    //     const itemData = data.find((prop) => prop.id === Number(itemId));
    //     console.log("este es el ´roducto", itemData);
    //     setItem(itemData);
    //     setLoading(false);
    //   });
  }, []);

  return (
    <div className="flex  m-auto items-center justify-center flex-row">
      {loading ? (
        <h2>Cargando </h2>
      ) : (
        <div>
          <ItemDetail item={item} />
        </div>
      )}
    </div>
  ); //<ItemDetail item={item}/>
};

export default ItemDetailContainer;
