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

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    padding: 0.4rem;
    
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
    color: #666666;
  
  }

  a.active {
    color: ${(props) => props.theme.primary[800]};

    svg {
      filter: brightness(0) saturate(100%) invert(40%) sepia(76%) saturate(1379%) hue-rotate(1deg) brightness(103%) contrast(107%);
    }
  }
`

interface ILinkProps {
  isActive: boolean
}

export const ContentLink = styled.div<ILinkProps>`
  
`;

export const Link = styled.a<ILinkProps>`
  
`