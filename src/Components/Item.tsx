import { FC } from "react";
import { Link } from "react-router-dom";
import { MenuListInterface } from "../interfaces/menu.interface";
import { ItemWrapper } from "../css/Item.styled";

type Props = {
  item: MenuListInterface;
};
export const Item: FC<Props> = ({ item }) => {
  return (
    <ItemWrapper>
      <Link to={`/detail/${item.id}`}>
        <div className="menu-list">
          <div className="menu-image">
            <img src={item.image} alt={item.title}></img>
          </div>
          <div className="menu-name">
            <span>{item.title}</span>
          </div>
        </div>
      </Link>
    </ItemWrapper>
  );
};
