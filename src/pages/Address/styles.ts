import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 24px;
  height: 100vh;
  background-color: #FAFAFA;
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

export const Body = styled.div`
  

`


export const CardMain = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 16px;
  gap: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 24px;


  > div {
    p {
      font-size: 12px;
      color: #333;
      font-weight: 600;
    }

    span {
      font-size: 12px;
      color: #666;
      font-weight: 300;
    }
  }
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px;

  .content-description {
    display: flex;
    gap: 16px;
  }

  .description {
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
      font-size: 12px;
      color: #333;
      font-weight: 600;
    }

    span {
      font-size: 12px;
      color: #666;
      font-weight: 300;
    }
  }
`;