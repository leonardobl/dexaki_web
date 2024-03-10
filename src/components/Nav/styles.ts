import styled from "styled-components";

export const WrapperNav = styled.div`
  border-top: 1px solid #ccc;
  background-color: #fff;
  width: max-content;
  display: block;
  padding: 8px 45px;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  gap: 26px;
  width: 100%;
  backdrop-filter: blur(15px);
`

interface ILinkProps {
  isActive: boolean
}

export const ContentLink = styled.div<ILinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  


  span {
    font-size: 10px;
    color: ${ (props) => props.isActive ? props.theme.secondary[700] : props.theme.secondary[400]};
    margin-top: 4px;
  }
`;

export const Link = styled.a<ILinkProps>`
  padding: 0.6rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  color: ${ (props) => props.isActive ? props.theme.color_white : props.theme.color_light };
  background-color: ${ (props) => props.isActive ? props.theme.secondary[700] : 'transparent' };
  font-size: 1rem;

  &:hover {
    /* background-color: rgba(0,0,0, 0.2); */
  }
`