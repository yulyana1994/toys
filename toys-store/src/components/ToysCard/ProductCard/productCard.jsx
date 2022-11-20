import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import s from "./productCard.module.css";
import { CartContext } from "./../../../App";
import { useContext } from "react";
import { useGoods } from "../../../hooks/useGoods";

const ProductCard = ({ good }) => {
  const data = useContext(CartContext);
  const onAdd = data.add;

  const params = useParams();
  const { goodsId } = params;
  const { getGoodsById } = useGoods();
  const card = getGoodsById(goodsId);
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  if (card) {
    return (
      <div className={s.wrapperProductCard}>
        <div className={s.card}>
          <img width={133} height={112} src={card.img} alt={card.name} />
          <div>
            <div className={s.title}>{card.name}</div>
            <div className={s.title}> Описание:{card.description}</div>
            <div>
              <div className={s.blockQuality}>
                <div className={s.title}> Количество: {count}</div>
                <div>
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
            </div>
            <div className={s.title}> Cтоимость: {count * card.price}</div>
          </div>

          <div>
            <Link
              to="/cart"
              className={s.btn2}
              onClick={() => onAdd({ ...good, count, ...card })}
            >
              Купить
            </Link>
            <div> Артикул товара: {card.id}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div> loading...</div>;
  }
};

export default ProductCard;
