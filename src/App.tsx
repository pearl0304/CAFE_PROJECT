import React from "react";
import { Wrapper } from "./css/App.styled";
import { Header } from "./Components/Header";
import { News } from "./Components/News";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <News />
    </Wrapper>
  );
};
