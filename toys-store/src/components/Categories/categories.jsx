import React from "react";
import s from "./categories.module.css";

const –°ategories = ({ items, onItemSelect }) => {
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

export default –°ategories;
