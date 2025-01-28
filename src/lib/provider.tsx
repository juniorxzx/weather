"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";
import { darkTheme, lightTheme } from "@/theme/theme";
import { GlobalStyles } from "@/theme/global";

import { useThemeContext } from "@/store/globalContext";

function Providers(props: React.PropsWithChildren) {
  const { theme } = useThemeContext();

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default Providers;
