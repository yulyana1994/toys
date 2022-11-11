import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./addGoodsAdmin.module.css";
import TextField from "../Form/TextField/textField";
import api from "../../api";

const AddGoodsAdmin = ({ handleSubmit, handleChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.categories.getAll().then((data) => setCategories(data));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.content}>
        <div className={s.title}>
          Блок для добавления или редактирования товара
        </div>
        <TextField label="id" type="text" />
        <TextField label="Наименование" type="text" />
        <div className={s.container}>
          <label htmlFor="category">Категория</label>
          <select id="category" onChange={handleChange}>
            <option disabled>Выберите категорию</option>
            {categories &&
              categories.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.title}
                </option>
              ))}
          </select>
        </div>
        <TextField label="Стоимость" type="text" />
        <TextField label="Количество" type="text" />
        <TextField label="img" type="text" />
        <button type="submit">Добавить товар</button>
      </div>
    </form>
  );
};

export default AddGoodsAdmin;
