import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;
  margin-top: 4.5rem;
  height: 2rem;
  line-height: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;

  .nav-container {
    position: fixed;
    height: 2rem;
    width: 90%;
    background-color: white;
  }
  .nav-container ul {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
  }

  .nav-container ul a:hover {
    cursor: pointer;
    border-bottom: 2px solid lightcoral;
  }
`;
