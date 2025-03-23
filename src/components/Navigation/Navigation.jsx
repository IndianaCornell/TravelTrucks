import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navigationLink, isActive && css.active);
};

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <section
      className={clsx(css.header, { [css.headerHomeBackground]: !isHomePage })}
    >
      <div className={clsx(css.container)}>
        <nav className={clsx(css.navigation)}>
          <Link className={clsx(css.navigationLogo)} to="/">
            Travel<span className={clsx(css.navigationLogoSpan)}>Trucks</span>
          </Link>
          <ul className={clsx(css.navigationList)}>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
            <NavLink className={buildLinkClass} to="/catalog">
              Catalog
            </NavLink>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
