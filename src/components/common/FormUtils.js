import React, { Component } from "react";
import { Input, Label } from "rebass";

const withAttribute = attr => WrappedComponent => {
  return class extends Component {
    static displayName = attr.charAt(0).toUpperCase() + attr.substr(1);
    render() {
      return <WrappedComponent type={attr} name={attr} {...this.props} />;
    }
  };
};

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const TextInput = ({ label, error, value, onChange, ...props }) => {
  return (
    <React.Fragment>
      <Label>{label}</Label>
      <Input p={1} bg={"white"} value={value} onChange={onChange} {...props} />
      <InputFeedback error={error} />
    </React.Fragment>
  );
};

export const Email = withAttribute("email")(TextInput);
export const Password = withAttribute("password")(TextInput);
