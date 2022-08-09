import React from "react";
import { Link } from "react-router-dom";
import { NewsWrapper } from "../css/News.styled";
import news_01 from "../asserts/news_01.jpg";
import news_02 from "../asserts/news_02.jpg";

export const News = () => {
  return (
    <NewsWrapper id="home">
      <div className="news-container">
        <div className="news-left">
          <div className="line-box_1"></div>
          <div className="line-box_2"></div>
          <div className="news-left-image">
            <img src={news_01}></img>
          </div>
          <div className="news-title">
            <span>SUMMER</span>
            <span>PROMOTION</span>
          </div>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <div>
              <span> See more new Menu → </span>
            </div>
          </Link>
        </div>
        <div className="news-right">
          <div>
            <span>Check in. Chew up. Tune out. Ok Drugs helps elevate micro-experiences for those who want to check-in to the moment in a hard and heavy world.</span>
          </div>
          <div className="news-right-image">
            <img src={news_02}></img>
          </div>
        </div>
      </div>
    </NewsWrapper>
  );
};
