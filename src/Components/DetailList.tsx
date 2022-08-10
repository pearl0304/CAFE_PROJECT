import { FC } from "react";
import { DetailListWrapper } from "../css/DetailList.styled";
import { MenuListInterface } from "../interfaces/menu.interface";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

type Props = {
  menu: MenuListInterface;
};

const numberFormat = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const onClickButton = () => {
  Swal.fire({
    title: `장바구니에 추가하시겠습니까?`,
    showDenyButton: true,
    confirmButtonText: "ADD",
    denyButtonText: "CANCLE",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("장바구니 추가 완료", "", "success");
    } else {
      Swal.fire("장바구니 추가 취소", "", "error");
    }
  });
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
            <Button
              variant="contained"
              onClick={() => {
                onClickButton();
              }}
            >
              장바구니에 담기
            </Button>
          </div>
        </div>
      </div>
    </DetailListWrapper>
  );
};
