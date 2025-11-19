import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { type LeadershipModalProps, defaultLeader } from "./data";

const LeadershipModal: React.FC<LeadershipModalProps> = ({
  isOpen,
  onClose,
  leader = defaultLeader,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 overflow-hidden"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onWheel={(e) => {
            // Prevent scroll on backdrop
            e.stopPropagation();
          }}
        >
          {/* Close Button - Outside the card */}

          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[60vh] overflow-visible flex flex-col"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => {
              // Allow scroll inside modal
              e.stopPropagation();
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-[65vh] lg:h-[75vh] relative overflow-visible flex-1 min-h-0">
              {/* Left Panel - Text Information */}
              <div
                className="p-8 lg:p-12 flex flex-col overflow-y-auto custom-scrollbar min-h-0"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#9CA3AFrgb(16, 248, 117)",
                }}
                onWheel={(e) => {
                  // Ensure scroll works inside this div
                  e.stopPropagation();
                }}
              >
                {/* Title Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                    {leader.title}
                  </span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {leader.name}
                </h2>

                {/* Email */}
                <p className="text-gray-600 mb-8">
                  Email: <span className="font-medium">{leader.email}</span>
                </p>

                {/* Information Sections */}
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 leading-snug">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mr-2 whitespace-nowrap">
                        Chức vụ:
                      </span>
                      {leader.position}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-snug">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mr-2 whitespace-nowrap">
                        NHIỆM VỤ:
                      </span>
                      {leader.duties}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-snug">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mr-2 whitespace-nowrap">
                        Trình độ chuyên môn:
                      </span>
                      {leader.qualifications}
                    </p>
                  </div>

                  {/* Past Positions */}
                  <div>
                    <p className="text-gray-700 leading-snug">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mr-2 whitespace-nowrap">
                        Các chức vụ đã đảm nhiệm:
                      </span>
                    </p>
                    <ul className="space-y-1">
                      {leader.pastPositions.map((position, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 leading-snug">
                            {position}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative bg-gray-50 flex items-center justify-center p-8 overflow-visible">
                <div className="absolute -top-12 -bottom-12 w-128 h-[calc(100%+6rem)] lg:h-[calc(100%+8rem)] z-10">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover shadow-2xl"
                    style={{
                      transform: "scaleX(1)",
                      borderRadius: "64px 16px 64px 16px",
                    }}
                  />
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 rounded-xl"></div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="absolute -top-14 z-30 w-10 h-10 flex items-center justify-center text-white hover:text-gray-200 transition-colors bg-black/50 hover:bg-black/70 rounded-full"
                aria-label="Đóng"
              >
                <FiX size={24} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default LeadershipModal;
