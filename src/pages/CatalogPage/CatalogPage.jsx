import React from "react";
import clsx from "clsx";

import css from "./CatalogPage.module.css";

import TruckList from "../../components/TruksList/TruksList";
import Search from "../../components/Search/Search";

const CatalogPage = () => {
  return (
    <section className={clsx(css.container)}>
      <Search />
      <TruckList />
    </section>
  );
};

export default CatalogPage;
