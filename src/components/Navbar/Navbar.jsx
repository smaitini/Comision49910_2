import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar() {
  return (
    <div>

  
    {/* <Navbar bg="dark" data-bs-theme="dark"> */}
    <Navbar className="NavBar_container">
    <Container fluid className='navbar' >
      <Navbar.Brand>
        <Nav.Link as={Link} to='/'> <Logo/> </Nav.Link>
      </Navbar.Brand>
      <Nav>
         {/* className="me-auto espacio-navbar"> */}
        <Nav.Link as={Link} to="/">HOME</Nav.Link>
        <Nav.Link as={Link} to="/categoria/accesorios" >ACCESORIOS</Nav.Link>
        <Nav.Link as={Link} to="/categoria/futbol" >FUTBOL</Nav.Link>
        <Nav.Link as={Link} to="/categoria/basquet" >BASQUET</Nav.Link>
        <Nav.Link as={Link} to="/cart" > <CartWidget/> </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
 
}

export default NavBar;