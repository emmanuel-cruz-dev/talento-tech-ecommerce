import { Star } from "lucide-react";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <article className="d-flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={20}
          fill={star <= rating ? "#ffc107" : "none"}
          stroke={star <= rating ? "#ffc107" : "#dee2e6"}
          strokeWidth={2}
        />
      ))}
    </article>
  );
};

export default StarRating;
