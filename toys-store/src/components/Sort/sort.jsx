import React from "react";
import s from "./sort.module.css";

const Sort = ({ onSort }) => {
  return (
    <div className={s.sort}>
      <form className={s.sortForm}>
        <div>Сортировать по:</div>
        <input
          type="radio"
          value="price"
          id="price"
          name="sort"
          onClick={() => onSort("price")}
        />
        <label htmlFor="price">
          Цене
          <img className={s.sortImg} src="assets/upDown.png" alt="upDown" />
        </label>

        <input
          type="radio"
          value="name"
          id="name"
          name="sort"
          onClick={() => onSort("name")}
        />
        <label htmlFor="name">
          Названию
          <img className={s.sortImg} src="assets/upDown.png" alt="upDown" />
        </label>
      </form>
    </div>
  );
};

export default Sort;
