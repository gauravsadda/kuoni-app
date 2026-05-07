import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Asset, Entry, EntrySkeletonType } from "contentful";
import RichText from "@/components/common/RichText";
import type { Document as RichTextDocument } from "@contentful/rich-text-types";
import { parseContentfulContentImage } from "@/contentful/contentImage";
import Image from "@/components/common/Image";
import Components from "@/lib/Components";

type BlogProps = {
  content?: {
    title?: string;
    slug: string;
    body?: RichTextDocument | null;
    image?: Asset;
    author?: Entry<EntrySkeletonType, undefined, string> | null;
  };
};

const Blog = ({ content }: BlogProps) => {
  const image = content?.image
    ? parseContentfulContentImage(content.image)
    : null;

  return (
    <BlogSection>
      <SectionLabel>
        <Typography variant="h3" component="h2">
          Blogs
        </Typography>
      </SectionLabel>

      <BlogCard>
        {image && (
          <CoverImageWrapper>
            <Image
              src={image.src}
              width={image.width || 1200}
              height={image.height || 600}
              alt={image.alt || ""}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </CoverImageWrapper>
        )}

        <CardBody>
          {content?.author && <Components entry={content.author} />}

          {content?.title && (
            <Typography variant="h2" component="h3">
              {content.title}
            </Typography>
          )}

          <BodyText>
            <RichText document={content?.body} />
          </BodyText>
        </CardBody>
      </BlogCard>
    </BlogSection>
  );
};

export default Blog;

const BlogSection = styled.section`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing(6)};
  `}
`;

const SectionLabel = styled.div`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing(3)};
  `}
`;

const BlogCard = styled.article`
  ${({ theme }) => `
    background: ${theme.colors.palette.white};
    border: 1px solid ${theme.colors.palette.darkCream};
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.04);
  `}
`;

const CoverImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #f3f1ec;

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    display: block;
  }
`;

const CardBody = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing(4)};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};

    @media (min-width: ${theme.breakpoints.values.md}px) {
      padding: ${theme.spacing(5)} ${theme.spacing(6)};
    }
  `}
`;

const BodyText = styled.div`
  ${({ theme }) => `
    color: ${theme.colors.palette.darkGrey};
    font-size: 16px;
    line-height: 1.7;

    p {
      margin: 0 0 ${theme.spacing(2)} 0;
      &:last-child { margin-bottom: 0; }
    }
  `}
`;
