import { MenuList } from "../Components/MenuList";
import { NavInterface } from "../interfaces/menu.interface";
import { MenuListData } from "../database/menuListData";
import { Nav } from "../Components/Nav";

export const Menu = () => {
  const menuNav: NavInterface[] = [
    { to: "season", title: "SEASION" },
    { to: "signature", title: "SIGNATURE" },
    { to: "coffee", title: "COFFEE" },
    { to: "beverage", title: "BEVERAGE" },
  ];
  return (
    <>
      <MenuList menuList={MenuListData} />
      <Nav nav={menuNav} />
    </>
  );
};
