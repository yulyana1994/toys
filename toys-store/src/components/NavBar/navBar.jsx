import React from "react";
import s from "./navBar.module.css";
import { Link } from "react-router-dom";
import Info from "../Info/info";

const NavBar = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.nav}>
        <li className={s.navLink}>
          <Link to="/">
            <img className={s.logo} src="/assets/logo2.png" alt="logo" />
          </Link>
        </li>
        <li className={s.navLink}>
          <Info />
        </li>
        <Link className={s.navLink} to="/login">
          Вход/ Регистрация
        </Link>
        <Link className={s.navLink} to="/cart">
          <img src="/assets/korzina.png" alt="cart" /> Корзина
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
