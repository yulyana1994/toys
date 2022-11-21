import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
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
      <div className="card mb-3 text-center">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              class="img-fluid rounded-start"
              height={70}
              src={card.img}
              alt={card.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{card.name}</h5>
              <p className="card-text"> Артикул товара: {card.id}</p>
              <p className="card-text"> Описание:{card.description}</p>
            </div>
            <div className="card-body">
              <p className="card-text"> Количество: {count}</p>
              <div>
                <button onClick={plus} className="btn btn-primary me-3">
                  +
                </button>
                <button
                  onClick={minus}
                  disabled={count > 0 ? false : true}
                  className="btn btn-primary ms-3"
                >
                  -
                </button>
              </div>
              <p className="card-text"> Cтоимость: {count * card.price}</p>
              <Link
                to="/cart"
                className="btn btn-primary"
                role="button"
                onClick={() => onAdd({ ...good, count, ...card })}
              >
                Купить
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div> loading...</div>;
  }
};

export default ProductCard;
