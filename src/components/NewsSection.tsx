import React from "react";
import { FaEye, FaComment, FaHeart, FaOilCan } from "react-icons/fa";

const NewsSection: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="border-b-2 border-blue-600 pb-2 mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <FaOilCan className="mr-2 text-blue-600" />
          TIN DẦU KHÍ
        </h2>
      </div>

      {/* Main news article */}
      <article className="mb-6">
        <h1 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
          Đảng bộ Vietsovpetro được vinh danh tại Đại hội đại biểu Đảng bộ Tập
          đoàn Công nghiệp – Năng lượng Quốc gia Việt Nam lần thứ IV, nhiệm kỳ
          2025-2030
        </h1>

        <p className="text-sm text-gray-600 mb-3">Thứ ba, 9/6/2024 - 9:54</p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Trong hai ngày 2 và 3/8/2025, tại Hội trường Bộ Quốc phòng, Hà Nội đã
          diễn ra Đại hội đại biểu Đảng bộ Tập đoàn Công nghiệp – Năng lượng
          Quốc gia Việt Nam lần thứ IV, nhiệm kỳ 2025-2030. Đồng chí Phạm Minh
          Chính, Ủy viên Bộ Chính trị, Thủ tướng Chính phủ nước Cộng hòa xã hội
          chủ nghĩa Việt Nam đã đến dự và phát biểu chỉ đạo.
        </p>

        {/* News image */}
        <div className="mb-4">
          <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">News Image Placeholder</span>
          </div>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Chiều ngày 8/8/2025, tại Vietsovpetro Resort, Hội nghị Sơ kết công tác
          Truyền thông - Văn hóa doanh nghiệp...
        </p>

        <button className="text-blue-600 text-sm font-medium hover:underline mb-4">
          Đọc thêm...
        </button>

        {/* Additional content */}
        <div className="bg-gray-50 p-4 rounded mb-4">
          <h3 className="font-bold text-gray-800 mb-2">
            44 năm Vietsovpetro - Ngọn lửa cháy trong tôi Có bao giờ ta tự hỏi!
            Ngọn lửa dầu lên như thế nào?
          </h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <FaEye className="mr-1" /> 6
            </span>
            <span className="flex items-center">
              <FaComment className="mr-1" /> 12
            </span>
            <button className="text-red-500 hover:text-red-600 flex items-center">
              <FaHeart className="mr-1" />
              Bài đọc hay? Thả tim cho bài đọc
            </button>
          </div>
        </div>

        {/* Keywords */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Từ khóa:</p>
          <div className="flex flex-wrap gap-2">
            {["Giá vàng", "Ngân hàng", "Bảo hiểm", "Tự do tài chính"].map(
              (keyword, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                >
                  {keyword}
                </span>
              )
            )}
          </div>
        </div>

        <p className="text-xs text-gray-500">
          Tin và Ảnh : Tổ TT VHDN Vietsovpetro
        </p>
      </article>
    </div>
  );
};

export default NewsSection;
