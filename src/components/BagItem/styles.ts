import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  display: flex;
  justify-content: space-between;

  .content-left {
    display: flex;
    gap: 16px;
  }

  .img {
    background-color: #ccc;
    border-radius: 6px;
    height: 55px;
    width: 55px;
    display: block;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 2px;

    p {
      font-size: 14px;
      color: #333;
    }

    span {
      font-size: 12px;
      color: #666;
    }

    strong {
      font-size: 12px;
      color: #333;
    }

    .content-itens {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 10px;

      div {
        display: flex;
        align-items: center;
        gap: 8px;

        p {
          background-color: #f1f1f1;
          padding: 2px 4px;
          color: #333;
          border-radius: 4px;
          font-size: 12px;
        }
      }
    }
  }
`;


export const ContentButton = styled.div`
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 4px;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 16px;

  > button {
    all: unset;
  }
`;

