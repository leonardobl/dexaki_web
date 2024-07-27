import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  /* padding-bottom: 40px; */
  /* height: 100vh; */

  height: calc(100dvh - 268px);
  overflow-y: scroll;
`;

export const BodyItens = styled.div`
  margin-bottom: 16px;
`;

export const ContentItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px;
`;

export const WrapperItens = styled.div`
  /* margin-top: 185px; */
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  border: 1px solid #ccc;
  margin: 0 18px;
  border-radius: 8px;
  height: 100px;

  .content-image {
    border-radius: 7px;
    width: 150px;
    height: 100%;
    /* height: 96px; */

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background-color: #ccc;
    }
  }

  .description {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* gap: 5px; */
    padding: 10px 10px;

    p {
      font-family: "Montserrat", sans-serif;
      font-size: 10.11px;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .border-right {
    background-color: ${(props) => props.theme.primary[800]};
    /* background-color: red; */
    height: 100%;

    width: 16px;
    border-radius: 0px 7px 7px 0px;
  }
`;

export const TitleItem = styled.p`
  font-size: 12.93px;
  color: ${({ theme }) => theme.secondary[700]};
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #595959;
  font-weight: 300;
  margin-bottom: 4.5px;
`;

export const Price = styled.p`
  font-size: 14px;
  color: #333;
  font-weight: 700;
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;

  p {
    font-size: 10px;
    line-height: 8px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.secondary[700]};
  }
`;

export const ButtonPlus = styled.button`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  all: unset;
`;
