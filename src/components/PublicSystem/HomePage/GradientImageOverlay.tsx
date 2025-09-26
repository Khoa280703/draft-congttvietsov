import React from "react";

interface GradientImageOverlayProps {
  imageUrl: string;
  children?: React.ReactNode;
}

const GradientImageOverlay: React.FC<GradientImageOverlayProps> = ({
  imageUrl,
  children,
}) => {
  return (
    <div className="relative w-full h-96 bg-gray-900">
      <img
        src={imageUrl}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-600/70 z-10"></div>

      {children && (
        <div className="relative z-20 w-full h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default GradientImageOverlay;
