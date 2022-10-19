import React from "react";
import s from "./mainPage.module.css";
import WorkArea from "../../components/ToysCard/workArea";

const MainPage = () => {
  return (
    <div className={s.appWrapperContent}>
      <WorkArea />
    </div>
  );
};

export default MainPage;
