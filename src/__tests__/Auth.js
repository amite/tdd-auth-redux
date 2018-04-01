import React from "react";
import { mount, shallow, render } from "enzyme";
import Auth from "../components/Auth";
import Login from "../components/Login";

describe("Authentication", () => {
  describe("Login", () => {
    it("should display a login form", () => {
      const wrapper = shallow(<Auth />);
      expect(wrapper.find("Login").exists()).toBe(true);
    });
  });

  describe("Login Form", () => {
    it("should display a Form", () => {
      const wrapper = mount(<Login />);
      expect(wrapper.find("Email").exists()).toBe(true);
    });
  });
});
