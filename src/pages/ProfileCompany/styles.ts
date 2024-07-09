import styled from "styled-components";

export const Wrapper = styled.div`
  /* padding: 0px 24px; */
  height: 100vh;
  background-color: #fafafa;

  header {
    background-color: #fff;
    padding: 10px;
    border-radius: 6px;

    > div {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 16px;

      p {
        color: #333;
        font-weight: 600;
        font-size: 14px;

        span {
          color: #666;
          font-size: 12px;
        }
      }
    }

    .hour {
      display: flex;
      flex-direction: column;

      > div {
        display: flex;
        gap: 16px;
      }

      ul {
        padding-left: 30px;
        list-style: none;
        li {
          margin-bottom: 4px;
          font-size: 13px;
          color: #666;
          font-weight: 300;
        }
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 0px;
  gap: 18px;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;
