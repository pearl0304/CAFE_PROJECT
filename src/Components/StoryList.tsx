import React from "react";
import { StoryWrapper } from "../css/StoryList.styled";
import Main_01 from "../asserts/main_01.jpg";
import Main_02 from "../asserts/main_02.jpg";
import Main_03 from "../asserts/main_03.jpg";
import Main_05 from "../asserts/main_05.jpg";
import Main_07 from "../asserts/main_07.jpg";
import Main_08 from "../asserts/main_08.jpg";

export const StoryList = () => {
  return (
    <StoryWrapper id="story">
      <div className="story-container">
        <div className="story-left">
          <div>
            <span className="letter">Our Story</span>
          </div>
          <div className="story-imgs">
            <img src={Main_01} alt="garpe-orange"></img>
            <img src={Main_02} alt="pineapple"></img>
            <img src={Main_03} alt="orange"></img>
            <img src={Main_05} alt="orange"></img>
            <img src={Main_07} alt="orange"></img>
            <img src={Main_08} alt="orange"></img>
          </div>
        </div>
        <div className="story-right"></div>
      </div>
    </StoryWrapper>
  );
};
