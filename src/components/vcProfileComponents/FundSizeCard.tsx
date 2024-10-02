import React from "react";

interface FundSizeCardProps {
  fundSize: string;
}

export const FundSizeCard: React.FC<FundSizeCardProps> = ({ fundSize }) => {
  return (
    <div className="w-full h-[124.31px] bg-[#fff9f4] rounded-[26.99px] border border-[#e5bf46]/10 p-5">
      <h3 className="text-[#18191c] text-[15px] font-medium mb-2">Fund Size</h3>
      <div className="text-[#18191c] text-[40px] font-bold">${fundSize}</div>
    </div>
  );
};
