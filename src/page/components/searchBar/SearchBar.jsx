import { useState } from "react";
import { food } from "../../../components/mock/foods";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleOnchange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  const searchResonse =
    query &&
    food
      .filter((item) => item?.name.toLocaleLowerCase().includes(query))
      .map((item) => (
        <div className="searchBar__cart-item" key={item.id}>
          <img src={item.imgUrl} alt="img" />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <span>
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
        </div>
      ));

  return (
    <div className="searchBar">
      <form>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" onChange={handleOnchange} />
      </form>
      {query && <div className="searchBar__cart">{searchResonse}</div>}
    </div>
  );
};

export default SearchBar;
