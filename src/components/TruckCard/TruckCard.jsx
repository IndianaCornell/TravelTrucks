import clsx from "clsx";
import React from "react";

import css from "./TruckCard.module.css";
import carImage2 from "../../assets/car2.png";

import { Star, Map } from "../../assets/icons";

const TruckCard = () => {
  return (
    <>
      <div className={clsx(css.truckCard)}>
        <div className={clsx(css.truckCardHeaderWrapper)}>
          <h3 className={clsx(css.truckCardHeader)}>Mavericks</h3>
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
          <h3 className={clsx(css.truckCardPrice)}>€8000.00</h3>
        </div>
        <ul className={clsx(css.truckCardEquipmentList)}>
          <li className={clsx(css.truckCardEquipmentItem)}>
            <img src={carImage2} alt="2" />
          </li>
          <li className={clsx(css.truckCardEquipmentItem)}>
            <img src={carImage2} alt="2" />
          </li>
          <li className={clsx(css.truckCardEquipmentItem)}>
            <img src={carImage2} alt="2" />
          </li>
          <li className={clsx(css.truckCardEquipmentItem)}>
            <img src={carImage2} alt="2" />
          </li>
        </ul>
        <p className={clsx(css.truckCardDescription)}>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads. This no-frills yet reliable
          panel truck offers the essentials for a comfortable journey, making it
          the perfect companion for those who value simplicity and
          functionality.
        </p>
      </div>
    </>
  );
};

export default TruckCard;
