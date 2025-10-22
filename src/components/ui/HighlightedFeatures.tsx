import { Card, Row, Col } from "react-bootstrap";
import { HighlightedFeaturesProps } from "../../types/product.types";

const HighlightedFeatures = ({ features }: HighlightedFeaturesProps) => {
  return (
    <Card className="shadow-sm border-0 py-2">
      <Card.Body>
        <Row className="g-3">
          {features.map((feature, index) => (
            <Col key={index} xs={6} md={3}>
              <div className="text-center">
                <feature.icon size={32} className="text-primary mb-2" />
                <small className="d-block text-muted">{feature.title}</small>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default HighlightedFeatures;
