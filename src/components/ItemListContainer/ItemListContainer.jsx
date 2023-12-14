import ItemList from "../ItemList/ItemList";
import useProductos from "../../hooks/useProductos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const {categoria} = useParams()
  //console.log(categoria)
  const { productos, loading } = useProductos('Categoria',categoria)

  return ( 
        <div
           className="container mx-auto">
          {loading ? (
            <h2 className="text-center text-4xl mt-8">Cargando...</h2>
          ) : (
            <ItemList  productos={productos} />
          )}
        </div>
  );
};

export default ItemListContainer;