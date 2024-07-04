import styled from "styled-components";

export const WrapperNav = styled.div`
  /* border: 1px solid red; */

  border-top: 1px solid #ccc;
  background-color: #fff;
  width: max-content;
  display: block;
  /* padding: 8px 24px 6px 24px; */
  z-index: 2;
  /* position: fixed; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  /* bottom: 0px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 26px; */
  width: 100%;
  backdrop-filter: blur(15px);

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    /* padding: 0.4rem; */

    display: flex;
    flex-direction: column;
    gap: 5px;

    color: #666666;
    span {
      font-size: 0.75rem;
      font-weight: 300;
    }
  }

  a.active {
    color: ${(props) => props.theme.primary[800]};

    svg {
      filter: brightness(0) saturate(100%) invert(40%) sepia(76%)
        saturate(1379%) hue-rotate(1deg) brightness(103%) contrast(107%);
    }
  }
`;

interface ILinkProps {
  isActive: boolean;
}

export const ContentLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Link = styled.a<ILinkProps>``;

export const Bag = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 100%;
  height: 50px;
  /* position: fixed; */
  bottom: 52px;
  left: 0px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.primary["800"]};

  p {
    color: #fff;
    font-size: 12px;
  }

  small {
    color: #fff;
    font-size: 12px;
  }
`;
