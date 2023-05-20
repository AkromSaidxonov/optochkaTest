import React, { useContext } from "react";
import { food } from "../../components/mock/foods";
import { Cartcontext } from "../../components/store/context";

const Burgers = () => {
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;


  const handleAddToCart = (value) => {
    const addData = {
      type: "ADD",
      payload: {
        id: value.id,
        name: value.name,
        imgUrl: value.imgUrl,
        price: value.price,
        quantity: 1,
      },
    };
    dispatch(addData);
  };

  const burgersData = food.map((item) => (
    <div
      className="burgers__cartItem"
      key={item.id}
      onClick={handleAddToCart.bind(null, item)}
    >
      <div className="burgers__cartItem--img">
        <img src={item.imgUrl} alt="img" />
      </div>
      <div className="burgers__cartItem--body">
        <span>${item.price}</span>
        <p>{item.name}</p>
      </div>
    </div>
  ));

  return (
    <div className="burgers">
      <div className="burgers__cart">{burgersData}</div>
    </div>
  );
};

export default Burgers;
