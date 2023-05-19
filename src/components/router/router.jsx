import React, { lazy } from "react";
const Burgers = lazy(() => import("../../page/Burgers/Burgers"));

export const routes = [
  {
    key: "1",
    path: "/",
    element: <Burgers/>,
    role: ["user"],
    extraRoute: null,
  },
  {
    key: "2",
    path: "/meals",
    element: "",
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
