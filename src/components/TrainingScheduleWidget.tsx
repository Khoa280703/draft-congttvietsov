import React from "react";

interface TrainingScheduleWidgetProps {
  title: string;
  items: TrainingItemData[];
}

const TrainingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-blue-600"
  >
    <path d="M11.983 1.904a3.003 3.003 0 0 0-3.966 0L1.573 6.44A3 3 0 0 0 0 8.995V11a3 3 0 0 0 2.25 2.871l.937.348c.52.193.84.721.734 1.258l-.248.994a2.25 2.25 0 0 0 4.192 1.054l.793-.989a3 3 0 0 0 4.47 0l.793.989a2.25 2.25 0 0 0 4.192-1.054l-.248-.994a1.24 1.24 0 0 1 .734-1.258l.937-.348A3 3 0 0 0 20 11V8.995a3 3 0 0 0-1.573-2.555L11.983 1.904Z" />
    <path d="M13 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z" />
  </svg>
);

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
