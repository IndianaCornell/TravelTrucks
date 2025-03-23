import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import clsx from "clsx";

import css from "./Search.module.css";

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

import { updateFilters } from "../../redux/catalogSlice";

const Search = ({ onSearch }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(updateFilters(values));
  };

  return (
    <Formik
      initialValues={{
        query: "",
        equipment: [],
        vehicleType: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className={clsx(css.searchForm)}>
          <div className={clsx(css.searchLocationContainer)}>
            <label className={clsx(css.searchLocationLabel)}>Location</label>
            <img
              className={clsx(css.searchIcon)}
              src={Map}
              alt="AC Icon"
              width="20"
            />
            <Field
              className={clsx(css.searchLocationField)}
              type="text"
              name="query"
              placeholder="City"
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
                    value="automatic"
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
                    value="kitchen"
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
                    value="bathroom"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={Bathroom} alt="AC Icon" width="32" />

                    <span className={clsx(css.filterIconDescription)}>
                      Bathroom
                    </span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="equipment"
                    value="gas"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={Gas} alt="Gas Icon" width="32" />
                    <span className={clsx(css.filterIconDescription)}>Gas</span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="equipment"
                    value="microwave"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={Microwave} alt="Microwave Icon" width="32" />
                    <span className={clsx(css.filterIconDescription)}>
                      Microwave
                    </span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="equipment"
                    value="petrol"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={Petrol} alt="Petrol Icon" width="32" />
                    <span className={clsx(css.filterIconDescription)}>
                      Petrol
                    </span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="equipment"
                    value="radio"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={Radio} alt="AC Icon" width="32" />
                    <span className={clsx(css.filterIconDescription)}>
                      Radio
                    </span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="equipment"
                    value="refrigerator"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img
                      src={Refrigerator}
                      alt="Refrigerator Icon"
                      width="32"
                    />
                    <span className={clsx(css.filterIconDescription)}>
                      Refrigerator
                    </span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="checkbox"
                    name="equipment"
                    value="water"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={Water} alt="Water Icon" width="32" />
                    <span className={clsx(css.filterIconDescription)}>
                      Water
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
                    type="radio"
                    name="vehicleType"
                    value="van"
                  />
                  <div className={clsx(css.filterIconWrapper)}>
                    <img src={VAN} alt="AC Icon" width="32" />

                    <span className={clsx(css.filterIconDescription)}>Van</span>
                  </div>
                </label>
                <label>
                  <Field
                    className={clsx(css.searchFiltersCheckBox)}
                    type="radio"
                    name="vehicleType"
                    value="fullyIntegrated"
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
                    type="radio"
                    name="vehicleType"
                    value="alcove"
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
