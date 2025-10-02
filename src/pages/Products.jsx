import React from "react";
import ProductsGallery from "../components/ui/product/ProductsGallery";

function Products() {
  return (
    <>
      <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center ">
        <aside className="pt-4 px-4 bg-light">
          <h2>Categorías</h2>
          <ul className="list-unstyled">
            <li>Electrónica</li>
            <li>Ropa</li>
            <li>Hogar</li>
            <li>Accesorios</li>
          </ul>
        </aside>

        <ProductsGallery />
      </div>
    </>
  );
}

export default Products;
