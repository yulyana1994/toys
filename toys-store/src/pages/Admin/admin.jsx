import React from "react";
import { useRef } from "react";
import s from "./admin.module.css";
import goodsService from "../../services/goods.services";
import TextField from "./../../components/Form/TextField/textField";

const Admin = () => {
  const goods = useRef({
    id: "",
    name: "",
    category: [],
    description: "",
    count: "",
    price: "",
    img: "",
  });

  async function createGoods(data) {
    try {
      const { content } = goodsService.create(data);
    } catch (error) {
      console.log("expected error");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createGoods(goods.current);
  };

  const handleChange = (key) => (e) => {
    const { target: value } = e;
    const newValue = value.value;

    if (key === "category") {
      goods.current[key] = [newValue];
      return;
    }

    goods.current[key] = newValue;
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.content}>
        <div className={s.title}>
          Блок для добавления или редактирования товара
        </div>
        <TextField
          label="id:"
          type="text"
          onChange={handleChange("id")}
          name="id"
        />
        <TextField
          label="Наименование:"
          type="text"
          onChange={handleChange("name")}
        />
        <div className={s.containerCat}>
          <label htmlFor="category">Категория:</label>

          <select id="category" onChange={handleChange("category")}>
            <option disabled>Выберите категорию</option>
            <option value={"cat1"}>Для мальчиков</option>
            <option value={"cat2"}>Для девочек</option>
            <option value={"cat3"}>Для младенцев</option>
            <option value={"cat4"}>Канцелярия</option>
          </select>
        </div>
        <TextField
          label="Стоимость:"
          type="text"
          onChange={handleChange("price")}
        />
        <TextField
          label="Количество:"
          type="text"
          onChange={handleChange("count")}
        />
        <TextField label="img:" type="text" onChange={handleChange("img")} />
        <TextField
          label="Описание товара:"
          type="text"
          onChange={handleChange("description")}
        />
        <button type="submit">Добавить товар</button>
      </div>
    </form>
  );
};

export default Admin;