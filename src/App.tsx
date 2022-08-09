import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Wrapper } from "./css/App.styled";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";

export const App = () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
};
