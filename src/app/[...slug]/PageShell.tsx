"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

const PageShell = ({ children }: PageShellProps) => {
  return (
    <Main>
      <Inner>
        <BackLink href="/">← Pages</BackLink>
        <Stack>{children}</Stack>
      </Inner>
    </Main>
  );
};

export default PageShell;

const Main = styled.main`
  ${({ theme }) => `
    background: ${theme.colors.palette.cream};
    min-height: 100vh;
    padding: ${theme.spacing(4)} ${theme.spacing(2)};

    @media (min-width: ${theme.breakpoints.values.md}px) {
      padding: ${theme.spacing(6)} ${theme.spacing(4)};
    }
  `}
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
`;

const BackLink = styled(Link)`
  ${({ theme }) => `
    display: inline-flex;
    align-items: center;
    color: ${theme.colors.palette.darkGrey};
    font-size: 14px;
    text-decoration: none;
    margin-bottom: ${theme.spacing(3)};
    transition: color 0.15s ease;

    &:hover {
      color: ${theme.colors.palette.black};
    }
  `}
`;

const Stack = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(4)};
  `}
`;
