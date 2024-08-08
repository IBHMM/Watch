import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";


export function NavbarClient() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="p-3 ps-5 pe-5">
          <Navbar.Brand href="#home">
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp"
              alt="logoNavbar"
            />
          </Navbar.Brand>
          <Nav className="me-auto container d-flex justify-content-center gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Latest</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Pages</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Nav className="me-auto d-flex justify-content-center">
            <Nav.Link>
              <CiSearch />
            </Nav.Link>
            <Nav.Link>
              <CiUser />
            </Nav.Link>
            <Nav.Link>
              <FiShoppingCart />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
