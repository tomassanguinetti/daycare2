import React from 'react';

interface TurtleMascotProps {
  className?: string;
  size?: number;
  variant?: 'head-turn' | 'waving' | 'happy' | 'badge';
}

export const TurtleMascot: React.FC<TurtleMascotProps> = ({
  className = '',
  size = 48,
  variant = 'happy',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
      aria-label="Tiny Turtles Mascot"
    >
      {/* Soft shadow */}
      <ellipse cx="60" cy="108" rx="42" ry="7" fill="#2E5A44" fillOpacity="0.12" />

      {/* Back feet */}
      <ellipse cx="28" cy="88" rx="11" ry="8" fill="#78B388" stroke="#2D5A40" strokeWidth="3" />
      <ellipse cx="92" cy="88" rx="11" ry="8" fill="#78B388" stroke="#2D5A40" strokeWidth="3" />

      {/* Front feet */}
      <ellipse cx="38" cy="94" rx="12" ry="9" fill="#8AC299" stroke="#2D5A40" strokeWidth="3" />
      <ellipse cx="82" cy="94" rx="12" ry="9" fill="#8AC299" stroke="#2D5A40" strokeWidth="3" />
      
      {/* Little tail */}
      <path
        d="M20 78 C14 80 12 84 18 86 C22 87 25 82 25 80 Z"
        fill="#8AC299"
        stroke="#2D5A40"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Shell Base Dome */}
      <path
        d="M24 78 C24 45 42 32 60 32 C78 32 96 45 96 78 C96 82 92 86 86 86 C74 86 46 86 34 86 C28 86 24 82 24 78 Z"
        fill="#558C67"
        stroke="#2D5A40"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Shell Hexagon Pattern Tiles */}
      {/* Center top tile */}
      <polygon
        points="60,42 72,48 72,60 60,66 48,60 48,48"
        fill="#66A378"
        stroke="#2D5A40"
        strokeWidth="2.5"
      />
      {/* Left tile */}
      <polygon
        points="48,48 48,60 38,64 32,54 40,44"
        fill="#5F9D73"
        stroke="#2D5A40"
        strokeWidth="2.5"
      />
      {/* Right tile */}
      <polygon
        points="72,48 80,44 88,54 82,64 72,60"
        fill="#5F9D73"
        stroke="#2D5A40"
        strokeWidth="2.5"
      />
      {/* Center bottom tile */}
      <polygon
        points="60,66 72,60 78,70 60,78 42,70 48,60"
        fill="#6EAA81"
        stroke="#2D5A40"
        strokeWidth="2.5"
      />

      {/* Shell Rim */}
      <path
        d="M24 80 C28 78 40 76 60 76 C80 76 92 78 96 80 C98 83 95 86 90 86 C78 86 42 86 30 86 C25 86 22 83 24 80 Z"
        fill="#8AC299"
        stroke="#2D5A40"
        strokeWidth="3"
      />

      {/* Friendly Head */}
      <g>
        {/* Head shape */}
        <circle
          cx="90"
          cy="42"
          r="20"
          fill="#9ED5AD"
          stroke="#2D5A40"
          strokeWidth="3.5"
        />

        {/* Rosy Cheek */}
        <ellipse cx="88" cy="48" rx="5" ry="3.5" fill="#F4A582" fillOpacity="0.6" />

        {/* Big sparkling smiling eye */}
        <ellipse cx="94" cy="38" rx="4.5" ry="6" fill="#1F3A2C" />
        <circle cx="95.5" cy="36" r="2" fill="#FFFFFF" />
        <circle cx="93" cy="40.5" r="0.9" fill="#FFFFFF" />

        {/* Happy Smile */}
        <path
          d="M94 46 C97 49 102 47 103 44"
          fill="none"
          stroke="#2D5A40"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Sweet tiny leaf / sprout or friendly cute forehead mark */}
        {variant === 'waving' && (
          <path
            d="M86 22 C84 15 90 14 92 20 C94 15 100 16 98 22"
            fill="#4E8C5E"
            stroke="#2D5A40"
            strokeWidth="2"
          />
        )}
      </g>
    </svg>
  );
};
