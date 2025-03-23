import clsx from "clsx";
import { StarEmpty, Star } from "../../assets/icons";

import css from "./RatingStars.module.css";

const RatingStars = ({ rating }) => {
  const roundedRating = Math.round(rating);
  return (
    <ul className={css.reviewsAuthorRatingList}>
      {[...Array(5)].map((_, index) => (
        <li key={index} className={css.reviewsAuthorRatingItem}>
          <img
            src={index < roundedRating ? Star : StarEmpty}
            alt="Rating star"
          />
        </li>
      ))}
    </ul>
  );
};

export default RatingStars;
