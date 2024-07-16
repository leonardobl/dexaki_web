import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1000;
  top: 0;
  display: flex;
  justify-items: center;
  align-items: flex-end;
  /* background-color: #5d6670; */
  /* opacity: 0.9; */
  /* filter: blur(5px);  */

  #overlay-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #5d6670;
    /* background-color: rgba(0,0,0,0.4); */
    opacity: 0.9;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  z-index: 1000;
  position: absolute;
  background-color: #fff;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  padding: 16px;
  /* transform: translate3d(0, -25%, 0); */
`;


export const OverleayModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #5d6670;
  opacity: 0.9;
  z-index: 1;
`;

export const ModalBody = styled.div`

`;

export const Line = styled.div`
  max-width: 134px;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background-color: #ADADAD;
`;