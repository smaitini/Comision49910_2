
import { useState } from "react";
import Boton from "../Boton/Boton";

const QuantityButtons = ({cantidad, stock, setCantidad, className}) => {
  //const [counter, setCounter] = useState(1);
// console.log(cantidad)
  const handleRestar = () => {
   cantidad >1 &&    setCantidad(cantidad - 1);
  };
  const handleSumar = () => {
    cantidad<stock && 
      setCantidad(cantidad + 1);
  };

  return (
    <div className="flex justify-items-center ">
    <button className = {className} onClick={handleRestar}>-</button>
    <h2 className = 'py-2 px-4 text-stone-600 flex font-bold my-4'>{cantidad}</h2>
    <button className = {className} onClick={handleSumar}>+</button>
    </div>
  );
};

export default QuantityButtons;