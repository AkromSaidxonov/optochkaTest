import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/main.scss";

//
import { BrowserRouter } from "react-router-dom";
import { Context } from "./components/store/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
