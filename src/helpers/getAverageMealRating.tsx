import ratingsData from "../../data/db.json";

type RatingProps = {
  mealId: number;
  rating: {
    userId: number;
    rating: number;
    comment: string;
  };
};

export const getAverageMealRating = (mealId: number): number => {
  const mealRatings = ratingsData.ratings.filter(
    (rating: RatingProps) => rating.mealId === mealId
  );

  if (mealRatings.length === 0) return 0;

  const totalScore = mealRatings.reduce(
    (sum: number, currentRating: RatingProps) =>
      sum + currentRating.rating.rating,
    0
  );
  return totalScore / mealRatings.length;
};
