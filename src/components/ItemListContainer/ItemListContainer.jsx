import ItemList from "../ItemList/ItemList";
import useProductos from "../../hooks/useProductos";

const ItemListContainer = () => {
  const { productos, loading } = useProductos()

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