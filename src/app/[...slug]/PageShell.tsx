"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import type { Entry } from "contentful";
import Component from "@/lib/Components";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { TypePageEntrySkeleton } from "@/contentful/types/TypePageEntry";
import { Stack } from "@mui/material";

type PageShellProps = {
  story: Entry<TypePageEntrySkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
};

const PageShell = ({ story }: PageShellProps) => {
  const updatedEntry = useContentfulLiveUpdates(story);
  const entryId = updatedEntry?.sys?.id;
  const inspectorProps = useContentfulInspectorMode({ entryId });
  const title = updatedEntry?.fields?.title || "Page title";
  const body = updatedEntry?.fields?.body || [];
  const heroBanner = updatedEntry?.fields.heroBanner;
  const description = updatedEntry?.fields.description;
  return (
    <Main>
      <Inner>
        <BackLink href="/">← Pages</BackLink>
        <Stack spacing={4}>
          {title && (
            <h1
              className="text-4xl font-bold mb-6"
              {...inspectorProps({ fieldId: "title" })}
            >
              {title}
            </h1>
          )}
          {heroBanner && (
            <div {...inspectorProps({ fieldId: "heroBanner" })}>
              <Component entry={heroBanner} />
            </div>
          )}
          {description && (
            <div {...inspectorProps({ fieldId: "description" })}>
              <Component entry={description} />
            </div>
          )}
          <div {...inspectorProps({ fieldId: "body" })}>
            {body?.map((content, index) =>
              content ? <Component key={index} entry={content} /> : null,
            )}
          </div>
        </Stack>
      </Inner>
    </Main>
  );
};

export default PageShell;

const Main = styled.main`
  ${({ theme }) => `
    background: ${theme.colors.palette.cream};
    min-height: 100vh;
    padding: ${theme.spacing(1.6)} ${theme.spacing(2)};

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
