import React, { Component } from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "rebass";
import { Effect } from "formik-effect";
import { Email, Password } from "../common/FormUtils";

// ref - https://codesandbox.io/s/vn1r9wl797

export default class Login extends Component {
  static validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  }

  handleFormSubmit = (values, { setSubmitting, setErrors }) => {
    console.log("logging values", values);
    setSubmitting(false);
  };

  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={Login.validate}
        onSubmit={this.handleFormSubmit}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting
        }) => (
          <Form>
            <Effect
              onChange={(currentFormikState, nextFormikState) => {
                if (!nextFormikState.errors.email) {
                  console.log("let's change to password");
                } else {
                  console.log("no errors");
                }
              }}
            />
            <Box m={1}>
              <Email
                label="Email"
                placeholder="email"
                error={errors.email && touched.email && errors.email}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>

            <Box m={1}>
              <Password
                type="password"
                label="Your Password"
                placeholder="password"
                error={errors.password && touched.password && errors.password}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>

            <Box m={1}>
              <Button
                width={1}
                p={1}
                bg={"rebeccapurple"}
                children="Log In"
                disabled={
                  isSubmitting ||
                  !!(errors.email && touched.email) ||
                  !!(errors.password && touched.password)
                }
              />
            </Box>
          </Form>
        )}
      />
    );
  }
}
