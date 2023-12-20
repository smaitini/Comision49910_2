import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {

  return (
     <>
    <h2 className="flex flex-col text-4xl font-bold">Productos</h2>
   
    <section className="grid grid-cols-4">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
    </section>
    </>
  );
};

export default ItemList;
