import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

// Use clientEnv to access environment variables from the server.

// Get the server URL from the base tag if you need it.
// const baseHref = document.getElementsByTagName("base")[0].href;

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
