import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCardPlaceholder from "./ProductCardPlaceholder";

function ProductCard({
  id,
  title,
  price,
  description,
  image,
  isLoading = false,
}) {
  if (isLoading) return <ProductCardPlaceholder />;

  return (
    <Card>
      <Card.Img
        className="py-2"
        variant="top"
        src={image}
        alt={title}
        style={{
          height: "15rem",
          objectFit: "contain",
          backgroundColor: "#e9ecef",
        }}
      />
      <Card.Body>
        <Card.Title className="line-clamp-1">{title}</Card.Title>
        <Card.Text
          className="mb-1"
          style={{ color: "blue", fontSize: "1.2rem", fontWeight: "500" }}
        >
          ${price}
        </Card.Text>
        <Card.Text
          className="line-clamp-2 text-secondary"
          style={{ textTransform: "capitalize" }}
        >
          {description}
        </Card.Text>
        <Link to={`/product/${id}`} className="btn btn-primary">
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
