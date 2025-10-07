import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";

import leaderImage from "@/assets/MrVuMaiKhanh.jpg";

interface LeadershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  leader?: Leader;
}

interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

const DEFAULT_LEADER_DATA: Leader = {
  title: "TỔNG GIÁM ĐỐC",
  name: "Ông Vũ Mai Khanh",
  email: "khanhvm.ptg@vietsov.com.vn",
  image: leaderImage,
  position: "Tổng giám đốc Liên doanh Việt Nga Vietsovpetro",
  duties:
    "Tổ chức và trực tiếp lãnh đạo điều hành linh hoạt các hoạt động sản xuất, kinh doanh, tài chính của Vietsovpetro và chịu trách nhiệm trước Hội đồng Vietsovpetro về kết quả thực hiện các chỉ tiêu kế hoạch và các chương trình sản xuất, sử dụng hợp lý và hiệu quả phương tiện vật tư, lao động và tiền vốn của Vietsovpetro.",
  qualifications:
    "Kỹ sư Đo lường - Tự động hóa, Thạc sỹ Quản trị kinh doanh EMBA.",
  pastPositions: [
    "Kỹ sư trưởng, Chuyên viên Xưởng tự động hóa sản xuất, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
    "Chuyên viên chính, Quyền Phó phòng Quản lý chất lượng, Dịch vụ và Dự án Xí nghiệp Khai thác dầu khí, Vietsovpetro",
    "Quyền Trưởng phòng Tự động hóa sản xuất, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
  ],
};

const InfoSection: React.FC<InfoSectionProps> = ({ title, children }) => (
  <div className="mt-6">
    <h3 className="font-bold text-gray-500 uppercase text-xs tracking-wider mb-2">
      {title}
    </h3>
    {children}
  </div>
);

const LeadershipModal: React.FC<LeadershipModalProps> = ({
  isOpen,
  onClose,
  leader = DEFAULT_LEADER_DATA,
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 transition-transform duration-300 scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20"
          aria-label="Đóng"
        >
          <FiX size={24} />
        </button>

        <div className="lg:col-span-2 p-8 md:p-10 flex flex-col">
          <div>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">
              {leader.title}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-1">
              {leader.name}
            </h2>
            <a
              href={`mailto:${leader.email}`}
              className="text-sm text-blue-600 hover:underline mt-2 inline-block"
            >
              {leader.email}
            </a>
          </div>

          <div className="flex-grow overflow-y-auto pr-4 mt-4 -mr-4">
            {" "}
            {/* -mr-4 để bù padding của pr-4 */}
            <InfoSection title="Chức vụ">
              <p className="text-sm text-gray-700 leading-relaxed">
                {leader.position}
              </p>
            </InfoSection>
            <InfoSection title="Nhiệm vụ">
              <p className="text-sm text-gray-700 leading-relaxed">
                {leader.duties}
              </p>
            </InfoSection>
            <InfoSection title="Trình độ chuyên môn">
              <p className="text-sm text-gray-700 leading-relaxed">
                {leader.qualifications}
              </p>
            </InfoSection>
            <InfoSection title="Các chức vụ đã đảm nhiệm">
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                {leader.pastPositions.map((pos: string, index: number) => (
                  <li key={index}>{pos}</li>
                ))}
              </ul>
            </InfoSection>
          </div>
        </div>

        <div className="lg:col-span-1 hidden lg:flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-start ml-[-2rem] xl:ml-[-4rem]">
            {" "}
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-auto rounded-xl shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipModal;
