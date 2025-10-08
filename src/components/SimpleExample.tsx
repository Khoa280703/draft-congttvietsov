import React from "react";
import { useNews } from "@/hooks/useQueries";

export const SimpleExample: React.FC = () => {
  const { data, isLoading, error } = useNews();

  if (isLoading) {
    return <div className="p-4">Loading news...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Error: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">News</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};
