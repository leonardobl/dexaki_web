import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  border-radius: 7px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  height: 100px;
  position: relative;
  padding-right: 10px;
  background-color: #fff;

  &::after {
    content: "";
    display: block;
    width: 12px;
    background-color: rgb(255, 107, 0);
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const WrapperImage = styled.div`
  max-width: 100px;
  width: 100%;
  display: flex;

  img {
    width: 100%;
    /* display: block; */
    border-radius: 4px;
    height: 100px;
    object-fit: fill;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 8px;

  h4 {
    font-size: 12px;
    color: ${({ theme }) => theme.secondary[700]};
    font-weight: 600;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 12px;
    color: #333;
    font-weight: 700;
  }

  span {
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
  }
`;

export const WrapperAction = styled.div`
  padding: 10px;
  display: flex;
  align-items: end;

  button {
    display: flex;
    height: fit-content;
    padding: 6px;
    all: unset;
  }
`;
