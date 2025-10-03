import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  return (
    <section
      className="bg-light text-dark"
      id="hero"
      style={{ paddingBlock: "5rem" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">
              Bienvenido a <span className="text-primary">ShopZone</span>
            </h1>
            <p className="lead text-secondary mt-3">
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

          <Col md={6} className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Hero ShopZone"
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
