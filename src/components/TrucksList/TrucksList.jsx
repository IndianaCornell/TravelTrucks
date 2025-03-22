import React from "react";
import clsx from "clsx";

import css from "./TrucksList.module.css";

import TruckCatalogCard from "../TruckCatalogCard/TruckCatalogCard";

const TrucksList = () => {
  return (
    <div className={clsx(css.truckListWrapper)}>
      <ul className={clsx(css.truckList)}>
        <li>
          <TruckCatalogCard />
        </li>
      </ul>
      <button className={clsx(css.truckListLoadMoreBtn)}>Load More</button>
    </div>
  );
};

export default TrucksList;
