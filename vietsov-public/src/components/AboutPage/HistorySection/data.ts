import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoatDongCongDong from "@/assets/hdcongdongvietsov.jpg";

export interface HistoryEvent {
  date: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface YearEvents {
  year: number;
  events: HistoryEvent[];
}

export interface HistorySectionProps {
  years?: YearEvents[];
  className?: string;
}

// Default data matching the design - each year can have multiple events
export const defaultHistoryEvents: YearEvents[] = [
  {
    year: 2005,
    events: [
      {
        date: "01/01/2005",
        description:
          "Tầm Đảo-01 phát hiện dầu tại Giếng khoan trong tầng móng tại Đông Nam Rồng. Đây là một cột mốc quan trọng trong hoạt động thăm dò của Vietsovpetro.",
        imageUrl: daiHoiDaiBieu,
        imageAlt: "Oil rig discovery",
      },
    ],
  },
  {
    year: 2009,
    events: [
      {
        date: "24/03/2009",
        description:
          "Chủ tịch nước CHXHCN Việt Nam ký Quyết định số 449/QĐ-CTN trao tặng Huân chương Hồ Chí Minh cho Liên doanh Việt – Nga Vietsovpetro, ghi nhận thành tích đặc biệt xuất sắc trong sản xuất, kinh doanh dầu khí và đóng góp to lớn vào sự nghiệp xây dựng, bảo vệ Tổ quốc.\n Phần thưởng cao quý này thể hiện sự ghi nhận của Đảng và Nhà nước đối với đóng góp bền bỉ, hiệu quả và tinh thần hợp tác quốc tế mẫu mực của Vietsovpetro trong suốt quá trình hình thành và phát triển.",
        imageUrl: hoiNghiSuKien,
        imageAlt: "Award ceremony with certificate presentation",
      },
      {
        date: "15/06/2009",
        description:
          "Ký kết hợp đồng hợp tác mới với các đối tác quốc tế, mở rộng hoạt động thăm dò và khai thác dầu khí tại các khu vực mới.",
        imageUrl: hoiNghiSuKien,
        imageAlt: "New partnership agreement",
      },
      {
        date: "20/12/2009",
        description:
          "Hoàn thành dự án nâng cấp hệ thống xử lý dầu thô, tăng công suất sản xuất lên 30% so với năm trước.",
        imageUrl: daiHoiDaiBieu,
        imageAlt: "Oil processing system upgrade",
      },
    ],
  },
  {
    year: 2010,
    events: [
      {
        date: "15/07/2010",
        description:
          "Ký kết Hiệp định hợp tác Việt - Xô về thăm dò và khai thác Dầu khí ở thềm lục địa Việt Nam, ngày 03.07.1980. Đây là nền tảng cho sự phát triển của Vietsovpetro.",
        imageUrl: hoatDongCongDong,
        imageAlt: "Cooperation agreement signing",
      },
    ],
  },
  {
    year: 2012,
    events: [
      {
        date: "10/11/2012",
        description:
          "Cung cấp khí cho nhà máy nhiệt điện Bà Rịa - Đình Cô năm 1995. Đóng góp vào an ninh năng lượng quốc gia và phát triển công nghiệp điện lực.",
        imageUrl: daiHoiDaiBieu,
        imageAlt: "Gas supply to power plant",
      },
    ],
  },
  {
    year: 2016,
    events: [
      {
        date: "05/09/2016",
        description:
          "Bác Phạm Văn Đồng đến thăm và làm việc với XNLD năm 1981. Sự kiện lịch sử đánh dấu sự quan tâm của lãnh đạo cấp cao đối với ngành dầu khí.",
        imageUrl: hoiNghiSuKien,
        imageAlt: "Historical visit by Pham Van Dong",
      },
    ],
  },
  {
    year: 2019,
    events: [
      {
        date: "12/04/2019",
        description:
          "Đại tướng Võ Nguyên Giáp đến thăm Vietsovpetro năm 2001. Một vinh dự lớn và nguồn động viên to lớn cho toàn thể cán bộ công nhân viên.",
        imageUrl: hoatDongCongDong,
        imageAlt: "Visit by General Vo Nguyen Giap",
      },
    ],
  },
];
