import React from "react";
import MainPage from "./pages/MainPage/mainPage";
import CartPage from "./pages/Cart/cartPage";
import LoginPage from "./pages/Login/loginPage";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import ProductCard from "./components/ToysCard/productCard";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/toys" exact component={MainPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/toys/:cardId?" component={ProductCard} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
