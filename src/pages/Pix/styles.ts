import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
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
  flex: 1;

  overflow: auto;

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
    /* margin-top: 200px; */
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

export const Qrcode = styled.img`
  display: block;
  max-width: 200px;
  width: 100%;
  margin: 24px auto;
`;

export const WrapperInfo = styled.div`
  > svg {
    display: block;
    margin: 24px auto 16px;
    font-size: 160px;
    filter: brightness(0) saturate(100%) invert(39%) sepia(84%) saturate(2042%)
      hue-rotate(6deg) brightness(108%) contrast(106%);
  }

  > p {
    color: #ff6b00;
    margin-bottom: 16px;
    text-align: center;
  }
`;
