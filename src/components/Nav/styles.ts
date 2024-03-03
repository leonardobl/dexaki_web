import styled from "styled-components";

export const WrapperNav = styled.div`
  background-color: rgba(0,0,0, 0.3);
  width: max-content;
  display: block;
  /* min-width: 250px; */
  padding: 10px 45px;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  display: flex;
  gap: 26px;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`

interface ILinkProps {
  isActive: boolean
}

export const ContentLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 10px;
    color: #fff;
    margin-top: 4px;
  }
`;

export const Link = styled.a<ILinkProps>`
  padding: 0.6rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  color: ${ (props) => props.isActive ? props.theme.color_white : props.theme.color_light };
  background-color: ${ (props) => props.isActive ? props.theme.primary[500] : 'transparent' };
  font-size: 1rem;

  &:hover {
    /* background-color: rgba(0,0,0, 0.2); */
  }
`