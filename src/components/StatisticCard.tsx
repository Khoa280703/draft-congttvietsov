import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";

interface StatisticCardProps {
  title: string;
  data: StatisticCardData[];
}

const StatisticCard: React.FC<StatisticCardProps> = ({ data, title }) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  return (
    <div>
      <div className="flex items-center mb-3">
        <span className="w-1 h-5 bg-green-500 mr-2"></span>
        <h3 className="font-medium text-gray-800 uppercase">{title}</h3>
      </div>

      {/* Table */}
      <div className="bg-gray-100  text-xs rounded-xl">
        <div className="flex justify-between bg-gray-200 px-4 py-3 rounded-md font-light text-xs text-gray-500 uppercase tracking-wider">
          <div className="w-1/3 text-left">TG</div>
          <div className="w-1/3 text-center">KẾ HOẠCH</div>
          <div className="w-1/3 text-center">THỰC TẾ</div>
        </div>

        <div className="divide-y divide-gray-200">
          {data.map((row) => (
            <div
              key={row.period}
              className="flex justify-between items-center px-4 py-4"
            >
              <div className="w-1/3 font-medium text-gray-700">
                {row.period}
              </div>
              <div className="w-1/3 text-center font-normal text-gray-600">
                {formatNumber(row.plan)}
              </div>
              <div className="w-1/3 text-center font-normal text-gray-600">
                <div className="flex items-center justify-end space-x-2">
                  <span>{formatNumber(row.actual)}</span>
                  {row.actual >= row.plan ? (
                    <BsFillTriangleFill className="text-green-500 w-3 h-3" />
                  ) : (
                    <BsFillTriangleFill className="rotate-180 text-red-500 w-3 h-3" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
