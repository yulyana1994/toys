import React, { useState } from "react";
import MainPage from "./pages/MainPage/mainPage";
import CartPage from "./pages/Cart/cartPage";
import Login from "./pages/Login/login";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductCard from "./components/ToysCard/ProductCard/productCard";
import NavBar from "./components/NavBar/navBar";
import Admin from "./pages/Admin/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CategoryProvider } from "./hooks/useCategory";
import GoodsProvider from "./hooks/useGoods";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

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
        <CategoryProvider>
          <GoodsProvider>
            <NavBar />
            <Switch>
              <Route path="/toys" exact component={MainPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/admin" component={Admin} />
              <Route path="/login/:type?" component={Login} />
              <Route path="/toys/:cardId?" component={ProductCard} />
              <Redirect to="/" />
            </Switch>
          </GoodsProvider>
        </CategoryProvider>
      </CartProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
