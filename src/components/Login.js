import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { Input, Box, Button, Label } from "rebass";

const withEmail = WrappedComponent => {
  return class Email extends Component {
    render() {
      return <WrappedComponent type={"email"} name={"email"} {...this.props} />;
    }
  };
};

const withPassword = WrappedComponent => {
  return class Password extends Component {
    render() {
      return (
        <WrappedComponent type={"password"} name={"password"} {...this.props} />
      );
    }
  };
};

const TextInput = ({ type, id, label, error, value, onChange, ...props }) => {
  return (
    <Box>
      <Label>{label}</Label>
      <Input
        p={1}
        bg={"white"}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Box>
  );
};

const Email = withEmail(TextInput);
const Password = withPassword(TextInput);

export default class Login extends Component {
  render() {
    return (
      <Formik
        onSubmit={() => {
          console.log("submitting");
        }}
        initialValues={{ email: "", password: "" }}
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
            <Box m={1}>
              <Email
                type="text"
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
                disabled={isSubmitting}
              />
            </Box>
          </Form>
        )}
      />
    );
  }
}
