import { Field, Formik, Form } from "formik";
import React from "react";

import css from "./FeedbackForm.module.css";
import clsx from "clsx";

const FeedbackForm = () => {
  const handleSubmit = (values, actions) => {
    console.log("Form Submitted", values);
    actions.resetForm();
  };

  return (
    <div className={clsx(css.feedbackFormContainer)}>
      <h3 className={clsx(css.feedbackFormHeader)}>Book your campervan now</h3>
      <p className={clsx(css.feedbackFormDescription)}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={clsx(css.feedbackForm)}>
            <Field
              className={clsx(css.feedbackFormInput)}
              type="text"
              name="name"
              placeholder="Name*"
              required
            />
            <Field
              className={clsx(css.feedbackFormInput)}
              type="email"
              name="email"
              placeholder="Email*"
              required
            />
            <Field
              className={clsx(css.feedbackFormInput)}
              type="text"
              name="bookingDate"
              placeholder="Booking date*"
              required
            />
            <Field
              className={clsx(css.feedbackFormComment)}
              as="textarea"
              name="comment"
              rows="1"
              placeholder="Comment"
            />
            <button className={clsx(css.feedbackFormButton)} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FeedbackForm;
