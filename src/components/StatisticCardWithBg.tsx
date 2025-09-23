import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import GianKhoanPic from "../assets/Khoan _sua_gieng.png";

interface StatisticCardProps {
  title: string;
  data: StatisticCardData[];
  note?: string;
}

const StatisticCardWithBg: React.FC<StatisticCardProps> = ({
  data,
  title,
  note,
}) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  return (
    <div className="relative">
      {/* Title */}
      <div className="flex items-center mb-3 relative z-20">
        <h3 className="font-medium uppercase">{title}</h3>
      </div>

      {/* Table wrapper */}
      <div className="text-xs rounded-xl relative overflow-hidden">
        {/* Background image */}
        <img
          src={GianKhoanPic}
          alt="Giàn khoan"
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a3a6e]/80 to-[#4e9a5a]/80 z-10"></div>

        <div className="text-white relative z-20">
          {/* Header */}
          <div className="relative z-20">
            <div className="py-3">
              <div className="bg-gray-400/70 py-2 w-full opacity-80">
                <div className="flex justify-between text-white font-light text-xs tracking-wider px-4 ">
                  <div className="w-1/3 text-left">Mặt hàng</div>
                  <div className="w-1/3 text-center">Giá điều chỉnh</div>
                  <div className="w-1/3 text-center">Thực tế</div>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-600 text-white">
            {data.map((row) => (
              <div
                key={row.period}
                className="flex justify-between items-center px-4 py-4"
              >
                <div className="w-1/3 font-medium">{row.period}</div>
                <div className="w-1/3 text-center font-normal">
                  {formatNumber(row.plan)}
                </div>
                <div className="w-1/3 text-center font-normal">
                  <div className="flex items-center justify-end space-x-2">
                    <span>{formatNumber(row.actual)}</span>
                    {row.actual >= row.plan ? (
                      <BsFillTriangleFill className="text-white w-3 h-3" />
                    ) : (
                      <BsFillTriangleFill className="rotate-180 text-white w-3 h-3" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          {note && (
            <div className="px-4 py-2 text-[11px] opacity-80 text-right">
              *{note}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticCardWithBg;
