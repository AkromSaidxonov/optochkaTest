import React, { lazy } from "react";
const Burgers = lazy(() => import("../../page/Burgers/Burgers"));
const Meals = lazy(() => import("../../page/Meals/Meals"));
const NotFound = lazy(() => import("../error/404/NotFound"));

export const routes = [
  {
    key: "0",
    path: "*",
    element: <NotFound />,
    role: ["user"],
    extraRoute: null,
  },
  {
    key: "1",
    path: "/",
    element: <Burgers />,
    role: ["user"],
    extraRoute: null,
  },
  {
    key: "2",
    path: "/meals",
    element: <Meals />,
    role: ["user"],
    extraRoute: null,
  },
  {
    key: "3",
    path: "/sandwiches",
    element: "",
    role: ["user"],
    extraRoute: null,
  },
  {
    key: "4",
    path: "/sides",
    element: "",
    role: ["user"],
    extraRoute: null,
  },
  {
    key: "4",
    path: "/drinks",
    element: "",
    role: ["user"],
    extraRoute: null,
  },
];
