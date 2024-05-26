import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-transparent">
        <Container>
          <Navbar.Brand href="#home">Tasty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
              <Nav.Link href="#home">Reservation</Nav.Link>
              <Nav.Link href="#home">Blog</Nav.Link>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
