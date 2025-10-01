import { Container, Row, Col, Button } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";

function Hero() {
  return (
    <section className="bg-light text-dark py-5">
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
            <Button
              variant="primary"
              size="lg"
              className="mt-3 d-flex align-items-center gap-2"
            >
              <Cart4 size={20} />
              Ver Productos
            </Button>
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
