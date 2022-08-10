import { FC, useState } from "react";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { CartList } from "./CartList";
import { HeaderWrapper } from "../css/Header.styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import { CartListInterface } from "../interfaces/menu.interface";

type Props = {
  cartItme: CartListInterface[];
  addToCart: (item: CartListInterface) => void;
  removeFromCart: (id: string) => void;
  getTotalCount: (item: CartListInterface[]) => number;
};
export const Header: FC<Props> = ({
  addToCart,
  removeFromCart,
  getTotalCount,
  cartItme,
}) => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartList
          cartItem={cartItme}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
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
            <Badge
              className="total-count"
              badgeContent={getTotalCount(cartItme)}
              color="error"
            ></Badge>
            <LocalMallIcon />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};
