import React from "react";
import { Link } from "react-router-dom";
import Info from "../Info/info";
import { useAuth } from "../../hooks/useAuth";
import { roles } from "../../utils/constants";

const NavBar = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <nav className="navbar bg-light mb-3 ">
      <div className="container-fluid d-flex justify-content-center">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/toys">
              <img
                className="d-inline-block align-text-top"
                src="assets/logo2.png"
                height="70"
                alt="logo"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Info />
          </li>

          {currentUser ? (
            <Link className="nav-link " aria-current="page" to="/logout">
              Log out
            </Link>
          ) : (
            <Link className="nav-link " aria-current="page" to="/login">
              Log in
            </Link>
          )}

          {currentUser?.role === roles.admin && (
            <Link className="nav-link " aria-current="page" to="/admin">
              Администрация сайта
            </Link>
          )}

          <Link className="nav-link " aria-current="page" to="/cart">
            <img
              src="assets/korzina.png"
              class="d-inline-block align-text-top"
              alt="cart"
            />{" "}
            Корзина
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
