import styled from "styled-components";

export const WrapperInput = styled.div`
  width: 100%;

  input {
    width: 100%;
    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 12px 16px;
    outline: none;
    font-size: 14px;

    &::placeholder {
      font-size: 14px;
      font-weight: 300;
    }
  }

  span {
    font-size: 12px;
    color: red;
  }
`;
