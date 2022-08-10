import styled from "styled-components";

export const CartListWrapper = styled.aside`
  width: 25rem;
  display: flex;
  flex-direction: column;

  .cart-title {
    text-align: center;
    padding: 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .empty {
    background-color: #eee;
    color: #7e7e7e;
    text-align: center;
    padding: 1rem;
  }
  .cart-list-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .cart-list {
    border-bottom: 1px solid #eee;
  }

  .cart-list .item-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  .cart-list .item-info .cart-list-left {
    width: 20%;
    height: 20%;
  }

  .cart-list .item-info .cart-list-left img {
    width: 100%;
    height: 100%;
  }

  .cart-list .item-info .cart-list-right {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .cart-list .item-info .cart-list-right > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 120px;
  }

  .cart-list .item-info .cart-list-right .cart-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  .total span {
    margin-left: 2rem;
    font-size: 18px;
    font-weight: bold;
  }
`;
