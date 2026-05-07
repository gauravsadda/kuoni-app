"use client";

import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Footer = ({ content }: { content: string }) => {
  return (
    <FooterWrapper>
      <Typography variant="body2" component="span">
        {content}
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  ${({ theme }) => `
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(4)};
    background: ${theme.colors.palette.eerieBlack};
    color: ${theme.colors.palette.lightGrey};
    border-top: 1px solid ${theme.colors.palette.darkGrey};
    text-align: center;

    .MuiTypography-root {
      color: ${theme.colors.palette.lightGrey};
      letter-spacing: 0.5px;
    }
  `}
`;
