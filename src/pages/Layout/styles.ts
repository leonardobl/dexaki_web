import styled from "styled-components";

export const Container = styled.div`
  max-height: 100dvh;
  height: 100%;
`;

export const Wrapper = styled.div`
  overflow-y: scroll;
  max-height: calc(100dvh - 282px);
  height: 100%;
  scroll-behavior: smooth;

  --sb-track-color: #232e33;
  --sb-thumb-color: #ff6b00;
  --sb-size: 5px;

  &::-webkit-scrollbar {
    width: var(--sb-size);
  }

  &::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 3px;
  }

  @supports not selector(::-webkit-scrollbar) {
    & {
      scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
    }
  }
`;
