import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function NavigationBar() {
  const { getCartItemsCount } = useCart();
  const { isAuthenticated } = useAuth();

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
            <Nav.Link as={Link} to="/" aria-label="Inicio">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/products" aria-label="Productos">
              Productos
            </Nav.Link>

            {isAuthenticated && (
              <Nav.Link as={Link} to="/profile" aria-label="Perfil">
                Perfil
              </Nav.Link>
            )}
            {isAuthenticated ? (
              <Nav.Link
                as={Link}
                to="/cart"
                className="cart__items-container"
                aria-label="Carrito"
                title="Ir al carrito"
              >
                <ShoppingCart size={20} className="me-2" />
                {getCartItemsCount() > 0 && (
                  <span className="cart__items-badge">
                    {getCartItemsCount()}
                  </span>
                )}
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" aria-label="Iniciar sesión">
                Iniciar sesión
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
