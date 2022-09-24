import React from "react";
import s from "./sort.module.css";

const Sort = ({ onSort }) => {
  return (
    <div className={s.sort}>
      <p>Сортировать по:</p>
      <ul className={s.nav}>
        <li onClick={() => onSort("price")}>Цене</li>
        <li onClick={() => onSort("name")}>Названию</li>
      </ul>
    </div>
  );
};

export default Sort;
