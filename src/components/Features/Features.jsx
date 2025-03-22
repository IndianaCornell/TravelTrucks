import clsx from "clsx";
import React from "react";

import css from "./Features.module.css";

const Features = () => {
  return (
    <div className={clsx(css.featuresContainer)}>
      <ul className={clsx(css.featuresEquipmentList)}></ul>
      <div className={clsx(css.featuresDetailesContainer)}>
        <h4 className={clsx(css.featuresDetailesHeader)}>
          <ul className={clsx(css.featuresDetailesList)}></ul>
        </h4>
      </div>
    </div>
  );
};

export default Features;
