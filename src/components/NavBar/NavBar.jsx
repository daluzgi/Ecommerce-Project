import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const closeMenu = () => setExpanded(false);

  return (
    <Navbar expand="lg" className="nav-container" expanded={expanded}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          Adopta un peludito
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link
              onClick={closeMenu}
              as={NavLink}
              to="/products"
              className="nav-link"
            >
              Ver todos
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/category/Accesories"
              className="nav-link"
              onClick={closeMenu}
            >
              Accesorios
            </Nav.Link>

            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={NavLink}
                to="/category/Puppy"
                onClick={closeMenu}
              >
                Adopta Cachorros
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/category/Adult"
                onClick={closeMenu}
              >
                Adopta Adultos
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/category/Senior"
                onClick={closeMenu}
              >
                Adopta Seniors
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/category/Accesories"
                onClick={closeMenu}
              >
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
