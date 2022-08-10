import { FC } from "react";
import { DetailListWrapper } from "../css/DetailList.styled";
import { MenuListInterface } from "../interfaces/menu.interface";
import Button from "@mui/material/Button";

type Props = {
  menu: MenuListInterface;
};

const numberFormat = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const DetailList: FC<Props> = ({ menu }) => {
  return (
    <DetailListWrapper>
      <div className="detail-container">
        <div className="detail-left">
          <div>
            <img src={menu.image} alt={menu.title}></img>
          </div>
          <div className="nutrients-info">
            <span>영양 성분</span>
            <span>{menu.nutrients}</span>
          </div>
        </div>
        <div className="detail-right">
          <div className="menu-detail-info">
            <h1>{menu.title}</h1>
            <h2> - {menu.subTitle}</h2>
            <span>{menu.description}</span>
            <span>{numberFormat(menu.price)}원</span>
          </div>
          <div className="cart-btn">
            <Button>장바구니에 담기</Button>
          </div>
        </div>
      </div>
    </DetailListWrapper>
  );
};
