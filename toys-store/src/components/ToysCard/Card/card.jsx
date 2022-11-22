import React from "react";
import { useState } from "react";
import s from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ good, onAdd }) => {
  const { name, img, id, price } = good;
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className={s.card}>
      <img class="card-img-top " height={170} src={img} alt={name} />
      <div className="card-body text-center">
        <p class="card-text"> Артикул: {id}</p>
        <h4 class="card-title">{name}</h4>
      </div>
      <div className="card-body text-center">
        <p class="card-text"> Количество: {count}</p>
        <div>
          <button onClick={plus} className="btn btn-primary me-2">
            +
          </button>
          <button
            onClick={minus}
            disabled={count > 0 ? false : true}
            className="btn btn-primary ms-2"
          >
            -
          </button>
        </div>
        <p class="card-text">Стоимость: {price * count} рублей</p>
        <button
          className="btn btn-primary"
          onClick={() => onAdd({ ...good, count })}
        >
          Добавить в корзину
        </button>
      </div>
      <Link className="card-link" to={`/toys/${id}`}>
        Открыть карточку
      </Link>
    </div>
  );
};

export default Card;
