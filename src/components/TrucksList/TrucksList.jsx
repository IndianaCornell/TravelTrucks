import React, { useEffect } from "react";
import clsx from "clsx";

import css from "./TrucksList.module.css";

import TruckCatalogCard from "../TruckCatalogCard/TruckCatalogCard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTrucks,
  selectLoading,
  selectError,
} from "../../redux/catalogSelectors";
import { getCatalog } from "../../redux/catalogOperations";

const TrucksList = () => {
  const dispatch = useDispatch();
  const trucks = useSelector(selectTrucks);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getCatalog());
  }, [dispatch]);

  return (
    <div className={clsx(css.truckListWrapper)}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={clsx(css.truckList)}>
        {trucks.total > 0 ? (
          trucks.items.map((truck) => (
            <li key={truck.id}>
              <TruckCatalogCard truck={truck} />
            </li>
          ))
        ) : (
          <> No trucks available</>
        )}
      </ul>
      <button className={clsx(css.truckListLoadMoreBtn)}>Load More</button>
    </div>
  );
};

export default TrucksList;
