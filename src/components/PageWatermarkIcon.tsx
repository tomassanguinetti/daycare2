import React from 'react';

interface PageWatermarkIconProps {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  className?: string;
  opacity?: string;
}

/**
 * Large transparent icon on the right of page titles starting at the top-right corner,
 * sized to occupy roughly the top-right third of the screen without interfering with content.
 */
export const PageWatermarkIcon: React.FC<PageWatermarkIconProps> = ({
  icon: Icon,
  className = '',
  opacity = 'opacity-10 sm:opacity-12',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute top-0 right-0 w-[36vw] h-[36vw] min-w-[260px] min-h-[260px] max-w-[500px] max-h-[500px] pointer-events-none select-none z-0 flex items-start justify-end overflow-hidden p-2 sm:p-4 lg:p-6 translate-x-4 -translate-y-4 sm:translate-x-2 sm:translate-y-0 ${className}`}
    >
      <Icon
        className={`w-full h-full text-[#1E385C] ${opacity} stroke-[1.1] transition-transform duration-700`}
        strokeWidth={1.1}
      />
    </div>
  );
};
