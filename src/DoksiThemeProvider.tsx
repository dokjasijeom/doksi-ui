import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { doksiTheme } from "./styles/theme";

type DoksiThemeProviderProps = {
  children: ReactNode;
};

export const DoksiThemeProvider = ({ children }: DoksiThemeProviderProps) => {
  return <ThemeProvider theme={doksiTheme}>{children}</ThemeProvider>;
};
