import React from "react";

interface KYCStatusProps {
  kycDone: boolean;
}

export const KYCStatus: React.FC<KYCStatusProps> = ({ kycDone }) => (
  <div
    className="relative w-[271.45px] h-[139.75px] bg-[#F9F9F9] border border-black/10 rounded-[20.2892px]"
    style={{ boxSizing: "border-box" }}
  >
    <h2 className="absolute left-[20.69px] top-[20.29px] font-urbanist font-medium text-[15.0001px] leading-[17px] text-[#18191C]">
      KYC Status
    </h2>
    <div
      className={`absolute left-[60px] top-[60.65px] flex flex-row items-center p-[16.0468px] gap-2 w-[150.45px] h-[49.09px] rounded-[8.0234px] ${
        kycDone ? "bg-green-100" : "bg-[rgba(185,0,0,0.06)]"
      }`}
    >
      <span
        className={`font-urbanist font-semibold text-2xl leading-[33px] ${
          kycDone ? "text-green-600" : "text-[#EB0000]"
        }`}
        style={{ textTransform: "capitalize" }}
      >
        {kycDone ? "Completed" : "Required"}
      </span>
      {!kycDone && (
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.35 13.95H0V0L15.35 13.95Z" fill="#EB0000" />
        </svg>
      )}
    </div>
  </div>
);
