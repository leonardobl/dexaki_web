import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;

  input[type="text"] {
    background-color: transparent;
    border: none;
    padding: 6px 12px;
    font-size: 13px;
    width: 100%;
    outline: none;
  }
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 8px;
    border: none;
    background-color: transparent;
    border-radius: 0px;
    cursor: pointer;
  }
`;