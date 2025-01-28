"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";
import { darkTheme } from "@/theme/theme";
import { GlobalStyles } from "@/theme/global";

function Providers(props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default Providers;
