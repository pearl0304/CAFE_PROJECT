import { News } from "../Components/News";
import { SlideList } from "../Components/SlideList";
import { StoryList } from "../Components/StoryList";

export const Home = () => {
  return (
    <div>
      <News />
      <SlideList />
      <StoryList />
    </div>
  );
};
