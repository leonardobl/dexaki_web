import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;


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
  }

  body {
    background-color: #FAFAFA;
  }

  body, input, button , textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  html, body, #root {
    min-height: 100dvh;
    height: 100%;
  }


  html{
    scroll-behavior: smooth;
  }





  .container {
    max-width: 1216px;
    width: 100%;
    margin: 0 auto;

    @media(max-width: 1220px) {
      padding: 0 24px;
    }
  }

  h1,h2,h3,h4,h5,p,span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`;
