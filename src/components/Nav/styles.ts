import styled from "styled-components";

export const Wrapper = styled.div``;

export const WrapperNav = styled.div`
  border-top: 1px solid #ccc;
  background-color: #fff;
  width: max-content;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    font-weight: 500;

    svg {
      filter: brightness(0) saturate(100%) invert(40%) sepia(76%)
        saturate(1379%) hue-rotate(1deg) brightness(103%) contrast(107%);
    }
  }
`;

export const ContentLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  height: 50px;
`;

export const Bag = styled.div`
  background-color: #fff;
  padding: 0px 16px;
  height: 45px;
  width: 100%;
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

export const IconBag = styled.div`
  position: relative;
  width: 30px;

  .number-item {
    position: absolute;
    top: 0px;
    right: 1px;
    background-color: #fff;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 9px;
    font-weight: 500;
  }
`;
