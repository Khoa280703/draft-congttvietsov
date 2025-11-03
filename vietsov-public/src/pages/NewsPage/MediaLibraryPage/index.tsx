import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  FiSearch,
  FiFolder,
  FiVideo,
  FiChevronRight,
  FiGrid,
  FiList,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";

// Import Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { Pagination } from "@/components";
import { PageWithSidebar } from "@/components";

import {
  mediaData,
  type MediaItem,
  type MediaFolder,
  type MediaFile,
} from "./data";

type SortBy = "name" | "date" | "type" | "size";
type SortOrder = "asc" | "desc";

const MediaLibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const itemsPerPage = 12;

  // Helper function to find folder by ID recursively
  const findFolderById = useCallback(
    (items: MediaItem[], folderId: string): MediaFolder | null => {
      for (const item of items) {
        if (item.type === "folder" && item.id === folderId) {
          return item;
        }
        if (item.type === "folder" && item.children) {
          const found = findFolderById(item.children, folderId);
          if (found) return found;
        }
      }
      return null;
    },
    []
  );

  // Helper function to find parent folder of a given folder
  const findParentFolder = useCallback(
    (
      items: MediaItem[],
      targetId: string,
      parent: MediaFolder | null = null
    ): MediaFolder | null => {
      for (const item of items) {
        if (item.type === "folder") {
          if (item.id === targetId) {
            return parent;
          }
          if (item.children) {
            const found = findParentFolder(item.children, targetId, item);
            if (found !== null) return found;
          }
        }
      }
      return null;
    },
    []
  );

  // Breadcrumb path - build full path from root to current folder
  const breadcrumbs = useMemo(() => {
    if (!currentFolder) return [{ id: "root", name: "Thư viện ảnh/video" }];

    const path: Array<{ id: string; name: string }> = [];

    const buildPath = (
      items: MediaItem[],
      targetId: string,
      currentPath: Array<{ id: string; name: string }> = []
    ): boolean => {
      for (const item of items) {
        if (item.type === "folder") {
          const newPath = [...currentPath, { id: item.id, name: item.name }];
          if (item.id === targetId) {
            // Found the target folder, set the complete path
            path.length = 0;
            path.push({ id: "root", name: "Thư viện ảnh/video" }, ...newPath);
            return true;
          }
          if (item.children) {
            const found = buildPath(item.children, targetId, newPath);
            if (found) return true;
          }
        }
      }
      return false;
    };

    buildPath(mediaData, currentFolder);
    return path.length > 0
      ? path
      : [{ id: "root", name: "Thư viện ảnh/video" }];
  }, [currentFolder]);

  // Get current folder contents
  const currentItems = useMemo(() => {
    if (!currentFolder) {
      // Root level: show all folders and files
      return mediaData;
    }
    const folder = findFolderById(mediaData, currentFolder);
    return folder?.children || [];
  }, [currentFolder, findFolderById]);

  // Filter items by search term
  const filteredItems = useMemo(() => {
    let items = currentItems;
    if (searchTerm) {
      items = items.filter((item: MediaItem) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return items;
  }, [searchTerm, currentItems]);

  // Helper function to parse date (DD/MM/YYYY)
  const parseDate = useCallback((dateStr: string): number => {
    if (!dateStr) return 0;
    const parts = dateStr.split("/");
    if (parts.length === 3) {
      return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`).getTime();
    }
    return 0;
  }, []);

  // Helper function to parse size (e.g., "2.5 MB" -> bytes)
  const parseSize = useCallback((sizeStr?: string): number => {
    if (!sizeStr) return 0;
    const match = sizeStr.match(/([\d.]+)\s*(KB|MB|GB|B)/i);
    if (!match) return 0;
    const value = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    const multipliers: { [key: string]: number } = {
      B: 1,
      KB: 1024,
      MB: 1024 * 1024,
      GB: 1024 * 1024 * 1024,
    };
    return value * (multipliers[unit] || 1);
  }, []);

  // Sort items
  const sortedItems = useMemo(() => {
    const items = [...filteredItems];
    return items.sort((a: MediaItem, b: MediaItem) => {
      let comparison = 0;

      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name, "vi");
          break;
        case "date": {
          // Convert date string to comparable format (assumes DD/MM/YYYY format)
          const dateA = parseDate(a.date);
          const dateB = parseDate(b.date);
          comparison = dateA - dateB;
          break;
        }
        case "type":
          // Folders first, then files
          if (a.type === "folder" && b.type !== "folder") return -1;
          if (a.type !== "folder" && b.type === "folder") return 1;
          // If both are same type, sort by name
          comparison = a.name.localeCompare(b.name, "vi");
          break;
        case "size": {
          // Only for files with size property
          const sizeA = parseSize(a.type !== "folder" ? a.size : "0");
          const sizeB = parseSize(b.type !== "folder" ? b.size : "0");
          comparison = sizeA - sizeB;
          break;
        }
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });
  }, [filteredItems, sortBy, sortOrder, parseDate, parseSize]);

  // Pagination
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  const paginatedItems = sortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFolderClick = (folderId: string) => {
    setCurrentFolder(folderId);
    setCurrentPage(1);
    setSearchTerm("");
  };

  const handleBackClick = () => {
    setCurrentFolder(null);
    setCurrentPage(1);
    setSearchTerm("");
  };

  const handleBreadcrumbClick = (crumbId: string) => {
    if (crumbId === "root") {
      handleBackClick();
    } else {
      handleFolderClick(crumbId);
    }
  };

  // Get all media files (images and videos) for Fancybox gallery
  const galleryItems = useMemo(() => {
    return sortedItems
      .filter(
        (item): item is MediaFile =>
          item.type === "image" || item.type === "video"
      )
      .map((item: MediaFile) => ({
        src: item.thumbnail,
        thumbSrc: item.thumbnail,
        caption: `${item.name}${item.date ? ` • ${item.date}` : ""}${
          item.size ? ` • ${item.size}` : ""
        }`,
        type: item.type === "video" ? "video" : "image",
      }));
  }, [sortedItems]);

  // Initialize Fancybox on component mount
  useEffect(() => {
    return () => {
      // Cleanup Fancybox on unmount
      Fancybox.destroy();
    };
  }, []);

  const handleImageClick = useCallback(
    (item: MediaFile) => {
      const clickedIndex = galleryItems.findIndex(
        (galleryItem) => galleryItem.src === item.thumbnail
      );

      if (clickedIndex === -1) return;

      // Open Fancybox with gallery starting at clicked item
      Fancybox.show(galleryItems, {
        startIndex: clickedIndex,
        Toolbar: {
          display: {
            left: ["infobar"],
            middle: [],
            right: ["slideshow", "download", "thumbs", "close"],
          },
        },
        Thumbs: {
          autoStart: false,
        },
        caption: (_fancybox: unknown, slide: { caption?: string }) => {
          return slide.caption || "";
        },
        Video: {
          tpl:
            '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">' +
            '<source src="{{src}}" type="{{format}}" />' +
            "Sorry, your browser doesn't support embedded videos.</video>",
          format: "",
          autoplay: true,
        },
      } as Record<string, unknown>);
    },
    [galleryItems]
  );

  // Folder Item Component
  const FolderItem: React.FC<{ item: MediaFolder }> = ({ item }) => (
    <button
      onClick={() => handleFolderClick(item.id)}
      className="group flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors border-2 border-transparent hover:border-gray-200 cursor-pointer"
    >
      <div className="w-20 h-20 flex items-center justify-center mb-3">
        <FiFolder className="w-full h-full text-yellow-500" />
      </div>
      <p className="text-sm font-medium text-gray-700 text-center line-clamp-2 group-hover:text-vietsov-green transition-colors">
        {item.name}
      </p>
      {item.date && <p className="text-xs text-gray-500 mt-1">{item.date}</p>}
    </button>
  );

  // File Item Component
  const FileItem: React.FC<{ item: MediaFile }> = ({ item }) => (
    <button
      onClick={() => handleImageClick(item)}
      className="group flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors border-2 border-transparent hover:border-gray-200 cursor-pointer"
    >
      <div className="relative w-20 h-20 mb-3 rounded overflow-hidden bg-gray-200">
        {item.type === "image" ? (
          <img
            src={item.thumbnail}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <FiVideo className="text-gray-600" size={24} />
            </div>
          </>
        )}
      </div>
      <p className="text-sm font-medium text-gray-700 text-center line-clamp-2 group-hover:text-vietsov-green transition-colors">
        {item.name}
      </p>
      <div className="flex items-center gap-2 mt-1">
        {item.date && <p className="text-xs text-gray-500">{item.date}</p>}
        {item.size && (
          <>
            <span className="text-xs text-gray-400">•</span>
            <p className="text-xs text-gray-500">{item.size}</p>
          </>
        )}
      </div>
    </button>
  );

  // List View Item Component
  const ListViewItem: React.FC<{ item: MediaItem }> = ({ item }) => (
    <div
      className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-100 ${
        item.type !== "folder" ? "cursor-pointer" : ""
      }`}
      onClick={() => {
        if (item.type === "folder") {
          handleFolderClick(item.id);
        } else {
          handleImageClick(item);
        }
      }}
    >
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
        {item.type === "folder" ? (
          <FiFolder className="w-full h-full text-yellow-500" />
        ) : item.type === "image" ? (
          <div className="relative w-full h-full rounded overflow-hidden bg-gray-200">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="relative w-full h-full rounded overflow-hidden bg-gray-200">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <FiVideo className="text-gray-600" size={20} />
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-700 truncate hover:text-vietsov-green transition-colors">
          {item.name}
        </p>
        <div className="flex items-center gap-2 mt-1">
          {item.date && <p className="text-xs text-gray-500">{item.date}</p>}
          {item.type !== "folder" && item.size && (
            <>
              <span className="text-xs text-gray-400">•</span>
              <p className="text-xs text-gray-500">{item.size}</p>
            </>
          )}
        </div>
      </div>
      {item.type === "folder" && (
        <FiChevronRight className="text-gray-400 flex-shrink-0" size={20} />
      )}
    </div>
  );

  return (
    <PageWithSidebar activePath="/tintuc/thu-vien-anh-video">
      <div className="">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thư viện ảnh/video
          </h2>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.id}>
                {index > 0 && (
                  <FiChevronRight className="text-gray-400" size={16} />
                )}
                <button
                  onClick={() => handleBreadcrumbClick(crumb.id)}
                  className={`hover:text-vietsov-green transition-colors ${
                    index === breadcrumbs.length - 1
                      ? "font-semibold text-gray-900 cursor-default"
                      : "cursor-pointer"
                  }`}
                  disabled={index === breadcrumbs.length - 1}
                >
                  {crumb.name}
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Search, Sort and View Controls */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="relative flex-1 w-full sm:max-w-md">
                <FiSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-vietsov-green focus:border-transparent transition-colors"
                />
              </div>

              {/* Sort Controls */}
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as SortBy);
                    setCurrentPage(1);
                  }}
                  className="px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-vietsov-green focus:border-transparent transition-colors"
                >
                  <option value="name">Sắp xếp theo tên</option>
                  <option value="date">Sắp xếp theo ngày</option>
                  <option value="type">Sắp xếp theo loại</option>
                  <option value="size">Sắp xếp theo kích thước</option>
                </select>

                <button
                  onClick={() => {
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    setCurrentPage(1);
                  }}
                  className="p-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
                  aria-label={`Sort ${
                    sortOrder === "asc" ? "descending" : "ascending"
                  }`}
                  title={sortOrder === "asc" ? "Tăng dần" : "Giảm dần"}
                >
                  {sortOrder === "asc" ? (
                    <FiArrowUp size={18} />
                  ) : (
                    <FiArrowDown size={18} />
                  )}
                </button>
              </div>

              {/* View Mode Controls */}
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "grid"
                      ? "bg-vietsov-green text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  aria-label="Grid view"
                >
                  <FiGrid size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "list"
                      ? "bg-vietsov-green text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  aria-label="List view"
                >
                  <FiList size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        {sortedItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Không tìm thấy kết quả nào</p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-6">
            {paginatedItems.map((item: MediaItem) =>
              item.type === "folder" ? (
                <FolderItem key={item.id} item={item as MediaFolder} />
              ) : (
                <FileItem key={item.id} item={item as MediaFile} />
              )
            )}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
            {paginatedItems.map((item: MediaItem) => (
              <ListViewItem key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </PageWithSidebar>
  );
};

export default MediaLibraryPage;
