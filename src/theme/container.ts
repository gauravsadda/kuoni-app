import breakpoints from "./breakpoints";
import type { ThemeOptions } from "@mui/material/styles";

const MuiContainer = {
  styleOverrides: {
    root: {
      "&.MuiContainer-maxWidthLg": {
        maxWidth: "1180px",
        [`@media (max-width:${breakpoints?.values?.xxl}px)`]: {
          maxWidth: "1180px",
        },
        [`@media (max-width:${breakpoints?.values?.xl}px)`]: {
          maxWidth: "1180px",
        },
        [`@media (max-width:${breakpoints?.values?.sm}px)`]: {
          paddingLeft: "32px",
          paddingRight: "32px",
        },
      },
      "&.MuiContainer-maxWidthSm": {
        maxWidth: "1248px",
        [`@media (max-width:${breakpoints?.values?.xxl}px)`]: {
          maxWidth: "1248px",
        },
        [`@media (max-width:${breakpoints?.values?.xl}px)`]: {
          maxWidth: "1080px",
        },
        [`@media (max-width:${breakpoints?.values?.sm}px)`]: {
          paddingLeft: "32px",
          paddingRight: "32px",
        },
      },
    },
  },
} satisfies NonNullable<ThemeOptions["components"]>["MuiContainer"];

export default MuiContainer;
