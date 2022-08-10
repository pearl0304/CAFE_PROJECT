import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Wrapper } from "./css/App.styled";
import { Footer } from "./Components/Footer";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Detail } from "./pages/Detail";
import { CartListInterface } from "./interfaces/menu.interface";
import { Header } from "./Components/Header";

export const App = () => {
  const [cartItem, setCartItme] = useState<CartListInterface[]>([]);

  const handleAddToCart = (clickedItme: CartListInterface) => {
    setCartItme((prev) => {
      const isItemInCart = cartItem.find((item) => item.id === clickedItme.id);
      if (isItemInCart) {
        return prev.map((item) => (item.id === clickedItme.id ? { ...item, amount: item.amount + 1 } : item));
      }
      return [{ ...clickedItme, amount: 1 }, ...prev];
    });
  };
  return (
    <Router>
      <Wrapper>
        <Header cartItme={cartItem} addToCart={handleAddToCart} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
        <Routes>
          <Route path="/detail/:id" element={<Detail addToCart={handleAddToCart} />}></Route>
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
};
