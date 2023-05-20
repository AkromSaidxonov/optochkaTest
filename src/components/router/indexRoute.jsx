import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./router";
import SearchBar from "../../page/components/searchBar/SearchBar";
import Order from "../../page/Orders/Order";

//
import IpadSidebar from "../../page/components/ipadSidebar/IpadSidebar";

function IndexRoute() {
  const RoutesItems = routes
    .filter((route) => route?.role?.includes("user"))
    .map((item) => (
      <Route path={item.path} key={item.key} element={item.element}>
        {item.extraRoute?.map((item) => (
          <Route path={item.path} key={item.key} element={item.element} />
        ))}
      </Route>
    ));
  return (
    <Suspense fallback>
      <section className="router container">
        <div className="router__sidebar">
          <IpadSidebar />
        </div>
        <div className="router__phoneSidebar">
          <IpadSidebar />
        </div>
        <div className="router__item">
          <div className="router__searchBar">
            <SearchBar />
          </div>
          <Routes>{RoutesItems}</Routes>
        </div>
        <Order />
      </section>
    </Suspense>
  );
}

export default IndexRoute;
