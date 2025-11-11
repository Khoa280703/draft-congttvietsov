import React from "react";

interface IsometricCubeBackgroundProps {
  className?: string;
}

const IsometricCubeBackground: React.FC<IsometricCubeBackgroundProps> = ({
  className = "",
}) => {
  // Vietsov green color variations
  const vietsovGreenDark = "rgba(16, 149, 79, 0.25)"; // Slightly darker for grid lines
  const vietsovGreenLight = "rgba(16, 149, 79, 0.05)"; // Very light for gradients

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Isometric grid pattern with metallic shine */}
      <div
        className="isometric-grid"
        style={{
          position: "absolute",
          margin: 0,
          overflow: "hidden",
          backgroundColor: "transparent",
          backgroundImage: `
            linear-gradient(${vietsovGreenDark} 1%, transparent 1%, transparent 99%, ${vietsovGreenDark} 99%),
            linear-gradient(90deg, ${vietsovGreenDark} 1%, transparent 1%, transparent 99%, ${vietsovGreenDark} 99%)
          `,
          backgroundSize: "100px 100px",
          left: "-100%",
          right: "-100%",
          top: "-150%",
          bottom: "-100%",
          transform: "rotateX(45deg) rotateZ(45deg) skewX(-5deg) skewY(-5deg)",
          transformStyle: "preserve-3d",
        }}
      />

      {/* Metallic shine overlay - Layer 1 */}
      <div
        className="absolute inset-0 metallic-shine-layer-1"
        style={{
          margin: 0,
          overflow: "hidden",
          background: `
            repeating-linear-gradient(
              135deg,
              transparent 0px,
              transparent 35px,
              rgba(255, 255, 255, 0.3) 40px,
              rgba(255, 255, 255, 0.8) 45px,
              rgba(255, 255, 255, 0.9) 50px,
              rgba(255, 255, 255, 0.8) 55px,
              rgba(255, 255, 255, 0.3) 60px,
              transparent 65px,
              transparent 100px
            )
          `,
          backgroundSize: "400% 400%",
          mixBlendMode: "screen",
          willChange: "background-position",
          transform: "rotateX(45deg) rotateZ(45deg) skewX(-5deg) skewY(-5deg)",
          transformStyle: "preserve-3d",
          left: "-100%",
          right: "-100%",
          top: "-150%",
          bottom: "-100%",
        }}
      />

      {/* Metallic shine overlay - Layer 2 (delayed) */}
      <div
        className="absolute inset-0 metallic-shine-layer-2"
        style={{
          margin: 0,
          overflow: "hidden",
          background: `
            repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 30px,
              rgba(255, 255, 255, 0.2) 35px,
              rgba(255, 255, 255, 0.7) 40px,
              rgba(255, 255, 255, 0.85) 45px,
              rgba(255, 255, 255, 0.7) 50px,
              rgba(255, 255, 255, 0.2) 55px,
              transparent 60px,
              transparent 100px
            )
          `,
          backgroundSize: "350% 350%",
          mixBlendMode: "screen",
          willChange: "background-position",
          transform: "rotateX(45deg) rotateZ(45deg) skewX(-5deg) skewY(-5deg)",
          transformStyle: "preserve-3d",
          left: "-100%",
          right: "-100%",
          top: "-150%",
          bottom: "-100%",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          margin: 0,
          overflow: "hidden",
          background: `
            radial-gradient(ellipse at bottom, ${vietsovGreenLight} 0%, rgba(255, 255, 255, 0.8) 95%),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 1%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0) 100%)
          `,
        }}
      />

      {/* CSS Animation */}
      <style>{`
        @keyframes metallicShine {
          from {
            background-position: -200% -200%;
          }
          to {
            background-position: 200% 200%;
          }
        }
        @keyframes metallicShineReverse {
          from {
            background-position: 200% 200%;
          }
          to {
            background-position: -200% -200%;
          }
        }
        .metallic-shine-layer-1 {
          animation: metallicShine 1600s linear infinite !important;
          animation-play-state: running !important;
        }
        .metallic-shine-layer-2 {
          animation: metallicShineReverse 2000s linear infinite !important;
          animation-play-state: running !important;
        }
      `}</style>
    </div>
  );
};

export default IsometricCubeBackground;
