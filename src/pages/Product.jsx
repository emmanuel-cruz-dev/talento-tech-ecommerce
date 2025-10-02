import React from "react";
import { useParams } from "react-router-dom";
import { useProductById } from "../hooks/useProducts";

function Product() {
  const { id } = useParams();
  const { product, loading, error } = useProductById(id);

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section>
      <h1>Product</h1>
      <p>Product ID: {product.id}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Description: {product.description}</p>
      <p>Product Price: {product.price}</p>
      <img src={product.image} alt={product.name} />
    </section>
  );
}

export default Product;
