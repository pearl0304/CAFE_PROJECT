import styled from "styled-components";

export const SlideListWrapper = styled.div`
  background-color: #f8eee1;

  .menu-container {
    width: 90%;
    display: flex;
    justify-content: center;
    position: relative;
    color: #31302f;
  }
  .menu-left {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: 5rem;
    margin-top: 4rem;
    margin-bottom: 5rem;
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

  .letter {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }
`;
