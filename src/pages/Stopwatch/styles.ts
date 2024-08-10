import styled from "styled-components";

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px;
  gap: 18px;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Body = styled.div`
  padding: 24px;

  .time {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 18px;
      color: #333;
      
    }

    p {
      font-size: 14px;
      color: #999;
      margin-top: 20px;
    }

    h1 {
      margin-top: 10px;
      font-weight: 700;
      font-size: 52px;
    }

  }

  .content-code {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    p {
      font-size: 13px;
      color: #999;
      margin-bottom: 10px;
    }
  }

`;