import React from "react";
import s from "./categories.module.css";

const Сategories = ({ items, onItemSelect, selectedItem }) => {
  return (
    <ul className={s.wrapper}>
      {Object.keys(items).map((item) => (
        <li key={items[item].id}>
          <button
            className={s.btn}
            onClick={() => onItemSelect(items[item].id)}
          >
            {items[item].title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Сategories;
