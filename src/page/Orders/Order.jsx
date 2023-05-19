import { useContext } from "react";
import { Cartcontext } from "../../components/store/context";

const Order = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  console.log(state);
  return state.length !== 0 ? (
    <aside className="order">
      <div className="order__header">
        <h3>New order</h3>
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </aside>
  ) : (
    ""
  );
};

export default Order;
