import React, { Component } from "react";

import Login from "./Login";
import Center from "./common/Center";

export default class Auth extends Component {
  render() {
    return (
      <Center>
        <Login />
      </Center>
    );
  }
}
