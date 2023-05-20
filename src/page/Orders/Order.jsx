import { useContext, useState, useRef } from "react";
import { Cartcontext } from "../../components/store/context";
import SuccessAlert from "../../components/Allerts/Success/SuccessAlert";
const Order = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const [isOpen, setIsOpen] = useState(false);

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const increase = (item) => {
    dispatch({ type: "INCREASE", payload: item });
  };
  const decrease = (quantity, item) => {
    if (quantity > 1) {
      dispatch({ type: "DECREASE", payload: item });
    } else {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
  const remove = (item) => {
    dispatch({ type: "REMOVE", payload: item });
  };
  const removeAll = () => {
    dispatch({ type: "REMOVE_ALL", payload: [] });
  };
  const handlePay = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const orderCart = state.map((item) => (
    <section className="order__cart" key={item.id}>
      <div className="order__cart--item">
        <div className="order__cart--img">
          <img src={item.imgUrl} alt="img" />
        </div>
        <div className="order__cart--itemName">
          <p>{item.name}</p>
        </div>
        <div className="order__cart--price">
          <p>${item.price}</p>
        </div>
      </div>
      <div className="order__cart--action">
        <button onClick={() => decrease(item.quantity, item)}>
          <i class="fa-solid fa-window-minimize"></i>
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => increase(item)}>
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="order__cart--x" onClick={() => remove(item)}>
        <i class="fa-regular fa-circle-xmark"></i>
      </div>
    </section>
  ));
  return (
    <aside className={` ${state.length > 0 ? "true" : "order"}`}>
      <div className="order__header">
        <h3>New order</h3>
        <i onClick={removeAll} class="fa-regular fa-trash-can"></i>
      </div>
      {orderCart}
      {state.length > 0 && (
        <div className="order__total">
          <p>${total.toString().slice(0, 5)}</p>
          <div className="order__total--peyment" onClick={handlePay}>
            <span>Pay</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      )}
      <SuccessAlert open={isOpen} onClose={handleClose} />
    </aside>
  );
};

export default Order;
