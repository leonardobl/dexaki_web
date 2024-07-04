import styled from "styled-components";

export const Container = styled.div``;

export const WrapperHeader = styled.div`
  /* position: fixed;
  top: 0;
  right: 0; */
  background-color: #fff;
  width: 100%;
`;

export const WrapperItens = styled.div`
  /* margin-top: 185px; */
`;

export const Header = styled.div`
  width: 100%;
  background-color: #fff;
  /* background-color: ${({ theme }) => theme.secondary[200]}; */
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin: 5px 0 0px 0px;

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
        height: 42px;
        width: 42px;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      }
    }
  }
`;

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
      margin-top: 8px;
      font-size: 12px;
      font-weight: ${(props) => (props.isActive ? 500 : 300)};
      color: ${(props) =>
        props.isActive ? props.theme.primary[700] : props.theme.secondary[700]};
    }
  }

  &:hover {
  }
`;
interface ILinkProps {
  isActive: boolean;
}

export const Notification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;

  border-radius: 50%;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  position: relative;

  .notification {
    position: absolute;
    top: 2px;
    right: 2px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: #ff6b00;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;

  p {
    font-size: 10px;
    line-height: 8px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.secondary[700]};
  }
`;
