import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
import { ArrowLeft } from "lucide-react";
import { useCart } from "../../../context/CartContext";

const OrderSummary = () => {
  const { cart, getCartTotal, handleClearCart } = useCart();

  const handleCheckout = () => {
    // TODO: Realizar el checkout y redireccionar al carrito
    handleClearCart();
    alert("Gracias por su compra!");
  };

  return (
    <Col lg={4}>
      <Card
        className="shadow-sm border-0"
        style={{ top: "100px", position: "sticky" }}
      >
        <Card.Body>
          <h4 className="mb-4">Resumen del pedido</h4>

          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Subtotal</span>
            <span className="fw-semibold">${getCartTotal().toFixed(2)}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Envío</span>
            <span className="fw-semibold">
              {getCartTotal() > 150 ? (
                <span className="text-success">Gratis</span>
              ) : (
                "$5.00"
              )}
            </span>
          </div>

          {getCartTotal() > 0 && getCartTotal() < 150 && (
            <small className="text-muted" style={{ fontSize: "0.8rem" }}>
              Envío gratis a partir de $150
            </small>
          )}

          <hr />

          <div className="d-flex justify-content-between mb-4">
            <span className="fw-bold fs-5">Total</span>
            <span className="fw-bold fs-5 text-primary">
              ${(getCartTotal() + (getCartTotal() > 50 ? 0 : 5)).toFixed(2)}
            </span>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-100 mb-3"
            onClick={handleCheckout}
            disabled={cart.length === 0}
          >
            Finalizar compra
          </Button>

          <Link to="/products" className="text-decoration-none">
            <Button
              variant="outline-secondary py-2"
              size="sm"
              className="w-100"
            >
              <ArrowLeft size={16} className="me-2" />
              Seguir comprando
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OrderSummary;
