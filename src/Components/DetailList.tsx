import { FC } from "react";
import { DetailListWrapper } from "../css/DetailList.styled";
import { MenuListInterface } from "../interfaces/menu.interface";

type Props = {
  menu: MenuListInterface;
};
export const DetailList: FC<Props> = ({ menu }) => {
  console.log(menu.title);
  return (
    <DetailListWrapper>
      <div>{menu.title}</div>
    </DetailListWrapper>
  );
};
