import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductSlideList() {
  const { products, loading, error } = useProducts();

  if (error) return <p>Error al cargar los productos: {error}</p>;

  return (
    <Container
      className="py-5"
      id="product-slide-list"
      style={{ scrollMarginTop: "3.5rem" }}
    >
      <header>
        <h1 className="display-6 text-center fw-bold mb-5">
          Nuestros Productos
        </h1>
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
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide key={`placeholder-${index}`}>
                <ProductCard isLoading={true} />
              </SwiperSlide>
            ))
          : products.slice(0, 6).map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                />
              </SwiperSlide>
            ))}
      </Swiper>

      <footer className="d-flex justify-content-center">
        <Link to="/products">
          <Button variant="primary" className="mt-4 px-4">
            Ver más productos
          </Button>
        </Link>
      </footer>
    </Container>
  );
}

export default ProductSlideList;
