import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import { ArrowLeft } from "lucide-react";
import HighlightedFeatures from "../HighlightedFeatures";
import { features } from "../../../data/features";
import ProductInfoCard from "./ProductInfoCard";
import ProductDetailsCardSkeleton from "./ProductDetailsCardSkeleton";

const ProductDetailsCard = ({ product, isLoading = false }) => {
  if (isLoading) return <ProductDetailsCardSkeleton />;

  return (
    <Container className="py-5">
      <header className="mb-4">
        <Link
          to="/products"
          className="text-decoration-none text-muted d-flex align-items-center gap-2"
        >
          <ArrowLeft size={20} />
          Ir a la tienda
        </Link>
      </header>

      <Row className="g-4">
        <Col lg={6}>
          <Card className="shadow-sm border-0 mb-3">
            <Card.Body>
              <figure
                className="rounded d-flex align-items-center justify-content-center m-0"
                style={{
                  height: "320px",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #f6f8fa, #dcecfb)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded"
                  style={{
                    height: "100%",
                    objectFit: "contain",
                    padding: "1.75rem 1rem",
                    filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))",
                  }}
                />
              </figure>
            </Card.Body>
          </Card>

          <HighlightedFeatures features={features} />
        </Col>

        <Col lg={6}>
          <ProductInfoCard product={product} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsCard;
