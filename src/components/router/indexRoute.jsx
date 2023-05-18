import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./router";

function indexRoute() {
  const RoutesItems = routes
    .filter((route) => route?.role?.includes([]))
    .map((item) => (
      <Route path={item.path} key={item.key} element={<item.element />}>
        {item.extraRoute?.map((item) => (
          <Route path={item.path} key={item.key} element={<item.element />} />
        ))}
      </Route>
    ));
  return (
    <Suspense fallback>
      <Routes>{RoutesItems}</Routes>
    </Suspense>
  );
}

export default indexRoute;
