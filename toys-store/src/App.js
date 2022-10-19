import React, { useState } from "react";
import MainPage from "./pages/MainPage/mainPage";
import CartPage from "./pages/Cart/cartPage";
import LoginPage from "./pages/Login/loginPage";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductCard from "./components/ToysCard/productCard";
import NavBar from "./components/NavBar/navBar";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // { ...product, count: 1 }
  const add = (product) => {
    let isAnArray = false;
    orders.forEach((el) => {
      if (el.id === product.id) isAnArray = true;
    });

    if (!isAnArray) setOrders((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ orders, add }}>
      {children}
    </CartContext.Provider>
  );
};

function App() {
  return (
    <div>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route path="/toys" exact component={MainPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/toys/:cardId?" component={ProductCard} />
          <Redirect to="/" />
        </Switch>
      </CartProvider>
    </div>
  );
}

export default App;
