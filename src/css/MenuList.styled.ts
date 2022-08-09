import styled from "styled-components";

export const MenuListWrapper = styled.div`
  .menu-container {
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-box {
    width: 90%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .menu-box .category {
    font-size: 2rem;
    font-weight: bold;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .menu-list-box {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    place-items: center;
  }

  .menu-list {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding-bottom: 2rem;
  }

  .menu-list:hover {
    cursor: pointer;
  }

  .menu-image img {
    width: 100%;
    height: 100%;
  }

  .menu-name {
    font-size: 18px;
    font-weight: bold;
  }

  @media screen and (max-width: 1023px) {
    .menu-list-box {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2px;
    }
  }

  @media screen and (max-width: 767px) {
    .menu-list-box {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 2px;
    }
  }
`;
