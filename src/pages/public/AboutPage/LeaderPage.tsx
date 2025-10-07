import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { PageWithSidebar } from "@/components/PublicSystem";
import leader from "@/assets/MrVuMaiKhanh.jpg";
import { LeadershipModal } from "@/components/PublicSystem/AboutPage";
import type { Leader } from "@/types/component";

const leadersData: Leader[] = [
  {
    image: leader,
    title: "TỔNG GIÁM ĐỐC",
    name: "Ông Vũ Mai Khanh",
    email: "khanhvm.ptg@vietsov.com.vn",
    position: "Tổng giám đốc Liên doanh Việt – Nga Vietsovpetro",
    duties:
      "Trực tiếp lãnh đạo điều hành linh hoạt các hoạt động sản xuất kinh doanh, tài chính của Vietsovpetro và chịu trách nhiệm trước Hội đồng Vietsovpetro về kết quả thực hiện các chỉ tiêu kế hoạch và các chương trình sản xuất, sử dụng hợp lý và hiệu quả phương tiện vật tư, lao động và tiền vốn của Vietsovpetro.",
    qualifications:
      "Kỹ sư Đo lường - Tự động hóa, Thạc sỹ Quản trị kinh doanh EMBA.",
    pastPositions: [
      "Kỹ sư trưởng, Chuyên viên – Xưởng tự động hóa sản xuất, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Chuyên viên chính, Quyền Phó phòng Quản lý chất lượng, Dịch vụ và Dự án Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Quyền Trưởng phòng Tự động hóa sản xuất, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng ban Quản lý các Dự án dịch vụ biển ngoài Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc phụ trách Dịch vụ, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Tiếp thị - Dịch vụ, Bộ máy điều hành Vietsovpetro",
      "Phó Tổng giám đốc Dịch vụ, Liên doanh Việt - Nga Vietsovpetro",
      "Tổng giám đốc, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC THỨ NHẤT",
    name: "Сараев Олег Петрович",
    email: "saraev@vietsov.com.vn",
    position: "Phó Tổng giám đốc Liên doanh Việt - Nga Vietsovpetro",
    duties:
      "Phụ trách các hoạt động sản xuất, kỹ thuật và phát triển của Liên doanh Việt - Nga Vietsovpetro.",
    qualifications: "Kỹ sư Dầu khí, Tiến sỹ Khoa học Kỹ thuật.",
    pastPositions: [
      "Kỹ sư trưởng, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Kỹ thuật, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc Kỹ thuật, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Tổng giám đốc Kỹ thuật, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Yakovenko E.V",
    email: "yakovenko@vietsov.com.vn",
    position:
      "Phó Tổng giám đốc Cung ứng vật tư và Vận tải công nghệ Liên doanh Việt - Nga Vietsovpetro",
    duties:
      "Đảm bảo vật tư kỹ thuật cho các hoạt động sản xuất, quản lý chuỗi cung ứng và vận tải công nghệ.",
    qualifications: "Kỹ sư Cơ khí, Thạc sỹ Quản lý Dự án.",
    pastPositions: [
      "Kỹ sư Cơ khí, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Cung ứng, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc Cung ứng, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Tổng giám đốc Cung ứng, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Mai Đăng Tuấn",
    email: "tuanmd@vietsov.com.vn",
    position: "Phó Tổng giám đốc Liên doanh Việt - Nga Vietsovpetro",
    duties:
      "Phụ trách các hoạt động tài chính, kế toán và quản lý nguồn nhân lực của Liên doanh.",
    qualifications: "Cử nhân Kinh tế, Thạc sỹ Quản trị Kinh doanh.",
    pastPositions: [
      "Kế toán trưởng, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Tài chính, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc Tài chính, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Tổng giám đốc Tài chính, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Lê Việt Dũng",
    email: "dunglv@vietsov.com.vn",
    position: "Chánh Kỹ sư Liên doanh Việt - Nga Vietsovpetro",
    duties:
      "Triển khai áp dụng các giải pháp công nghệ, kỹ thuật, tổ chức thực hiện kế hoạch nghiên cứu và phát triển.",
    qualifications: "Kỹ sư Địa chất Dầu khí, Tiến sỹ Khoa học Địa chất.",
    pastPositions: [
      "Kỹ sư Địa chất, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Nghiên cứu, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc Nghiên cứu, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Chánh Kỹ sư, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Phạm Xuân Sơn",
    email: "sonpx@vietsov.com.vn",
    position:
      "Phó Tổng giám đốc Khoan và sửa giếng Liên doanh Việt - Nga Vietsovpetro",
    duties:
      "Quản lý các hoạt động khoan, sửa chữa giếng và bảo trì các công trình khai thác dầu khí.",
    qualifications: "Kỹ sư Khoan Dầu khí, Thạc sỹ Kỹ thuật Dầu khí.",
    pastPositions: [
      "Kỹ sư Khoan, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Trưởng phòng Khoan, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Giám đốc Khoan, Xí nghiệp Khai thác dầu khí, Vietsovpetro",
      "Phó Tổng giám đốc Khoan, Liên doanh Việt - Nga Vietsovpetro",
    ],
  },
];

interface LeaderCardProps {
  image: string;
  title: string;
  name: string;
  description: string;
  setIsModalOpen: (isOpen: boolean) => void;
  setSelectedLeader: (leader: Leader) => void;
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  image,
  title,
  name,
  description,
  setIsModalOpen,
  setSelectedLeader,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-2">
          {title}
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
        <p className="text-sm text-gray-600 mb-5 line-clamp-2">{description}</p>
        <button
          onClick={() => {
            const leaderData = leadersData.find((l) => l.name === name);
            if (leaderData) {
              setSelectedLeader(leaderData);
              setIsModalOpen(true);
            }
          }}
          className="inline-flex items-center text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors cursor-pointer"
        >
          Xem thêm
          <FiArrowRight className="w-4 h-4 ml-1 text-green-500 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// --- Component chính hiển thị lưới các lãnh đạo ---
const LeaderPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<Leader | undefined>(
    undefined
  );
  return (
    <>
      <PageWithSidebar activePath="/gioithieu/ban-lanh-dao">
        <section className="bg-gray-50 py-16 font-sans">
          <div className="container mx-auto px-4">
            {/* Lưới các thẻ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadersData.map((leader, index) => (
                <LeaderCard
                  key={index}
                  image={leader.image}
                  title={leader.title}
                  name={leader.name}
                  description={leader.duties}
                  setIsModalOpen={setIsModalOpen}
                  setSelectedLeader={setSelectedLeader}
                />
              ))}
            </div>
          </div>
        </section>
      </PageWithSidebar>
      <LeadershipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leader={selectedLeader}
      />
    </>
  );
};

export default LeaderPage;
