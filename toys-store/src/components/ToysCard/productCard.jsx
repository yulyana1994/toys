import React from "react";
import { useParams } from "react-router-dom";

const ProductCard = () => {
  const params = useParams();
  const { cardId } = params;
  return <div> одиночная карточка {cardId}</div>;
};

export default ProductCard;
