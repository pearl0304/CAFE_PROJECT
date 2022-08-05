import React from "react";
import { Wrapper } from "./css/App.styled";
import { Header } from "./Components/Header";
import { News } from "./Components/News";
import { Menu } from "./Components/Menu";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <News />
      <Menu />
    </Wrapper>
  );
};
