import React from 'react';

interface PageSubtitleBannerProps {
  className?: string;
  width?: string;
}

/**
 * Rectangular dark blue banner placed under page subtitles that gradually fades towards the right
 */
export const PageSubtitleBanner: React.FC<PageSubtitleBannerProps> = ({
  className = '',
  width = 'w-full max-w-md sm:max-w-lg',
}) => {
  return (
    <div
      className={`h-2.5 sm:h-3 ${width} bg-gradient-to-r from-[#0F294A] via-[#1E3A8A]/75 to-transparent rounded-none mt-3.5 sm:mt-4 mb-5 sm:mb-6 select-none pointer-events-none ${className}`}
      role="presentation"
      aria-hidden="true"
    />
  );
};
