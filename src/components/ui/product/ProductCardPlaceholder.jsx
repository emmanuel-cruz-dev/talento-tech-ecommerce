import React from "react";
import { Card, Placeholder } from "react-bootstrap";

function ProductCardPlaceholder() {
  return (
    <Card style={{ width: "18rem" }}>
      <Placeholder
        as="div"
        animation="glow"
        style={{ height: "15rem", backgroundColor: "#e9ecef" }}
      />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} animation="glow" />
      </Card.Body>
    </Card>
  );
}

export default ProductCardPlaceholder;
