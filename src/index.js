import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Auth from "../src/components/Auth";
import registerServiceWorker from "./registerServiceWorker";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Auth />, document.getElementById("root"));
registerServiceWorker();
