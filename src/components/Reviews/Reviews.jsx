import clsx from "clsx";
import React from "react";

import css from "./Reviews.module.css";

const Reviews = () => {
  return (
    <ul className={clsx(css.reviewsList)}>
      <li className={clsx(css.reviewsItem)}>
        <div className={clsx(css.reviewsAuthorWrapper)}>
          <h4 className={clsx(css.reviewsAutorName)}>Alice</h4>
        </div>
        <p className={clsx(css.reviewsAuthorCommentary)}>
          The Mavericks panel truck was a perfect choice for my solo road trip.
          Compact, easy to drive, and had all the essentials. The kitchen
          facilities were sufficient, and the overall experience was fantastic.
        </p>
      </li>
    </ul>
  );
};

export default Reviews;
