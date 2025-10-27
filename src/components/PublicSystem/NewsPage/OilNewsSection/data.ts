import giaiBongDa from "@/assets/giaibongda.png";

export interface OilNewsData {
  id: number;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  timestamp: string;
  description: string;
}

export interface OilNewsSectionProps {
  className?: string;
}

export const defaultOilNewsData: OilNewsData[] = [
  {
    id: 1,
    image: giaiBongDa,
    imageAlt: "Oil price chart and market analysis",
    category: "TIN DẦU KHÍ",
    title: "Giá dầu thô Brent tăng 2.5% trong tuần qua, đạt 95.2 USD/thùng",
    timestamp: "10/18/2024 7:45:00 AM",
    description:
      "Giá dầu thô Brent đã tăng 2.5% trong tuần qua, đạt mức 95.2 USD/thùng do lo ngại về nguồn cung từ Trung Đông và nhu cầu tăng từ các nền kinh tế châu Á. Các chuyên gia dự báo giá dầu có thể tiếp tục tăng trong thời gian tới...",
  },
  {
    id: 2,
    image: giaiBongDa,
    imageAlt: "OPEC meeting conference",
    category: "TIN DẦU KHÍ",
    title: "OPEC+ quyết định duy trì mức cắt giảm sản lượng 2 triệu thùng/ngày",
    timestamp: "10/16/2024 3:20:15 PM",
    description:
      "Tại cuộc họp thường kỳ, OPEC+ đã quyết định duy trì mức cắt giảm sản lượng 2 triệu thùng/ngày cho đến hết quý I/2025. Quyết định này nhằm ổn định thị trường dầu khí toàn cầu...",
  },
  {
    id: 3,
    image: giaiBongDa,
    imageAlt: "Oil refinery complex",
    category: "TIN DẦU KHÍ",
    title: "Việt Nam tăng cường nhập khẩu dầu thô từ Nga và Trung Đông",
    timestamp: "10/14/2024 11:30:30 AM",
    description:
      "Theo báo cáo của Bộ Công Thương, Việt Nam đã tăng cường nhập khẩu dầu thô từ Nga và các nước Trung Đông trong 9 tháng đầu năm 2024. Tổng lượng nhập khẩu đạt 8.5 triệu tấn, tăng 15% so với cùng kỳ...",
  },
  {
    id: 4,
    image: giaiBongDa,
    imageAlt: "Oil exploration vessel",
    category: "TIN DẦU KHÍ",
    title: "Phát hiện mỏ dầu mới có trữ lượng 500 triệu thùng tại Biển Đông",
    timestamp: "10/12/2024 9:15:45 AM",
    description:
      "Một tập đoàn dầu khí quốc tế đã công bố phát hiện mỏ dầu mới có trữ lượng ước tính 500 triệu thùng tại khu vực Biển Đông. Đây được coi là một trong những phát hiện lớn nhất trong năm 2024...",
  },
  {
    id: 5,
    image: giaiBongDa,
    imageAlt: "Renewable energy wind farm",
    category: "TIN DẦU KHÍ",
    title: "Ngành dầu khí toàn cầu chuyển hướng đầu tư vào năng lượng tái tạo",
    timestamp: "10/10/2024 4:45:20 PM",
    description:
      "Các tập đoàn dầu khí lớn trên thế giới đang chuyển hướng đầu tư mạnh mẽ vào năng lượng tái tạo. Shell, BP và TotalEnergies đã cam kết đầu tư tổng cộng 100 tỷ USD vào năng lượng sạch trong 5 năm tới...",
  },
  {
    id: 6,
    image: giaiBongDa,
    imageAlt: "Oil pipeline infrastructure",
    category: "TIN DẦU KHÍ",
    title: "Đường ống dẫn dầu mới nối Việt Nam - Trung Quốc đi vào hoạt động",
    timestamp: "10/8/2024 2:30:15 PM",
    description:
      "Đường ống dẫn dầu mới nối Việt Nam - Trung Quốc đã chính thức đi vào hoạt động với công suất 200,000 thùng/ngày. Dự án có tổng vốn đầu tư 2.5 tỷ USD và sẽ góp phần tăng cường hợp tác năng lượng...",
  },
  {
    id: 7,
    image: giaiBongDa,
    imageAlt: "Oil trading floor",
    category: "TIN DẦU KHÍ",
    title: "Thị trường dầu khí châu Á tăng trưởng mạnh trong quý III/2024",
    timestamp: "10/5/2024 8:20:30 AM",
    description:
      "Theo báo cáo của Hiệp hội Dầu khí châu Á, thị trường dầu khí khu vực đã tăng trưởng 12% trong quý III/2024. Nhu cầu tiêu thụ tăng mạnh từ Trung Quốc, Ấn Độ và các nước ASEAN...",
  },
  {
    id: 8,
    image: giaiBongDa,
    imageAlt: "Oil storage tanks",
    category: "TIN DẦU KHÍ",
    title: "Dự trữ dầu thô toàn cầu giảm xuống mức thấp nhất trong 5 năm",
    timestamp: "10/3/2024 1:15:45 PM",
    description:
      "Theo Cơ quan Năng lượng Quốc tế (IEA), dự trữ dầu thô toàn cầu đã giảm xuống mức thấp nhất trong 5 năm qua. Tình trạng này có thể dẫn đến biến động giá dầu trong thời gian tới...",
  },
  {
    id: 9,
    image: giaiBongDa,
    imageAlt: "Oil drilling technology",
    category: "TIN DẦU KHÍ",
    title: "Công nghệ khai thác dầu khí sâu đạt bước tiến mới",
    timestamp: "10/1/2024 6:30:00 PM",
    description:
      "Các nhà khoa học đã phát triển thành công công nghệ khai thác dầu khí ở độ sâu trên 4,000m với hiệu suất cao hơn 30% so với phương pháp truyền thống. Đây là bước đột phá quan trọng trong ngành dầu khí...",
  },
];
