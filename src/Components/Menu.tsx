import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideListWrapper } from "../css/SlideList.styled";
import Slide01 from "../asserts/slide_1.png";
import Slide02 from "../asserts/slide_2.png";
import Slide03 from "../asserts/slide_3.png";
import Slide04 from "../asserts/slide_4.png";

const images = [Slide01, Slide02, Slide03, Slide04];

const setting = {
  dots: true,
  infintte: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
};

export const SlideList = () => {
  return (
    <SlideListWrapper>
      <div className="menu-container">
        <div className="menu-left">
          <div>
            <span>New Menu</span>
          </div>
          <div className="carousel">
            <Slider {...setting}>
              {images.map((img) => (
                <div>
                  <img src={img} alt="drinks" className="slide-img"></img>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="menu-right">
          <span>Enjoy Your Summer</span>
        </div>
      </div>
    </SlideListWrapper>
  );
};
