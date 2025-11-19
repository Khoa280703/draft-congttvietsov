import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoatDongCongDong from "@/assets/hdcongdongvietsov.jpg";
import dankhoanvietsov from "@/assets/dankhoanvietsov.jpg";
import bannerDankhoan from "@/assets/banner-dankhoan.jpg";
import gianKhoan from "@/assets/background-slider/gian-khoan.jpg";

export interface DevelopmentHistoryEvent {
  text: string;
  date: string; // Format: "DD/MM/YYYY" or "DD/MM/YYYY - DD/MM/YYYY"
  image: string;
  imageAlt: string;
  link?: string;
}

export interface DevelopmentHistoryYear {
  year: number;
  image: string;
  imageAlt: string;
  events: (string | DevelopmentHistoryEvent)[];
}

export interface DevelopmentHistoryData {
  years: DevelopmentHistoryYear[];
}

export interface DevelopmentHistoryProps {
  data: DevelopmentHistoryData;
  className?: string;
}

// Default data converted from HistorySection
export const defaultDevelopmentHistoryData: DevelopmentHistoryData = {
  years: [
    {
      year: 2005,
      image: daiHoiDaiBieu,
      imageAlt: "2005 - Phát hiện dầu tại Tầm Đảo-01",
      events: [
        {
          text: "Tầm Đảo-01 phát hiện dầu tại Giếng khoan trong tầng móng tại Đông Nam Rồng. Đây là một cột mốc quan trọng trong hoạt động thăm dò của Vietsovpetro, đánh dấu bước tiến đáng kể trong công nghệ khai thác dầu khí.",
          date: "15/03/2005",
          image: daiHoiDaiBieu,
          imageAlt: "Phát hiện dầu tại Tầm Đảo-01",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Khởi công dự án khai thác dầu khí mới tại khu vực Đông Nam Rồng, mở ra triển vọng phát triển cho ngành năng lượng.",
          date: "20/06/2005",
          image: hoiNghiSuKien,
          imageAlt: "Khởi công dự án khai thác dầu khí",
          link: "/tintuc/chi-tiet",
        },
      ],
    },
    {
      year: 2009,
      image: hoiNghiSuKien,
      imageAlt: "2009 - Huân chương Hồ Chí Minh",
      events: [
        {
          text: "Chủ tịch nước CHXHCN Việt Nam ký Quyết định số 449/QĐ-CTN trao tặng Huân chương Hồ Chí Minh cho Liên doanh Việt – Nga Vietsovpetro, ghi nhận thành tích đặc biệt xuất sắc trong sản xuất, kinh doanh dầu khí và đóng góp to lớn vào sự nghiệp xây dựng, bảo vệ Tổ quốc.",
          date: "15/05/2009",
          image: hoiNghiSuKien,
          imageAlt: "Huân chương Hồ Chí Minh",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Hoàn thành kế hoạch sản xuất dầu thô vượt mục tiêu đề ra, đạt sản lượng cao nhất trong lịch sử hoạt động của liên doanh.",
          date: "30/09/2009",
          image: hoatDongCongDong,
          imageAlt: "Hoàn thành kế hoạch sản xuất",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Tổ chức thành công Hội nghị tổng kết hoạt động sản xuất kinh doanh với sự tham gia của các đối tác quốc tế.",
          date: "20/12/2009",
          image: dankhoanvietsov,
          imageAlt: "Hội nghị tổng kết",
          link: "/tintuc/chi-tiet",
        },
      ],
    },
    {
      year: 2010,
      image: hoatDongCongDong,
      imageAlt: "2010 - Hiệp định hợp tác Việt - Xô",
      events: [
        {
          text: "Ký kết Hiệp định hợp tác Việt - Xô về thăm dò và khai thác Dầu khí ở thềm lục địa Việt Nam, ngày 03.07.1980. Đây là nền tảng cho sự phát triển của Vietsovpetro, mở ra kỷ nguyên mới cho ngành dầu khí Việt Nam.",
          date: "03/07/2010",
          image: hoatDongCongDong,
          imageAlt: "Hiệp định hợp tác Việt - Xô",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Khởi công xây dựng các công trình hạ tầng quan trọng phục vụ hoạt động khai thác dầu khí tại thềm lục địa.",
          date: "10/08/2010",
          image: bannerDankhoan,
          imageAlt: "Khởi công xây dựng hạ tầng",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Thiết lập quan hệ đối tác chiến lược với các công ty dầu khí hàng đầu thế giới.",
          date: "25/11/2010",
          image: gianKhoan,
          imageAlt: "Thiết lập quan hệ đối tác",
          link: "/tintuc/chi-tiet",
        },
      ],
    },
    {
      year: 2012,
      image: dankhoanvietsov,
      imageAlt: "2012 - Cung cấp khí cho nhà máy điện",
      events: [
        {
          text: "Cung cấp khí cho nhà máy nhiệt điện Bà Rịa - Đình Cô năm 1995. Đóng góp vào an ninh năng lượng quốc gia và phát triển công nghiệp điện lực, góp phần đảm bảo nguồn cung năng lượng ổn định cho đất nước.",
          date: "15/04/2012",
          image: dankhoanvietsov,
          imageAlt: "Cung cấp khí cho nhà máy điện",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Mở rộng hệ thống đường ống dẫn khí đến các khu vực công nghiệp trọng điểm của miền Nam.",
          date: "08/07/2012",
          image: hoiNghiSuKien,
          imageAlt: "Mở rộng hệ thống đường ống",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Đạt được các tiêu chuẩn quốc tế về an toàn và bảo vệ môi trường trong hoạt động khai thác và vận chuyển khí.",
          date: "22/10/2012",
          image: hoatDongCongDong,
          imageAlt: "Tiêu chuẩn quốc tế",
          link: "/tintuc/chi-tiet",
        },
      ],
    },
    {
      year: 2016,
      image: bannerDankhoan,
      imageAlt: "2016 - Bác Phạm Văn Đồng thăm XNLD",
      events: [
        {
          text: "Bác Phạm Văn Đồng đến thăm và làm việc với XNLD năm 1981. Sự kiện lịch sử đánh dấu sự quan tâm của lãnh đạo cấp cao đối với ngành dầu khí, thể hiện tầm quan trọng của ngành trong phát triển kinh tế đất nước.",
          date: "12/03/2016",
          image: bannerDankhoan,
          imageAlt: "Bác Phạm Văn Đồng thăm XNLD",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Triển khai các dự án nghiên cứu và phát triển công nghệ khai thác dầu khí tiên tiến, nâng cao hiệu quả sản xuất.",
          date: "05/06/2016",
          image: daiHoiDaiBieu,
          imageAlt: "Nghiên cứu và phát triển công nghệ",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Tăng cường hợp tác quốc tế trong lĩnh vực đào tạo và phát triển nguồn nhân lực chất lượng cao.",
          date: "18/09/2016",
          image: hoiNghiSuKien,
          imageAlt: "Hợp tác quốc tế",
          link: "/tintuc/chi-tiet",
        },
      ],
    },
    {
      year: 2019,
      image: gianKhoan,
      imageAlt: "2019 - Đại tướng Võ Nguyên Giáp thăm Vietsovpetro",
      events: [
        {
          text: "Đại tướng Võ Nguyên Giáp đến thăm Vietsovpetro năm 2001. Một vinh dự lớn và nguồn động viên to lớn cho toàn thể cán bộ công nhân viên, khẳng định vai trò quan trọng của Vietsovpetro trong sự nghiệp phát triển đất nước.",
          date: "10/02/2019",
          image: gianKhoan,
          imageAlt: "Đại tướng Võ Nguyên Giáp thăm Vietsovpetro",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Đưa vào vận hành các giàn khoan mới với công nghệ hiện đại, nâng cao năng lực khai thác.",
          date: "25/05/2019",
          image: dankhoanvietsov,
          imageAlt: "Giàn khoan mới",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Thực hiện các chương trình bảo vệ môi trường biển và phát triển bền vững trong hoạt động khai thác dầu khí.",
          date: "14/08/2019",
          image: bannerDankhoan,
          imageAlt: "Bảo vệ môi trường biển",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Đạt được các giải thưởng và công nhận quốc tế về chất lượng sản phẩm và dịch vụ.",
          date: "30/11/2019",
          image: daiHoiDaiBieu,
          imageAlt: "Giải thưởng quốc tế",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Tăng cường hợp tác với các trường đại học và viện nghiên cứu trong việc phát triển công nghệ mới.",
          date: "01/12/2019",
          image: hoatDongCongDong,
          imageAlt: "Hợp tác nghiên cứu",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Đạt được các giải thưởng và công nhận quốc tế về chất lượng sản phẩm và dịch vụ.",
          date: "05/12/2019",
          image: daiHoiDaiBieu,
          imageAlt: "Giải thưởng quốc tế",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Tăng cường hợp tác với các trường đại học và viện nghiên cứu trong việc phát triển công nghệ mới.",
          date: "12/12/2019",
          image: hoatDongCongDong,
          imageAlt: "Hợp tác nghiên cứu",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Đạt được các giải thưởng và công nhận quốc tế về chất lượng sản phẩm và dịch vụ.",
          date: "18/12/2019",
          image: daiHoiDaiBieu,
          imageAlt: "Giải thưởng quốc tế",
          link: "/tintuc/chi-tiet",
        },
      ],
    },
    {
      year: 2025,
      image: gianKhoan,
      imageAlt: "2025 - Vietsovpetro thăm Việt Nam",
      events: [
        {
          text: "Vietsovpetro thăm Việt Nam năm 2025. Một sự kiện quan trọng đánh dấu sự quan tâm của Vietsovpetro đối với Việt Nam.",
          date: "15/01/2025",
          image: gianKhoan,
          imageAlt: "Vietsovpetro thăm Việt Nam",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Ký kết các thỏa thuận hợp tác mới với các đối tác trong và ngoài nước, mở rộng phạm vi hoạt động.",
          date: "20/04/2025",
          image: hoiNghiSuKien,
          imageAlt: "Ký kết thỏa thuận hợp tác",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Triển khai các dự án chuyển đổi số và ứng dụng công nghệ 4.0 vào hoạt động sản xuất kinh doanh.",
          date: "08/07/2025",
          image: hoatDongCongDong,
          imageAlt: "Chuyển đổi số",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Tổ chức các chương trình đào tạo và phát triển kỹ năng cho đội ngũ nhân viên, nâng cao chất lượng nguồn nhân lực.",
          date: "12/10/2025",
          image: dankhoanvietsov,
          imageAlt: "Đào tạo và phát triển",
          link: "/tintuc/chi-tiet",
        },
      ],
    },
    {
      year: 2026,
      image: gianKhoan,
      imageAlt: "2026 - Vietsovpetro thăm Việt Nam",
      events: [
        {
          text: "Vietsovpetro thăm Việt Nam năm 2025. Một sự kiện quan trọng đánh dấu sự quan tâm của Vietsovpetro đối với Việt Nam.",
          date: "05/02/2026",
          image: gianKhoan,
          imageAlt: "Vietsovpetro thăm Việt Nam",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Hoàn thành các dự án đầu tư lớn, nâng cao năng lực sản xuất và khả năng cạnh tranh trên thị trường quốc tế.",
          date: "18/05/2026",
          image: bannerDankhoan,
          imageAlt: "Dự án đầu tư lớn",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Mở rộng hoạt động ra các thị trường mới trong khu vực Đông Nam Á và châu Á - Thái Bình Dương.",
          date: "22/08/2026",
          image: daiHoiDaiBieu,
          imageAlt: "Mở rộng thị trường",
          link: "/tintuc/chi-tiet",
        },
        {
          text: "Đạt được các thành tựu nổi bật về an toàn lao động và bảo vệ môi trường, được công nhận bởi các tổ chức quốc tế.",
          date: "10/11/2026",
          image: hoiNghiSuKien,
          imageAlt: "Thành tựu an toàn lao động",
          link: "/tintuc/chi-tiet",
        },
      ],
    },
  ],
};
