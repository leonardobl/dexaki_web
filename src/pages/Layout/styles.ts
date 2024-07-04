import styled from "styled-components";

export const Container = styled.div`
  max-height: (100vh - 60px);
  height: 100%;
`;

export const Wrapper = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 302px);
  height: 100%;
  scroll-behavior: smooth;
`;
