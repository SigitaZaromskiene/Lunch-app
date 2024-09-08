import ratingsData from "../../../../../data/db.json";

const { ratings } = ratingsData;

type RatingProps = {
  mealId: number;
  rating: {
    userId: number;
    rating: number;
    comment: string;
  };
};

const getMealRating = (mealId: number): number => {
  const mealRatings = ratings.filter(
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

const cutDescriptionText = (description: string) => {
  if (description.length <= 50) {
    return description;
  } else {
    return `${description.slice(0, 52)}...`;
  }
};

const MenuListDescription = ({
  mealId,
  description,
}: {
  mealId: number;
  description: string;
}) => {
  const rating = getMealRating(mealId);
  const shortText = cutDescriptionText(description);

  return (
    <div className="menu-list__item__description">
      <p className="menu-list__item__description-text">{shortText}</p>
      <div className="menu-list__item__description-rating">
        <div className="menu-list__item__description-rating-star">
          ★ {rating.toFixed(1)}
        </div>
        <div className="menu-list__item__description-rating-container">
          <p className="menu-list__item__description-rating-container-more">
            More Info{" "}
            <span className="menu-list__item__description-rating-container-btn">
              &#8594;
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuListDescription;
