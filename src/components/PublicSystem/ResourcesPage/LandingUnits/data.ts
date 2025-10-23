import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";

export interface EnterpriseData {
  index: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

export const enterpriseData: EnterpriseData[] = [
  {
    index: "01",
    title: "Đào tạo",
    description:
      "Chương trình đào tạo toàn diện và chuyên sâu cho nhân viên Vietsovpetro, bao gồm các khóa học kỹ thuật, quản lý và phát triển kỹ năng mềm. Chúng tôi cung cấp các chương trình đào tạo từ cơ bản đến nâng cao, phù hợp với từng vị trí công việc và mục tiêu phát triển nghề nghiệp. Với đội ngũ giảng viên giàu kinh nghiệm và phương pháp giảng dạy hiện đại, chúng tôi đảm bảo chất lượng đào tạo cao nhất.",
    image: danKhoanVietsov,
    imagePosition: "right",
  },
  {
    index: "02",
    title: "KHCN",
    description:
      "Khoa học và Công nghệ là trọng tâm phát triển của Vietsovpetro, tập trung vào nghiên cứu và ứng dụng các công nghệ tiên tiến trong lĩnh vực dầu khí. Chúng tôi đầu tư mạnh mẽ vào R&D, hợp tác với các viện nghiên cứu hàng đầu và phát triển các giải pháp công nghệ mới. Các hoạt động KHCN bao gồm nghiên cứu cơ bản, ứng dụng công nghệ và chuyển giao tri thức.",
    image: hoiNghiSuKien,
    imagePosition: "left",
  },
  {
    index: "03",
    title: "Sáng kiến - sáng chế",
    description:
      "Khuyến khích và hỗ trợ tinh thần sáng tạo, đổi mới trong toàn tổ chức. Chúng tôi tổ chức các cuộc thi sáng kiến, chương trình khởi nghiệp nội bộ và các hoạt động brainstorming. Mọi nhân viên đều được khuyến khích đóng góp ý tưởng sáng tạo và tham gia vào quá trình đổi mới của công ty. Các sáng kiến được đánh giá và triển khai thực tế, mang lại giá trị cho tổ chức.",
    image: hoiNghiPetro,
    imagePosition: "right",
  },
  {
    index: "04",
    title: "Tuyển dụng và tuyển sinh",
    description:
      "Chương trình tuyển dụng và tuyển sinh toàn diện, tìm kiếm và phát triển nhân tài cho Vietsovpetro. Chúng tôi tuyển dụng các chuyên gia giàu kinh nghiệm và sinh viên tài năng từ các trường đại học hàng đầu. Chương trình bao gồm tuyển dụng trực tiếp, thực tập sinh và các chương trình học bổng. Chúng tôi cam kết tạo môi trường làm việc chuyên nghiệp và cơ hội phát triển nghề nghiệp.",
    image: daiHoiDaiBieu,
    imagePosition: "left",
  },
];
