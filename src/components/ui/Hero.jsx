import { Container, Row, Col, Button } from "react-bootstrap";
import HeroBanner from "../../assets/products-banner.avif";

function Hero() {
  return (
    <section
      className="bg-light text-dark"
      id="hero"
      style={{ paddingBlock: "1.25rem" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0 order-2 order-md-1">
            <h1 className="display-4 fw-bold">
              Bienvenido a <span className="text-primary">ShopZone</span>
            </h1>
            <p className="lead text-muted mt-3">
              Tu tienda online para descubrir los mejores productos al mejor
              precio. Encuentra moda, tecnología, accesorios y mucho más en un
              solo lugar.
            </p>
            <a href="#product-slide-list" className="text-decoration-none">
              <Button
                variant="primary"
                size="lg"
                className="mt-3 d-inline-flex align-items-center gap-2 px-5"
              >
                Ver Productos
              </Button>
            </a>
          </Col>

          <Col md={6} className="text-center order-1 order-md-2">
            <img
              src={HeroBanner}
              alt="Hero ShopZone"
              className="img-fluid"
              loading="lazy"
              style={{
                maxHeight: "460px",
                filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))",
              }}
              width={800}
              height={800}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
