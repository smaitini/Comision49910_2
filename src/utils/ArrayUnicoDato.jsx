import { useEffect, useState } from "react";
import pedirDatos from "./utils";

const unico = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    pedirDatos() // <= Promise
      .then((data) => {
        setProductos(data);
      });
  }, []);
  
};

export default unico;
