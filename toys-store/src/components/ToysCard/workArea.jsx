import React from "react";
import s from "./workArea.module.css";
import Card from "./Card/card";
import { useState } from "react";
import api from "../../api";
import { useEffect } from "react";
import Categories from "../Categories/categories";
import Pagination from "../Pagination/pagination";
import { paginate } from "../../utils/paginate";
import Sort from "../Sort/sort";
import SearchString from "../Search/searchString";
import _ from "lodash";

const WorkArea = () => {
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState();
  const [sortBy, setSortBy] = useState({ iter: "", order: "" });

  console.log(sortBy);

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

  const filteredToys = selectedCategories
    ? toys.filter((toy) => toy.category === selectedCategories)
    : toys;

  const count = filteredToys.length;
  const sortedToys = _.orderBy(filteredToys, [sortBy.iter], [sortBy.order]);

  const toysCrop = paginate(sortedToys, currentPage, pageSize);

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
  };

  const clearFilter = () => {
    setSelectedCategories();
  };

  const handleSort = (item) => {
    if (sortBy.iter === item) {
      setSortBy((prevState) => ({
        ...prevState,
        order: prevState.order === "asc" ? "desc" : "asc",
      }));
    } else {
      setSortBy({ iter: item, order: "asc" });
    }
  };

  return (
    <div className={s.commonWrapper}>
      <div className={s.searchWrapper}>
        <SearchString />
      </div>
      <div className={s.categoriesWrapper}>
        <Categories
          selectedItem={selectedCategories}
          items={categories}
          onItemSelect={handleCategoriesSelect}
        />
        <button className={s.btnClear} onClick={clearFilter}>
          Очистить
        </button>
      </div>
      <div className={s.wrapper}>
        <div>
          <Sort onSort={handleSort} />
        </div>
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

export default WorkArea;
