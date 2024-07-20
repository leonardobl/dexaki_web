import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 24px;
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

export const NotificationItem = styled.div`
  margin-bottom: 6px;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  padding: 16px;

  display: flex;
  justify-content: space-between;

  .left-box {
    display: flex;
    gap: 16px;

    h3 {
      font-size: 14px;
      font-weight: 600;
      color: #333333;
    }

    p {
      font-size: 12px;
      font-weight: 300;
      color: #666666;
    }
  }

  .right-box {
    display: flex;
    align-items: center;
    gap: 16px;


    p {
      font-size: 14px;
      font-weight: 300;
      color: #666666;
    }
  }
`



interface StatusItemProps {
  status?: string;
}

export const StatusItem = styled.div<StatusItemProps>`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.status || '#D73035'}; 
`;



export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #FAFAFA;
`