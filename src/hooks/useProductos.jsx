import { useEffect, useState } from "react"
import { pedirDatos } from "../utils/utils"
import useFetch from "./useFetch"

const useProductos = (parametro,id) => {

    //Hay dos parametros
    //1- Categorias (del itemListContainer) que a su vez puede ser el parametro ID:
    //                      a) Vacio, porque son todos los productos
    //                      b) Con categoria, porque elegi una categoria
    //2- El "IdProducto". Que trae como variable "ID" es campo ID del producto (cuando voy a ver un producto en si)

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos() // <= Promise
            .then((data) => {
                let items = ''
                if (parametro === "Categoria") {
                   items = id ? data.filter(prod => prod.category.toLowerCase() === id.toLowerCase()) : data
                } else if (parametro == "Id") {
                    items = data.filter(prod => prod.id === Number(id))
                } else { items = data}

                setProductos( items )
                setLoading( false )
            })
    }, [])
    
    return {
        productos,
        loading
    }
}

export default useProductos