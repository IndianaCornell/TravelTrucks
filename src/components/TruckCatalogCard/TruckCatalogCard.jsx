import React from "react";
import clsx from "clsx";

import carImage from "../../assets/car.png";
import css from "./TruckCatalogCard.module.css";

import { Star, Map } from "../../assets/icons";

const TruckCatalogCard = () => {
  return (
    <div className={clsx(css.truckCard)}>
      <img src={carImage} alt="car" />
      <div className={clsx(css.truckCardWrapper)}>
        <div className={clsx(css.truckCardHeaderWrapper)}>
          <h3 className={clsx(css.truckCardHeader)}>Mavericks</h3>
          <h3 className={clsx(css.truckCardPrice)}>€8000.00</h3>
        </div>
        <p className={clsx(css.truckCardReviews)}>
          <span>
            <img src={Star} alt="AC Icon" width="16" />
          </span>
          4.4(2 Reviews)
          <span className={clsx(css.truckCardReviewsSpan)}>
            <img src={Map} alt="AC Icon" width="16" />
          </span>
          Kyiv, Ukraine
        </p>
        <p className={clsx(css.truckCardDescription)}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>
        <ul className={clsx(css.truckCardEquipmentList)}></ul>
        <button className={clsx(css.truckCardShowMoreButton)}>Show More</button>
      </div>
    </div>
  );
};

export default TruckCatalogCard;
