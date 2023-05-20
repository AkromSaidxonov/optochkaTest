import React, { useContext } from "react";
import { Cartcontext } from "../../../components/store/context";

const OrderLink = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="orderLink">
      <div className="orderLink__item">
        <p>${total.toString().slice(0, 5)}</p>
        <div className="orderLink__item--peyment">
          <span>Checkout</span>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default OrderLink;
