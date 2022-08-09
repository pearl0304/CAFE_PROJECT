import React from "react";
import { Wrapper } from "./css/App.styled";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Home />
      <Footer />
    </Wrapper>
  );
};
