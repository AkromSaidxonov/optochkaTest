import React, { useContext, useEffect } from "react";
import { Cartcontext } from "../../../components/store/context";
import { useNavigate } from "react-router-dom";

const OrderLink = () => {
  const navigate = useNavigate();
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  useEffect(() => {
    if (state.length === 0) {
      navigate("/");
    }
  }, [state]);
  const navigateCheckout = () => {
    navigate("/orderCheckout");
  };

  return (
    <div className={` ${state.length > 0 ? "orderLinkActive" : "orderLink"}`}>
      <div className="orderLink__item">
        <p>${total.toString().slice(0, 5)}</p>
        <div className="orderLink__item--peyment" onClick={navigateCheckout}>
          <span>Checkout</span>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default OrderLink;
