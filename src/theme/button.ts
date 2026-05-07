import colors from "./colors";
import breakpoints from "./breakpoints";

const MuiButton = {
  styleOverrides: {
    root: {
      border: `1px solid transparent`,
      borderRadius: "0",
      fontSize: "13px",
      fontWeight: 400,
      height: "46px",
      lineHeight: "46px",
      padding: `0 36px`,
      textTransform: "uppercase",
      letterSpacing: "2px",
      backgroundColor: "rgba(247, 243, 237, 0.2)",
      color: colors.palette.white,
      filter: "brightness(1.2)",
      backdropFilter: "blur(30px)",
      boxShadow: "none",

      [`@media (min-width:${breakpoints?.values?.xxl}px)`]: {
        padding: `0 26px`,
      },

      [`@media (max-width:${breakpoints?.values?.xxl}px)`]: {
        padding: `0 20px`,
      },

      [`@media (max-width:${breakpoints?.values?.sm}px)`]: {
        height: "45px",
        lineHeight: "45px",
        padding: `0 20px`,
        fontSize: "12px",
      },

      "&:hover": {
        border: `1px solid ${colors.palette.brown}`,
        backgroundColor: "transparent",
        color: `${colors.palette.white}`,
        boxShadow: `0 60px 0 ${colors.palette.brown} inset`,
      },
    },
    outlinedPrimary: {
      backgroundColor: "transparent",
      border: `1px solid ${colors.palette.lightGrey}`,
      color: `${colors.palette.darkGrey}`,
      filter: "none",
      backdropFilter: "none",
      "&:hover": {
        border: `1px solid ${colors.palette.darkGrey}`,
        boxShadow: `0 60px 0 ${colors.palette.darkGrey} inset`,
      },
    },
    containedSecondary: {
      backgroundColor: `${colors.palette.darkGrey}`,
      border: `1px solid ${colors.palette.darkGrey}`,
      color: `${colors.palette.white}`,
      filter: "none",
      backdropFilter: "none",
      "&:hover": {
        border: `1px solid ${colors.palette.brown}`,
        boxShadow: `0 60px 0 ${colors.palette.brown} inset`,
      },
    },
  },
};

export default MuiButton;
