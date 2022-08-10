import { FC } from "react";
import { CartListInterface } from "../interfaces/menu.interface";
import { CartListWrapper } from "../css/CartList.styled";
import Button from "@mui/material/Button";

type Props = {
  cartItem: CartListInterface[];
  addToCart: (item: CartListInterface) => void;
};

const numberFormat = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const CartList: FC<Props> = ({ cartItem, addToCart }) => {
  return (
    <CartListWrapper>
      <div className="cart-title">
        <span>장바구니</span>
      </div>
      {cartItem.length <= 0 ? (
        <div className="empty">
          <span>장바구니에 담긴 메뉴가 없습니다</span>
        </div>
      ) : (
        <div className="cart-list-container">
          {cartItem.map((item) => (
            <div className="cart-list">
              <div className="item-info">
                <div className="cart-list-left">
                  <div>
                    <img src={item.image}></img>
                  </div>
                </div>
                <div className="cart-list-right">
                  <div>
                    <span>{item.title}</span>
                    <span>{numberFormat(item.price)}원</span>
                  </div>
                  <div className="cart-btn">
                    <Button>-</Button>
                    <span>{item.amount}</span>
                    <Button
                      onClick={() => {
                        addToCart(item);
                      }}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Total</span>
          </div>
        </div>
      )}
    </CartListWrapper>
  );
};
