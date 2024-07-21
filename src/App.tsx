import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";
import Rotas from "./routes";
import { AppProvider } from "./context/AppContext";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyle />
        <Rotas />

      </AppProvider>
    </ThemeProvider>
  );
}
