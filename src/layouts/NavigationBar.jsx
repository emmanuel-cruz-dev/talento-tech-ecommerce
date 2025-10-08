import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function NavigationBar() {
  const { getCartItemsCount } = useCart();
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center justify-content-center gap-2"
        >
          <img
            src="/shop-zone-icon.svg"
            alt="Logo de ShopZone"
            width="30"
            height="30"
          />
          ShopZone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Productos
            </Nav.Link>
            <Nav.Link
              onClick={isAuthenticated ? handleLogout : login}
              className="border-0 bg-transparent tex"
            >
              {isAuthenticated ? "Cerrar sesión" : "Iniciar sesión"}
            </Nav.Link>
            {isAuthenticated && (
              <Nav.Link as={Link} to="/cart" className="cart__items-container">
                <ShoppingCart size={20} className="me-2" />
                {getCartItemsCount() > 0 && (
                  <span className="cart__items-badge">
                    {getCartItemsCount()}
                  </span>
                )}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
