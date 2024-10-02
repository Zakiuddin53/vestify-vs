import React from "react";

interface ROICardProps {
  title: string;
  value: string;
  isAverage?: boolean;
}

export const ROICard: React.FC<ROICardProps> = ({
  title,
  value,
  isAverage = false,
}) => {
  const bgColor = isAverage ? "bg-[#039be5]/5" : "bg-[#f8f8f8]";
  const borderColor = isAverage ? "border-[#039be5]/20" : "border-black/10";

  return (
    <div className={`${bgColor} rounded-[20.29px] border ${borderColor} p-5`}>
      <h3 className="text-[#18191c] text-[15px] font-medium mb-4">{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-[#18191c] text-3xl font-extrabold">{value}</span>
        {isAverage && (
          <div className="w-1/2 bg-blue-200 h-2 rounded-full">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: value }}
            ></div>
          </div>
        )}
        {!isAverage && (
          <div className="w-12 h-12 border-4 border-blue-500 rounded-full"></div>
        )}
      </div>
    </div>
  );
};
