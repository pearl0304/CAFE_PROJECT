import styled from "styled-components";

export const SlideListWrapper = styled.div`
  background-color: #f8eee1;
  height: 50rem;

  .menu-container {
    width: 90%;
    display: flex;
    position: relative;
    color: #31302f;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    letter-spacing: 0.2rem;
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
    font-size: 4rem;
    font-weight: bold;
  }

  .menu-left .carousel {
    width: 90%;
    height: 90%;
  }

  .menu-left .slide-img {
    width: 100%;
    height: 100%;
  }

  .menu-right {
    position: absolute;
    right: 2rem;
    bottom: 4rem;
    font-size: 5rem;
    font-weight: bold;
  }
`;
