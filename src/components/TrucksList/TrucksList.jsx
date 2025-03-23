import { ProgressBar } from "react-loader-spinner";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import css from "./TrucksList.module.css";

import filteredTrucks from "../../utils/filter";

import TruckCatalogCard from "../TruckCatalogCard/TruckCatalogCard";

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

  const filtered = filteredTrucks(trucks, filters);

  return (
    <div className={clsx(css.truckListWrapper)}>
      {isLoading && <ProgressBar />}
      {error && <p>Error: {error}</p>}
      <ul className={clsx(css.truckList)}>
        {Array.isArray(trucks?.items) && filtered.length > 0 ? (
          filtered.slice(0, visibleCount).map((truck) => (
            <li key={truck.id}>
              <TruckCatalogCard truck={truck} />
            </li>
          ))
        ) : (
          <p>No trucks found</p>
        )}
      </ul>
      {trucks?.items && visibleCount < filtered.length && (
        <button className={clsx(css.truckListLoadMoreBtn)} onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default TrucksList;
