import styled from "styled-components";

export const NewsWrapper = styled.div`
  width: 100%;
  background-color: #fbb04c;
  height: 50rem;

  .news-container {
    display: flex;
    justify-content: center;
    gap: 10rem;
    width: 90%;
  }

  .news-left {
    margin: 10rem 5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .news-left-image {
    width: 15rem;
    height: 15rem;
  }

  .news-left-image img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  .news-left .news-title {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }

  .news-left .news-title span {
    font-size: 5rem;
    font-weight: 900;
    color: #31302f;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    letter-spacing: 0.5rem;
  }

  .news-right {
    margin-top: 10rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-end;
  }

  .news-right > div:first-child {
    width: 20rem;
    font-size: 14px;
  }

  .news-right-image {
    width: 20rem;
    height: 25rem;
  }
  .news-right-image img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  .line-box_1 {
    position: absolute;
    width: 15rem;
    height: 15rem;
    border: 2px solid #ff8573;
    top: -1rem;
    left: -1rem;
  }

  .line-box_2 {
    position: absolute;
    width: 15rem;
    height: 15rem;
    border: 2px solid #ff8;
    top: 1rem;
    left: 1rem;
  }
`;
