import React from "react";

interface SubscriptionFeeCardProps {
  fee: string;
}

export const SubscriptionFeeCard: React.FC<SubscriptionFeeCardProps> = ({
  fee,
}) => {
  return (
    <div className="bg-white rounded-[20.29px] border border-black/10 p-5">
      <h3 className="text-[#18191c] text-[15px] font-medium mb-4">
        Subscription price
      </h3>
      <div className="text-[#18191c] text-3xl font-extrabold">${fee}</div>
    </div>
  );
};
