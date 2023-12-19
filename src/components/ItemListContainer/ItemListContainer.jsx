import ItemList from "../ItemList/ItemList";
import pedirDatos from "../../utils/utils";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Contador from "../Contador/Contador";

const ItemListContainer = () => {
  //console.log(categoria)
  //const { productos, loading } = useProductos('Categoria',categoria)

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirDatos() // <= Promise
      .then((data) => {
        let itemData = categoria
          ? data.filter(
              (prop) => prop.category.toLowerCase() === categoria.toLowerCase()
            )
          : data;
        setProductos(itemData);
        setLoading(false);
      });
  }, [categoria]);

  return (
    <div className="container mx-auto ">
      {loading ? (
        <h2 className="text-center text-4xl mt-8 ">Cargando...</h2>
      ) : (
        <>
          <div>
            <ItemList productos={productos} />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
