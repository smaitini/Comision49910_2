import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget";
import carrito from "/carrito.png";
import logo from "/SM_logo.png"; //"../../../public/SM_logo.png"
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <header className="bg-purpura">
        <div className="container m-auto py-6 flex justify-between items-center">
        <img src={logo} alt="logo" />
          <nav className="flex gap-4">
                    <NavLink href={"#"} text={"Enlace 1"}/>
                    <NavLink href={"#"} text={"Enlace 2"}/>
                    <NavLink href={"#"} text={"Enlace 3"}/>
                    <NavLink href={"#"} text={"Enlace 4"}/>
                    <NavLink href={"#"} text={"Enlace 5"}/>
            <li className="nav__list">
              <a href="carrito">
                <CartWidget imagen={carrito} alt="carrito" />
              </a>
            </li>
            </nav>
        
      </div>
    </header>
  );
};

export default Navbar;
