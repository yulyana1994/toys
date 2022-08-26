import React from "react";
import s from "./toysCard.module.css";
import Card from "./Card/card";

const ToysCard = ({ toys }) => {
  console.log(toys);
  let toysCard = toys.map((el) => (
    <Card
      key={el.id}
      name={el.name}
      src={el.img}
      artikul={el.id}
      price={el.price}
    />
  ));

  return <div className={s.wrapper}>{toysCard}</div>;
};

export default ToysCard;
