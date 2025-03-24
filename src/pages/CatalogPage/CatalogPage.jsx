import React from "react";
import clsx from "clsx";

import css from "./CatalogPage.module.css";

import TruckList from "../../components/TrucksList/TrucksList";
import Search from "../../components/Search/Search";
import FavoriteList from "../../components/FavoriteList/FavoriteList";

const CatalogPage = () => {
  return (
    <section className={clsx(css.container)}>
      <Search />
      <div className={clsx(css.listWrapper)}>
        <FavoriteList />
        <TruckList />
      </div>
    </section>
  );
};

export default CatalogPage;
