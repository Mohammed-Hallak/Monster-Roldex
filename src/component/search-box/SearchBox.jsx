import React from "react";
import "./SearchBoxStyle.css";

function SearchBox({ className, placeholder , onChangeHandler }) {
  return (
    <input
      type="search"
      className={`${className} search-box`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
