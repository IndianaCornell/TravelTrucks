import React from "react";
import clsx from "clsx";

import css from "./TruckFilterItem.module.css";

import {
  Alcove,
  Automatic,
  AC,
  Bathroom,
  FullyIntegrated,
  Kitchen,
  TV,
  VAN,
  Gas,
  Microwave,
  Petrol,
  Radio,
  Refrigerator,
  Water,
  Map,
} from "../../assets/icons";

const iconsMap = {
  Alcove,
  Automatic,
  AC,
  Bathroom,
  FullyIntegrated,
  Kitchen,
  TV,
  VAN,
  Gas,
  Microwave,
  Petrol,
  Radio,
  Refrigerator,
  Water,
  Map,
};

const TruckFilterItem = ({ filter }) => {
  const filterName = filter.charAt(0).toUpperCase() + filter.slice(1);
  const iconSrc = iconsMap[filterName];
  return (
    <div className={clsx(css.truckFilterContainer)}>
      <img src={iconSrc} alt="Icon" width="20" />
      <p className={clsx(css.truckFilterName)}>{filter}</p>
    </div>
  );
};

export default TruckFilterItem;
