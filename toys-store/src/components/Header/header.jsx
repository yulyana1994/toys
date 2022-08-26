import React from "react";
import s from "./header.module.css";
import Info from "./Info/info";
import Korzina from "./Korzina/korzina";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.items}>
        <img className={s.logo} src="/assets/logo.jpg" alt="logo" />
        <Info />
        <Korzina />
        <div className={s.enter}>Вход/Регистрация</div>
      </div>
    </div>
  );
};

export default Header;
