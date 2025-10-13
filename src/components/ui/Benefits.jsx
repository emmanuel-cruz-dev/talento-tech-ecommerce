import React from "react";
import { Container, Row } from "react-bootstrap";
import { benefits } from "../../data/benefits";
import BenefitCard from "./BenefitCard";

function Benefits() {
  return (
    <section
      id="benefits"
      style={{ paddingBlock: "6rem" }}
      className="bg-white"
    >
      <Container>
        <Row className="text-center">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Benefits;
