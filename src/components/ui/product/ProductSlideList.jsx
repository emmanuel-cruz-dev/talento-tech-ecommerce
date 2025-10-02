import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
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

  if (loading) {
    return (
      <Container>
        <Row className="g-3 align-items-center justify-content-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Col key={`placeholder-${index}`} xs={12} md={6} lg={4} xl={4}>
              <ProductCard isLoading={true} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <header>
        <h1 className="display-6 text-center fw-bold my-5">
          Nuestros Productos
        </h1>
      </header>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        style={{ paddingBottom: "3.5rem", paddingInline: "3rem" }}
      >
        {products.slice(0, 7).map((product) => (
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

      <Container className="d-flex justify-content-center">
        <Link to="/products">
          <Button variant="primary" className="mt-4 px-4">
            Ver más productos
          </Button>
        </Link>
      </Container>
    </Container>
  );
}

export default ProductSlideList;
