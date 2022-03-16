import "styled-components";
import type theme from "~/styles/theme";

declare module "styled-components" {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}