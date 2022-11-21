import React from "react";
import { useRef } from "react";
import goodsService from "../../services/goods.services";
import TextField from "./../../components/Form/TextField/textField";

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const Admin = () => {
  const goods = useRef({
    id: "",
    name: "",
    category: [],
    description: "",
    price: "",
    img: {},
  });

  async function createGoods(data) {
    try {
      goodsService.create(data);
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

    if (key === "img") {
      convertBase64(e.target.files[0]).then((file) => {
        goods.current[key] = file;
      });
      return;
    }

    goods.current[key] = newValue;
  };
  console.log(goods.current);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h4 className="mb-4">Блок для добавления товара</h4>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Добавьте id товара:"
              type="text"
              onChange={handleChange("id")}
              name="id"
            />
            <TextField
              label="Наименование товара:"
              type="text"
              onChange={handleChange("name")}
            />
            <div className="mb-4">
              <label htmlFor="category" className="form-label">
                Категория:
              </label>
              <div className="input-group ">
                <select
                  id="category"
                  className="basic-multi-select"
                  onChange={handleChange("category")}
                >
                  <option disabled selected>
                    Выберите категорию
                  </option>
                  <option value={"cat1"}>Для мальчиков</option>
                  <option value={"cat2"}>Для девочек</option>
                  <option value={"cat3"}>Для младенцев</option>
                  <option value={"cat4"}>Канцелярия</option>
                </select>
              </div>
            </div>
            <TextField
              label="Стоимость товара:"
              type="text"
              onChange={handleChange("price")}
            />

            <label htmlFor="photo" className="form-label">
              Выберите фото:
            </label>
            <div className="input-group mb-3">
              <input type="file" onChange={handleChange("img")}></input>
            </div>

            <TextField
              label="Описание товара:"
              type="text"
              onChange={handleChange("description")}
            />
            <button type="submit" className="btn btn-primary w-100 mx-auto">
              Добавить товар
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
