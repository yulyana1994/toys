import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import api from "../../../api";
import { useEffect } from "react";
import s from "./productCard.module.css";

const ProductCard = ({ onAdd }) => {
  const params = useParams();
  const { cardId } = params;

  const [card, setCard] = useState();
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    api.toys.getById(cardId).then((data) => setCard(data));
  }, [cardId]);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const pushItem = () => {
    // setCartItems((prev) => [...prev, card]);
    setCartItems(cartItems.push(card));
    console.log(cartItems);
  };

  if (card) {
    return (
      // <CartItemsContext.Provider value={cartItems}>
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
            <div className={s.title}> Cтоимость: {count * card.price}</div>
          </div>

          <div>
            <Link to="/cart" className={s.btn2} onClick={pushItem}>
              Купить
            </Link>
            <div> Артикул товара: {card.id}</div>
          </div>
        </div>
      </div>
      // </CartItemsContext.Provider>
    );
  } else {
    return <div> loading...</div>;
  }
};

export default ProductCard;
