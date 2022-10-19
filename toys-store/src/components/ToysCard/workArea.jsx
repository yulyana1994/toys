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
import _ from "lodash";
import { useContext } from "react";
import { CartContext } from "../../App";

const WorkArea = () => {
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState();
  const [sortBy, setSortBy] = useState({ iter: "", order: "" });

  const { orders, add } = useContext(CartContext);

  useEffect(() => {
    api.toys.getAll().then((data) => setToys(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, searchQuery]);

  useEffect(() => {
    api.categories.getAll().then((data) => setCategories(data));
  }, []);

  const pageSize = 6;

  const filteredToys = searchQuery
    ? toys.filter(
        (toy) =>
          toy.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      )
    : selectedCategories
    ? toys.filter((toy) => toy.category === selectedCategories)
    : toys;

  const count = filteredToys.length;
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
    <Card
      key={el.id}
      name={el.name}
      img={el.img}
      artikul={el.id}
      price={el.price}
      cardId={el.id}
      onAdd={add}
    />
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
    </div>
  );
};

export default WorkArea;
