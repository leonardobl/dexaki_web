import styled from "styled-components";

export const Wrapper = styled.div``;


export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-items: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #5d6670;
    opacity: 0.9;
  }
`;


export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const Modal = styled.div`
   margin: 0 auto;
   position: relative;



  background-color: #fff;
  min-height: 100px;
  max-width: 280px;
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  transform: translate3d(0, -25%, 0);


  h1 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    text-align: center;
  }
`;

export const OverleayModal = styled.div``;


export const ModalBody = styled.div`
  margin-top: 16px;
`;