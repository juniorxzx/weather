"use client";
import { ThemeProviderWrapper } from "@/store/globalContext";
import StyledComponentsRegistry from "./registry";

import { GlobalStyles } from "@/theme/global";

function Providers(props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <StyledComponentsRegistry>
        <ThemeProviderWrapper>
          <GlobalStyles />

          {props.children}
        </ThemeProviderWrapper>
      </StyledComponentsRegistry>
    </StyledComponentsRegistry>
  );
}

export default Providers;
