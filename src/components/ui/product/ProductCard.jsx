import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useProductCard } from "../../../hooks/useProductCard";
import { capitalizeFirstLetter } from "../../../utils/utils";
import { useAuth } from "../../../context/AuthContext";

function ProductCard({
  id,
  title,
  price,
  description,
  image,
  isLoading = false,
}) {
  const { isAuthenticated } = useAuth();
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
      <Link
        to={`/product/${id}`}
        className="text-decoration-none"
        style={{
          background: "linear-gradient(135deg, #f6f8fa, #dcecfb)",
        }}
        title="Ver más información"
      >
        <Card.Img
          className="py-2"
          variant="top"
          src={image}
          alt={title}
          style={{
            height: "15rem",
            objectFit: "contain",
            filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))",
          }}
        />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${id}`}
          className="text-decoration-none text-dark"
          title="Ver más información"
        >
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
        {isAuthenticated ? (
          <Button
            variant="primary"
            className="mt-3 d-inline-flex justify-content-center gap-2 px-4 w-100"
            onClick={handleAddToCartClick}
          >
            Añadir al carrito
          </Button>
        ) : (
          <Link to="/login">
            <Button
              variant="primary"
              className="mt-3 d-inline-flex justify-content-center gap-2 px-4 w-100"
            >
              Inicia sesión para comprar
            </Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
