import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

import css from "./TruckPage.module.css";

import TruckCard from "../../components/TruckCard/TruckCard";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.truckPageLink, isActive && css.active);
};

const TruckPage = () => {
  return (
    <section className={clsx(css.container)}>
      <TruckCard />
      <ul className={clsx(css.truckPageLinkList)}>
        <li>
          <NavLink className={buildLinkClass} to="features">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <div className={clsx(css.truckPageFooterWrapper)}>
        <Outlet />
        <FeedbackForm />
      </div>
    </section>
  );
};

export default TruckPage;
