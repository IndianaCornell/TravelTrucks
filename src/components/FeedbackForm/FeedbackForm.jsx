import { Field, Formik, Form } from "formik";
import React from "react";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";

import css from "./FeedbackForm.module.css";

const FeedbackForm = () => {
  const handleSubmit = (values, actions) => {
    toast.success("We'll be in contact with you shortly.");
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
              placeholder="Select a date between today"
              required
              onFocus={(e) => {
                e.target.type = "date";
                e.target.showPicker();
              }}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.type = "text";
                }
              }}
              min={new Date().toISOString().split("T")[0]}
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
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
};

export default FeedbackForm;
