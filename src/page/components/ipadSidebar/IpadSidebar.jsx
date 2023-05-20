import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/img/logo/logo.png";
import { link } from "../../../components/router/link";

const IpadSidebar = () => {
  const location = useLocation();

  const linkItems = link.map((item) => (
    <Link
      to={item.url}
      key={item.id}
      className={`ipadSidebar__links-item ${
        item.url === location.pathname ? "activeLink" : ""
      }`}
    >
      <item.icon className="sidebarIcon" />
      <p>{item.name}</p>
    </Link>
  ));

  return (
    <aside className="ipadSidebar">
      <div className="ipadSidebar__back-button">
        <span>
          <i className="fa-solid fa-arrow-left"></i> Back
        </span>
      </div>
      <div className="ipadSidebar__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="ipadSidebar__links">{linkItems}</div>
    </aside>
  );
};

export default IpadSidebar;
