import styled from "styled-components";

type TProps = {
  variant: 'outlined' | 'normal'
}

export const Button = styled.button<TProps>`
  background-color: ${props => props.theme.primary['800']};
  border: ${props => props.variant === 'outlined' ? '1px solid  #FF6B00': 'none'};
  padding: 12px 0px;
  width: 100%;
  border-radius: 8px;
  height: fit-content;
  font-weight: bold;
  cursor: pointer;
`