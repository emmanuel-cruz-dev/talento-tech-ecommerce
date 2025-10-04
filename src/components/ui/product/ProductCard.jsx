import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useProductCard } from "../../../hooks/useProductCard";
import { capitalizeFirstLetter } from "../../../utils/utils";

function ProductCard({
  id,
  title,
  price,
  description,
  image,
  isLoading = false,
}) {
  const { handleAddToCartClick } = useProductCard({
    id,
    title,
    price,
    description,
    image,
  });

  if (isLoading) return <ProductCardSkeleton />;

  return (
    <Card>
      <Link to={`/product/${id}`} className="text-decoration-none">
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
      </Link>
      <Card.Body>
        <Link to={`/product/${id}`} className="text-decoration-none text-dark">
          <Card.Title className="line-clamp-1">{title}</Card.Title>
        </Link>
        <Card.Text
          className="mb-1"
          style={{ color: "blue", fontSize: "1.2rem", fontWeight: "500" }}
        >
          ${price}
        </Card.Text>
        <Card.Text className="line-clamp-2 text-secondary">
          {capitalizeFirstLetter(description)}
        </Card.Text>
        <Button
          variant="primary"
          className="mt-3 d-inline-flex align-items-center gap-2 px-4"
          onClick={handleAddToCartClick}
        >
          Añadir al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
