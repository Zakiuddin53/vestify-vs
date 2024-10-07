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
  if (isAverage) {
    return (
      <div className="relative w-full h-[130.23px] bg-[rgba(3,155,229,0.05)] border border-[rgba(3,155,229,0.2)] rounded-[20.2892px]">
        <h3 className="absolute left-[24.83px] top-[21.91px] font-urbanist font-medium text-[15.0001px] leading-[17px] text-[#18191C]">
          {title}
        </h3>
        <span className="absolute right-[24.83px] top-[20.31px] font-urbanist font-extrabold text-[30px] leading-[28px] text-[#18191C]">
          {value}
        </span>
        <div className="absolute w-[224.97px] h-[10.7598px] left-[30.17px] top-[96.25px] bg-white rounded-full">
          <div
            className="h-full bg-[#039BE5] rounded-full"
            style={{ width: value }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[130.23px] bg-[#F9F9F9] border border-black/10 rounded-[20.2892px]">
      <h3 className="absolute left-[20.78px] top-[21.91px] font-urbanist font-medium text-[15.0001px] leading-[17px] text-[#18191C]">
        {title}
      </h3>
      <span className="absolute left-[20.78px] top-[65.83px] font-urbanist font-extrabold text-[30px] leading-[39px] text-[#18191C]">
        {value}
      </span>
      <div className="absolute w-[81.76px] h-[82.61px] left-[174.29px] top-[20.7px]">
        <div className="absolute w-[81.34px] h-[82.18px] left-0 top-[0.42px] border-[10.1198px] border-white rounded-full"></div>
        <div className="absolute w-[81.34px] h-[82.18px] left-[0.42px] top-0 border-[10.1198px] border-[#46D5E5] rounded-full"></div>
      </div>
    </div>
  );
};
