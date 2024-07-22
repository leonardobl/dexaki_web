import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;


export const Wrapper = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 240px);
  height: 100%;
  scroll-behavior: smooth;

  &[data-product="true"] {
    max-height: calc(100vh - 265px);
  }
`;
