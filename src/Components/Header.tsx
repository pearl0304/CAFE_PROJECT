import React from "react";
import { HeaderWrapper } from "../css/Header.styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";

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
            <div className="header-icon">
              <AccountCircleIcon />
            </div>
            <div>
              <span>LogIn</span>
            </div>
          </div>
          <div className="header-icon">
            <LocalMallIcon />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};
