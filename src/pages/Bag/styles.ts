import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;

  
`;

export const Body = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 100px);
  height: 100%;
  padding: 0px 16px 24px 16px;


  header {
    
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0px;

    div {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    h3 {
      font-size: 18px;
      color: #333;
      font-weight: 600;
      margin-bottom: 0px;
    }

    h4 {
      display: flex;
      align-items: center;
      font-weight: 600;
      gap: 6px;
      font-size: 14px;
      color: ${(props) => props.theme.primary["800"]};
    }
  }
 

  h3 {
    font-size: 14px;
    color: black;
    margin-bottom: 15px;
    margin-top: 3px;
    font-weight: 600;
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
    gap: 16px;
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
    border: 1px solid #ddd;
    padding: 8px 12px;
    border-radius: 4px;
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 16px;
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
        font-size: 12px;
        color: #333;
        font-weight: 300;
      }

      span {
        font-size: 12px;
        color: #666;
        font-weight: 300;
      }

      strong {
        font-size: 13px;
        color: #666;
      }

      .total {
        font-weight: 600;
        font-size: 13px;
      }
    }
  }
`;

export const ContentFooter = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px; 
  padding: 12px 24px;

  > div {
    width: 100%;
    span {
      font-size: 10px;
      color: #666;
    }

    h3 {
      font-size: 18px;

      small {
        color: #666;
        font-size: 12px;
      }
    }
  }
`;

export const AddItem = styled.div`
  width: 100%;
  margin: 22px 0;
  display: flex;
  justify-content: center;
  gap: 16px;
  border: 1px solid #ddd;
  padding: 14px 0px;
  border-radius: 4px;

  p {
    font-size: 14px;
    color: ${(props) => props.theme.primary["800"]};
    font-weight: 500;
  }
`;

export const NoItems = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  p {
    font-size: 14px;
    color: #999;
  }
`;


export const ModalDescription = styled.div`
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    color: #333;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    font-size: 14px;
    color: #999;
    font-weight: 300;
  }
`;

export const ContentModalInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
