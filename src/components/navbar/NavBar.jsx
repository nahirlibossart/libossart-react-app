import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartwidget/CartWidget.jsx';

function NavBarComp() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> <img src="./images/logo.png" width="250"
              height="200" alt="logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cine y Series</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Videojuegos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Retro</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;

