import React from "react";
import Header from "../Header/header";
import SearchString from "../Search/searchString";
import Categories from "../Categories/categories";
import s from "./mainPage.module.css";
import Sort from "../Sort/sort";
import ToysCard from "../ToysCard/toysCard";

const MainPage = () => {
  return (
    <div className={s.appWrapper}>
      <Header />
      <SearchString />
      <Categories />
      <div className={s.appWrapperContent}>
        <Sort />
        <ToysCard />
      </div>
    </div>
  );
};

export default MainPage;
