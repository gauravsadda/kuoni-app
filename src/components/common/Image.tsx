import { memo } from "react";
import type { SyntheticEvent } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dz3slxyis/image/upload/v1756449647/a.storyblok_fzbvji.webp";

type ImageProps = NextImageProps & {
  fallbackSrc?: string;
};

const Image = ({
  src,
  alt,
  width = 750,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, (max-width: 3600px) 100vw, 1200px",
  fallbackSrc = DEFAULT_IMAGE,
  style,
  onError,
  ...rest
}: ImageProps) => {
  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = fallbackSrc;
    onError?.(event);
  };
  const cleanedUrl =
    typeof src === "string" && src.startsWith("//") ? `https:${src}` : src;
  return (
    <NextImage
      src={cleanedUrl}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      onError={handleError}
      style={{
        objectFit: "cover",
        ...style,
      }}
      {...rest}
    />
  );
};

export default memo(Image);
