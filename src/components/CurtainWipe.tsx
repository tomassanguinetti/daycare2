import React from 'react';

export type CurtainPhase = 'idle' | 'entering' | 'covered' | 'exiting';

interface CurtainWipeProps {
  phase: CurtainPhase;
  targetPageLabel?: string;
}

export const CurtainWipe: React.FC<CurtainWipeProps> = ({ phase }) => {
  if (phase === 'idle') {
    return null;
  }

  // Coordinated panel animations using CSS keyframes and cubic-bezier easing.
  // Panel 1 (Warm Terracotta accent): leads the cover sweep, leads the reveal sweep
  // Panel 2 (Mid-Pine Forest): staggered follower providing rich visual depth and layered shadow
  // Panel 3 (Deep Heritage Forest Canvas): final 100% opaque cover
  const getPanelStyle = (panelIndex: 1 | 2 | 3) => {
    const delay = (panelIndex - 1) * 50; // 0ms, 50ms, 100ms stagger

    if (phase === 'entering') {
      return {
        animation: `curtainSweepIn 360ms cubic-bezier(0.7, 0, 0.25, 1) ${delay}ms both`,
        willChange: 'transform',
      };
    }

    if (phase === 'covered') {
      return {
        transform: 'translate3d(0%, 0, 0)',
      };
    }

    if (phase === 'exiting') {
      return {
        animation: `curtainSweepOut 360ms cubic-bezier(0.7, 0, 0.25, 1) ${delay}ms both`,
        willChange: 'transform',
      };
    }

    return {};
  };

  return (
    <div
      className="fixed top-[57px] lg:top-0 bottom-0 right-0 left-0 lg:left-20 z-35 overflow-hidden pointer-events-auto select-none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes curtainSweepIn {
          0% {
            transform: translate3d(-102%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
        @keyframes curtainSweepOut {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(102%, 0, 0);
          }
        }
      `}</style>

      {/* ======================================================== */}
      {/* LAYER 1: Leading Vanguard Panel (Warm Terracotta Accent)  */}
      {/* ======================================================== */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-[#D97438] via-[#E28448] to-[#EA945E] shadow-[18px_0_40px_rgba(0,0,0,0.38)] border-r border-[#FED7AA]/50"
        style={getPanelStyle(1)}
      />

      {/* ======================================================== */}
      {/* LAYER 2: Staggered Middle Harmonizer (Rich Pine Green)     */}
      {/* ======================================================== */}
      <div
        className="absolute inset-0 z-20 bg-gradient-to-r from-[#204431] via-[#2B5740] to-[#366B50] shadow-[22px_0_45px_rgba(0,0,0,0.42)] border-r border-[#8AC299]/40"
        style={getPanelStyle(2)}
      />

      {/* ======================================================== */}
      {/* LAYER 3: Core Brand Canvas (Deep Heritage Forest Green)   */}
      {/* 100% Opaque coverage, pure geometric curtain panels      */}
      {/* ======================================================== */}
      <div
        className="absolute inset-0 z-30 bg-gradient-to-br from-[#163323] via-[#1A3828] to-[#122419] shadow-[28px_0_60px_rgba(0,0,0,0.48)] border-r border-[#E28448]/60"
        style={getPanelStyle(3)}
      >
        {/* Subtle geometric edge highlights */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E28448]/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#8AC299]/30 to-transparent" />
      </div>
    </div>
  );
};
