import { Header } from "../Components/Header";
import { MenuList } from "../Components/MenuList";
import { NavInterface } from "../interfaces/menu.interface";
import { MenuListData } from "../database/menuListData";

export const Menu = () => {
  const menuNav: NavInterface[] = [
    { to: "season", title: "SEASION" },
    { to: "signature", title: "SIGNATURE" },
    { to: "coffee", title: "COFFEE" },
    { to: "beverage", title: "BEVERAGE" },
  ];
  return (
    <>
      <Header nav={menuNav} />
      <MenuList menuList={MenuListData} />
    </>
  );
};
