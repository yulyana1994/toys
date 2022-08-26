import React from "react";
import s from "./searchString.module.css";

const SearchString = () => {
  return (
    <div className={s.wrapper}>
      <input type="text" placeholder="Поиск..." />
    </div>
  );
};

export default SearchString;
