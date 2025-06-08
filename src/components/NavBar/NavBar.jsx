import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">Adopta un peludito</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#nuevos">Recién llegados</Nav.Link>
            <Nav.Link href="#ofertas">Ver todos los peluditos</Nav.Link>
            <Nav.Link href="#masvendidos">Tránsito</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Adopta Cachorros
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Adopta Adultos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Adopta Seniors
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
