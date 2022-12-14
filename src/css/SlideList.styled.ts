import styled from "styled-components";

export const SlideListWrapper = styled.div`
  width: 100%;
  background-color: #f8eee1;

  .menu-container {
    width: 90%;
    display: flex;
    justify-content: center;
    position: relative;
    padding-top: 5rem;
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
`;
