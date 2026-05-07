"use client";

import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import RichText from "@/components/common/RichText";
import type { Document as RichTextDocument } from "@contentful/rich-text-types";

type DescriptionTileProps = {
  entryId?: string;
  content?: {
    description?: RichTextDocument | null;
  };
};

const DescriptionTile = ({ content, entryId }: DescriptionTileProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId });

  return (
    <DescriptionContainer>
      <Typography variant="h2" component="h2">
        Description Tile
      </Typography>
      <Body {...inspectorProps({ fieldId: "description" })}>
        {content?.description && <RichText document={content.description} />}
      </Body>
    </DescriptionContainer>
  );
};

export default DescriptionTile;

const DescriptionContainer = styled.section`
  ${({ theme }) => `
    background: ${theme.colors.palette.cream};
    border: 1px solid ${theme.colors.palette.darkCream};
    border-radius: 12px;
    padding: ${theme.spacing(4)} ${theme.spacing(4)};
    margin-bottom: ${theme.spacing(6)};

    @media (min-width: ${theme.breakpoints.values.md}px) {
      padding: ${theme.spacing(5)} ${theme.spacing(6)};
    }

    .MuiTypography-h2 {
      margin-bottom: ${theme.spacing(2)};
    }
  `}
`;

const Body = styled.div`
  ${({ theme }) => `
    color: ${theme.colors.palette.darkGrey};
    font-size: 16px;
    line-height: 1.6;

    p {
      margin: 0 0 ${theme.spacing(2)} 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  `}
`;
