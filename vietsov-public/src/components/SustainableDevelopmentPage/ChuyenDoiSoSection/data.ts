import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";

export interface ChuyenDoiSoArticle {
  id: number;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  category: string;
  publishDate: string;
  featured: boolean;
}

export const chuyenDoiSoArticles: ChuyenDoiSoArticle[] = [
  {
    id: 1,
    title: "Hệ thống quản lý thông minh: Tương lai của ngành dầu khí",
    content:
      "Vietsovpetro đã triển khai hệ thống quản lý thông minh tích hợp AI, IoT và Big Data để tối ưu hóa toàn bộ chuỗi giá trị từ khai thác đến phân phối. Hệ thống này giúp dự đoán sự cố, tối ưu hóa năng lượng và giảm thiểu tác động môi trường. Với khả năng phân tích dữ liệu thời gian thực, chúng tôi có thể đưa ra các quyết định nhanh chóng và chính xác, nâng cao hiệu quả sản xuất và đảm bảo an toàn cho người lao động.",
    image: danKhoanVietsov,
    imageAlt: "Hệ thống quản lý thông minh",
    category: "AI & IoT",
    publishDate: "2024-12-20",
    featured: true,
  },
  {
    id: 2,
    title: "Blockchain trong chuỗi cung ứng dầu khí",
    content:
      "Vietsovpetro triển khai công nghệ blockchain để tạo ra một hệ thống minh bạch và an toàn cho chuỗi cung ứng dầu khí. Công nghệ này giúp truy xuất nguồn gốc, đảm bảo chất lượng và tuân thủ các quy định môi trường. Mỗi thùng dầu được gắn với một mã định danh duy nhất, cho phép theo dõi toàn bộ hành trình từ khai thác đến tiêu dùng cuối cùng.",
    image: hoiNghiSuKien,
    imageAlt: "Blockchain trong chuỗi cung ứng",
    category: "Blockchain",
    publishDate: "2024-12-18",
    featured: false,
  },
  {
    id: 3,
    title: "Cloud Computing: Nền tảng số hóa toàn diện",
    content:
      "Vietsovpetro đã hoàn thành việc chuyển đổi toàn bộ hệ thống IT lên cloud, tạo ra một nền tảng số hóa mạnh mẽ và linh hoạt. Hệ thống cloud giúp tăng cường bảo mật, giảm chi phí vận hành và nâng cao hiệu quả. Nhân viên có thể truy cập dữ liệu và ứng dụng từ bất kỳ đâu, tạo điều kiện làm việc linh hoạt và nâng cao năng suất.",
    image: hoiNghiPetro,
    imageAlt: "Cloud Computing tại Vietsovpetro",
    category: "Cloud",
    publishDate: "2024-12-15",
    featured: false,
  },
  {
    id: 4,
    title: "Digital Twin: Mô phỏng số cho các giàn khoan",
    content:
      "Vietsovpetro đang phát triển công nghệ Digital Twin để tạo ra các mô hình số chính xác của các giàn khoan. Công nghệ này cho phép mô phỏng, dự đoán và tối ưu hóa vận hành trong môi trường ảo trước khi áp dụng thực tế. Digital Twin giúp giảm thiểu rủi ro, tối ưu hóa hiệu suất và kéo dài tuổi thọ thiết bị.",
    image: daiHoiDaiBieu,
    imageAlt: "Digital Twin cho giàn khoan",
    category: "Digital Twin",
    publishDate: "2024-12-10",
    featured: false,
  },
  {
    id: 5,
    title: "Big Data Analytics: Khai thác dữ liệu thông minh",
    content:
      "Vietsovpetro triển khai hệ thống Big Data Analytics để phân tích khối lượng dữ liệu khổng lồ từ các hoạt động sản xuất. Hệ thống này giúp phát hiện các xu hướng, dự đoán nhu cầu thị trường và tối ưu hóa quy trình sản xuất. Với khả năng xử lý hàng triệu điểm dữ liệu mỗi giây, chúng tôi có thể đưa ra các quyết định dựa trên dữ liệu thực tế.",
    image: danKhoanVietsov,
    imageAlt: "Big Data Analytics",
    category: "Big Data",
    publishDate: "2024-12-08",
    featured: false,
  },
  {
    id: 6,
    title: "Automation: Tự động hóa quy trình sản xuất",
    content:
      "Vietsovpetro đã đầu tư mạnh mẽ vào công nghệ tự động hóa để nâng cao hiệu quả sản xuất. Hệ thống tự động hóa bao gồm robot công nghiệp, hệ thống điều khiển thông minh và các giải pháp IoT. Điều này giúp giảm thiểu lỗi con người, tăng năng suất và đảm bảo an toàn lao động.",
    image: hoiNghiSuKien,
    imageAlt: "Tự động hóa quy trình sản xuất",
    category: "Automation",
    publishDate: "2024-12-05",
    featured: false,
  },
  {
    id: 7,
    title: "Cybersecurity: Bảo mật thông tin trong kỷ nguyên số",
    content:
      "Trong kỷ nguyên số hóa, bảo mật thông tin là ưu tiên hàng đầu của Vietsovpetro. Chúng tôi đã triển khai hệ thống bảo mật đa lớp bao gồm mã hóa dữ liệu, xác thực đa yếu tố và giám sát an ninh mạng 24/7. Hệ thống này đảm bảo tính bảo mật và toàn vẹn của dữ liệu quan trọng.",
    image: hoiNghiPetro,
    imageAlt: "Bảo mật thông tin",
    category: "Cybersecurity",
    publishDate: "2024-12-03",
    featured: false,
  },
  {
    id: 8,
    title: "Mobile Solutions: Ứng dụng di động cho nhân viên",
    content:
      "Vietsovpetro đã phát triển các ứng dụng di động chuyên dụng cho nhân viên, cho phép truy cập thông tin sản xuất, báo cáo sự cố và quản lý công việc từ xa. Các ứng dụng này được tích hợp với hệ thống ERP và IoT, tạo ra một môi trường làm việc số hóa hoàn toàn.",
    image: daiHoiDaiBieu,
    imageAlt: "Ứng dụng di động",
    category: "Mobile",
    publishDate: "2024-12-01",
    featured: false,
  },
  {
    id: 9,
    title: "AR/VR: Thực tế ảo trong đào tạo và vận hành",
    content:
      "Vietsovpetro đang triển khai công nghệ AR/VR để tạo ra các môi trường đào tạo ảo cho nhân viên. Công nghệ này cho phép nhân viên thực hành các tình huống phức tạp trong môi trường an toàn, nâng cao kỹ năng và giảm thiểu rủi ro. AR/VR cũng được sử dụng để mô phỏng các quy trình vận hành phức tạp.",
    image: danKhoanVietsov,
    imageAlt: "AR/VR trong đào tạo",
    category: "AR/VR",
    publishDate: "2024-11-28",
    featured: false,
  },
  {
    id: 10,
    title: "5G Network: Kết nối siêu tốc cho tương lai",
    content:
      "Vietsovpetro đang triển khai mạng 5G tại các cơ sở sản xuất để hỗ trợ các ứng dụng IoT và AI. Mạng 5G với tốc độ cao và độ trễ thấp cho phép kết nối hàng triệu thiết bị IoT, tạo ra một hệ sinh thái số hóa hoàn chỉnh. Điều này mở ra những khả năng mới trong việc giám sát và điều khiển từ xa.",
    image: hoiNghiSuKien,
    imageAlt: "Mạng 5G",
    category: "5G",
    publishDate: "2024-11-25",
    featured: false,
  },
  {
    id: 11,
    title: "Machine Learning: Học máy trong dự đoán sự cố",
    content:
      "Vietsovpetro đã triển khai các thuật toán machine learning để phân tích dữ liệu từ các cảm biến và dự đoán sự cố trước khi chúng xảy ra. Hệ thống này có thể phát hiện các dấu hiệu bất thường và đưa ra cảnh báo sớm, giúp ngăn chặn sự cố và giảm thiểu thiệt hại. Machine learning cũng được sử dụng để tối ưu hóa quy trình sản xuất.",
    image: hoiNghiPetro,
    imageAlt: "Machine Learning",
    category: "Machine Learning",
    publishDate: "2024-11-22",
    featured: false,
  },
  {
    id: 12,
    title: "Edge Computing: Xử lý dữ liệu tại chỗ",
    content:
      "Vietsovpetro đang triển khai edge computing tại các cơ sở sản xuất để xử lý dữ liệu ngay tại nguồn. Điều này giúp giảm độ trễ, tiết kiệm băng thông và nâng cao hiệu quả xử lý. Edge computing đặc biệt hữu ích cho các ứng dụng IoT và AI yêu cầu phản hồi nhanh chóng.",
    image: daiHoiDaiBieu,
    imageAlt: "Edge Computing",
    category: "Edge Computing",
    publishDate: "2024-11-20",
    featured: false,
  },
];
