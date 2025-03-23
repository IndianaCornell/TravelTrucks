import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={clsx(css.hero)}>
      <div className={clsx(css.container)}>
        <h1 className={clsx(css.heroHeader)}>Campers of your dreams</h1>
        <p className={clsx(css.heroDescription)}>
          You can find everything you want in our catalog
        </p>
        <Link className={clsx(css.heroLink)} to="/catalog">
          View Now
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
