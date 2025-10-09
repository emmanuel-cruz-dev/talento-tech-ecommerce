import React from "react";
import { Col } from "react-bootstrap";

const BenefitCard = ({ title, description, icon: Icon }) => {
  return (
    <Col md={4} className="mb-4 mb-md-0">
      <Icon size={40} className="text-primary mb-3" />
      <h2 className="fw-bold" style={{ fontSize: "1.25rem" }}>
        {title}
      </h2>
      <p className="text-muted">{description}</p>
    </Col>
  );
};

export default BenefitCard;
