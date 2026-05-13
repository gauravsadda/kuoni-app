import { createTheme } from "@mui/material";
import MuiButton from "./button";
import MuiContainer from "./container";
import breakpoints from "./breakpoints";
import colors from "./colors";
import palette from "./palette";
import MuiTypography from "./typography";
import spacing from "./spacing";
import MuiLink from "./link";

const overrides = {
  breakpoints,
  colors,
  components: {
    MuiButton,
    MuiContainer,
    MuiLink,
    MuiTypography,
  },
  palette,
  spacing,
};

const theme = createTheme(overrides);

export default theme;
