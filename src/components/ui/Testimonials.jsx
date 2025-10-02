import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Star } from "lucide-react";

function Testimonials() {
  return (
    <section className="py-5 bg-light" id="testimonials">
      <Container>
        <h2 className="text-center my-5 fw-bold">
          Lo que dicen nuestros clientes
        </h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Text>
                  “ShopZone tiene los mejores precios y el envío fue rapidísimo.
                  ¡Súper recomendable!”
                </Card.Text>
                <Card.Footer className="bg-white border-0 text-muted">
                  <Star fill="#ffc107" /> — Juan P.
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Text>
                  “Compré ropa y la calidad es excelente. Además, el proceso de
                  compra fue muy fácil.”
                </Card.Text>
                <Card.Footer className="bg-white border-0 text-muted">
                  ⭐⭐⭐⭐✰ — María G.
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Text>
                  “Me encantó la atención al cliente. Siempre me sentí
                  acompañado en mi compra.”
                </Card.Text>
                <Card.Footer className="bg-white border-0 text-muted">
                  ⭐⭐⭐⭐⭐ — Sofía L.
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
