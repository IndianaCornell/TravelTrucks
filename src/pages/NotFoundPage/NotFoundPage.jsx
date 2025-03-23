import React from "react";
import clsx from "clsx";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={clsx(css.notFoundPageContainer)}>
      <h2 className={clsx(css.notFoundPageTitle)}>Something went wrong.</h2>
    </div>
  );
};

export default NotFoundPage;
