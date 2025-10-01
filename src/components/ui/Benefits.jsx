import { Container, Row, Col } from "react-bootstrap";
import { CreditCard, BoxSeam, ShieldCheck } from "react-bootstrap-icons";

function Benefits() {
  return (
    <section id="benefits" style={{ paddingBlock: "6rem" }}>
      <Container>
        <Row className="text-center">
          <Col md={4} className="mb-4 mb-md-0">
            <CreditCard size={40} className="text-primary mb-3" />
            <h5 className="fw-bold">Elegí cómo pagar</h5>
            <p className="text-muted">
              Podés pagar con tarjeta, débito, efectivo o en cuotas sin tarjeta.
            </p>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <BoxSeam size={40} className="text-primary mb-3" />
            <h5 className="fw-bold">Envío gratis desde $30.000</h5>
            <p className="text-muted">
              Registrate en ShopZone y obtené envíos gratis en miles de
              productos.
            </p>
          </Col>

          <Col md={4}>
            <ShieldCheck size={40} className="text-primary mb-3" />
            <h5 className="fw-bold">Seguridad, de principio a fin</h5>
            <p className="text-muted">
              ¿No te gusta? ¡Devolvelo! En ShopZone estás siempre protegido.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Benefits;
