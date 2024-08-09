import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import "../Navbar/style.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export function NavbarClient() {
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="navbar_menu fixed-top">
        <Container className="p-3">
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
            <Nav.Link as={Link} to="/basket" className="position-relative">
              <FiShoppingCart/>
              {cartItems.length > 0 && (
                <span className="cart-badge position-absolute top-4 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                </span>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
