import { Container, Row, Col } from "react-bootstrap";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="py-5 bg-light" id="testimonials">
      <Container>
        <h2 className="text-center mb-5 fw-bold">
          Lo que dicen nuestros clientes
        </h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col className="mb-4" key={index} xs={12} lg={4}>
              <TestimonialCard
                text={testimonial.text}
                author={testimonial.author}
                rating={testimonial.rating}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
