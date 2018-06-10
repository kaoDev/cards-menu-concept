import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { injectGlobal } from "emotion";
import { BrowserRouter } from "react-router-dom";
injectGlobal({
  "body,html,#root": {
    width: "100%",
    height: "100%",
    padding: 0,
    margin: 0,
    fontFamily: "Roboto, Helvetica, Verdana, sans-serif",
  },
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"),
);
