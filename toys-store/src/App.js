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
import AuthProvider from "./hooks/useAuth";
import Logout from "./pages/Logout/logout";
import ProtectedRouts from "./pages/Admin/ProtectedRouts";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const add = (product) => {
    const newOrders = [...orders];
    const orderIndex = newOrders.findIndex((o) => o.id === product.id);

    if (orderIndex !== -1) {
      newOrders[orderIndex] = product;
    } else {
      newOrders.push(product);
    }

    setOrders(newOrders);
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
      <AuthProvider>
        <CartProvider>
          <CategoryProvider>
            <GoodsProvider>
              <NavBar />
              <Switch>
                <Route path="/toys" exact component={MainPage} />
                <Route path="/cart" component={CartPage} />
                <ProtectedRouts path="/admin" component={Admin} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/toys/:goodsId?" component={ProductCard} />
                <Redirect to="/toys" />
              </Switch>
            </GoodsProvider>
          </CategoryProvider>
        </CartProvider>
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
