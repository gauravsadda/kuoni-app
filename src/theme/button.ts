import colors from "./colors";
import breakpoints from "./breakpoints";
import type { ThemeOptions } from "@mui/material/styles";

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
      boxShadow: "none",
      transition: "box-shadow 0.25s ease, color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease",

      [`@media (min-width:${breakpoints?.values?.xxl}px)`]: { padding: `0 26px` },
      [`@media (max-width:${breakpoints?.values?.xxl}px)`]: { padding: `0 20px` },
      [`@media (max-width:${breakpoints?.values?.sm}px)`]: {
        height: "45px",
        lineHeight: "45px",
        padding: `0 20px`,
        fontSize: "12px",
      },

      "&.Mui-disabled": { opacity: 0.4, pointerEvents: "auto", cursor: "not-allowed" },
    },
 // ── Sizes ──────────────────────────────────
     sizeSmall: {
      height: "36px",
      lineHeight: "36px",
      padding: "0 20px",
      fontSize: "11px",
      letterSpacing: "1.5px",
    },
    sizeMedium: {
      height: "46px",
      lineHeight: "46px",
      padding: "0 36px",
      fontSize: "13px",
      letterSpacing: "2px",
    },
    sizeLarge: {
      height: "56px",
      lineHeight: "56px",
      padding: "0 48px",
      fontSize: "14px",
      letterSpacing: "2.5px",
    },
  },
  
  variants: [
    // ── CONTAINED PRIMARY ──────────────────────────────────
    {
      props: { variant: "contained", color: "primary" },
      style: {
        backgroundColor: colors.palette.brown,
        border: `1px solid ${colors.palette.brown}`,
        color: colors.palette.white,
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: colors.palette.darkBrown,
          color: colors.palette.white,
          boxShadow: `0 60px 0 ${colors.palette.darkBrown} inset`,
        },
      },
    },

    // ── OUTLINED PRIMARY ───────────────────────────────────
    {
      props: { variant: "outlined", color: "primary" },
      style: {
        backgroundColor: "transparent",
        border: `1px solid ${colors.palette.lightGrey}`,
        color: colors.palette.darkGrey,
        "&:hover": {
          borderColor: colors.palette.darkGrey,
          color: colors.palette.white,
          boxShadow: `0 60px 0 ${colors.palette.darkGrey} inset`,
        },
        "&.Mui-disabled": {
          borderColor: colors.palette.lightGrey,
          color: colors.palette.lightGrey,
        },
      },
    },

    // ── TEXT PRIMARY ───────────────────────────────────────
    {
      props: { variant: "text", color: "primary" },
      style: {
        backgroundColor: "transparent",
        border: `1px solid transparent`,
        color: colors.palette.darkGrey,
        padding: "0 16px",
        "&:hover": {
          backgroundColor: "rgba(66,66,66,0.08)",
          boxShadow: "none",
        },
      },
    },

    // ── CONTAINED SECONDARY ────────────────────────────────
    {
      props: { variant: "contained", color: "secondary" },
      style: {
        backgroundColor: colors.palette.darkGrey,
        border: `1px solid ${colors.palette.darkGrey}`,
        color: colors.palette.white,
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: colors.palette.brown,
          color: colors.palette.white,
          boxShadow: `0 60px 0 ${colors.palette.brown} inset`,
        },
      },
    },

    // ── OUTLINED SECONDARY ─────────────────────────────────
    {
      props: { variant: "outlined", color: "secondary" },
      style: {
        backgroundColor: "transparent",
        border: `1px solid ${colors.palette.darkGrey}`,
        color: colors.palette.darkGrey,
        "&:hover": {
          borderColor: colors.palette.darkBrown,
          color: colors.palette.white,
          boxShadow: `0 60px 0 ${colors.palette.darkBrown} inset`,
        },
      },
    },

    // ── TEXT SECONDARY ─────────────────────────────────────
    {
      props: { variant: "text", color: "secondary" },
      style: {
        backgroundColor: "transparent",
        border: `1px solid transparent`,
        color: colors.palette.darkGrey,
        opacity: 0.75,
        padding: "0 16px",
        "&:hover": {
          backgroundColor: "rgba(66,66,66,0.08)",
          boxShadow: "none",
          opacity: 1,
        },
      },
    },

    // ── CONTAINED SUCCESS ──────────────────────────────────
    {
      props: { variant: "contained", color: "success" },
      style: {
        backgroundColor: colors.palette.success,
        border: `1px solid ${colors.palette.success}`,
        color: colors.palette.white,
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: colors.palette.successDark,
          color: colors.palette.white,
          boxShadow: `0 60px 0 ${colors.palette.successDark} inset`,
        },
      },
    },

    // ── OUTLINED SUCCESS ───────────────────────────────────
    {
      props: { variant: "outlined", color: "success" },
      style: {
        backgroundColor: "transparent",
        border: `1px solid ${colors.palette.success}`,
        color: colors.palette.success,
        "&:hover": {
          borderColor: colors.palette.successDark,
          color: colors.palette.white,
          boxShadow: `0 60px 0 ${colors.palette.successDark} inset`,
        },
      },
    },

    // ── TEXT SUCCESS ───────────────────────────────────────
    {
      props: { variant: "text", color: "success" },
      style: {
        backgroundColor: "transparent",
        border: `1px solid transparent`,
        color: colors.palette.success,
        padding: "0 16px",
        "&:hover": {
          backgroundColor: "rgba(46,125,50,0.08)",
          boxShadow: "none",
        },
      },
    },

    // ── CONTAINED ERROR ────────────────────────────────────
    {
      props: { variant: "contained", color: "error" },
      style: {
        backgroundColor: colors.palette.error,
        border: `1px solid ${colors.palette.error}`,
        color: colors.palette.white,
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: colors.palette.errorDark,
          color: colors.palette.white,
          boxShadow: `0 60px 0 ${colors.palette.errorDark} inset`,
        },
      },
    },

    // ── OUTLINED ERROR ─────────────────────────────────────
    {
      props: { variant: "outlined", color: "error" },
      style: {
        backgroundColor: "transparent",
        border: `1px solid ${colors.palette.error}`,
        color: colors.palette.error,
        "&:hover": {
          borderColor: colors.palette.errorDark,
          color: colors.palette.white,
          boxShadow: `0 60px 0 ${colors.palette.errorDark} inset`,
        },
      },
    },

    // ── TEXT ERROR ─────────────────────────────────────────
    {
      props: { variant: "text", color: "error" },
      style: {
        backgroundColor: "transparent",
        border: `1px solid transparent`,
        color: colors.palette.error,
        padding: "0 16px",
        "&:hover": {
          backgroundColor: "rgba(211,47,47,0.08)",
          boxShadow: "none",
        },
      },
    },

    // ── CONTAINED INFO ─────────────────────────────────────
    {
      props: { variant: "contained", color: "info" },
      style: {
        backgroundColor: colors.palette.info,
        border: `1px solid ${colors.palette.info}`,
        color: colors.palette.white,
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: "#01579b",
          color: colors.palette.white,
          boxShadow: `0 60px 0 #01579b inset`,
        },
      },
    },

    // ── OUTLINED INFO ──────────────────────────────────────
    {
      props: { variant: "outlined", color: "info" },
      style: {
        backgroundColor: "transparent",
        border: `1px solid ${colors.palette.info}`,
        color: colors.palette.info,
        "&:hover": {
          borderColor: "#01579b",
          color: colors.palette.white,
          boxShadow: `0 60px 0 #01579b inset`,
        },
      },
    },

    // ── CONTAINED WARNING ──────────────────────────────────
    {
      props: { variant: "contained", color: "warning" },
      style: {
        backgroundColor: colors.palette.warning,
        border: `1px solid ${colors.palette.warning}`,
        color: colors.palette.white,
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: "#bf360c",
          color: colors.palette.white,
          boxShadow: `0 60px 0 #bf360c inset`,
        },
      },
    },

    // ── OUTLINED WARNING ───────────────────────────────────
    {
      props: { variant: "outlined", color: "warning" },
      style: {
        backgroundColor: "transparent",
        border: `1px solid ${colors.palette.warning }`,
        color: colors.palette.warning,
        "&:hover": {
          borderColor: "#bf360c",
          color: colors.palette.white,
          boxShadow: `0 60px 0 #bf360c inset`,
        },
      },
    },
  ],
} satisfies NonNullable<ThemeOptions["components"]>["MuiButton"];

export default MuiButton;