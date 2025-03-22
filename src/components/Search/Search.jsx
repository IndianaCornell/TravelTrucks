import React from "react";
import { Formik, Form, Field } from "formik";

import css from "./Search.module.css";
import clsx from "clsx";

import {
  Alcove,
  Automatic,
  AC,
  Bathroom,
  FullyIntegrated,
  Kitchen,
  TV,
  VAN,
} from "../../assets/icons";

const Search = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        query: "",
        equipment: [],
        vehicleType: [],
      }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className={clsx(css.searchForm)}>
          <div className={clsx(css.searchLocationContainer)}>
            <label className={clsx(css.searchLocationLabel)}>Location</label>
            <Field
              className={clsx(css.searchLocationField)}
              type="text"
              name="query"
              placeholder="Kiev, Ukraine"
            />
          </div>
          <div className={clsx(css.searchFiltersContainer)}>
            <label className={clsx(css.searchFiltersLabel)}>Filters</label>
            <div className={clsx(css.searchFiltersWrapper)}>
              <legend className={clsx(css.searchFiltersLegend)}>
                Vehicle equipment
              </legend>
              <hr className={clsx(css.searchFiltersDivider)} />
              <div className={clsx(css.searchFiltersCheckBoxes)}>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="equipment"
                    value="AC"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={AC} alt="AC Icon" width="32" />
                    <span className={clsx(css.filterIconDescription)}>AC</span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="equipment"
                    value="Automatic"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={Automatic} alt="AC Icon" width="32" />

                    <span className={clsx(css.filterIconDescription)}>
                      Automatic
                    </span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="equipment"
                    value="Kitchen"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={Kitchen} alt="AC Icon" width="32" />

                    <span className={clsx(css.filterIconDescription)}>
                      Kitchen
                    </span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="equipment"
                    value="TV"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={TV} alt="AC Icon" width="32" />
                    <span className={clsx(css.filterIconDescription)}>TV</span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="equipment"
                    value="Bathroom"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={Bathroom} alt="AC Icon" width="32" />

                    <span className={clsx(css.filterIconDescription)}>
                      Bathroom
                    </span>
                  </div>
                </label>
              </div>
            </div>
            <div className={clsx(css.searchFiltersWrapper)}>
              <legend className={clsx(css.searchFiltersLegend)}>
                Vehicle type
              </legend>
              <hr className={clsx(css.searchFiltersDivider)} />
              <div className={clsx(css.searchFiltersCheckBoxes)}>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="vehicleType"
                    value="Van"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={Bathroom} alt="AC Icon" width="32" />

                    <span className={clsx(css.filterIconDescription)}>Van</span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="vehicleType"
                    value="FullyIntegrated"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={FullyIntegrated} alt="AC Icon" width="32" />

                    <span className={clsx(css.filterIconDescription)}>
                      Fully Integrated
                    </span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="vehicleType"
                    value="Alcove"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={Alcove} alt="AC Icon" width="32" />

                    <span className={clsx(css.filterIconDescription)}>
                      Alcove
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <button className={clsx(css.searchSubmitButton)} type="submit">
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Search;
