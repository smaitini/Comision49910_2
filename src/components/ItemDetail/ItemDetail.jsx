import Contador from "../Contador/Contador";
import "./ItemDetail.css";

const ItemCard = ({ item }) => {
  console.log(item);
  return (
    // <div className='card_mia margenes'>
    //     <div className="card_mia_ajustes">
    //       <img className="card_img" src={item.img} alt={item.name} />
    //       <div className="card_mia_ajustes_texto fondo_crema">
    //       <div className = 'fondo_rojo letras_grandisimas letras_claras texto_centrado bold subrayado'>{item.subcategory}</div>
    //       <div className = 'fondo_rojo letras_grandisimas letras_claras texto_centrado bold'>{item.name}</div>
    //       <div className='bold letras_grandes'>Descripcion: {item.description}</div>

    //       <div>{item.description}</div>
    //       <div className='letras_precio letras_grandes italico texto_centrado bold'>$ {item.price}</div>
    //       <div>{item.description}</div>
    //       <div>Stock {item.stock}</div>
    //       <Contador className='centrado'/>
    //       </div>
    //     </div>
    // </div>
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
            <h2 className="text-xl text-stone-600 font-bold ">${item.price}</h2>
            <span className="text-4x1 text-stone-600 font-bold ">
              Stock: {item.stock}
            </span>
            <Contador hasta={item.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
