import React from "react";

interface InternalInterfaceProps {
  onInternalToggle: () => void;
}

const InternalInterface: React.FC<InternalInterfaceProps> = ({
  onInternalToggle,
}) => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Internal button in upper right corner */}
      <button
        onClick={onInternalToggle}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-800 text-white rounded-md shadow-lg hover:bg-gray-700 transition-colors"
      >
        Nội bộ
      </button>

      {/* Completely blank white page */}
      <div className="min-h-screen bg-white">
        {/* Empty white page - you can add your content here later */}
      </div>
    </div>
  );
};

export default InternalInterface;
