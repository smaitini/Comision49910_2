import { useState } from "react";
import Boton from "../Boton/Boton";

const Contador = ({ hasta,className}) => {
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
    <button className = {className} onClick={handleRestar}>-</button>
    <h2 className = 'py-2 px-4 text-stone-600 flex font-bold my-4'>{counter}</h2>
    <button className = {className} onClick={handleSumar}>+</button>
    </div>
  );
};

export default Contador;
