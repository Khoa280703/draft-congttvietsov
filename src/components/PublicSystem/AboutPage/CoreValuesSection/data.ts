import Frame from "@/assets/icon/Frame.svg";
import Frame1 from "@/assets/icon/Frame-1.svg";
import Frame2 from "@/assets/icon/Frame-2.svg";
import Frame3 from "@/assets/icon/Frame-3.svg";
import Frame4 from "@/assets/icon/Frame-4.svg";

export interface CoreValue {
  id: number;
  IconComponent: string;
  title: string;
  description: string;
}

export interface CoreValuesSectionProps {
  values?: CoreValue[];
  className?: string;
}

export const defaultCoreValues: CoreValue[] = [
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
