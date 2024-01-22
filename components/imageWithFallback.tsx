"use client"

import Image, { ImageProps } from "next/image";
import React, { useEffect, useState } from "react";

import fallbackImage from "@/public/images/fallback.jpg";

interface ImageWithFallbackProps extends ImageProps {
  fallback?: ImageProps["src"];
}

const ImageWithFallback = ({
  fallback = fallbackImage,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState<React.SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error || src==null ? fallbackImage : src}
      {...props}
    />
  );
};

export default ImageWithFallback;

