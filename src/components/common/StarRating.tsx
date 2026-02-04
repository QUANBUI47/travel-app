import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number; // e.g., 4.3
  size?: number;
  color?: string;
}

export const StarRating = ({
  rating,
  size = 14,
  color = "#FFC107",
}: StarRatingProps) => {
  const MAX_STAR = 5;
  const fillStar = Math.floor(rating);
  const emptyStar = MAX_STAR - fillStar;

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: fillStar }).map((_, index) => (
        <Star key={`fill-${index}`} fill={color} size={size} color={color} />
      ))}
      {Array.from({ length: emptyStar }).map((_, index) => (
        <Star key={`empty-${index}`} size={size} color={color} />
      ))}
    </div>
  );
};
