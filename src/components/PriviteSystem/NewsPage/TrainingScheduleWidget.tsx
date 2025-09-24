import React from "react";

interface TrainingScheduleWidgetProps {
  title: string;
  items: TrainingItemData[];
}

const TrainingScheduleWidget: React.FC<TrainingScheduleWidgetProps> = ({
  title,
  items,
}) => {
  return (
    <div className="">
      <div className="flex items-center mb-3">
        <span className="w-1 h-5 bg-green-500 mr-2"></span>
        <h3 className="font-medium text-gray-800 uppercase">{title}</h3>
      </div>

      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.id} className="pl-4">
            <h4 className="text-base font-normal text-sm hover:text-blue-600 cursor-pointer">
              {item.title}
            </h4>
            <div className="text-sm text-gray-400 mt-1">
              <div className="mb-1">Thời gian: {item.duration}</div>
              <div>Bắt đầu: {item.startDate}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingScheduleWidget;
