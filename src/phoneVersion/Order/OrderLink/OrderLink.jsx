import React, { useContext, useState, useEffect } from "react";
import { Cartcontext } from "../../../components/store/context";
import { useNavigate, useLocation } from "react-router-dom";
import SuccessAlert from "../../../components/Allerts/Success/SuccessAlert";

const OrderLink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
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
  }, []);
  const navigateCheckout = () => {
    navigate("/orderCheckout");
  };
  const handlePay = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={` ${state.length > 0 ? "orderLinkActive" : "orderLink"}`}>
      <div className="orderLink__item">
        <p>${total.toString().slice(0, 5)}</p>
        {location.pathname === "/orderCheckout" ? (
          <div className="orderLink__item--peyment" onClick={handlePay}>
            <span>Pay</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        ) : (
          <div className="orderLink__item--peyment" onClick={navigateCheckout}>
            <span>Checkout</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        )}
      </div>
      <SuccessAlert open={isOpen} onClose={handleClose} />
    </div>
  );
};

export default OrderLink;
