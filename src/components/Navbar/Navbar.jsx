import CartWidget from "../CartWidget/CartWidget";
import carrito from "/carrito.png";
import carrito_2 from "/carrito_2.png";
import logo from "/SM_logo.png"; //"../../../public/SM_logo.png"
import logo2 from "/SM_logo_2.png";

import NavLink from "./NavLink";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-red-900">
      <div className="container m-auto py-6 flex justify-between items-center">
        <img className="w-20 h-20" src={logo} alt="logo" />
        <div className="text-white text-lg font-semibold">
          <nav className="flex gap-4 ">
            <Link className="hover:text-red-200" to={"/"}>Inicio</Link>
            <Link className="hover:text-red-200" to={"/Productos"}>Productos</Link>
            <Link className="hover:text-red-200" to={"/Productos/electronica"}>Electonica</Link>
            <Link className="hover:text-red-200" to={"/Productos/deportes"}>Deportes</Link>
            <Link className="hover:text-red-200" to={"/Productos/muebles"}>Muebles</Link>
            <ul>
              <li className="nav__list">
                <a href="carrito">
                  <CartWidget imagen={carrito_2} alt="carrito" />
                </a>
              </li>
            </ul>
          </nav>{" "}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
