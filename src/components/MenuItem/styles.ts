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

  /* &::after {
    content: "";
    display: block;
    width: 8px;
    background-color: rgb(255, 107, 0);
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  } */
`;

export const WrapperContent = styled.div`
  display: flex;
  /* align-items: center; */
  flex: 1;
`;

export const WrapperImage = styled.div`
  max-width: 100px;
  width: 100%;
  display: flex;

  img {
    width: 100%;
    /* display: block; */
    border-radius: 4px 0px 0px 4px;
    height: 100px;
    object-fit: fill;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 8px;

  h4 {
    font-size: 14px;
    color: ${({ theme }) => theme.secondary[600]};
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  

  span {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    color: ${({ theme }) => theme.secondary[500]};
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

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  span {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    font-weight: 500;
  }

  p {
    font-size: 13px;
    color: #666;
    font-weight: 700;
  }
`;

export const Cashback = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  border-radius: 6px;
  padding: 4px 8px;
  width: fit-content;
  background-color: rgba(218,255,204, 0.6);

  p {
    font-size: 9px;
    color: #333;

  }
`;
