import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";

export interface TrainingProgram {
  id: number;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  category: string;
  publishDate: string;
  featured: boolean;
  duration: string;
  level: string;
  participants: number;
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: 1,
    title: "Chương trình đào tạo kỹ thuật dầu khí chuyên sâu",
    content:
      "Khóa đào tạo toàn diện về kỹ thuật khai thác dầu khí, bao gồm các công nghệ tiên tiến, quy trình an toàn và bảo vệ môi trường. Chương trình được thiết kế cho các kỹ sư và chuyên gia trong ngành dầu khí, cung cấp kiến thức thực tiễn và kinh nghiệm từ các chuyên gia hàng đầu.",
    image: danKhoanVietsov,
    imageAlt: "Đào tạo kỹ thuật dầu khí",
    category: "Kỹ thuật",
    publishDate: "2024-12-20",
    featured: true,
    duration: "6 tháng",
    level: "Chuyên sâu",
    participants: 25,
  },
  {
    id: 2,
    title: "Đào tạo quản lý dự án năng lượng",
    content:
      "Chương trình đào tạo quản lý dự án trong lĩnh vực năng lượng, tập trung vào các phương pháp quản lý hiện đại, công cụ phân tích và kỹ năng lãnh đạo. Khóa học phù hợp cho các nhà quản lý và giám đốc dự án trong ngành năng lượng.",
    image: hoiNghiSuKien,
    imageAlt: "Quản lý dự án năng lượng",
    category: "Quản lý",
    publishDate: "2024-12-18",
    featured: false,
    duration: "3 tháng",
    level: "Trung cấp",
    participants: 30,
  },
  {
    id: 3,
    title: "An toàn lao động và bảo vệ môi trường",
    content:
      "Khóa đào tạo chuyên sâu về an toàn lao động và bảo vệ môi trường trong ngành dầu khí. Chương trình bao gồm các quy định pháp luật, tiêu chuẩn quốc tế và các biện pháp thực tế để đảm bảo an toàn và bảo vệ môi trường.",
    image: hoiNghiPetro,
    imageAlt: "An toàn lao động",
    category: "An toàn",
    publishDate: "2024-12-15",
    featured: false,
    duration: "2 tháng",
    level: "Cơ bản",
    participants: 40,
  },
  {
    id: 4,
    title: "Công nghệ số trong ngành dầu khí",
    content:
      "Đào tạo về ứng dụng công nghệ số, trí tuệ nhân tạo và IoT trong ngành dầu khí. Chương trình giúp học viên nắm bắt các xu hướng công nghệ mới và cách ứng dụng vào thực tế sản xuất.",
    image: daiHoiDaiBieu,
    imageAlt: "Công nghệ số",
    category: "Công nghệ",
    publishDate: "2024-12-10",
    featured: false,
    duration: "4 tháng",
    level: "Nâng cao",
    participants: 20,
  },
  {
    id: 5,
    title: "Kỹ năng lãnh đạo và quản lý nhân sự",
    content:
      "Chương trình phát triển kỹ năng lãnh đạo và quản lý nhân sự trong môi trường doanh nghiệp dầu khí. Tập trung vào các kỹ năng mềm, giao tiếp và xây dựng đội ngũ hiệu quả.",
    image: danKhoanVietsov,
    imageAlt: "Kỹ năng lãnh đạo",
    category: "Kỹ năng mềm",
    publishDate: "2024-12-08",
    featured: false,
    duration: "2 tháng",
    level: "Trung cấp",
    participants: 35,
  },
  {
    id: 6,
    title: "Đào tạo chuyên gia tư vấn dầu khí",
    content:
      "Chương trình đào tạo chuyên gia tư vấn trong lĩnh vực dầu khí, bao gồm phân tích thị trường, đánh giá dự án và tư vấn chiến lược. Phù hợp cho các chuyên gia muốn phát triển sự nghiệp trong lĩnh vực tư vấn.",
    image: hoiNghiSuKien,
    imageAlt: "Chuyên gia tư vấn",
    category: "Tư vấn",
    publishDate: "2024-12-05",
    featured: false,
    duration: "5 tháng",
    level: "Chuyên sâu",
    participants: 15,
  },
  {
    id: 7,
    title: "Đào tạo kỹ thuật viên vận hành giàn khoan",
    content:
      "Chương trình đào tạo chuyên sâu cho kỹ thuật viên vận hành các thiết bị trên giàn khoan dầu khí. Bao gồm kiến thức về hệ thống điều khiển, bảo trì thiết bị và xử lý sự cố trong môi trường biển khắc nghiệt.",
    image: hoiNghiPetro,
    imageAlt: "Vận hành giàn khoan",
    category: "Vận hành",
    publishDate: "2024-12-03",
    featured: false,
    duration: "3 tháng",
    level: "Trung cấp",
    participants: 28,
  },
  {
    id: 8,
    title: "Phân tích tài chính và quản lý rủi ro trong dầu khí",
    content:
      "Khóa đào tạo về phân tích tài chính và quản lý rủi ro trong ngành dầu khí. Học viên sẽ được trang bị kiến thức về định giá dự án, phân tích rủi ro và các công cụ tài chính phức tạp trong ngành năng lượng.",
    image: daiHoiDaiBieu,
    imageAlt: "Phân tích tài chính",
    category: "Tài chính",
    publishDate: "2024-12-01",
    featured: false,
    duration: "4 tháng",
    level: "Nâng cao",
    participants: 22,
  },
  {
    id: 9,
    title: "Đào tạo kỹ thuật viên bảo trì thiết bị",
    content:
      "Chương trình đào tạo kỹ thuật viên bảo trì các thiết bị chuyên dụng trong ngành dầu khí. Bao gồm kiến thức về các loại thiết bị, quy trình bảo trì và kỹ thuật sửa chữa trong môi trường biển.",
    image: danKhoanVietsov,
    imageAlt: "Bảo trì thiết bị",
    category: "Bảo trì",
    publishDate: "2024-11-28",
    featured: false,
    duration: "3 tháng",
    level: "Cơ bản",
    participants: 32,
  },
  {
    id: 10,
    title: "Đào tạo chuyên gia môi trường dầu khí",
    content:
      "Khóa đào tạo chuyên sâu về môi trường và phát triển bền vững trong ngành dầu khí. Tập trung vào các quy định môi trường, đánh giá tác động và các biện pháp bảo vệ môi trường biển.",
    image: hoiNghiSuKien,
    imageAlt: "Chuyên gia môi trường",
    category: "Môi trường",
    publishDate: "2024-11-25",
    featured: false,
    duration: "4 tháng",
    level: "Chuyên sâu",
    participants: 18,
  },
  {
    id: 11,
    title: "Đào tạo kỹ thuật viên kiểm tra chất lượng",
    content:
      "Chương trình đào tạo kỹ thuật viên kiểm tra và đảm bảo chất lượng sản phẩm dầu khí. Bao gồm các phương pháp kiểm tra, tiêu chuẩn chất lượng và quy trình đánh giá sản phẩm.",
    image: hoiNghiPetro,
    imageAlt: "Kiểm tra chất lượng",
    category: "Chất lượng",
    publishDate: "2024-11-22",
    featured: false,
    duration: "2 tháng",
    level: "Trung cấp",
    participants: 26,
  },
  {
    id: 12,
    title: "Đào tạo kỹ thuật viên an ninh mạng",
    content:
      "Khóa đào tạo về an ninh mạng và bảo vệ dữ liệu trong ngành dầu khí. Tập trung vào các mối đe dọa mạng, biện pháp bảo vệ và quy trình ứng phó sự cố an ninh mạng.",
    image: daiHoiDaiBieu,
    imageAlt: "An ninh mạng",
    category: "An ninh",
    publishDate: "2024-11-20",
    featured: false,
    duration: "3 tháng",
    level: "Nâng cao",
    participants: 24,
  },
];
