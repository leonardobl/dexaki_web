import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  height: 100vh;
  background-color: #FAFAFA;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    
    h3 {
      color: #333;
      font-size: 16px;
      text-align: center;
      
      font-weight: 600;
    }
  }
`;

export const Body = styled.div`
  h3 {
    font-size: 14px;
    color: black;
    margin-bottom: 10px;
    margin-top: 24px;
  }
`;

export const SelectedItem = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  
  .content-left {
    display: flex;
    gap: 6px;
  }

  .img {
    background-color: #ccc;
    border-radius: 6px;
    height: 55px;
    width: 55px;
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

  .option {
    background-color: #f1f1f1;
    padding: 4px 10px;
    border-radius: 4px;
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;


export const Resume = styled.div`
  h3 {
    color: #333;
    font-size: 14px;
    margin-bottom: 16px;
    font-weight: 500;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 6px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 14px;
        color: #333;
        font-weight: 300;
      }

      span {
        font-size: 14px;
        color: #666;
      }

      strong {
        font-size: 14px;
        
      }
    }
  }
`