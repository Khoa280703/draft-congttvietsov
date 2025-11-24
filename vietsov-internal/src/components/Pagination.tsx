import { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = useMemo(() => {
    const pages = [];
    const pageNeighbours = 1;
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }
    return pages;
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center mt-12 space-x-6">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(1)}
          className="px-1 py-2 text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer"
        >
          Về trang đầu
        </button>
      )}
      {pageNumbers.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`relative px-1 py-2 text-sm font-medium transition-colors cursor-pointer ${
              currentPage === page
                ? "text-green-600"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            {page}
            {currentPage === page && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-green-600"></span>
            )}
          </button>
        ) : (
          <span key={index} className="px-1 py-2 text-sm text-gray-500">
            ...
          </span>
        )
      )}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-1 py-2 text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer"
        >
          Trang kế tiếp
        </button>
      )}
    </div>
  );
};

export default Pagination;
