
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import carrito from "/carrito.png"
import logo from "/SM_logo.png" //"../../../public/SM_logo.png"


const Navbar = () => {
  return (
    <header className="header_container">
      <img className="header__img" src={logo} alt="logo" />
      <nav>
        <ul className="nav_container">
          <li className="nav__list"><a href="#">Productos</a></li>
          <li className="nav__list"><a href="#">Contactenos</a></li>
          <li className="nav__list"><a href="#">Historia</a></li>
          <li className="nav__list"><a href="carrito"><CartWidget imagen={carrito} alt="carrito"/></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar