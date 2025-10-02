import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Laptop, House, Smartphone, ShirtIcon } from "lucide-react";

function Categories() {
  return (
    <section className="py-5 bg-white" id="categories">
      <Container>
        <h2 className="text-center my-5 fw-bold">Categorías destacadas</h2>
        <Row>
          <Col md={3} sm={6} className="mb-4">
            <Card className="text-center border-0 shadow-sm p-3 h-100">
              <Laptop
                size={40}
                className="text-primary mb-2"
                style={{ margin: "auto" }}
              />
              <Card.Title>Electrónica</Card.Title>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="text-center border-0 shadow-sm p-3 h-100">
              <ShirtIcon
                size={40}
                className="text-primary mb-2"
                style={{ margin: "auto" }}
              />
              <Card.Title>Ropa</Card.Title>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="text-center border-0 shadow-sm p-3 h-100">
              <House
                size={40}
                className="text-primary mb-2"
                style={{ margin: "auto" }}
              />
              <Card.Title>Hogar</Card.Title>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="text-center border-0 shadow-sm p-3 h-100">
              <Smartphone
                size={40}
                className="text-primary mb-2"
                style={{ margin: "auto" }}
              />
              <Card.Title>Accesorios</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Categories;
