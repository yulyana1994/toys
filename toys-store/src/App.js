import React from "react";
import ItemPage from "./pages/ItemPage/itemPage";
import MainPage from "./pages/MainPage/mainPage";
import CartPage from "./pages/CartPage/cartPage";
import EnterPage from "./pages/EnterPage/enterPage";
import RegistrationPage from "./pages/RegistrationPage/registrationPage";

function App() {
  return (
    <div>
      <MainPage />
      <ItemPage />
      <CartPage />
      <EnterPage />
      <RegistrationPage />
    </div>
  );
}

export default App;
