import React, { useEffect, useState } from "react";
import clsx from "clsx";

import css from "./TrucksList.module.css";

import TruckCatalogCard from "../TruckCatalogCard/TruckCatalogCard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTrucks,
  selectLoading,
  selectError,
} from "../../redux/catalogSelectors";
import { getCatalog } from "../../redux/truckOperations";

const TrucksList = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const dispatch = useDispatch();
  const trucks = useSelector(selectTrucks);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector((state) => state.catalog.filters);

  useEffect(() => {
    dispatch(getCatalog());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const filteredTrucks = (trucks?.items || []).filter((truck) => {
    if (
      filters.query &&
      !truck.location.toLowerCase().includes(filters.query.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.vehicleType.length > 0 &&
      !filters.vehicleType.includes(truck.form)
    ) {
      return false;
    }

    if (
      filters.equipment.length > 0 &&
      !filters.equipment.every((eq) => truck[eq] === true)
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className={clsx(css.truckListWrapper)}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={clsx(css.truckList)}>
        {Array.isArray(trucks?.items) && filteredTrucks.length > 0 ? (
          filteredTrucks.slice(0, visibleCount).map((truck) => (
            <li key={truck.id}>
              <TruckCatalogCard truck={truck} />
            </li>
          ))
        ) : (
          <p>No trucks found</p>
        )}
      </ul>
      {trucks?.items && visibleCount < filteredTrucks.length && (
        <button className={clsx(css.truckListLoadMoreBtn)} onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default TrucksList;
