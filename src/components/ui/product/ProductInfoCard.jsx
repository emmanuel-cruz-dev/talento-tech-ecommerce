import React from "react";
import { Card, Row, Col, Button, Badge } from "react-bootstrap";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { capitalizeFirstLetter } from "../../../utils/utils";
import { useProductCard } from "../../../hooks/useProductCard";
import { useAuth } from "../../../context/AuthContext";

const ProductInfoCard = ({ product }) => {
  const { isAuthenticated } = useAuth();
  const { handleAddToCartClick } = useProductCard({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    image: product.image,
  });

  return (
    <Card className="shadow-sm border-0 mb-3">
      <Card.Body>
        <Badge bg="secondary" className="my-2 p-2">
          {product.category}
        </Badge>
        <h2 className="fw-bold mb-3">{product.title}</h2>
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
          <span className="display-6 fw-bold text-primary">
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

        {isAuthenticated ? (
          <Row className="g-3 mb-3">
            <Col xs={12} md={8}>
              <Button
                variant="primary"
                className="w-100 py-2"
                onClick={handleAddToCartClick}
              >
                <ShoppingCart size={20} className="me-2" />
                Agregar al carrito
              </Button>
            </Col>
            <Col xs={12} md={4}>
              <Button variant="outline-secondary" className="w-100 py-2">
                <Heart size={20} />
              </Button>
            </Col>
          </Row>
        ) : (
          <Button variant="primary" className="w-100 py-2">
            Inicia sesión para añadir al carrito
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductInfoCard;
