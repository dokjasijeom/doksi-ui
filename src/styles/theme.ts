import { ColorType, TypographyType } from "../@types/theme";
import { typography } from "./typography";
import { color } from "./color";
import { DefaultTheme } from "styled-components";

export const doksiTheme: DefaultTheme = { color, typography } as {
  color: ColorType;
  typography: TypographyType;
};
