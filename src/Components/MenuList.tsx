import { FC } from "react";
import { Item } from "./Item";
import { MenuListWrapper } from "../css/MenuList.styled";
import { MenuListInterface } from "../interfaces/menu.interface";

type Props = {
  menuList: MenuListInterface[];
};

export const MenuList: FC<Props> = ({ menuList }) => {
  return (
    <MenuListWrapper>
      <div className="menu-container">
        <div className="menu-box" id="season">
          <div className="category">
            <span>Season Menu</span>
          </div>
          <div className="menu-list-box">
            {menuList
              .filter((item) => item.category === "season")
              .map((ele) => (
                <Item item={ele} />
              ))}
          </div>
        </div>
        <div className="menu-box" id="signature">
          <div className="category">
            <span>Signature Menu</span>
          </div>
          <div className="menu-list-box">
            {menuList
              .filter((item) => item.category === "signature")
              .map((ele) => (
                <Item item={ele} />
              ))}
          </div>
        </div>
      </div>
    </MenuListWrapper>
  );
};
