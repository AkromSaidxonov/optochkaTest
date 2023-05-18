import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/main.scss";

//
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);