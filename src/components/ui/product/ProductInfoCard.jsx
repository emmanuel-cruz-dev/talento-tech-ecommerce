import React from "react";
import { Card, Row, Col, Button, Badge } from "react-bootstrap";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../../../context/CartContext";
import { capitalizeFirstLetter } from "../../../utils/utils";

const ProductInfoCard = ({ product }) => {
  const { handleAddToCart } = useCart();

  return (
    <Card className="shadow-sm border-0 mb-3">
      <Card.Body>
        <Badge bg="secondary" className="mb-2 p-2">
          {product.category}
        </Badge>
        <h1 className="display-6 fw-bold mb-3">{product.title}</h1>
        <div className="d-flex align-items-center mb-3">
          <div className="d-flex me-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={18}
                fill={index < 4 ? "#ffc107" : "none"}
                color="#ffc107"
              />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <span className="display-4 fw-bold text-primary">
            ${product.price}
          </span>
        </div>

        <p className="text-muted mb-4">
          {capitalizeFirstLetter(product.description)}
        </p>

        <div className="mb-4">
          {product.id > 0 ? (
            <Badge bg="success" className="p-2">
              En stock ({product.id * 23} disponibles)
            </Badge>
          ) : (
            <Badge bg="danger" className="px-3 py-2">
              Sin stock
            </Badge>
          )}
        </div>

        <Row className="g-3 mb-4">
          <Col xs={12} md={8}>
            <Button
              variant="primary"
              size="lg"
              className="w-100"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={20} className="me-2" />
              Agregar al carrito
            </Button>
          </Col>
          <Col xs={12} md={4}>
            <Button variant="outline-secondary" size="lg" className="w-100">
              <Heart size={20} />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductInfoCard;
