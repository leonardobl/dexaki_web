import styled from "styled-components";

import { darken } from "polished";

export const Container = styled.div`
  position: relative;
`;

export const MyInput = styled.input`
  height: 44px;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  border: 1px solid #ccc;
  width: 100%;
  background: #fff;
  padding: 0 14px;

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    -webkit-text-fill-color: #000 !important;
  }

  &:disabled {
    background-color: ${darken(0.04, "#fff")};
    cursor: not-allowed;
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: red;
`;
