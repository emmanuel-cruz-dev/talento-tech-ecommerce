import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "./ProductCard";
import ErrorMessage from "../ErrorMessage";
import { handleRetry } from "../../../utils/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductSlideList({ title }) {
  const { products, loading, error } = useProducts();

  return (
    <Container
      className="py-5"
      id="product-slide-list"
      style={{ scrollMarginTop: "3.5rem" }}
    >
      <header>
        <h2 className="display-6 text-center fw-bold mb-5">{title}</h2>
      </header>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={26}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={!loading && products.length > 3}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        style={{ paddingBottom: "3.5rem" }}
      >
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SwiperSlide key={`placeholder-${index}`}>
              <ProductCard isLoading={true} />
            </SwiperSlide>
          ))
        ) : error ? (
          <Container className="d-flex justify-content-center fs-5">
            <ErrorMessage
              error={error}
              entity="Productos"
              onRetry={handleRetry}
            />
          </Container>
        ) : (
          products.map((product, index) => (
            <SwiperSlide key={`${product.id}-${index}`}>
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>

      {!error && (
        <footer className="d-flex justify-content-center">
          <Link to="/products">
            <Button variant="primary" className="mt-4 px-4">
              Ver más productos
            </Button>
          </Link>
        </footer>
      )}
    </Container>
  );
}

export default ProductSlideList;
