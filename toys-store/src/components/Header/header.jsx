import React from "react";
import s from "./header.module.css";
import Info from "./Info/info";
import Cart from "./Cart/cart";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.items}>
        <img className={s.logo} src="/assets/logo.jpg" alt="logo" />
        <Info />
        <Cart />
        <div className={s.enter}>Вход/Регистрация</div>
      </div>
    </div>
  );
};

export default Header;
