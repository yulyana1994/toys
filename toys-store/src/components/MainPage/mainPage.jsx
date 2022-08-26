import React from "react";
import Header from "../Header/header";
import SearchString from "../Search/searchString";
import Categories from "../Categories/categories";
import s from "./mainPage.module.css";
import Sort from "../Sort/sort";
import ToysCard from "../ToysCard/toysCard";
import { useState } from "react";
import api from "./../../api";

const MainPage = () => {
  const [toys, setToys] = useState(api.toys.fetchAll());
  return (
    <div className={s.appWrapper}>
      <Header />
      <SearchString />
      <Categories />
      <div className={s.appWrapperContent}>
        <Sort />
        <ToysCard toys={toys} />
      </div>
    </div>
  );
};

export default MainPage;
