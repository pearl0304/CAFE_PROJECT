import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Wrapper } from "./css/App.styled";
import { Footer } from "./Components/Footer";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Detail } from "./pages/Detail";

export const App = () => {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
        <Routes>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
};
