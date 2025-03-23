import React, { useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";

import css from "./TruckPage.module.css";

import TruckCard from "../../components/TruckCard/TruckCard";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectTruck,
} from "../../redux/catalogSelectors";
import { getTruck } from "../../redux/truckOperations";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.truckPageLink, isActive && css.active);
};

const TruckPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const params = useParams();
  const truck = useSelector(selectTruck);

  useEffect(() => {
    dispatch(getTruck(params.id));
  }, [dispatch]);

  console.log(truck);

  return (
    <section className={clsx(css.container)}>
      <TruckCard truck={truck} isLoading={isLoading} error={error} />
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
        <Outlet context={{ truck, isLoading, error }} />
        <FeedbackForm />
      </div>
    </section>
  );
};

export default TruckPage;
