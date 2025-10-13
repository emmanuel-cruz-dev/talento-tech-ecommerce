import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Newsletter() {
  return (
    <section
      className="bg-dark text-white"
      id="newsletter"
      style={{ paddingBlock: "4rem" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <h2 className="fw-bold">Suscribite a nuestro newsletter</h2>
            <p className="text-light">
              Recibí las últimas ofertas y novedades directamente en tu correo.
            </p>
          </Col>
          <Col md={6}>
            <Form className="d-flex">
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="Ingresá tu email"
                autoComplete="off"
                className="me-2"
              />
              <Button variant="primary">Suscribirme</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;
