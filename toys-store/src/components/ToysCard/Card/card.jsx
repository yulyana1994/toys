import React from "react";
import { useState } from "react";
import s from "./card.module.css";
import { useEffect } from "react";
import api from "../../../api";

// import { Link } from "react-router-dom";

const Card = ({ name, img, artikul, price, cardId, onAdd }) => {
  const [count, setCount] = useState(1);
  const [card, setCard] = useState();

  useEffect(() => {
    api.toys.getById(cardId).then((data) => setCard(data));
  }, [cardId]);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className={s.card}>
      <img width={133} height={112} src={img} alt={name} />
      <span className={s.artikul}> Артикул: {artikul}</span>
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
      <button className={s.btn} onClick={() => onAdd({ ...card, count })}>
        Добавить в корзину
      </button>

      {/* <Link to={`/toys/${cardId}`} className={s.btn}>
        Открыть карточку
      </Link> */}
    </div>
  );
};

export default Card;
