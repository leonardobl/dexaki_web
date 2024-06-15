import styled from "styled-components";

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 15px;
  gap: 18px;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Body = styled.div`
  height: 100%;
  width: 100%;
`;

export const ContentNotification = styled.div`
  padding-top: 100px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 400;
    margin-top: 24px;
    max-width: 150px;
    text-align: center;
    line-height: 24px;
    font-size: 16px;
    color: #666;
  }
`  