import clsx from "clsx";
import React from "react";

import css from "./TruckCard.module.css";

import { Star, Map } from "../../assets/icons";

const TruckCard = ({ truck, isLoading, error }) => {
  const { name, price, gallery, rating, reviews, description, location } =
    truck;
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className={clsx(css.truckCard)}>
        <div className={clsx(css.truckCardHeaderWrapper)}>
          <h3 className={clsx(css.truckCardHeader)}>{name}</h3>
          <p className={clsx(css.truckCardReviews)}>
            <span>
              <img src={Star} alt="AC Icon" width="16" />
            </span>
            {rating}({reviews?.length || 0} reviews)
            <span className={clsx(css.truckCardReviewsSpan)}>
              <img src={Map} alt="AC Icon" width="16" />
            </span>
            {location}
          </p>
          <h3 className={clsx(css.truckCardPrice)}>€{price}.00</h3>
        </div>
        <ul className={clsx(css.truckCardEquipmentList)}>
          {gallery && gallery.length > 0 ? (
            gallery.map(({ thumb }, index) => (
              <li className={clsx(css.truckCardEquipmentItem)} key={index}>
                <img src={thumb} alt="truck photo" />
              </li>
            ))
          ) : (
            <p>No photos found</p>
          )}
        </ul>
        <p className={clsx(css.truckCardDescription)}>{description}</p>
      </div>
    </>
  );
};

export default TruckCard;
