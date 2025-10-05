import React from "react";
import ProductsGallery from "../components/ui/product/ProductsGallery";

function Products() {
  return (
    <section className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
      <aside className="pt-4 px-4 bg-white">
        <h2>Categorías</h2>
        {/* TODO: Agregar filtros por categoría */}
        {/* TODO: Ordenar por precio */}
      </aside>

      <ProductsGallery />
    </section>
  );
}

export default Products;
