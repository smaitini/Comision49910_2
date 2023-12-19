import { useState } from "react";
import Boton from "../Boton/Boton";

const Contador = ({ hasta}) => {
  const [counter, setCounter] = useState(1);

  const handleRestar = () => {
    counter >1 &&    setCounter(counter - 1);
  };
  const handleSumar = () => {
    counter<hasta && 
      setCounter(counter + 1);
  };

  return (
    <div className="flex justify-items-center ">
    <button className = "bg-slate-900 rounded items-center py-2 px-4 text-stone-50 flex font-semibold my-4" onClick={handleRestar}>-</button>
    <h2 className = 'py-2 px-4 text-stone-600 flex font-bold my-4'>{counter}</h2>
    <button className = "bg-slate-900 rounded items-center py-2 px-4 text-stone-50 flex font-semibold my-4" onClick={handleSumar}>+</button>
    </div>
  );
};

export default Contador;
