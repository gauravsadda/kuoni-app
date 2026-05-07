import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import type { Asset } from "contentful";
import Image from "@/components/common/Image";
import { parseContentfulContentImage } from "@/contentful/contentImage";

type BannerProps = {
  content?: {
    banner?: string;
    image?: Asset;
  };
};

const Banner = ({ content }: BannerProps) => {
  const image = content?.image
    ? parseContentfulContentImage(content.image)
    : null;

  return (
    <HeroBannerContainer>
      {image && (
        <BannerImage
          src={image.src}
          alt={image.alt || ""}
          width={image.width || 1600}
          height={image.height || 600}
          loading="eager"
          fetchPriority="high"
        />
      )}
      <Overlay />
      <Content>
        <Typography variant="h1" component="h1">
          {content?.banner || "Hero Banner"}
        </Typography>
      </Content>
    </HeroBannerContainer>
  );
};

export default Banner;

const HeroBannerContainer = styled.section`
  ${({ theme }) => `
    position: relative;
    width: 100%;
    min-height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(5)} ${theme.spacing(3)};
    border-radius: 16px;
    overflow: hidden;
    background: linear-gradient(135deg, ${theme.colors.palette.oliveGreen} 0%, ${theme.colors.palette.darkGrey} 100%);
    color: ${theme.colors.palette.white};
    margin-bottom: ${theme.spacing(6)};

    @media (min-width: ${theme.breakpoints.values.md}px) {
      min-height: 420px;
      padding: ${theme.spacing(7)} ${theme.spacing(5)};
    }
  `}
`;

const BannerImage = styled(Image)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
  z-index: 1;
`;

const Content = styled.div`
  ${({ theme }) => `
    position: relative;
    z-index: 2;
    max-width: 900px;
    text-align: center;

    .MuiTypography-h1 {
      color: ${theme.colors.palette.white};
      font-size: 36px;
      letter-spacing: 2px;
      margin: 0;

      @media (min-width: ${theme.breakpoints.values.md}px) {
        font-size: 56px;
      }
    }
  `}
`;
