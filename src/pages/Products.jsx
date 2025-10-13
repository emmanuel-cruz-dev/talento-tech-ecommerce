import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ProductsGallery from "../components/ui/product/ProductsGallery";
import { useProductsByCategory } from "../hooks/useProducts";
import { CATEGORIES } from "../constants/categories";
import { useCategorySelect } from "../hooks/useCategorySelect";

function Products() {
  const { selectedCategory, handleCategorySelect } = useCategorySelect("all");
  const { products, loading, error } = useProductsByCategory(selectedCategory);

  return (
    <Container fluid>
      <Row>
        <Col
          md={3}
          lg={2}
          className="mb-md-0 py-4"
          style={{ background: "#eee", minHeight: "80vh" }}
        >
          <div className="sticky-top" style={{ top: "68px", zIndex: 1 }}>
            <h5 className="mb-3" style={{ fontSize: "1.5rem" }}>
              Categorías
            </h5>
            <ListGroup>
              {CATEGORIES.map((category) => (
                <ListGroup.Item
                  key={category.id}
                  action
                  active={selectedCategory === category.id}
                  onClick={handleCategorySelect(category.id)}
                  className="border-0 rounded mb-2"
                  style={{ cursor: "pointer" }}
                >
                  {category.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>

        <Col md={9} lg={10} className="mb-4">
          <ProductsGallery
            title={
              CATEGORIES.find((category) => category.id === selectedCategory)
                ?.name
            }
            products={products}
            loading={loading}
            error={error}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
