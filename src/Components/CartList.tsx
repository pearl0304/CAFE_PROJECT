import { FC } from "react";
import { CartListInterface } from "../interfaces/menu.interface";

type Props = {
  cartItem: CartListInterface[];
  addToCart: (item: CartListInterface) => void;
};

export const CartList: FC<Props> = ({ cartItem, addToCart }) => {
  return (
    <>
      {cartItem.map((item) => (
        <div>{item.title}</div>
      ))}
    </>
  );
};
