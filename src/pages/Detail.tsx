import { useParams } from "react-router-dom";
import { Header } from "../Components/Header";
import { DetailList } from "../Components/DetailList";
import { MenuListData } from "../database/menuListData";

export const Detail = () => {
  const { id } = useParams();
  const data = MenuListData.filter((item) => item.id === id);

  return (
    <>
      <Header nav={[]} />
      <DetailList menu={data[0]} />
    </>
  );
};
