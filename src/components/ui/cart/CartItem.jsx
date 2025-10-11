import React from "react";
import { Row, Col, Button, Badge } from "react-bootstrap";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../../../context/CartContext";
import { capitalizeFirstLetter } from "../../../utils/utils";

const CartItem = ({ product, index }) => {
  const {
    cart,
    handleDecreaseQuantity,
    handleAddToCart,
    handleRemoveFromCart,
  } = useCart();

  return (
    <article
      key={product.id}
      className={`p-4 ${index !== cart.length - 1 ? "border-bottom" : ""}`}
    >
      <Row className="align-items-center g-3">
        <Col xs={12} sm={3}>
          <figure
            className="rounded d-flex align-items-center justify-content-center"
            style={{
              height: "100px",
              background: "linear-gradient(135deg, #f6f8fa, #dcecfb)",
            }}
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid rounded py-3"
                loading="lazy"
                style={{
                  maxHeight: "100px",
                  objectFit: "cover",
                  filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))",
                }}
              />
            ) : (
              <ShoppingBag size={40} className="text-muted" />
            )}
          </figure>
        </Col>

        <Col xs={12} sm={4}>
          <h6 className="mb-1 line-clamp-1">{product.title}</h6>
          <p className="mb-0 small fw-semibold">
            Precio unitario: ${product.price}
          </p>
          <p className="text-muted mb-0 small line-clamp-2">
            {capitalizeFirstLetter(product.description) || "Sin descripción"}
          </p>
        </Col>

        <Col xs={6} sm={3}>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => handleDecreaseQuantity(product)}
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "32px", height: "32px" }}
            >
              <Minus size={16} />
            </Button>
            <Badge bg="light" text="dark" className="px-3 py-2 fs-6 fw-normal">
              {product.quantity}
            </Badge>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => handleAddToCart(product)}
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "32px", height: "32px" }}
            >
              <Plus size={16} />
            </Button>
          </div>
        </Col>

        <Col xs={6} sm={2} className="text-end">
          <div className="fw-bold fs-5 mb-2">
            Subtotal: ${(product.price * product.quantity).toFixed(2)}
          </div>
          <Button
            variant="link"
            size="sm"
            onClick={() => handleRemoveFromCart(product)}
            className="text-danger p-0 text-decoration-none"
          >
            <Trash2 size={18} className="me-1" />
            Eliminar
          </Button>
        </Col>
      </Row>
    </article>
  );
};

export default CartItem;
