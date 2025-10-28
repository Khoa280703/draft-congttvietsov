import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";

export interface ScienceTechArticle {
  id: number;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  category: string;
  publishDate: string;
  featured: boolean;
  author: string;
  readTime: string;
}

export const scienceTechArticles: ScienceTechArticle[] = [
  {
    id: 1,
    title: "Nghiên cứu và phát triển công nghệ khai thác dầu khí tiên tiến",
    content:
      "Vietsovpetro đang đầu tư mạnh mẽ vào nghiên cứu và phát triển các công nghệ khai thác dầu khí tiên tiến, bao gồm công nghệ AI, IoT và tự động hóa. Các dự án nghiên cứu tập trung vào nâng cao hiệu quả khai thác, giảm chi phí và bảo vệ môi trường. Chúng tôi hợp tác với các viện nghiên cứu hàng đầu thế giới để phát triển các giải pháp công nghệ mới.",
    image: danKhoanVietsov,
    imageAlt: "Công nghệ khai thác dầu khí",
    category: "Công nghệ",
    publishDate: "2024-12-20",
    featured: true,
    author: "Phòng R&D",
    readTime: "8 phút",
  },
  {
    id: 2,
    title: "Ứng dụng trí tuệ nhân tạo trong dự báo sản lượng dầu khí",
    content:
      "Nghiên cứu ứng dụng trí tuệ nhân tạo và machine learning để dự báo sản lượng dầu khí chính xác hơn. Công nghệ này giúp tối ưu hóa quy trình khai thác và giảm thiểu rủi ro trong hoạt động sản xuất. Dự án đã đạt được những kết quả tích cực trong việc nâng cao hiệu quả sản xuất.",
    image: hoiNghiSuKien,
    imageAlt: "AI trong dự báo sản lượng",
    category: "AI & ML",
    publishDate: "2024-12-18",
    featured: false,
    author: "Phòng Công nghệ",
    readTime: "6 phút",
  },
  {
    id: 3,
    title: "Công nghệ xử lý nước thải và bảo vệ môi trường biển",
    content:
      "Phát triển các công nghệ xử lý nước thải tiên tiến để bảo vệ môi trường biển trong quá trình khai thác dầu khí. Công nghệ này sử dụng các phương pháp sinh học và hóa học để loại bỏ các chất ô nhiễm, đảm bảo nước thải đạt tiêu chuẩn môi trường trước khi thải ra biển.",
    image: hoiNghiPetro,
    imageAlt: "Xử lý nước thải",
    category: "Môi trường",
    publishDate: "2024-12-15",
    featured: false,
    author: "Phòng Môi trường",
    readTime: "7 phút",
  },
  {
    id: 4,
    title: "Hệ thống giám sát và điều khiển tự động cho giàn khoan",
    content:
      "Nghiên cứu phát triển hệ thống giám sát và điều khiển tự động cho các giàn khoan dầu khí. Hệ thống sử dụng IoT và công nghệ cảm biến để theo dõi liên tục các thông số kỹ thuật và tự động điều chỉnh khi cần thiết, đảm bảo an toàn và hiệu quả vận hành.",
    image: daiHoiDaiBieu,
    imageAlt: "Hệ thống giám sát giàn khoan",
    category: "Tự động hóa",
    publishDate: "2024-12-10",
    featured: false,
    author: "Phòng Kỹ thuật",
    readTime: "9 phút",
  },
  {
    id: 5,
    title: "Công nghệ năng lượng tái tạo trong ngành dầu khí",
    content:
      "Nghiên cứu tích hợp các nguồn năng lượng tái tạo như năng lượng mặt trời và gió vào hệ thống cung cấp năng lượng cho các hoạt động khai thác dầu khí. Điều này giúp giảm phát thải carbon và hướng tới một ngành dầu khí bền vững hơn.",
    image: danKhoanVietsov,
    imageAlt: "Năng lượng tái tạo",
    category: "Năng lượng xanh",
    publishDate: "2024-12-08",
    featured: false,
    author: "Phòng Năng lượng",
    readTime: "5 phút",
  },
  {
    id: 6,
    title: "Phát triển vật liệu composite cho ứng dụng dầu khí",
    content:
      "Nghiên cứu phát triển các vật liệu composite mới có khả năng chống ăn mòn và chịu nhiệt cao cho các ứng dụng trong ngành dầu khí. Các vật liệu này giúp kéo dài tuổi thọ thiết bị và giảm chi phí bảo trì trong môi trường khắc nghiệt của biển.",
    image: hoiNghiSuKien,
    imageAlt: "Vật liệu composite",
    category: "Vật liệu",
    publishDate: "2024-12-05",
    featured: false,
    author: "Phòng Vật liệu",
    readTime: "6 phút",
  },
  {
    id: 7,
    title: "Công nghệ blockchain trong chuỗi cung ứng dầu khí",
    content:
      "Nghiên cứu ứng dụng công nghệ blockchain để tăng cường tính minh bạch và bảo mật trong chuỗi cung ứng dầu khí. Công nghệ này giúp truy xuất nguồn gốc sản phẩm, đảm bảo chất lượng và tuân thủ các quy định môi trường.",
    image: hoiNghiPetro,
    imageAlt: "Blockchain trong dầu khí",
    category: "Blockchain",
    publishDate: "2024-12-03",
    featured: false,
    author: "Phòng Công nghệ",
    readTime: "7 phút",
  },
  {
    id: 8,
    title: "Hệ thống dự báo thời tiết chuyên dụng cho hoạt động biển",
    content:
      "Phát triển hệ thống dự báo thời tiết chuyên dụng cho các hoạt động khai thác dầu khí trên biển. Hệ thống sử dụng dữ liệu vệ tinh và mô hình dự báo tiên tiến để cung cấp thông tin chính xác về điều kiện thời tiết và sóng biển.",
    image: daiHoiDaiBieu,
    imageAlt: "Dự báo thời tiết",
    category: "Meteorology",
    publishDate: "2024-12-01",
    featured: false,
    author: "Phòng Khí tượng",
    readTime: "5 phút",
  },
  {
    id: 9,
    title: "Công nghệ thu hồi carbon và giảm phát thải",
    content:
      "Nghiên cứu các công nghệ thu hồi và lưu trữ carbon (CCS) để giảm phát thải khí nhà kính trong ngành dầu khí. Các công nghệ này bao gồm thu hồi CO2 từ khí thải và lưu trữ dưới lòng đất hoặc sử dụng trong các ứng dụng công nghiệp.",
    image: danKhoanVietsov,
    imageAlt: "Thu hồi carbon",
    category: "Carbon Capture",
    publishDate: "2024-11-28",
    featured: false,
    author: "Phòng Môi trường",
    readTime: "8 phút",
  },
  {
    id: 10,
    title: "Hệ thống điều khiển thông minh cho nhà máy lọc dầu",
    content:
      "Phát triển hệ thống điều khiển thông minh sử dụng AI và machine learning để tối ưu hóa quy trình sản xuất trong nhà máy lọc dầu. Hệ thống có khả năng tự động điều chỉnh các thông số vận hành để đạt hiệu quả tối ưu.",
    image: hoiNghiSuKien,
    imageAlt: "Điều khiển nhà máy",
    category: "Smart Control",
    publishDate: "2024-11-25",
    featured: false,
    author: "Phòng Tự động hóa",
    readTime: "6 phút",
  },
  {
    id: 11,
    title: "Công nghệ drone và robot cho kiểm tra giàn khoan",
    content:
      "Nghiên cứu ứng dụng drone và robot để kiểm tra và bảo trì các giàn khoan dầu khí. Công nghệ này giúp giảm rủi ro cho con người và tăng hiệu quả kiểm tra trong môi trường biển khắc nghiệt.",
    image: hoiNghiPetro,
    imageAlt: "Drone kiểm tra giàn khoan",
    category: "Robotics",
    publishDate: "2024-11-22",
    featured: false,
    author: "Phòng Robot",
    readTime: "7 phút",
  },
  {
    id: 12,
    title: "Hệ thống giám sát môi trường biển thời gian thực",
    content:
      "Phát triển hệ thống giám sát môi trường biển thời gian thực sử dụng IoT và cảm biến tiên tiến. Hệ thống có khả năng theo dõi chất lượng nước, không khí và các yếu tố môi trường khác để đảm bảo tuân thủ các tiêu chuẩn môi trường.",
    image: daiHoiDaiBieu,
    imageAlt: "Giám sát môi trường",
    category: "Environmental Monitoring",
    publishDate: "2024-11-20",
    featured: false,
    author: "Phòng Môi trường",
    readTime: "6 phút",
  },
];
