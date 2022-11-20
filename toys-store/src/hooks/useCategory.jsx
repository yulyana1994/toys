import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import categoryService from "../services/category.service";

const CategoryContext = React.createContext();

export const useCategory = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function getCategory() {
      try {
        const data = await categoryService.get();

        setCategory(data);
        setLoading(false);
      } catch (error) {
        errorCatcher();
      }
    }

    getCategory();
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
    setLoading(false);
  }

  return (
    <CategoryContext.Provider value={(isLoading, category)}>
      {children}
    </CategoryContext.Provider>
  );
};
