import React from "react";

interface SubscriptionFeeCardProps {
  fee: string;
}

export const SubscriptionFeeCard: React.FC<SubscriptionFeeCardProps> = ({
  fee,
}) => {
  return (
    <div className="relative box-border w-[269.89px] h-[130.23px] bg-[#F5F4FF] border border-[rgba(79,70,229,0.1)] rounded-[26.986px] flex-none order-3">
      <h3 className="absolute left-[20.52px] top-[21.91px] font-urbanist font-medium text-[15.0001px] leading-[17px] text-[#18191C]">
        Subscription price
      </h3>
      <div className="absolute left-[19.29px] top-[62.15px] font-urbanist font-bold text-[40px] leading-[41px] text-[#18191C]">
        ${fee}
      </div>
    </div>
  );
};
