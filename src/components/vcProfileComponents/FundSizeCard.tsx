// FundSizeCard.tsx
import React from "react";

interface FundSizeCardProps {
  fundSize: string;
}

export const FundSizeCard: React.FC<FundSizeCardProps> = ({ fundSize }) => {
  return (
    <div className="relative w-[354.31px] h-[124.31px] bg-[#FFFAF4] border border-[rgba(229,192,70,0.1)] rounded-[26.986px] flex-grow-0 order-3">
      <div className="absolute left-[20.52px] top-[20.31px] font-urbanist font-medium text-[15.0001px] leading-[17px] text-[#18191C]">
        Fund Size
      </div>
      <div className="absolute left-[19.29px] top-[62.15px] font-urbanist font-bold text-[40px] leading-[41px] text-[#18191C]">
        ${fundSize}
      </div>
    </div>
  );
};
