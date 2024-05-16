import styled from "styled-components";

export const WrapperNav = styled.div`
  border-top: 1px solid #ccc;
  background-color: #fff;
  width: max-content;
  display: block;
  padding: 8px 25px;
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
  border-radius: 8px 8px 0 0;
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
    color: ${ (props) => props.isActive ? props.theme.primary[800] : props.theme.secondary[400]};
    margin-top: 4px;
  }
`;

export const Link = styled.a<ILinkProps>`
  padding: 0.6rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  svg {
    stroke: ${ (props) => props.isActive ? props.theme.primary[800] : props.theme.color_light };
  }

  &:hover {
    /* background-color: rgba(0,0,0, 0.2); */
  }
`