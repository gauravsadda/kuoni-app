import "@emotion/react";
import type { Theme as MuiTheme } from "@mui/material/styles";
import type colorsData from "@/utils/templates/colors";

type AppColors = typeof colorsData;

declare module "@mui/material/styles" {
  interface Theme {
    colors: AppColors;
  }
  interface ThemeOptions {
    colors?: AppColors;
  }
}

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends MuiTheme {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}
