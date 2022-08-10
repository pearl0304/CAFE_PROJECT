import React, { FC, useState } from "react";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { CartList } from "./CartList";
import { HeaderWrapper } from "../css/Header.styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { CartListInterface } from "../interfaces/menu.interface";

type Props = {
  cartItme: CartListInterface[];
  addToCart: (item: CartListInterface) => void;
};
export const Header: FC<Props> = ({ addToCart, cartItme }) => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartList cartItem={cartItme} addToCart={addToCart} />
      </Drawer>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <div className="logo">LOGO</div>
          </Link>
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
          <div className="header-icon" onClick={() => setCartOpen(true)}>
            <LocalMallIcon />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};
