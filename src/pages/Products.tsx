import { useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ProductsGallery from "../components/ui/product/ProductsGallery";
import { useProductsByCategory } from "../hooks/useProducts";
import { CATEGORIES } from "../constants/categories";
import { useQueryHandler } from "../hooks/useQueryHandler";
import { usePagination } from "../hooks/usePagination";
import PaginationItem from "../components/ui/PaginationItem";

function Products() {
  const { selectedCategory, handleCategoryClick } = useQueryHandler();
  const { products, loading, error } = useProductsByCategory(selectedCategory);
  const { currentPage, handlePageChange, paginate, getTotalPages, resetPage } =
    usePagination(6);

  useEffect(() => {
    resetPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const paginatedProducts = paginate(products);
  const totalPages = getTotalPages(products.length);

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
                  onClick={() => handleCategoryClick(category.id)}
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
            products={paginatedProducts}
            loading={loading}
            error={error}
          />

          <PaginationItem
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isLoading={loading}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
