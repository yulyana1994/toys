import React from "react";
import s from "./toysCard.module.css";
import Card from "./Card/card";
import { useState } from "react";
import api from "./../../api";
import { useEffect } from "react";

const ToysCard = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    api.toys.getAll().then((data) => setToys(data));
  }, []);

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
