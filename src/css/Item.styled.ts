import styled from "styled-components";

export const ItemWrapper = styled.div`
  .menu-list {
    margin-left: 50%;
    transform: translateX(-50%);
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
`;
