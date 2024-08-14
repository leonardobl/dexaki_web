import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 24px;
  background-color: #fafafa;
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

export const Body = styled.div``;

export const anyFavorite = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-weight: 600;
    color: #333;
  }

  > p {
    text-align: center;
    font-size: 14px;
    color: #666;
    display: flex;
    align-items: center;
  }
`;
