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

  const handleAddToCart = (clickedItme: CartListInterface): void => {
    setCartItme((prev) => {
      const isItemInCart = cartItem.find((item) => item.id === clickedItme.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItme.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [{ ...clickedItme, amount: 1 }, ...prev];
    });
  };

  const handleRemoveFromCart = (id: string): void => {
    setCartItme((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartListInterface[])
    );
  };

  const getTotalCount = (items: CartListInterface[]) => {
    return items.reduce((acc, items) => acc + items.amount, 0);
  };

  return (
    <Router>
      <Wrapper>
        <Header
          cartItme={cartItem}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          getTotalCount={getTotalCount}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
        <Routes>
          <Route
            path="/detail/:id"
            element={<Detail addToCart={handleAddToCart} />}
          ></Route>
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
};
