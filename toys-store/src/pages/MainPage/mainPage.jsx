import React from "react";
import SearchString from "./../../components/Search/searchString";
import s from "./mainPage.module.css";
import ToysCard from "../../components/ToysCard/toysCard";

const MainPage = () => {
  return (
    <div className={s.appWrapper}>
      <SearchString />
      <div className={s.appWrapperContent}>
        <ToysCard />
      </div>
    </div>
  );
};

export default MainPage;
