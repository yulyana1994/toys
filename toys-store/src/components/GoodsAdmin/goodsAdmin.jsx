import React from "react";
import s from "./goodsAdmin.module.css";
import api from "./../../api";
import { useEffect, useState } from "react";
import TextField from "../Form/TextField/textField";

const GoodsAdmin = () => {
  const [toys, setToys] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.categories.getAll().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    api.toys.getAll().then((data) => setToys(data));
  }, []);

  return (
    <div className={s.mainContainer}>
      <div>
        <div className={s.navlist}>
          <div className={s.navitem}>Id</div>
          <div className={s.navitem}>Наименование</div>
          <div className={s.navitem}>Категория</div>
          <div className={s.navitem}>Стоимость</div>
          <div className={s.navitem}>Количество</div>
          <div className={s.navitem}>Фото</div>
          <div className={s.navitem}>Редактировать</div>
          <div className={s.navitem}>Удалить</div>
        </div>
      </div>
      <div className={s.container}>
        <button className={s.navitem}>Редактировать</button>
        <button className={s.navitem}>Удалить</button>
      </div>
    </div>
  );
};

export default GoodsAdmin;
