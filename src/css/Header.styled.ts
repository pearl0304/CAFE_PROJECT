import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 4.5rem;
  background-color: #f8eee1;
  display: flex;
  justify-content: center;
  line-height: 4.5rem;
  color: #31302f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .header-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .header-left {
    width: 25rem;
    display: flex;
    justify-content: space-between;
  }

  .header-left .nav > ul {
    display: flex;
    gap: 1rem;
  }
  .header-left .nav > ul li {
    cursor: pointer;
  }

  .header-right {
    width: 15rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    cursor: pointer;
  }

  .header-right .login {
    display: flex;
    gap: 0.5rem;
  }

  .header-right .header-icon {
    margin-top: 6px;
  }
`;
