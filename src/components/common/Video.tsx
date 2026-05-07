"use client";

import { useState, type VideoHTMLAttributes } from "react";

const DEFAULT_URL =
  "https://res.cloudinary.com/dz3slxyis/image/upload/v1763013759/no_image_qzj5v7.jpg";

const isValidStringSrc = (src: unknown): src is string => {
  if (typeof src !== "string" || src.length === 0) return false;
  const head = src.split("/")[0];
  return head !== "null";
};

type VideoProps = VideoHTMLAttributes<HTMLVideoElement>;

const Video = ({ src, style, onError, ...rest }: VideoProps) => {
  const [prevSrc, setPrevSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  if (prevSrc !== src) {
    setPrevSrc(src);
    setHasError(false);
  }

  const videoSrc = !hasError && isValidStringSrc(src) ? src : DEFAULT_URL;

  return (
    <video
      muted
      playsInline
      preload="auto"
      {...rest}
      src={videoSrc}
      onError={(event) => {
        setHasError(true);
        onError?.(event);
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...style,
      }}
    />
  );
};

export default Video;
