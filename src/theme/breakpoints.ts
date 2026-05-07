import type { BreakpointsOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
  }
}

const breakpoints: BreakpointsOptions = {
  keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
  values: {
    xs: 0,
    sm: 767,
    md: 991,
    lg: 1199,
    xl: 1480,
    xxl: 1680,
  },
};

export default breakpoints;
