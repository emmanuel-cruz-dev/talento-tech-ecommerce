import { Card } from "react-bootstrap";
import StarRating from "./StarRating";
import { TestimonialCardProps } from "../../types/home";

const TestimonialCard = ({ text, author, rating }: TestimonialCardProps) => {
  return (
    <Card className="h-100 shadow-sm border-0 py-4 px-3">
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <Card.Footer className="bg-white border-0 text-muted d-flex align-items-center gap-2">
          <StarRating rating={rating} />
          <span>— {author}</span>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;
