import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
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
            <ul className="header-menu">
              <li>
                <ScrollLink to="home" spy={true} smooth={true}>
                  HOME
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="promotion" spy={true} smooth={true}>
                  PROMOTION
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="story" spy={true} smooth={true}>
                  STORY
                </ScrollLink>
              </li>
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
