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

  useEffect(() => {
    dispatch(getCatalog());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className={clsx(css.truckListWrapper)}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={clsx(css.truckList)}>
        {trucks.total > 0 ? (
          trucks.items.slice(0, visibleCount).map((truck) => (
            <li key={truck.id}>
              <TruckCatalogCard truck={truck} />
            </li>
          ))
        ) : (
          <> </>
        )}
      </ul>
      {trucks?.items && visibleCount < trucks.items.length && (
        <button className={clsx(css.truckListLoadMoreBtn)} onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default TrucksList;
