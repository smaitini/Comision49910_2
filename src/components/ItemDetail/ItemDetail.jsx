import { useContext, useState } from "react";
import Boton from "../Boton/Boton";
import Contador from "../Contador/Contador";
import QuantityButtons from "../QuantityButtons/QuantityButtons";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";

const ItemCard = ({ item }) => {
  let Ars = new Intl.NumberFormat('en-US', {style: 'currency',currency: 'ARS'})
  const [cantidad, setCantidad] = useState(1)
  const { addToCart, isInCart } = useContext(CartContext)

  const handleAgregar = () => {
    const itemToBuy = {...item,cantidad,}
    addToCart(itemToBuy)
    console.log(itemToBuy)
  }
  return (
  
    <div className=" w-96 h-auto p-3 flex flex-col  items-center rounded-2xl mt-5 shadow-xl">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col items-center ">
          <span className="text-3xl text-zinc-900 font-bold mb-5">
            {item.category}
          </span>
          <span className="text-xl text-zinc-900 font-bold mb-5">
            {item.name}
          </span>
          <img className="rounded-3xl" src={item.img} alt={item.nombre} />
          <div className=" bg-zinc-200 p-3 flex flex-col items-center rounded-2xl w-full">
            <span className=" text-stone-600 font-bold text-xl">
              {item.description}
            </span>
            <h2 className="text-xl text-stone-600 font-bold ">{Ars.format(item.price)}</h2>
            <span className="text-4x1 text-stone-600 font-bold ">
              Stock: {item.stock}
            </span>
            <QuantityButtons 
                cantidad= {cantidad}
                stock= {item.stock}
                setCantidad = {setCantidad }
                className ="bg-red-500 rounded items-center py-2 px-4 text-stone-50 flex font-semibold my-4"
                />
                {/*
                Esto no va más porque necesito que me devuelva la cantidad de elementos del item. El contador solo muestra
                <Contador hasta={item.stock} className="bg-red-500 rounded items-center py-2 px-4 text-stone-50 flex font-semibold my-4" /> */}
            <Boton onClick= {handleAgregar} className='bg-gray-100 rounded flex items-center py-2 px-4 text-center text-red-500 font-semibold my-4'>COMPRAR</Boton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
