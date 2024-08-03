import styled from "styled-components";

export const Button = styled.button`
  background-color: #ff6b00;
  border: none;
  height: 48px;
  color: #fff;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &[data-variant-outline="true"] {
    background-color: transparent;
    border: 1px solid #ff6b00;
  }

  &[data-variant-text="true"] {
    background-color: transparent;
    color: #fff;
  }

  &:disabled {
    background-color: #d1d2d3;
    color: #999;
    cursor: not-allowed;
  }
`;
