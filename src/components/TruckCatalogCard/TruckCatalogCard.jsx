import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import css from "./TruckCatalogCard.module.css";

import { Star, Map, Heart, HeartRed } from "../../assets/icons";

import TruckFilterItem from "../TruckFilterItem/TruckFilterItem";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites, toggleFavorite } from "../../redux/favoritesSlice";

const TruckCatalogCard = ({ truck }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(truck.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(truck.id));
  };

  return (
    <div className={clsx(css.truckCard)}>
      <img
        width="320px"
        className={clsx(css.truckImage)}
        src={truck.gallery[0].original}
        alt="car"
      />
      <div className={clsx(css.truckCardWrapper)}>
        <div className={clsx(css.truckCardHeaderWrapper)}>
          <h3 className={clsx(css.truckCardHeader)}>{truck.name}</h3>
          <div className={clsx(css.truckPriceWrapper)}>
            <h3 className={clsx(css.truckCardPrice)}>€{truck.price}</h3>
            <button
              className={clsx(css.truckHeartButton, {
                [css.activeHeart]: isFavorite,
              })}
              onClick={handleFavoriteClick}
            >
              <img
                className={clsx(css.truckHeartIcon)}
                src={isFavorite ? HeartRed : Heart}
                alt="Heart Icon"
                width="24"
              />
            </button>
          </div>
        </div>
        <p className={clsx(css.truckCardReviews)}>
          <span>
            <img src={Star} alt="AC Icon" width="16" />
          </span>
          {truck.rating} ({truck.reviews.length} Reviews)
          <span className={clsx(css.truckCardReviewsSpan)}>
            <img src={Map} alt="AC Icon" width="16" />
          </span>
          {truck.location}
        </p>
        <p className={clsx(css.truckCardDescription)}>
          {truck.description.substring(0, 200) + "..."}
        </p>
        <ul className={clsx(css.truckCardEquipmentList)}>
          {Object.entries(truck)
            .filter(([key, value]) => typeof value === "boolean" && value)
            .map(([key]) => (
              <li key={key} className={clsx(css.truckCardEquipmentItem)}>
                <TruckFilterItem filter={key} />
              </li>
            ))}
        </ul>
        <Link
          to={`${truck.id}/features`}
          className={clsx(css.truckCardShowMoreButton)}
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default TruckCatalogCard;
