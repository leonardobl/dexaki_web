import styled from "styled-components";

type TProps = {
  variant: 'outlined' | 'normal'
}

export const Button = styled.button<TProps>`
  background-color: ${props => props.variant === 'outlined' ? 'transparent' : props.theme.primary['800']};
  color: ${props => props.variant === 'outlined' ? props.theme.primary['800'] : '#fff'} !important;
  border: ${props => props.variant === 'outlined' ? '1px solid  #FF6B00' : 'none'};
  padding: 12px 0px;
  width: 100%;
  border-radius: 8px;
  height: fit-content;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
 
`