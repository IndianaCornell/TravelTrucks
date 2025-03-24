import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favoritesSlice";
import { selectTrucks } from "../../redux/catalogSelectors";
import TruckCatalogCard from "../TruckCatalogCard/TruckCatalogCard";
import clsx from "clsx";

import css from "./FavoriteList.module.css";

const FavoriteList = () => {
  const favoriteIds = useSelector(selectFavorites);
  const trucks = useSelector(selectTrucks);

  if (!trucks || !trucks.items) {
    return (
      <p className={clsx(css.favoriteLoadingTrucks)}>Loading favorites...</p>
    );
  }

  const favoriteTrucks = trucks.items.filter((truck) =>
    favoriteIds.includes(truck.id)
  );

  if (favoriteTrucks.length === 0) {
    return <p className={clsx(css.favoriteNoTrucks)}>No favorite trucks yet</p>;
  }

  return (
    <div className={clsx(css.favoriteWrapper)}>
      <h2 className={clsx(css.favoriteHeader)}>Favorite Trucks</h2>
      <ul className={clsx(css.favoriteList)}>
        {favoriteTrucks.map((truck) => (
          <li key={truck.id}>
            <TruckCatalogCard truck={truck} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
