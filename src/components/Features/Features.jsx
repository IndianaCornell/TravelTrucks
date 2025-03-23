import clsx from "clsx";
import React from "react";

import css from "./Features.module.css";
import { useOutletContext } from "react-router-dom";
import TruckFilterItem from "../TruckFilterItem/TruckFilterItem";

const Features = () => {
  const { truck } = useOutletContext();
  const { form, length, width, height, tank, consumption } = truck;
  return (
    <div className={clsx(css.featuresContainer)}>
      <ul className={clsx(css.featuresEquipmentList)}>
        {Object.entries(truck)
          .filter(([key, value]) => typeof value === "boolean" && value)
          .map(([key]) => (
            <li key={key} className={clsx(css.truckCardEquipmentItem)}>
              <TruckFilterItem filter={key} />
            </li>
          ))}
      </ul>
      <div className={clsx(css.featuresDetailesContainer)}>
        <h4 className={clsx(css.featuresDetailesHeader)}>Vehicle details </h4>
        <ul className={clsx(css.featuresDetailesList)}>
          <li className={clsx(css.featuresDetailesItem)}>
            <p className={clsx(css.featuresDetailesDescription)}>Form</p>
            <p className={clsx(css.featuresDetailesDescription)}>{form}</p>
          </li>
          <li className={clsx(css.featuresDetailesItem)}>
            <p className={clsx(css.featuresDetailesDescription)}>Length</p>
            <p className={clsx(css.featuresDetailesDescription)}>{length}</p>
          </li>
          <li className={clsx(css.featuresDetailesItem)}>
            <p className={clsx(css.featuresDetailesDescription)}>Width</p>
            <p className={clsx(css.featuresDetailesDescription)}>{width}</p>
          </li>
          <li className={clsx(css.featuresDetailesItem)}>
            <p className={clsx(css.featuresDetailesDescription)}>Height</p>
            <p className={clsx(css.featuresDetailesDescription)}>{height}</p>
          </li>
          <li className={clsx(css.featuresDetailesItem)}>
            <p className={clsx(css.featuresDetailesDescription)}>Tank</p>
            <p className={clsx(css.featuresDetailesDescription)}>{tank}</p>
          </li>
          <li className={clsx(css.featuresDetailesItem)}>
            <p className={clsx(css.featuresDetailesDescription)}>Consumption</p>
            <p className={clsx(css.featuresDetailesDescription)}>
              {consumption}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
