import React from "react";
import { useContext } from "react";
import s from "./cartPage.module.css";
import { CartContext } from "./../../App";
import { useState } from "react";

const CartPage = () => {
  const data = useContext(CartContext);
  const [products, setProducts] = useState(data.orders);

  const handleDelete = (productsId) => {
    setProducts(products.filter((el) => el.id !== productsId));
  };

  const addOrder = () => {
    alert("Заказ принят!");
  };

  const totalPrice = products.reduce((sum, pr) => pr.price * pr.count + sum, 0);

  if (products.length > 0) {
    return (
      <div className={s.cart}>
        <div>
          {products.map((pr) => (
            <div className={s.cartItem} key={pr.id}>
              <img className={s.imgToys} src={pr.img} alt={pr.name} />
              <div className={s.info}>
                <p>Артикул: {pr.id}</p>
                <p>{pr.name}</p>
                <p>Стоимость: {pr.price * pr.count} рублей</p>
                <p> Количество: {pr.count} штук</p>
              </div>
              <button className={s.btn} onClick={() => handleDelete(pr.id)}>
                Удалить
              </button>
            </div>
          ))}
        </div>
        <div className={s.totalPrice}>
          <p>Итого: {totalPrice} рублей</p>
          <button className={s.btn} onClick={() => addOrder()}>
            Оформить заказ
          </button>
        </div>
      </div>
    );
  } else {
    return <div>Корзина пуста...</div>;
  }
};

export default CartPage;
