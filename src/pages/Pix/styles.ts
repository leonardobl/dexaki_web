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
  display: flex;
  flex-direction: column;
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
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      display: block;
      font-size: 160px;
      filter: brightness(0) saturate(100%) invert(39%) sepia(84%)
        saturate(2042%) hue-rotate(6deg) brightness(108%) contrast(106%);
    }

    p {
      margin-bottom: 16px;
      color: #ff6b00;
      text-align: center;
    }
  }
`;

export const WrapperInfoSucess = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > svg {
      display: block;
      font-size: 160px;
      filter: brightness(0) saturate(100%) invert(22%) sepia(100%)
        saturate(3311%) hue-rotate(107deg) brightness(92%) contrast(104%);
    }

    p {
      margin-bottom: 16px;
      color: #008000;
      text-align: center;
    }
  }
`;
