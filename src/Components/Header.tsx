import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Nav";
import { HeaderWrapper } from "../css/Header.styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { NavInterface } from "../interfaces/menu.interface";

type Props = {
  nav: NavInterface[];
};
export const Header: FC<Props> = ({ nav }) => {
  return (
    <HeaderWrapper>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <div className="logo">LOGO</div>
          </Link>

          <Nav nav={nav} />
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
