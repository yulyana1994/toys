import React from "react";
import s from "./card.module.css";

const Card = ({ name, src, artikul, price }) => {
  return (
    <div className={s.card}>
      <img width={133} height={112} src={src} alt={name} />
      <span className={s.artikul}> Артикул: {artikul}</span>
      <div>
        <p className={s.title}>{name}</p>
      </div>
      <div>
        <p>
          Цена:
          <span>
            {price} <span> рублей</span>
          </span>
        </p>
      </div>
      <button className={s.button}>Открыть карточку</button>
    </div>
  );
};

export default Card;
