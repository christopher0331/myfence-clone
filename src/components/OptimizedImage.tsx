import React, { memo } from 'react';
import type { StaticImageData } from 'next/image';

interface OptimizedImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  width,
  height,
  onLoad,
  onError 
}: OptimizedImageProps) => {
  const resolvedSrc = typeof src === 'string' ? src : src.src;

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      onLoad={onLoad}
      onError={onError}
      decoding="async"
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;