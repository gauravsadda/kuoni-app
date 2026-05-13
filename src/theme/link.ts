import colors from "./colors";
import type { ThemeOptions } from "@mui/material/styles";

const MuiLink = {
  styleOverrides: {
    root: {
      color: colors.palette.darkGrey,
      textDecoration: "none",
      cursor: "pointer",
      transition: "color 0.25s ease",

      "&:hover": {
        color: colors.palette.brown,
        textDecoration: "none",
      },

      "&:focus-visible": {
        outline: `2px solid ${colors.palette.brown}`,
        outlineOffset: "2px",
        borderRadius: "2px",
      },

      "&.Mui-disabled": {
        color: colors.palette.lightGrey,
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },
  },

  variants: [
    // ── PRIMARY ───────────────────────────────────────────
    {
      props: { color: "primary" },
      style: {
        color: colors.palette.brown,
        "&:hover": {
          color: colors.palette.darkBrown,
        },
      },
    },

    // ── SECONDARY ─────────────────────────────────────────
    {
      props: { color: "secondary" },
      style: {
        color: colors.palette.darkGrey,
        "&:hover": {
          color: colors.palette.black,
        },
      },
    },

    // ── UNDERLINE ALWAYS ──────────────────────────────────
    {
      props: { underline: "always" },
      style: {
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },

    // ── UNDERLINE HOVER ───────────────────────────────────
    {
      props: { underline: "hover" },
      style: {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        },
      },
    },

    // ── UNDERLINE NONE ────────────────────────────────────
    {
      props: { underline: "none" },
      style: {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      },
    },
  ],
} satisfies NonNullable<ThemeOptions["components"]>["MuiLink"];

export default MuiLink;