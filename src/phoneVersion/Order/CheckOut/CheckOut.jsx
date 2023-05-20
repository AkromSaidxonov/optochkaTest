import { useContext } from "react";
import { Cartcontext } from "../../../components/store/context";
const CheckOut = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

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

  const orderCart = state.map((item) => (
    <section className="checkout__cart" key={item.id}>
      <div className="checkout__cart--item">
        <div className="checkout__cart--img">
          <img src={item.imgUrl} alt="img" />
        </div>
        <div className="checkout__cart--itemName">
          <p>{item.name}</p>
        </div>
        <div className="checkout__cart--price">
          <p>${item.price}</p>
        </div>
      </div>
      <div className="checkout__cart--action">
        <button onClick={() => decrease(item.quantity, item)}>
          <i class="fa-solid fa-window-minimize"></i>
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => increase(item)}>
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="checkout__cart--x" onClick={() => remove(item)}>
        <i class="fa-regular fa-circle-xmark"></i>
      </div>
    </section>
  ));
  return (
    <aside className="checkout container">
      <div className="checkout__header">
        <h3>
          <span>
            <i class="fa-solid fa-chevron-left"></i>
          </span>{" "}
          Checkout
        </h3>
        <i onClick={removeAll} class="fa-regular fa-trash-can"></i>
      </div>
      {orderCart}
    </aside>
  );
};

export default CheckOut;
