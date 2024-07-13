import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Container = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 107px);
  scroll-behavior: smooth;
`;

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  h4 {
    width: 63px;
    font-size: 13.13px;
    font-weight: 700;
    color: #333;
    font-family: "Montserrat", sans-serif;
  }
`;

export const Logo = styled.div`
  height: 42px;
  width: 42px;
  background-color: #333;
  /* border-radius: 50%; */
`;

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  /* border-bottom: .5px solid #ccc; */

  span {
    height: 4px;
    width: 4px;
    background-color: #333;
    border-radius: 50%;
    font-family: "Montserrat", sans-serif;
  }

  p {
    font-size: 10px;
    line-height: 8px;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.secondary[700]};
  }
`;

export const MenuTab = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  /* border-bottom: .5px solid #ccc; */
  margin: 16px 0 0px 0px;

  ul {
    padding: 0 16px;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 25px;
    padding-bottom: 10px;

    li {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 52px;
        width: 52px;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      }

      p {
        margin-top: 8px;
        font-size: 14px;
      }
    }
  }
`;
interface ILinkProps {
  isActive: boolean;
}

export const Link = styled.a<ILinkProps>`
  color: ${(props) =>
    props.isActive ? props.theme.primary[700] : props.theme.secondary[700]};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 10px;
  /* border-bottom:  ${(props) =>
    props.isActive ? `1px solid ${props.theme.primary[700]}` : ""}; */
  transition: all 0.2s ease-in-out;

  li {
    p {
      color: ${(props) =>
    props.isActive ? props.theme.primary[700] : props.theme.secondary[700]};
    }
  }

  &:hover {
  }
`;


export const ContentMenu = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`;
