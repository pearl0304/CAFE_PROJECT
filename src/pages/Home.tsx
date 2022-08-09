import { Header } from "../Components/Header";
import { News } from "../Components/News";
import { SlideList } from "../Components/SlideList";
import { StoryList } from "../Components/StoryList";
import { NavInterface } from "../interfaces/menu.interface";

export const Home = () => {
  const homeNav: NavInterface[] = [
    { to: "home", title: "HOME" },
    { to: "promotion", title: "PROMOTION" },
    { to: "story", title: "STORY" },
  ];
  return (
    <div>
      <Header nav={homeNav} />
      <News />
      <SlideList />
      <StoryList />
    </div>
  );
};
