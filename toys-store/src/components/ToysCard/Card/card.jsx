import React from "react";
import { useState } from "react";
import s from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ good, onAdd }) => {
  const { name, img, id, price } = good;
  const [count, setCount] = useState(1);
  console.log(img);
  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className={s.card}>
      <img width={133} height={112} src={img} alt={name} />
      <span className={s.artikul}> Артикул: {id}</span>
      <div>
        <p className={s.title}>{name}</p>
      </div>
      <div className={s.blockQuality}>
        <div className={s.title}> Количество: {count}</div>
        <div className={s.btnMP}>
          <button onClick={plus} className={s.btn}>
            +
          </button>
          <button
            onClick={minus}
            disabled={count > 0 ? false : true}
            className={s.btn}
          >
            -
          </button>
        </div>
      </div>
      <div>
        <p>Стоимость: {price * count} рублей</p>
      </div>
      <button className={s.btn} onClick={() => onAdd({ ...good, count })}>
        Добавить в корзину
      </button>

      <Link to={`/toys/${id}`}>Открыть карточку</Link>
    </div>
  );
};

export default Card;
