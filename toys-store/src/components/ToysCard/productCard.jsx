import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "./../../api";
import { useEffect } from "react";

const ProductCard = () => {
  const params = useParams();
  const { cardId } = params;

  const [card, setCard] = useState();

  useEffect(() => {
    api.toys.getById(cardId).then((data) => setCard(data));
  }, [cardId]);

  return <div>{card ? card.name : "loading..."}</div>;
};

export default ProductCard;
