"use client";

import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Header = ({ content }: { content: string }) => {
  return (
    <HeaderWrapper>
      <Typography variant="h4" component="span">
        {content}
      </Typography>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  ${({ theme }) => `
    width: 100%;
    min-height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(3)} ${theme.spacing(4)};
    background: ${theme.colors.palette.oliveGreen};
    color: ${theme.colors.palette.white};
    border-bottom: 1px solid ${theme.colors.palette.oliveGreenLight};

    .MuiTypography-root {
      color: ${theme.colors.palette.white};
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  `}
`;
