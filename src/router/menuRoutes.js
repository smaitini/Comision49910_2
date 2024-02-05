import Carrito from "../Components/Carrito/Carrito";
import CartWidget from "../Components/CartWidget/CartWidget";
import Checkout from "../Components/CheckOut/Checkout";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "categoriaId",
        path: "/categoria/:id",
        Element: ItemListContainer
    },
    {
        id: "itemId",
        path: "/item/:id",
        Element: ItemDetailContainer
    },
    {
        id: "cart",
        path: "/cart",
        Element: Carrito
    },
    {
        id: "error",
        path: "*",
        Element: Error
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: Checkout
    }


]