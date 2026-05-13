import colors from "./colors";
import type { ThemeOptions } from "@mui/material/styles";

const fontFamilyAthelas = "'Athelas', 'sans-serif'";
const fontFamilyAthelasBold = "'athelasbold', 'sans-serif'";
const fontFamilyGotham = "'gothambook', 'sans-serif'";

const MuiTypography = {
  styleOverrides: {
    root: {
      color: colors.palette.black,
      fontFamily: fontFamilyGotham,
    },
  },
  variants: [
    // ── DISPLAY h1–h4 → Athelas Bold (serif, impactful) ───
    {
      props: { variant: "h1" },
      style: {
        fontFamily: fontFamilyAthelasBold,
        fontSize: "clamp(40px, 5vw, 72px)",
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        color: colors.palette.black,
      },
    },
    {
      props: { variant: "h2" },
      style: {
        fontFamily: fontFamilyAthelasBold,
        fontSize: "clamp(32px, 4vw, 56px)",
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: "-0.015em",
        color: colors.palette.black,
      },
    },
    {
      props: { variant: "h3" },
      style: {
        fontFamily: fontFamilyAthelasBold,
        fontSize: "clamp(26px, 3vw, 40px)",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
        color: colors.palette.black,
      },
    },
    {
      props: { variant: "h4" },
      style: {
        fontFamily: fontFamilyAthelasBold,
        fontSize: "clamp(22px, 2.5vw, 32px)",
        fontWeight: 700,
        lineHeight: 1.25,
        letterSpacing: "-0.005em",
        color: colors.palette.black,
      },
    },

    // ── SUB-DISPLAY h5–h6 → Athelas Regular (lighter serif) ──
    {
      props: { variant: "h5" },
      style: {
        fontFamily: fontFamilyAthelas,
        fontSize: "clamp(18px, 2vw, 24px)",
        fontWeight: 400,
        lineHeight: 1.3,
        letterSpacing: "0",
        color: colors.palette.black,
      },
    },
    {
      props: { variant: "h6" },
      style: {
        fontFamily: fontFamilyAthelas,
        fontSize: "clamp(16px, 1.5vw, 20px)",
        fontWeight: 400,
        lineHeight: 1.35,
        letterSpacing: "0.01em",
        color: colors.palette.black,
      },
    },

    // ── SUBTITLE → Gotham (UI sans) ───────────────────────
    {
      props: { variant: "subtitle1" },
      style: {
        fontFamily: fontFamilyGotham,
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: "0.01em",
        color: colors.palette.darkGrey,
      },
    },
    {
      props: { variant: "subtitle2" },
      style: {
        fontFamily: fontFamilyGotham,
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        color: colors.palette.lightGrey,
      },
    },

    // ── BODY → Gotham ─────────────────────────────────────
    {
      props: { variant: "body1" },
      style: {
        fontFamily: fontFamilyGotham,
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.75,
        letterSpacing: "0.01em",
        color: colors.palette.darkGrey,
      },
    },
    {
      props: { variant: "body2" },
      style: {
        fontFamily: fontFamilyGotham,
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.65,
        letterSpacing: "0.01em",
        color: colors.palette.darkGrey,
      },
    },

    // ── UTILITY → Gotham ──────────────────────────────────
    {
      props: { variant: "caption" },
      style: {
        fontFamily: fontFamilyGotham,
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: "0.04em",
        color: colors.palette.lightGrey,
      },
    },
    {
      props: { variant: "overline" },
      style: {
        fontFamily: fontFamilyGotham,
        fontSize: "11px",
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: "0.15em",
        textTransform: "uppercase" as const,
        color: colors.palette.lightGrey,
      },
    },
    {
      props: { variant: "button" },
      style: {
        fontFamily: fontFamilyGotham,
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        color: colors.palette.darkGrey,
      },
    },
  ],
} satisfies NonNullable<ThemeOptions["components"]>["MuiTypography"];

export default MuiTypography;