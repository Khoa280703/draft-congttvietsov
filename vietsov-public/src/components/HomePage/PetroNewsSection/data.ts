import type { FeaturedProjectData } from "../TypicalProjectsSection/FeaturedProject";
import type { Project } from "../TypicalProjectsSection/RelatedProjects";
import dankhoanvietsov from "@/assets/dankhoanvietsov.jpg";

export const defaultFeaturedNews: FeaturedProjectData = {
  id: "1",
  date: "20 Tháng 4, 2024",
  title: "Vietsovpetro đạt mốc sản lượng khai thác mới",
  projectType: "TIN TỨC",
  location: "VŨNG TÀU, VIỆT NAM",
  description:
    "Vietsovpetro vừa công bố đạt mốc sản lượng khai thác dầu khí mới trong quý đầu năm 2024, thể hiện sự phát triển bền vững và hiệu quả trong hoạt động khai thác. Thành tựu này là kết quả của việc ứng dụng công nghệ tiên tiến, quản lý chuyên nghiệp và sự nỗ lực không ngừng của đội ngũ nhân viên. Vietsovpetro tiếp tục khẳng định vị thế là một trong những doanh nghiệp dầu khí hàng đầu tại Việt Nam, đóng góp quan trọng vào sự phát triển kinh tế của đất nước.",
  image: dankhoanvietsov,
  imageAlt: "Vietsovpetro đạt mốc sản lượng khai thác mới",
  link: "tintuc/chi-tiet",
};

export const defaultRelatedNews: Project[] = [
  {
    id: "1",
    date: "18 Tháng 4, 2024",
    title:
      "Hội nghị tổng kết hoạt động sản xuất kinh doanh quý I/2024: Những thành tựu nổi bật và định hướng phát triển",
    link: "tintuc/chi-tiet",
  },
  {
    id: "2",
    date: "12 Tháng 4, 2024",
    title:
      "Vietsovpetro ký kết hợp tác chiến lược với các đối tác quốc tế trong lĩnh vực công nghệ khai thác dầu khí",
    link: "tintuc/chi-tiet",
  },
  {
    id: "3",
    date: "05 Tháng 4, 2024",
    title:
      "Chương trình đào tạo nâng cao năng lực cho đội ngũ kỹ sư: Đầu tư vào con người để phát triển bền vững",
    link: "tintuc/chi-tiet",
  },
];
