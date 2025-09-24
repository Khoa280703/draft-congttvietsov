import React from "react";

interface BlankPageProps {
  title: string;
}

const BlankPage: React.FC<BlankPageProps> = ({ title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-600 mb-2">{title}</h1>
          <p className="text-gray-500 text-lg">
            Trang này đang được phát triển
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-md mx-auto">
          <p className="text-gray-600">
            Nội dung cho <strong>{title}</strong> sẽ được cập nhật trong thời
            gian tới.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlankPage;
