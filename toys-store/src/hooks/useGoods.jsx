import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import goodsService from "../services/goods.services";
import { toast } from "react-toastify";

const GoodsContext = React.createContext();

export const useGoods = () => {
  return useContext(GoodsContext);
};

const GoodsProvider = ({ children }) => {
  const [goods, setGoods] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getGoods() {
      try {
        const { content } = await goodsService.get();
        setGoods(content);
        setLoading(false);
      } catch (error) {
        errorCatcher();
      }
    }

    getGoods();
  }, []);

  function getGoodsById(goodsId) {
    return goods.find((g) => g.id === goodsId);
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
    setLoading(false);
  }
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  return (
    <GoodsContext.Provider value={{ goods, getGoodsById }}>
      {isLoading ? "Loading.12.." : children}
    </GoodsContext.Provider>
  );
};

export default GoodsProvider;
