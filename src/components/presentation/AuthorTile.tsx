"use client";

import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Asset } from "contentful";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import { parseContentfulContentImage } from "@/contentful/contentImage";
import Image from "@/components/common/Image";

type AuthorProps = {
  entryId?: string;
  content?: {
    name?: string;
    image?: Asset;
  };
};

const AuthorTile = ({ content, entryId }: AuthorProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId });
  const image = content?.image
    ? parseContentfulContentImage(content?.image)
    : null;

  if (!content?.name) return null;

  return (
    <AuthorRow>
      {content.image && image && (
        <Avatar {...inspectorProps({ fieldId: "image" })}>
          <Image
            src={image.src}
            width={64}
            height={64}
            alt={image.alt || content.name}
            sizes="64px"
          />
        </Avatar>
      )}
      <AuthorMeta>
        <Typography variant="body3" component="span">
          Author
        </Typography>
        <Typography
          variant="h5"
          component="span"
          {...inspectorProps({ fieldId: "name" })}
        >
          {content.name}
        </Typography>
      </AuthorMeta>
    </AuthorRow>
  );
};

export default AuthorTile;

const AuthorRow = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2)};
  `}
`;

const Avatar = styled.div`
  ${({ theme }) => `
    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
    flex: 0 0 56px;
    background: ${theme.colors.palette.darkCream};

    img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
      display: block;
    }
  `}
`;

const AuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;

  .MuiTypography-body3 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 11px;
  }
`;
