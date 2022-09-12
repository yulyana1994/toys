import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "./../../api";
import { useEffect } from "react";
import s from "./toysCard.module.css";

const ProductCard = () => {
  const params = useParams();
  const { cardId } = params;

  const [card, setCard] = useState();
  const [count, setCount] = useState(1);

  useEffect(() => {
    api.toys.getById(cardId).then((data) => setCard(data));
  }, [cardId]);

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
          <img width={133} height={112} src={card.src} alt={card.name} />
          <div>
            <div className={s.title}>{card.name}</div>
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
            <div className={s.title}> Cтоимость: {card.price * count}</div>
          </div>
          <div>
            <button> Купить</button>
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
