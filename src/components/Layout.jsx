import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./ofertas.css";
import { useAuth } from "../utils/AuthContext";

function Layout() {
  const { user, isAdmin } = useAuth();
  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              className="imagen-logo"
              src="./logoHiperMegaRed.jpeg"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/" className="custom-brand">
            CompuMundoHiperMegaRed
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {isAdmin ? (
                <Nav.Link as={Link} to="/products/addItem">
                  Añadir
                </Nav.Link>
              ) : null}
              {!user ? (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              ) : null}
              {user ? (
                <Nav.Link as={Link} to="/logout">
                  Logout
                </Nav.Link>
              ) : null}
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Layout;
