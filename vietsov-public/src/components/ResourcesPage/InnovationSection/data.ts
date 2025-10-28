import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";

export interface InnovationItem {
  id: number;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  category: string;
  publishDate: string;
  featured: boolean;
  inventor: string;
  status: "pending" | "approved" | "implemented";
  impact: string;
}

export const innovationItems: InnovationItem[] = [
  {
    id: 1,
    title: "Hệ thống cảm biến thông minh cho giám sát môi trường biển",
    content:
      "Sáng kiến phát triển hệ thống cảm biến thông minh sử dụng IoT để giám sát liên tục chất lượng nước biển và phát hiện sớm các vấn đề môi trường. Hệ thống có khả năng truyền dữ liệu real-time và cảnh báo tự động khi phát hiện các thay đổi bất thường trong môi trường biển.",
    image: danKhoanVietsov,
    imageAlt: "Cảm biến thông minh",
    category: "IoT & Cảm biến",
    publishDate: "2024-12-20",
    featured: true,
    inventor: "Nguyễn Văn A",
    status: "implemented",
    impact: "Giảm 30% chi phí giám sát môi trường",
  },
  {
    id: 2,
    title: "Robot tự động kiểm tra và bảo trì thiết bị dưới nước",
    content:
      "Sáng chế robot tự động có khả năng hoạt động dưới nước để kiểm tra và bảo trì các thiết bị dầu khí. Robot được trang bị camera độ phân giải cao, cánh tay robot linh hoạt và hệ thống định vị chính xác, giúp giảm thiểu rủi ro cho con người trong các hoạt động bảo trì nguy hiểm.",
    image: hoiNghiSuKien,
    imageAlt: "Robot bảo trì dưới nước",
    category: "Robot & Tự động hóa",
    publishDate: "2024-12-18",
    featured: false,
    inventor: "Trần Thị B",
    status: "approved",
    impact: "Tăng 50% hiệu quả bảo trì",
  },
  {
    id: 3,
    title: "Phương pháp xử lý nước thải bằng công nghệ sinh học",
    content:
      "Sáng kiến sử dụng vi khuẩn có lợi để xử lý nước thải từ hoạt động khai thác dầu khí. Phương pháp này thân thiện với môi trường, chi phí thấp và hiệu quả cao hơn so với các phương pháp truyền thống. Đã được thử nghiệm thành công tại một số cơ sở sản xuất.",
    image: hoiNghiPetro,
    imageAlt: "Xử lý nước thải sinh học",
    category: "Công nghệ sinh học",
    publishDate: "2024-12-15",
    featured: false,
    inventor: "Lê Văn C",
    status: "implemented",
    impact: "Giảm 40% chi phí xử lý nước thải",
  },
  {
    id: 4,
    title: "Hệ thống dự báo sự cố bằng trí tuệ nhân tạo",
    content:
      "Sáng kiến phát triển hệ thống dự báo sự cố sử dụng AI và machine learning để phân tích dữ liệu vận hành và dự đoán các sự cố tiềm ẩn. Hệ thống có thể cảnh báo trước 24-48 giờ, giúp ngăn chặn sự cố và giảm thiểu thiệt hại.",
    image: daiHoiDaiBieu,
    imageAlt: "AI dự báo sự cố",
    category: "Trí tuệ nhân tạo",
    publishDate: "2024-12-10",
    featured: false,
    inventor: "Phạm Thị D",
    status: "pending",
    impact: "Giảm 60% sự cố không mong muốn",
  },
  {
    id: 5,
    title: "Vật liệu composite chống ăn mòn cho thiết bị biển",
    content:
      "Sáng chế vật liệu composite mới có khả năng chống ăn mòn cao trong môi trường nước biển mặn. Vật liệu được phát triển từ các nguyên liệu tự nhiên và có tuổi thọ gấp 3 lần so với vật liệu truyền thống, giúp giảm chi phí thay thế và bảo trì thiết bị.",
    image: danKhoanVietsov,
    imageAlt: "Vật liệu composite",
    category: "Vật liệu mới",
    publishDate: "2024-12-08",
    featured: false,
    inventor: "Hoàng Văn E",
    status: "approved",
    impact: "Tăng 200% tuổi thọ thiết bị",
  },
  {
    id: 6,
    title: "Hệ thống năng lượng mặt trời nổi cho giàn khoan",
    content:
      "Sáng kiến lắp đặt hệ thống năng lượng mặt trời nổi trên mặt nước xung quanh giàn khoan để cung cấp năng lượng sạch. Hệ thống có khả năng tự động điều chỉnh theo hướng ánh sáng mặt trời và chống chịu được sóng biển mạnh.",
    image: hoiNghiSuKien,
    imageAlt: "Năng lượng mặt trời nổi",
    category: "Năng lượng tái tạo",
    publishDate: "2024-12-05",
    featured: false,
    inventor: "Võ Thị F",
    status: "implemented",
    impact: "Giảm 25% tiêu thụ năng lượng hóa thạch",
  },
  {
    id: 7,
    title: "Hệ thống cảnh báo sớm rò rỉ dầu khí",
    content:
      "Sáng kiến phát triển hệ thống cảnh báo sớm rò rỉ dầu khí sử dụng cảm biến hóa học và công nghệ AI. Hệ thống có khả năng phát hiện rò rỉ trong vòng vài phút và tự động kích hoạt các biện pháp ứng phó khẩn cấp.",
    image: hoiNghiPetro,
    imageAlt: "Cảnh báo rò rỉ dầu khí",
    category: "An toàn",
    publishDate: "2024-12-03",
    featured: false,
    inventor: "Đỗ Văn G",
    status: "approved",
    impact: "Giảm 80% thời gian phát hiện rò rỉ",
  },
  {
    id: 8,
    title: "Công nghệ tái chế chất thải từ hoạt động dầu khí",
    content:
      "Sáng kiến phát triển công nghệ tái chế chất thải từ hoạt động khai thác dầu khí thành các sản phẩm có giá trị. Công nghệ này giúp giảm thiểu chất thải và tạo ra nguồn thu nhập bổ sung từ việc tái chế.",
    image: daiHoiDaiBieu,
    imageAlt: "Tái chế chất thải",
    category: "Tái chế",
    publishDate: "2024-12-01",
    featured: false,
    inventor: "Bùi Thị H",
    status: "implemented",
    impact: "Tái chế 90% chất thải công nghiệp",
  },
  {
    id: 9,
    title: "Hệ thống điều khiển giàn khoan từ xa",
    content:
      "Sáng kiến phát triển hệ thống điều khiển giàn khoan từ xa sử dụng công nghệ 5G và AI. Hệ thống cho phép vận hành giàn khoan từ trung tâm điều khiển trên đất liền, giảm thiểu rủi ro cho nhân viên và tăng hiệu quả vận hành.",
    image: danKhoanVietsov,
    imageAlt: "Điều khiển từ xa",
    category: "Điều khiển từ xa",
    publishDate: "2024-11-28",
    featured: false,
    inventor: "Ngô Văn I",
    status: "pending",
    impact: "Giảm 70% thời gian vận hành",
  },
  {
    id: 10,
    title: "Công nghệ lưu trữ năng lượng cho giàn khoan",
    content:
      "Sáng kiến phát triển hệ thống lưu trữ năng lượng tiên tiến cho các giàn khoan dầu khí. Hệ thống sử dụng công nghệ pin lithium-ion và siêu tụ điện để lưu trữ năng lượng từ các nguồn tái tạo và cung cấp điện ổn định cho hoạt động.",
    image: hoiNghiSuKien,
    imageAlt: "Lưu trữ năng lượng",
    category: "Lưu trữ năng lượng",
    publishDate: "2024-11-25",
    featured: false,
    inventor: "Lý Thị K",
    status: "approved",
    impact: "Tăng 40% hiệu quả sử dụng năng lượng",
  },
  {
    id: 11,
    title: "Hệ thống giám sát sức khỏe nhân viên trên giàn khoan",
    content:
      "Sáng kiến phát triển hệ thống giám sát sức khỏe nhân viên trên giàn khoan sử dụng thiết bị đeo thông minh và AI. Hệ thống có khả năng theo dõi các chỉ số sức khỏe và cảnh báo sớm các vấn đề sức khỏe tiềm ẩn.",
    image: hoiNghiPetro,
    imageAlt: "Giám sát sức khỏe",
    category: "Sức khỏe",
    publishDate: "2024-11-22",
    featured: false,
    inventor: "Phan Văn L",
    status: "implemented",
    impact: "Giảm 50% tai nạn lao động",
  },
  {
    id: 12,
    title: "Công nghệ tối ưu hóa quy trình sản xuất bằng AI",
    content:
      "Sáng kiến ứng dụng AI để tối ưu hóa quy trình sản xuất dầu khí. Hệ thống sử dụng machine learning để phân tích dữ liệu sản xuất và tự động điều chỉnh các thông số vận hành để đạt hiệu quả tối ưu.",
    image: daiHoiDaiBieu,
    imageAlt: "Tối ưu hóa AI",
    category: "Tối ưu hóa",
    publishDate: "2024-11-20",
    featured: false,
    inventor: "Trịnh Thị M",
    status: "approved",
    impact: "Tăng 35% hiệu suất sản xuất",
  },
];
