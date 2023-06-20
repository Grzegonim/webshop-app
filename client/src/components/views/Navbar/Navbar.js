import { Navbar, NavbarBrand, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="me-auto">
      <NavbarBrand><Nav.Link as={NavLink} to="/">WebShop</Nav.Link></NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <NavDropdown title="Kategorie">
            <NavDropdown.Item as={NavLink} to="/category/maka">
              Mąki
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/herbata">
              Herbaty
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/mleko-roslinne">
              Mleka roślinne
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/cukry">
              Cukry
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;