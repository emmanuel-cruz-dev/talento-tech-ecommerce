import React from "react";
import { useParams } from "react-router-dom";
import { useProductById } from "../hooks/useProducts";
import ProductSlideList from "../components/ui/product/ProductSlideList";
import ProductDetailsCard from "../components/ui/product/ProductDetailsCard";
import ErrorMessage from "../components/ui/ErrorMessage";
import { handleRetry } from "../utils/utils";

function Product() {
  const { id } = useParams();
  const { product, loading, error } = useProductById(id);

  return (
    <section>
      {error ? (
        <ErrorMessage error={error} entity="Producto" onRetry={handleRetry} />
      ) : (
        <ProductDetailsCard product={product} isLoading={loading} />
      )}
      <article>
        <ProductSlideList title="Productos Destacados" />
      </article>
    </section>
  );
}

export default Product;
