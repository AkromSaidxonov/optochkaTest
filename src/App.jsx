import { useState } from "react";
import { food } from "./components/mock/foods";

const App = () => {
  console.log(food);
  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "1024px",
        margin: "0 auto ",
      }}
    >
      <p>hello</p>
      <p>hello</p>
    </div>
  );
};

export default App;
