import React from "react";
import s from "./searchString.module.css";

const SearchString = () => {
  return (
    <div className={s.wrapper}>
      <img src="/assets/search.png" alt="search" />
      <input className={s.input} type="text" placeholder="Поиск..." />
    </div>
  );
};

export default SearchString;
