import { useParams } from "react-router-dom";
import { DetailList } from "../Components/DetailList";
import { MenuListData } from "../database/menuListData";
import { CartListInterface } from "../interfaces/menu.interface";
import { FC } from "react";

type Props = {
  addToCart: (item: CartListInterface) => void;
};

export const Detail: FC<Props> = ({ addToCart }) => {
  const { id } = useParams();
  const data = MenuListData.filter((item) => item.id === id);

  return (
    <>
      <DetailList menu={data[0]} addToCart={addToCart} />
    </>
  );
};
