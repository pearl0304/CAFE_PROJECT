import styled from "styled-components";

export const DetailListWrapper = styled.div`
  width: 100%;
  margin-top: 4.5rem;

  .detail-container {
    padding-top: 6rem;
    width: 90%;
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .detail-left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .nutrients-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .detail-right {
    margin-top: 6.5rem;
    width: 480px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .detail-right .menu-detail-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
