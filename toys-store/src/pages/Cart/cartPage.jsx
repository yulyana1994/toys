import React from "react";
import { useState } from "react";

import s from "./cartPage.module.css";

const CartPage = () => {
  const [products, setProducts] = useState([
    {
      id: 10,
      name: "Кубик развивающий для детей",
      price: 6,
      count: 2,
      img: "assets/kubik.jpg",
    },
    {
      id: 11,
      name: "Набор цветных ручек",
      price: 5,
      count: 3,
      img: "assets/k1.jpg",
    },
    {
      id: 12,
      name: "Набор цветных маркеров",
      price: 7,
      count: 4,
      img: "assets/k36.jpg",
    },
    {
      id: 13,
      name: "Игра молоток",
      price: 10,
      count: 1,
      img: "assets/molotok.jpeg",
    },
  ]);

  const handleDelete = (productsId) => {
    setProducts(products.filter((el) => el.id !== productsId));
  };

  const totalPrice = products.reduce((sum, pr) => pr.price + sum, 0);

  return (
    <div className={s.cart}>
      <div>
        {products.map((pr) => (
          <div className={s.cartItem}>
            <img
              className={s.imgToys}
              src="assets/podvesnay1.jpeg"
              alt="Подвесная игрушка уточка"
            />
            <div className={s.info}>
              <p>Артикул: {pr.id}</p>
              <p>{pr.name}</p>
              <p>Стоимость: {pr.price} рублей</p>
              <p> Количество: {pr.count} штук</p>
            </div>
            <button onClick={() => handleDelete(pr.id)}>Удалить</button>
          </div>
        ))}
      </div>
      <div className={s.totalPrice}>
        <p>Итого: {totalPrice} рублей</p>
        <button>Оформить заказ </button>
      </div>
    </div>
  );
};

export default CartPage;
