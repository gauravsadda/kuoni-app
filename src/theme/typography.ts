import colors from "./colors";
import breakpoints from "./breakpoints";

const fontFamilyAthelas = "'Athelas', 'sans-serif'";
const fontFamilyAthelasBold = "'athelasbold', 'sans-serif'";
const fontFamilyGotham = "'gothambook', 'sans-serif'";

const typography = {
  htmlFontSize: 16,
  fontFamily: fontFamilyGotham,
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: fontFamilyAthelasBold,
    fontSize: "28px",
    lineHeight: "normal",
    color: colors.palette.darkGrey,
    textTransform: "uppercase",
  },
  h2: {
    fontFamily: fontFamilyAthelas,
    fontSize: "22px",
    lineHeight: "33px",
    color: colors.palette.darkGrey,
    textTransform: "uppercase",
    letterSpacing: "2px",

    [`@media (max-width:${breakpoints?.values?.md}px)`]: {
      fontSize: "20px",
      lineHeight: "30px",
      letterSpacing: "1px",
    },

    [`@media (max-width:${breakpoints?.values?.lg}px)`]: {
      fontSize: "18px",
      lineHeight: "26px",
    },
  },
  h3: {
    fontFamily: fontFamilyAthelas,
    fontSize: "22px",
    lineHeight: "normal",
    color: colors.palette.darkGrey,
    textTransform: "uppercase",
    letterSpacing: "8px",

    [`@media (max-width:${breakpoints?.values?.xxl}px)`]: {
      fontSize: "20px",
      lineHeight: "28px",
    },

    [`@media (max-width:${breakpoints?.values?.lg}px)`]: {
      fontSize: "18px",
      lineHeight: "26px",
    },

    [`@media (max-width:${breakpoints?.values?.sm}px)`]: {
      fontSize: "15px",
      lineHeight: "20px",
      letterSpacing: "3px",
    },
  },
  h4: {
    fontFamily: fontFamilyAthelas,
    fontSize: "22px",
    lineHeight: "24px",
    color: colors.palette.darkGrey,
    textTransform: "uppercase",
    letterSpacing: "2px",
    [`@media (max-width:${breakpoints?.values?.sm}px)`]: {
      fontSize: "18px",
      lineHeight: "normal",
    },
  },
  h5: {
    fontFamily: fontFamilyAthelas,
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: 1.334,
    color: colors.palette.darkGrey,
    textTransform: "uppercase",
    letterSpacing: "2px",
    [`@media (max-width:${breakpoints?.values?.sm}px)`]: {
      fontSize: "16px",
      lineHeight: "normal",
    },
  },
  h6: {
    fontFamily: fontFamilyAthelas,
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: 1.6,
    color: colors.palette.darkGrey,
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  body1: {
    fontFamily: fontFamilyGotham,
    fontWeight: 400,
    fontSize: ".9375rem",
    lineHeight: "25px",
    color: colors.palette.darkGrey,
    [`@media (max-width:${breakpoints?.values?.sm}px)`]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  body2: {
    fontFamily: fontFamilyGotham,
    fontWeight: 400,
    fontSize: ".9375rem",
    lineHeight: "25px",
    color: colors.palette.darkGrey,
    [`@media (max-width:${breakpoints?.values?.sm}px)`]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  body3: {
    fontFamily: fontFamilyGotham,
    fontWeight: 400,
    fontSize: ".9375rem",
    lineHeight: "25px",
    color: colors.palette.lightGrey,
    [`@media (max-width:${breakpoints?.values?.sm}px)`]: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  button: {
    fontFamily: fontFamilyGotham,
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.75,
  },
};

export default typography;
