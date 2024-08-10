import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 16px;
`;

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

export const ContentPay = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 15px;
    color: #333;
    font-weight: 600;
  }
`;

export const ModalConfirm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h3 {
    text-align: center;
    color: #333;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const UserData = styled.div`
  display: flex;
  gap: 6px;
  div {
    strong {
      font-size: 14px;
      color: #333;
    }
    p {
      font-size: 12px;
      color: #333;
    }
  }
`;

export const AdressUser = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  > div {
    strong {
      font-size: 12px;
      color: #333;
    }

    p {
      font-size: 12px;
      color: #333;
    }
  }
`;

export const Ticket = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    font-size: 12px;
    color: #333;
  }
`;

export const TypePay = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    font-size: 12px;
    color: #333;
  }
`;

export const ContentBtn = styled.div`
  margin-top: 24px;
`;
