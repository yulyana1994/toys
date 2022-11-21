import React from "react";
import s from "./navBar.module.css";
import { Link } from "react-router-dom";
import Info from "../Info/info";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div className={s.wrapper}>
      <ul className={s.nav}>
        <li className={s.navLink}>
          <Link to="/toys">
            <img className={s.logo} src="assets/logo2.png" alt="logo" />
          </Link>
        </li>
        <li className={s.navLink}>
          <Info />
        </li>

        {currentUser ? (
          <Link className={s.navLinkLA} to="/logout">
            Log out
          </Link>
        ) : (
          <Link className={s.navLinkLA} to="/login">
            Log in
          </Link>
        )}
        {currentUser && (
          <Link className={s.navLinkLA} to="/admin">
            Администрация сайта
          </Link>
        )}

        {/* {currentUser.id === "HgPM7xYqBEc4FDpjUsd0MTXHyEy1" ? (
          <Link className={s.navLinkLA} to="/admin">
            Администрация сайта
          </Link>
        ) : (
          <Link className={s.navLinkLA} to="/cart">
            Корзина
          </Link>
        )} */}

        <Link className={s.navLink} to="/cart">
          <img src="assets/korzina.png" alt="cart" /> Корзина
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
