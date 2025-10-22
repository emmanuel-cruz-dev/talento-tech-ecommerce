import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import { CATEGORY_ICONS } from "../../constants/categoryIcons";
import { CategoryId } from "../../types/product.types";

function Categories() {
  const displayCategories = CATEGORIES.filter((cat) => cat.id !== "all").slice(
    0,
    4
  );

  return (
    <section className="py-5 bg-white" id="categories">
      <Container>
        <h2 className="text-center my-5 fw-bold">Categorías destacadas</h2>
        <Row>
          {displayCategories.map((category) => (
            <Col key={category.id} md={3} sm={6} className="mb-4">
              <Link
                to={`/products?category=${category.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
                title={`Ver productos de ${category.name}`}
              >
                <Card
                  className="text-center border-0 shadow-sm p-3 h-100"
                  style={{ cursor: "pointer", transition: "all 0.3s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <div style={{ margin: "auto" }}>
                    {CATEGORY_ICONS[category.id as Exclude<CategoryId, "all">]}
                  </div>
                  <Card.Title>{category.name}</Card.Title>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Categories;
