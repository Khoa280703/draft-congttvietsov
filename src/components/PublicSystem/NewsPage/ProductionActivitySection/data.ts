import giaiBongDa from "@/assets/giaibongda.png";

export interface ProductionActivityData {
  id: number;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  timestamp: string;
  description: string;
}

export interface ProductionActivitySectionProps {
  className?: string;
}

export const defaultProductionActivityData: ProductionActivityData[] = [
  {
    id: 1,
    image: giaiBongDa,
    imageAlt: "Production facility with Vietsovpetro logo",
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title:
      "Vietsovpetro đạt kết quả sản xuất kinh doanh tích cực trong quý III/2024",
    timestamp: "10/15/2024 8:30:00 AM",
    description:
      "Trong quý III/2024, Vietsovpetro đã đạt được những kết quả sản xuất kinh doanh tích cực với sản lượng dầu thô khai thác đạt 2.8 triệu tấn, vượt kế hoạch 5.2%. Công ty đã triển khai hiệu quả các biện pháp tối ưu hóa sản xuất và nâng cao hiệu suất khai thác...",
  },
  {
    id: 2,
    image: giaiBongDa,
    imageAlt: "Oil drilling platform",
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Đưa vào vận hành giếng khoan mới tại mỏ Bạch Hổ",
    timestamp: "10/12/2024 2:15:30 PM",
    description:
      "Ngày 10/10/2024, Vietsovpetro đã chính thức đưa vào vận hành giếng khoan BH-15 tại mỏ Bạch Hổ với sản lượng dự kiến 1,200 thùng/ngày. Đây là một trong những giếng khoan có tiềm năng cao nhất trong khu vực...",
  },
  {
    id: 3,
    image: giaiBongDa,
    imageAlt: "Safety training session",
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title:
      "Tổ chức khóa đào tạo an toàn lao động cho toàn bộ nhân viên sản xuất",
    timestamp: "10/8/2024 9:45:00 AM",
    description:
      "Nhằm nâng cao ý thức an toàn lao động và giảm thiểu rủi ro trong quá trình sản xuất, Vietsovpetro đã tổ chức khóa đào tạo an toàn lao động cho hơn 500 nhân viên làm việc tại các giàn khoan...",
  },
  {
    id: 4,
    image: giaiBongDa,
    imageAlt: "Maintenance work on oil platform",
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Hoàn thành bảo dưỡng định kỳ giàn khoan Rồng Đỏ",
    timestamp: "10/5/2024 11:20:15 AM",
    description:
      "Sau 15 ngày thực hiện, Vietsovpetro đã hoàn thành công tác bảo dưỡng định kỳ giàn khoan Rồng Đỏ. Các thiết bị chính đã được kiểm tra, bảo dưỡng và đưa vào vận hành trở lại với hiệu suất tối ưu...",
  },
  {
    id: 5,
    image: giaiBongDa,
    imageAlt: "Environmental monitoring equipment",
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Triển khai hệ thống giám sát môi trường tự động tại các giàn khoan",
    timestamp: "10/2/2024 3:30:45 PM",
    description:
      "Vietsovpetro đã triển khai thành công hệ thống giám sát môi trường tự động tại 8 giàn khoan chính. Hệ thống sẽ giúp theo dõi liên tục các chỉ số môi trường và cảnh báo sớm các vấn đề tiềm ẩn...",
  },
  {
    id: 6,
    image: giaiBongDa,
    imageAlt: "Oil production chart",
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Sản lượng dầu thô tháng 9/2024 đạt 950,000 tấn",
    timestamp: "9/30/2024 4:15:20 PM",
    description:
      "Tháng 9/2024, Vietsovpetro đã khai thác được 950,000 tấn dầu thô, vượt kế hoạch 3.2%. Đây là tháng có sản lượng cao nhất trong năm 2024, thể hiện hiệu quả của các biện pháp tối ưu hóa sản xuất...",
  },
  {
    id: 7,
    image: giaiBongDa,
    imageAlt: "Technology upgrade meeting",
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Đầu tư 50 triệu USD nâng cấp công nghệ khai thác dầu khí",
    timestamp: "9/25/2024 10:00:00 AM",
    description:
      "Vietsovpetro đã phê duyệt kế hoạch đầu tư 50 triệu USD để nâng cấp công nghệ khai thác dầu khí. Dự án sẽ tập trung vào việc ứng dụng công nghệ AI và IoT trong quản lý sản xuất...",
  },
  {
    id: 8,
    image: giaiBongDa,
    imageAlt: "Oil export terminal",
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Xuất khẩu 2.5 triệu tấn dầu thô trong quý III/2024",
    timestamp: "9/20/2024 2:45:30 PM",
    description:
      "Trong quý III/2024, Vietsovpetro đã xuất khẩu 2.5 triệu tấn dầu thô, đạt doanh thu 1.8 tỷ USD. Sản phẩm được xuất khẩu chủ yếu sang các thị trường châu Á và châu Âu...",
  },
  {
    id: 9,
    image: giaiBongDa,
    imageAlt: "Research laboratory",
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Nghiên cứu phát triển công nghệ khai thác dầu khí sâu",
    timestamp: "9/15/2024 9:15:45 AM",
    description:
      "Vietsovpetro đang triển khai dự án nghiên cứu phát triển công nghệ khai thác dầu khí ở độ sâu trên 3,000m. Dự án có tổng vốn đầu tư 20 triệu USD và dự kiến hoàn thành trong 3 năm...",
  },
];
