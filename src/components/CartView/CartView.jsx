import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Button from "../Button/Button"
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartView = () => {

    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container m-auto">
                <h2 className="font-custom text-slate-200 text-5xl">Tu Carrito está vacío</h2>
                <hr />
                <p className="font-custom text-slate-200">Dale estilo a tu carrito</p>
                <Button><Link to={"/"}>Volver</Link></Button>

            </div>
        )
    }

    return (
        <div className="container m-auto">
            <h2 className="font-custom text-slate-200 text-5xl">Tu Carrito</h2>
            <hr />
            <ul className="flex flex-col gap-5">
                {
                    cart.map((item) => (
                        <li key={item.id} className="flex gap-5 my-4">
                            <img className="w-40" src={item.thumbnail} alt="cart-img" />
                            <div className="flex flex-col gap-3">
                                <h3 className="font-custom text-slate-200">{item.title}</h3>
                                <p className="font-custom text-slate-200">Unit: $ {item.price}</p>
                                <p className="font-custom text-slate-200">Cantidad: {item.cantidad}</p>
                                <p className="font-custom text-slate-200 font-bold text-3xl">$ {item.price * item.cantidad}</p>
                                <Button onClick={() => removeItem(item.id)} className="w-8"><BsTrash /></Button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <h4 className="font-custom text-slate-200 text-5xl my-4">TOTAL: $ {totalCart()}</h4>
            <Button className="my-2" onClick={clearCart}>Vaciar carrito</Button>
            <br />
            <Button className="my-2" ><Link to={"/checkout"}>Terminar compra</Link></Button>

        </div>
    )
}

export default CartView