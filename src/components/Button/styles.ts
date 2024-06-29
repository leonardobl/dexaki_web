import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => props.theme.primary['800']};
  border: none;
  padding: 12px 0px;
  width: 100%;
  border-radius: 8px;
  height: fit-content;
  font-weight: bold;
  cursor: pointer;
`