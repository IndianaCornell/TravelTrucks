import clsx from "clsx";
import React from "react";
import { useOutletContext } from "react-router-dom";

import css from "./Reviews.module.css";
import RatingStars from "../RatingStars/RatingStars";

const Reviews = () => {
  const { truck, isLoading, error } = useOutletContext();

  return (
    <ul className={clsx(css.reviewsList)}>
      {truck?.reviews?.length > 0 ? (
        truck.reviews.map((review, index) => (
          <li key={index} className={clsx(css.reviewsItem)}>
            <div className={clsx(css.reviewsAuthorWrapper)}>
              <div className={clsx(css.reviewsAuthorAvatar)}>
                <p className={clsx(css.reviewsAuthorAvatarLetter)}>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </p>
              </div>
              <div className={clsx(css.reviewsAuthorNameWrapper)}>
                <h4 className={clsx(css.reviewsAuthorName)}>
                  {review.reviewer_name}
                </h4>
                <RatingStars rating={truck.rating} />
              </div>
            </div>
            <p className={clsx(css.reviewsAuthorCommentary)}>
              {review.comment}
            </p>
          </li>
        ))
      ) : (
        <p>No reviews yet</p>
      )}
    </ul>
  );
};

export default Reviews;
