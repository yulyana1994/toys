import React from "react";
import s from "./categories.module.css";

const Сategories = ({ items, onItemSelect }) => {
  return (
    <ul className={s.wrapper}>
      {items.map((item) => (
        <li key={item.id}>
          <button className={s.btn} onClick={() => onItemSelect(item.id)}>
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Сategories;
