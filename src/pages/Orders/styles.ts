import styled from "styled-components";

export const Wrapper = styled.div`
  
  height: 100%;
  background-color: #fafafa;

  overflow-y: scroll;

  header {
    padding: 24px;
    display: flex;
    align-items: center;
    padding-bottom: 24px;
    gap: 16px;
    margin-bottom: 16px;

    h3 {
      font-size: 18px;
      color: #333;
      font-weight: 600;
    }
  }

`;

export const Body = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 186px);
  height: 100%;
  padding: 0px 16px;
`;

export const CardOrders = styled.div`
  background-color: #fff;
  padding: 18px;
  border-radius: 8px;
  margin-bottom: 8px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > p {
      color: #555;
    }
  }

  .bodyCard {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    p {
      font-size: 14px;
      font-weight: 300;
      color: #999;

      span {
        margin-right: 6px;
        color: #9999;
      }
    }
  }
`;

interface IStatus {
  status?: {
    bg: string;
    color: string;
  };
}

export const Status = styled.div<IStatus>`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${(props) => props.status?.bg};
  color: ${(props) => props.status?.color};

  padding: 6px 12px;
  border-radius: 4px;

  span {
    height: 5px;
    width: 5px;
    background-color: ${(props) => props.status?.color};
    border-radius: 50%;
  }

  p {
    font-size: 12px;
    font-weight: 600;
  }
`;

export const NoOrders = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 300;
    margin-top: 24px;
    max-width: 150px;
    text-align: center;
    line-height: 24px;
    font-size: 16px;
    color: #666;
  }
`;
