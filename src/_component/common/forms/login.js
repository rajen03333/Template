import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginValidationSchema } from "../../../_validationSchema";
import { userActions } from "../../../_actions";
import Lock from "../../../assets/img/lock.svg";
export const LoginForm = React.memo(function FormikForm() {
  // Created Redux dispatch for triggering actions
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ userId: "", password: "" }}
      validationSchema={LoginValidationSchema}
      onSubmit={(values) => {
        dispatch(userActions.login(values));
      }}
    >
      {(props) => (
        <div className="testbox">
          <Form onSubmit={props.handleSubmit}>
            <h3 className="h4 text-black mb-4">
              <b>{"Login"}</b>
            </h3>
            {/* login screen Logo */}
            <div className="logo">
             
            </div>
            <div
              className={[
                "form-group" + (!props.isValid ? " has-error" : ""),
                "form-group has-search",
              ].join(" ")}
            >
              
              <Field
                className="form-control"
                type="text"
                placeholder="Email"
                name="userId"
              ></Field>
              <ErrorMessage name="userId"></ErrorMessage>
            </div>
            <div
              className={[
                "form-group has-search",
                "form-group" + (props.isValid ? " has-error" : ""),
              ].join(" ")}
            >
              <img className="icon form-control-feedback lock-img" src={Lock} />
              <Field
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
              ></Field>
              <ErrorMessage name="password"></ErrorMessage>
            </div>

            <div className="form-group">
              <button
                className="sign-button"
                type="submit"
                disabled={props.isValid === false}
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
});
