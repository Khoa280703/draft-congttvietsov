import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";

export interface ATSKMTArticle {
  id: number;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  category: string;
  publishDate: string;
  featured: boolean;
}

export const atskmtArticles: ATSKMTArticle[] = [
  {
    id: 1,
    title: "An toàn sức khỏe môi trường: Nền tảng phát triển bền vững",
    content:
      "Vietsovpetro cam kết đảm bảo an toàn sức khỏe môi trường trong tất cả các hoạt động sản xuất, từ khai thác đến vận chuyển dầu khí. Chúng tôi đã xây dựng một hệ thống quản lý ATSKMT toàn diện, bao gồm các chính sách, quy trình và biện pháp bảo vệ môi trường, đảm bảo sức khỏe người lao động và cộng đồng xung quanh. Hệ thống này được thiết kế để tuân thủ các tiêu chuẩn quốc tế và đảm bảo phát triển bền vững.",
    image: danKhoanVietsov,
    imageAlt: "An toàn sức khỏe môi trường tại Vietsovpetro",
    category: "An toàn",
    publishDate: "2024-12-20",
    featured: true,
  },
  {
    id: 2,
    title: "Công nghệ giám sát môi trường thời gian thực",
    content:
      "Vietsovpetro đã triển khai hệ thống giám sát môi trường thời gian thực sử dụng công nghệ Internet of Things (IoT) và Trí tuệ nhân tạo (AI). Hệ thống này cho phép theo dõi liên tục các chỉ số môi trường quan trọng như chất lượng không khí, nước, đất và tiếng ồn. Dữ liệu được thu thập và phân tích tự động, giúp phát hiện sớm các vấn đề môi trường và đưa ra các biện pháp khắc phục kịp thời.",
    image: hoiNghiSuKien,
    imageAlt: "Hệ thống giám sát môi trường",
    category: "Công nghệ",
    publishDate: "2024-12-18",
    featured: false,
  },
  {
    id: 3,
    title: "Chương trình đào tạo ATSKMT cho nhân viên",
    content:
      "Vietsovpetro tổ chức các chương trình đào tạo ATSKMT toàn diện cho tất cả nhân viên, từ cấp quản lý đến công nhân trực tiếp sản xuất. Chương trình bao gồm các nội dung về quy định an toàn, bảo vệ môi trường, sơ cứu y tế và ứng phó sự cố. Các khóa đào tạo được thiết kế phù hợp với từng vị trí công việc và được cập nhật thường xuyên theo các quy định mới nhất.",
    image: hoiNghiPetro,
    imageAlt: "Đào tạo ATSKMT cho nhân viên",
    category: "Đào tạo",
    publishDate: "2024-12-15",
    featured: false,
  },
  {
    id: 4,
    title: "Báo cáo tác động môi trường hàng năm",
    content:
      "Hàng năm, Vietsovpetro công bố báo cáo tác động môi trường chi tiết, bao gồm các chỉ số môi trường, biện pháp bảo vệ đã thực hiện và kế hoạch cải thiện trong tương lai. Báo cáo được kiểm toán độc lập và tuân thủ các tiêu chuẩn quốc tế như ISO 14001. Điều này thể hiện cam kết minh bạch và trách nhiệm của Vietsovpetro trong việc bảo vệ môi trường.",
    image: daiHoiDaiBieu,
    imageAlt: "Báo cáo tác động môi trường",
    category: "Báo cáo",
    publishDate: "2024-12-10",
    featured: false,
  },
  {
    id: 5,
    title: "Hệ thống quản lý chất thải thông minh",
    content:
      "Vietsovpetro đã triển khai hệ thống quản lý chất thải thông minh sử dụng công nghệ IoT và AI để phân loại, xử lý và tái chế chất thải một cách hiệu quả. Hệ thống này giúp giảm thiểu tác động môi trường, tiết kiệm chi phí xử lý và tạo ra giá trị kinh tế từ việc tái chế. Tất cả chất thải được theo dõi từ nguồn phát sinh đến điểm xử lý cuối cùng.",
    image: danKhoanVietsov,
    imageAlt: "Hệ thống quản lý chất thải",
    category: "Môi trường",
    publishDate: "2024-12-08",
    featured: false,
  },
  {
    id: 6,
    title: "Chương trình sức khỏe nghề nghiệp",
    content:
      "Vietsovpetro triển khai chương trình sức khỏe nghề nghiệp toàn diện cho nhân viên, bao gồm khám sức khỏe định kỳ, đánh giá rủi ro nghề nghiệp và các biện pháp phòng ngừa. Chương trình được thiết kế đặc biệt cho các hoạt động trong ngành dầu khí, bao gồm bảo vệ khỏi các tác nhân hóa học, vật lý và sinh học. Nhân viên được cung cấp thiết bị bảo hộ cá nhân hiện đại và được đào tạo về cách sử dụng an toàn.",
    image: hoiNghiSuKien,
    imageAlt: "Chương trình sức khỏe nghề nghiệp",
    category: "Sức khỏe",
    publishDate: "2024-12-05",
    featured: false,
  },
  {
    id: 7,
    title: "Ứng phó sự cố môi trường",
    content:
      "Vietsovpetro đã xây dựng hệ thống ứng phó sự cố môi trường toàn diện, bao gồm các kế hoạch ứng phó chi tiết, đội ngũ chuyên gia và trang thiết bị chuyên dụng. Hệ thống này được thiết kế để xử lý nhanh chóng và hiệu quả các sự cố môi trường, giảm thiểu tác động và bảo vệ sức khỏe cộng đồng. Các cuộc diễn tập được tổ chức thường xuyên để đảm bảo sẵn sàng ứng phó.",
    image: hoiNghiPetro,
    imageAlt: "Ứng phó sự cố môi trường",
    category: "Ứng phó",
    publishDate: "2024-12-03",
    featured: false,
  },
  {
    id: 8,
    title: "Năng lượng tái tạo và hiệu quả năng lượng",
    content:
      "Vietsovpetro đang đầu tư mạnh mẽ vào các dự án năng lượng tái tạo và nâng cao hiệu quả sử dụng năng lượng. Chúng tôi đã lắp đặt hệ thống năng lượng mặt trời tại các cơ sở sản xuất và triển khai các giải pháp tiết kiệm năng lượng. Điều này giúp giảm phát thải khí nhà kính và hướng tới mục tiêu trung hòa carbon vào năm 2050.",
    image: daiHoiDaiBieu,
    imageAlt: "Năng lượng tái tạo",
    category: "Năng lượng",
    publishDate: "2024-12-01",
    featured: false,
  },
  {
    id: 9,
    title: "Bảo vệ đa dạng sinh học",
    content:
      "Vietsovpetro cam kết bảo vệ đa dạng sinh học trong các hoạt động sản xuất. Chúng tôi đã thực hiện các nghiên cứu đánh giá tác động đến hệ sinh thái biển và triển khai các biện pháp bảo vệ. Các dự án khôi phục môi trường được thực hiện thường xuyên để đảm bảo sự phát triển bền vững của hệ sinh thái biển.",
    image: danKhoanVietsov,
    imageAlt: "Bảo vệ đa dạng sinh học",
    category: "Sinh học",
    publishDate: "2024-11-28",
    featured: false,
  },
  {
    id: 10,
    title: "Tuân thủ quy định môi trường quốc tế",
    content:
      "Vietsovpetro tuân thủ nghiêm ngặt các quy định môi trường quốc tế như MARPOL, OSPAR và các tiêu chuẩn ISO. Chúng tôi đã được chứng nhận ISO 14001 về hệ thống quản lý môi trường và OHSAS 18001 về an toàn sức khỏe nghề nghiệp. Việc tuân thủ các tiêu chuẩn quốc tế giúp nâng cao uy tín và khả năng cạnh tranh trên thị trường toàn cầu.",
    image: hoiNghiSuKien,
    imageAlt: "Tuân thủ quy định môi trường",
    category: "Tuân thủ",
    publishDate: "2024-11-25",
    featured: false,
  },
  {
    id: 11,
    title: "Công nghệ xử lý nước thải tiên tiến",
    content:
      "Vietsovpetro đã đầu tư vào các công nghệ xử lý nước thải tiên tiến để đảm bảo nước thải được xử lý đạt tiêu chuẩn môi trường trước khi thải ra môi trường. Hệ thống xử lý sử dụng công nghệ sinh học, hóa học và vật lý để loại bỏ các chất ô nhiễm. Nước thải sau xử lý có thể được tái sử dụng cho các mục đích khác, góp phần tiết kiệm tài nguyên nước.",
    image: hoiNghiPetro,
    imageAlt: "Công nghệ xử lý nước thải",
    category: "Xử lý",
    publishDate: "2024-11-22",
    featured: false,
  },
  {
    id: 12,
    title: "Giám sát sức khỏe cộng đồng",
    content:
      "Vietsovpetro thực hiện chương trình giám sát sức khỏe cộng đồng xung quanh các cơ sở sản xuất. Chương trình bao gồm khám sức khỏe định kỳ, đánh giá tác động môi trường và các biện pháp bảo vệ sức khỏe. Chúng tôi hợp tác chặt chẽ với các cơ quan y tế địa phương và tổ chức các hoạt động nâng cao nhận thức về sức khỏe môi trường cho cộng đồng.",
    image: daiHoiDaiBieu,
    imageAlt: "Giám sát sức khỏe cộng đồng",
    category: "Cộng đồng",
    publishDate: "2024-11-20",
    featured: false,
  },
];
