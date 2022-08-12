import styled from "styled-components";

export const StoryWrapper = styled.div`
  width: 100%;
  height: 50rem;
  background-color: #8390c8;

  .story-container {
    width: 90%;
    margin-left: 50%;
    transform: translateX(-50%);
    padding-top: 5rem;
    display: flex;
  }

  .story-left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 5rem;
  }

  .story-left > div:first-child {
    font-size: 4rem;
  }

  .story-imgs {
    width: 45%;
    display: grid;
    column-gap: 0.5rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .story-imgs img {
    width: 100%;
    height: 100%;
  }
`;
