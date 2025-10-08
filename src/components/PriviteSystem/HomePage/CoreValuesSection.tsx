import React from "react";

import Frame from "@/assets/icon/Frame.svg";
import Frame1 from "@/assets/icon/Frame-1.svg";
import Frame2 from "@/assets/icon/Frame-2.svg";
import Frame3 from "@/assets/icon/Frame-3.svg";
import Frame4 from "@/assets/icon/Frame-4.svg";

// --- 2. ĐỊNH NGHĨA TYPE VÀ DỮ LIỆU ---

interface CoreValue {
  id: number;
  IconComponent: string;
  title: string;
  description: string;
}

const coreValuesData: CoreValue[] = [
  {
    id: 1,
    IconComponent: Frame,
    title: "Đoàn kết – Hữu nghị",
    description:
      "Luôn giữ gìn tình đồng đội cao, hỗ trợ lẫn nhau giữa các bộ phận, giữ gìn lập trường trong các công trình trong cũng như ngoài khơi. Đoàn kết góp phần tạo nên sức mạnh tập thể, giúp vượt qua những thách thức trong môi trường dầu khí đầy biến động.",
  },
  {
    id: 2,
    IconComponent: Frame1,
    title: "Khát vọng",
    description:
      "Luôn vươn lên, không ngừng nâng cao trình độ, mở rộng quy mô, khẳng định vị thế trong ngành dầu khí và hợp tác quốc tế. Có chí hướng phát triển mạnh mẽ, muốn dẫn đầu về chất lượng, hiệu quả.",
  },
  {
    id: 3,
    IconComponent: Frame2,
    title: "Tin cậy",
    description:
      "Đảm bảo tính minh bạch, chất lượng trong mọi hoạt động, từ khai thác, vận hành đến báo cáo đối tác và nhà nước. Được coi là đối tác đáng tin cậy, uy tín cao.",
  },
  {
    id: 4,
    IconComponent: Frame3,
    title: "Bền vững",
    description:
      "Phát triển dựa trên việc cân bằng giữa hiệu quả kinh tế, bảo vệ môi trường, an toàn lao động, và phát triển nguồn nhân lực. Nhằm đến sự ổn định lâu dài, không chạy theo lợi ích trước mắt.",
  },
  {
    id: 5,
    IconComponent: Frame4,
    title: "Thích ứng linh hoạt",
    description:
      "Có khả năng ứng phó nhanh với biến động (giá dầu thế giới, điều kiện khai thác ngoài biển, công nghệ thay đổi,...). Sẵn sàng đổi mới để thích nghi trong môi trường nhiều bất định.",
  },
];

// --- 3. COMPONENT CON CHO MỖI MỤC ---

const ValueItem: React.FC<{ value: CoreValue }> = ({ value }) => {
  const { IconComponent, title, description } = value;
  return (
    <div className="flex flex-col items-center text-center p-4 max-w-sm">
      <img
        src={IconComponent}
        alt={title}
        className="w-16 h-16 text-green-600 text-4xl flex items-center justify-center"
      />
      <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

// --- 4. COMPONENT CHÍNH ---

const CoreValuesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20 font-sans">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Giá trị cốt lõi
        </h2>

        {/* Values Grid - Dùng Flexbox để tự động căn chỉnh */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
          {coreValuesData.map((value) => (
            <ValueItem key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
