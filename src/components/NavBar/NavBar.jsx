import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="nav-container">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          Adopta un peludito
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link as={NavLink} to="/products" className="nav-link">
              Ver todos
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/category/Accesories"
              className="nav-link"
            >
              Accesorios
            </Nav.Link>

            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/Puppy">
                Adopta Cachorros
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/Adult">
                Adopta Adultos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/Senior">
                Adopta Seniors
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/Accesories">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
