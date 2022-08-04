import React from "react";
import { HeaderWrapper } from "../css/Header.styled";

export const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-container">
        <div className="header-left">
          <div className="logo">LOGO</div>
          <nav className="nav">
            <ul>
              <li>HOME</li>
              <li>MENU</li>
              <li>ABOUT</li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <div className="login">
            <img></img>
            <span>LogIn</span>
          </div>
          <div className="cart">
            <img></img>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};
