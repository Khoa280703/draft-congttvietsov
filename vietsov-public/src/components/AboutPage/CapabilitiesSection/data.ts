export interface Capability {
  id: number;
  description: string;
}

export interface CapabilitiesSectionProps {
  capabilities?: Capability[];
  className?: string;
}

export const defaultCapabilities: Capability[] = [
  {
    id: 1,
    description:
      "Thiết kế – lập dự toán các giếng khoan tìm kiếm, thăm dò cho công ty VRJ, PIDC, cho giàn nhẹ do Petronas quản lý",
  },
  {
    id: 2,
    description:
      "Lập dự án đầu tư xây dựng công trình cải hoán By - Pass đường ống Rạng Đông – Bạch Hổ.",
  },
  {
    id: 3,
    description: "Sửa chữa và vận hành mỏ.",
  },
  {
    id: 4,
    description:
      "Cung cấp dịch vụ vận hành mỏ cho các Công ty Hoàn Vũ JOC, VRJ, Hoàng Long JOC, Thăng Long JOC, Petronas và công trình thu gom khí của PV Gas.",
  },
  {
    id: 5,
    description: "Xây dựng và lắp đặt các công trình dầu khí biển:",
  },
];
