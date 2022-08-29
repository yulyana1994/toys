import React from "react";
import Header from "./../../components/Header/header";
import SearchString from "./../../components/Search/searchString";
import Categories from "../../components/Categories/categories";
import s from "./mainPage.module.css";
import Sort from "../../components/Sort/sort";
import ToysCard from "../../components/ToysCard/toysCard";

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