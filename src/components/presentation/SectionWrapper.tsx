"use client";

import { Box, Container } from "@mui/material";
import { ContainerProps } from "@mui/material/Container";
import { BoxProps } from "@mui/material/Box";
import { styled, Theme } from "@mui/material/styles";
import colors from "@/theme/colors";

type SectionMaxWidth = ContainerProps["maxWidth"];

interface SectionWrapperProps {
  children: React.ReactNode;
  spacing?: number;
  spacingTop?: number;
  spacingBottom?: number;
  maxWidth?: SectionMaxWidth;
  background?: keyof typeof colors.palette;
  disableGutters?: boolean;
  fullWidth?: boolean;
  sx?: BoxProps["sx"];
  containerSx?: BoxProps["sx"];
  component?: React.ElementType;
}

interface WrapperProps {
  $bg: string;
  $spacingTop: number;
  $spacingBottom: number;
  theme?: Theme;
  component?: React.ElementType;
}

const SectionWrapper = ({
  children,
  spacing = 8,
  spacingTop,
  spacingBottom,
  maxWidth = "lg",
  background,
  disableGutters = false,
  fullWidth = false,
  sx,
  containerSx,
  component = "section",
}: SectionWrapperProps) => {
  const resolvedBg = background ? colors.palette[background] : "transparent";

  return (
    <Wrapper
      $bg={resolvedBg}
      $spacingTop={spacingTop ?? spacing}
      $spacingBottom={spacingBottom ?? spacing}
      component={component}
      sx={sx}
    >
      {fullWidth ? (
        <Box
          sx={{
            px: disableGutters ? 0 : { xs: 2, sm: 4, md: 6 },
            ...containerSx,
          }}
        >
          {children}
        </Box>
      ) : (
        <Container
          maxWidth={maxWidth}
          disableGutters={disableGutters}
          sx={containerSx}
        >
          {children}
        </Container>
      )}
    </Wrapper>
  );
};

export default SectionWrapper;

const Wrapper = styled(Box, {
  shouldForwardProp: (prop) => !String(prop).startsWith("$"),
})<WrapperProps>`
  ${({ theme, $bg, $spacingTop, $spacingBottom }) => `
    width: 100%;
    background-color: ${$bg};
    padding-top: ${theme.spacing($spacingTop)};
    padding-bottom: ${theme.spacing($spacingBottom)};
  `}
`;
