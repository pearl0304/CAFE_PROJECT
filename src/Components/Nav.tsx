import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavInterface } from "../interfaces/menu.interface";

type Props = {
  nav: NavInterface[];
};
export const Nav: FC<Props> = ({ nav }) => {
  return (
    <>
      <nav className="nav">
        <ul className="header-menu">
          {nav.map((item) => (
            <ScrollLink to={item.to} spy={true} smooth={true}>
              {item.title}
            </ScrollLink>
          ))}
        </ul>
      </nav>
    </>
  );
};
