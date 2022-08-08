import styled from "styled-components";

export const SlideListWrapper = styled.div`
  background-color: #f8eee1;
  height: 50rem;

  .menu-container {
    width: 90%;
    display: flex;
    position: relative;
  }
  .menu-left {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: 5rem;
    margin-top: 3rem;
  }

  .menu-left > div:first-child {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 4rem;
    font-weight: bold;
  }

  .menu-left .carousel {
  }

  .menu-left .slide-img {
    width: 100%;
    height: 100%;
  }

  .menu-right {
    position: absolute;
    right: -4rem;
    bottom: -2rem;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 5rem;
    font-weight: bold;
  }
`;
