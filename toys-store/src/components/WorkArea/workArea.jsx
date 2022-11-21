import React from "react";
import s from "./workArea.module.css";
import Card from "../ToysCard/Card/card";
import { useState } from "react";
import { useEffect } from "react";
import Categories from "../Categories/categories";
import Pagination from "../Pagination/pagination";
import { paginate } from "../../utils/paginate";
import Sort from "../Sort/sort";
import _ from "lodash";
import { useContext } from "react";
import { CartContext } from "../../App";
import { useGoods } from "../../hooks/useGoods";
import { useCategory } from "../../hooks/useCategory";

const WorkArea = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState();
  const [sortBy, setSortBy] = useState({ iter: "", order: "" });
  const { orders, add } = useContext(CartContext);

  const { goods } = useGoods();

  const category = useCategory();

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, searchQuery]);

  const pageSize = 2;
  const filteredToys = searchQuery
    ? goods.filter(
        (g) => g.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      )
    : selectedCategories
    ? goods.filter((toy) => toy.category.includes(selectedCategories))
    : goods;

  const count = filteredToys.length ?? 0;
  const sortedToys = _.orderBy(filteredToys, [sortBy.iter], [sortBy.order]);

  const toysCrop = paginate(sortedToys, currentPage, pageSize);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleCategoriesSelect = (item) => {
    if (searchQuery !== "") {
      setSearchQuery("");
    }
    setSelectedCategories(item);
  };

  const handleSearchQuery = ({ target }) => {
    setSelectedCategories(undefined);
    setSearchQuery(target.value);
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

  const toysCard = toysCrop.map((el) => (
    <Card key={el.id} good={el} onAdd={add} />
  ));

  return (
    <div>
      <div className={s.commonWrapper}>
        <div className={s.searchWrapper}>
          <img src="assets/search.png" alt="search" />
          <input
            className={s.input}
            type="text"
            placeholder="Поиск..."
            name="searchQuery"
            onChange={handleSearchQuery}
            value={searchQuery}
          />
        </div>
        <div className={s.categoriesWrapper}>
          <Categories
            selectedItem={selectedCategories}
            items={category}
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
    </div>
  );
};

export default WorkArea;
