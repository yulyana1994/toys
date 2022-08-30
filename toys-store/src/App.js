import React from "react";
import MainPage from "./pages/MainPage/mainPage";
import Cart from "./pages/Cart/cart";
import Login from "./pages/Login/login";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import IdToysCard from "./components/ToysCard/idToysCard";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/:cardId?" component={IdToysCard} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
