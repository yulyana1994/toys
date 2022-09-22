import React from "react";
import s from "./toysCard.module.css";
import Card from "./Card/card";
import { useState } from "react";
import api from "./../../api";
import { useEffect } from "react";
import Categories from "../../components/Categories/categories";
import Pagination from "../Pagination/pagination";

const ToysCard = () => {
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState();

  useEffect(() => {
    api.toys.getAll().then((data) => setToys(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories]);

  useEffect(() => {
    api.categories.getAll().then((data) => setCategories(data));
  }, []);

  const pageSize = 6;

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
  };

  const filteredToys = selectedCategories
    ? toys.filter(
        (toy) =>
          JSON.stringify(toy.category) === JSON.stringify(selectedCategories)
      )
    : toys;

  const count = filteredToys.length;

  const toysCrop = paginate(filteredToys, currentPage, pageSize);

  let toysCard = toysCrop.map((el) => (
    <Card
      key={el.id}
      name={el.name}
      img={el.img}
      artikul={el.id}
      price={el.price}
      cardId={el.id}
    />
  ));

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleCategoriesSelect = (item) => {
    setSelectedCategories(item);
    console.log(item);
  };

  const clearFilter = () => {
    setSelectedCategories();
  };

  return (
    <div className={s.commonWrapper}>
      <div>
        <Categories
          selectedItem={selectedCategories}
          items={categories}
          onItemSelect={handleCategoriesSelect}
        />
        <button className={s.btn} onClick={clearFilter}>
          Очистить
        </button>
      </div>
      <div className={s.wrapper}>
        <div className={s.toysCard}>{toysCard}</div>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ToysCard;
