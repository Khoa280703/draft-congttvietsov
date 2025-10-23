import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";

export interface TruyenThongArticle {
  id: number;
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  category: string;
  publishDate: string;
  featured: boolean;
}

export const truyenThongArticles: TruyenThongArticle[] = [
  {
    id: 1,
    title: "Văn hóa doanh nghiệp Vietsovpetro: Sức mạnh từ sự đoàn kết",
    content:
      "Xây dựng văn hóa doanh nghiệp mạnh mẽ dựa trên giá trị cốt lõi, tạo nên sức mạnh tập thể và tinh thần đoàn kết trong toàn bộ tổ chức. Vietsovpetro đã xây dựng một hệ thống giá trị cốt lõi bao gồm: Tôn trọng, Trách nhiệm, Sáng tạo, Hợp tác và Phát triển bền vững. Những giá trị này được thể hiện trong mọi hoạt động của công ty, từ quyết định chiến lược đến các hoạt động hàng ngày của nhân viên.",
    image: danKhoanVietsov,
    imageAlt: "Văn hóa doanh nghiệp Vietsovpetro",
    category: "Văn hóa",
    publishDate: "2024-12-20",
    featured: true,
  },
  {
    id: 2,
    title: "Hoạt động xã hội: Cầu nối giữa doanh nghiệp và cộng đồng",
    content:
      "Vietsovpetro luôn coi trọng trách nhiệm xã hội và tích cực tham gia các hoạt động vì cộng đồng. Chúng tôi đã triển khai nhiều chương trình hỗ trợ giáo dục, y tế, phát triển cơ sở hạ tầng và tạo việc làm cho người dân địa phương. Các hoạt động này không chỉ góp phần phát triển cộng đồng mà còn xây dựng mối quan hệ tốt đẹp giữa doanh nghiệp và xã hội.",
    image: hoiNghiSuKien,
    imageAlt: "Hoạt động xã hội Vietsovpetro",
    category: "Xã hội",
    publishDate: "2024-12-18",
    featured: false,
  },
  {
    id: 3,
    title: "Chương trình phát triển nhân tài trẻ",
    content:
      "Vietsovpetro triển khai chương trình phát triển nhân tài trẻ với mục tiêu phát hiện, đào tạo và phát triển các tài năng trẻ trong tổ chức. Chương trình bao gồm các hoạt động mentoring, training, và cơ hội thăng tiến. Chúng tôi tin rằng đầu tư vào thế hệ trẻ là đầu tư vào tương lai của công ty và đất nước.",
    image: hoiNghiPetro,
    imageAlt: "Phát triển nhân tài trẻ",
    category: "Nhân tài",
    publishDate: "2024-12-15",
    featured: false,
  },
  {
    id: 4,
    title: "Báo cáo bền vững 2024: Hành trình phát triển xanh",
    content:
      "Báo cáo bền vững 2024 của Vietsovpetro phản ánh những nỗ lực và thành tựu trong việc thực hiện các mục tiêu phát triển bền vững. Báo cáo bao gồm các chỉ số về môi trường, xã hội và quản trị (ESG), thể hiện cam kết của công ty trong việc phát triển bền vững và trách nhiệm xã hội. Đây là minh chứng cho sự minh bạch và trách nhiệm của Vietsovpetro.",
    image: daiHoiDaiBieu,
    imageAlt: "Báo cáo bền vững 2024",
    category: "Bền vững",
    publishDate: "2024-12-10",
    featured: false,
  },
  {
    id: 5,
    title: "Chương trình đào tạo và phát triển nhân sự",
    content:
      "Vietsovpetro đầu tư mạnh mẽ vào việc đào tạo và phát triển nhân sự, tạo cơ hội học tập và phát triển nghề nghiệp cho tất cả nhân viên. Chương trình bao gồm các khóa đào tạo kỹ năng chuyên môn, kỹ năng mềm và phát triển lãnh đạo. Chúng tôi tin rằng nhân sự là tài sản quý giá nhất của công ty và việc đầu tư vào con người sẽ mang lại lợi ích lâu dài.",
    image: danKhoanVietsov,
    imageAlt: "Đào tạo và phát triển nhân sự",
    category: "Đào tạo",
    publishDate: "2024-12-08",
    featured: false,
  },
  {
    id: 6,
    title: "Hoạt động từ thiện và hỗ trợ cộng đồng",
    content:
      "Vietsovpetro thường xuyên tổ chức các hoạt động từ thiện và hỗ trợ cộng đồng, đặc biệt là trong các tình huống khó khăn như thiên tai, dịch bệnh. Chúng tôi đã hỗ trợ xây dựng trường học, bệnh viện và các công trình công cộng khác. Các hoạt động này thể hiện tinh thần tương thân tương ái và trách nhiệm xã hội của Vietsovpetro.",
    image: hoiNghiSuKien,
    imageAlt: "Hoạt động từ thiện",
    category: "Từ thiện",
    publishDate: "2024-12-05",
    featured: false,
  },
  {
    id: 7,
    title: "Xây dựng môi trường làm việc tích cực",
    content:
      "Vietsovpetro tập trung xây dựng môi trường làm việc tích cực, nơi nhân viên cảm thấy được tôn trọng, hỗ trợ và có cơ hội phát triển. Chúng tôi tổ chức các hoạt động team building, các sự kiện văn hóa và các chương trình chăm sóc sức khỏe nhân viên. Môi trường làm việc tích cực giúp nâng cao tinh thần làm việc và hiệu quả công việc.",
    image: hoiNghiPetro,
    imageAlt: "Môi trường làm việc tích cực",
    category: "Môi trường",
    publishDate: "2024-12-03",
    featured: false,
  },
  {
    id: 8,
    title: "Hợp tác quốc tế và trao đổi kinh nghiệm",
    content:
      "Vietsovpetro tích cực tham gia các hoạt động hợp tác quốc tế và trao đổi kinh nghiệm với các đối tác trong ngành dầu khí. Chúng tôi tham gia các hội nghị, hội thảo quốc tế và các chương trình trao đổi nhân sự. Điều này giúp nâng cao năng lực và uy tín của Vietsovpetro trên trường quốc tế.",
    image: daiHoiDaiBieu,
    imageAlt: "Hợp tác quốc tế",
    category: "Hợp tác",
    publishDate: "2024-12-01",
    featured: false,
  },
  {
    id: 9,
    title: "Chương trình bình đẳng giới và đa dạng",
    content:
      "Vietsovpetro cam kết thúc đẩy bình đẳng giới và đa dạng trong tổ chức. Chúng tôi tạo cơ hội bình đẳng cho tất cả nhân viên, bất kể giới tính, tuổi tác, dân tộc hay tôn giáo. Các chương trình đặc biệt được triển khai để hỗ trợ phụ nữ trong ngành dầu khí và tạo môi trường làm việc hòa nhập cho tất cả mọi người.",
    image: danKhoanVietsov,
    imageAlt: "Bình đẳng giới và đa dạng",
    category: "Bình đẳng",
    publishDate: "2024-11-28",
    featured: false,
  },
  {
    id: 10,
    title: "Sáng kiến đổi mới và sáng tạo",
    content:
      "Vietsovpetro khuyến khích tinh thần đổi mới và sáng tạo trong toàn tổ chức. Chúng tôi tổ chức các cuộc thi sáng kiến, các chương trình khởi nghiệp nội bộ và các hoạt động brainstorming. Mọi nhân viên đều được khuyến khích đóng góp ý tưởng và tham gia vào quá trình đổi mới của công ty. Điều này tạo ra một văn hóa học hỏi và phát triển liên tục.",
    image: hoiNghiSuKien,
    imageAlt: "Sáng kiến đổi mới",
    category: "Sáng tạo",
    publishDate: "2024-11-25",
    featured: false,
  },
  {
    id: 11,
    title: "Chương trình an sinh xã hội cho nhân viên",
    content:
      "Vietsovpetro triển khai các chương trình an sinh xã hội toàn diện cho nhân viên và gia đình, bao gồm bảo hiểm y tế, bảo hiểm xã hội và các quỹ hỗ trợ đặc biệt. Chúng tôi cũng tổ chức các hoạt động chăm sóc sức khỏe, các chương trình thể thao và các sự kiện gia đình. Điều này giúp nhân viên yên tâm công tác và gắn bó lâu dài với công ty.",
    image: hoiNghiPetro,
    imageAlt: "An sinh xã hội",
    category: "An sinh",
    publishDate: "2024-11-22",
    featured: false,
  },
  {
    id: 12,
    title: "Truyền thông nội bộ và giao tiếp",
    content:
      "Vietsovpetro xây dựng hệ thống truyền thông nội bộ hiệu quả để đảm bảo thông tin được truyền đạt rõ ràng và kịp thời đến tất cả nhân viên. Chúng tôi sử dụng các kênh truyền thông đa dạng như báo nội bộ, email, mạng xã hội và các cuộc họp trực tiếp. Điều này giúp tăng cường sự hiểu biết và gắn kết trong tổ chức.",
    image: daiHoiDaiBieu,
    imageAlt: "Truyền thông nội bộ",
    category: "Truyền thông",
    publishDate: "2024-11-20",
    featured: false,
  },
];
