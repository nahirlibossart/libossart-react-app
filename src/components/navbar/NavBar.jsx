import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartwidget/CartWidget.jsx';
import { NavLink } from 'react-router-dom';

function NavBarComp() {
  return (
    <div>
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/' > <img src="../images/logo.png" width="250"
              height="200" alt="logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/cetegories/Cine y Series'>Cine y Series</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categories/Videojuegos'>
                Videojuegos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/cetegories/Retro'>Retro</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    <hr/>
    </div>
  );
  
}

export default NavBarComp;

