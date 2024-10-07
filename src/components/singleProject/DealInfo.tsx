import React from "react";
import { FaGlobe, FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";

interface DealInfoProps {
  project: {
    round: string;
  };
  token: {
    price: string;
    vesting: string;
  };
  socialLink: {
    [key: string]: string;
  };
}

const DealInfo: React.FC<DealInfoProps> = ({ project, token, socialLink }) => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "website":
        return <FaGlobe />;
      case "twitter":
        return <FaTwitter />;
      case "telegram":
        return <FaTelegram />;
      case "discord":
        return <FaDiscord />;
      default:
        return <FaGlobe />;
    }
  };

  return (
    <div className="p-5 bg-neutral-100 rounded-[10px] flex-col justify-start items-start gap-[30px] inline-flex">
      <div className="text-[#18191c] text-2xl font-bold font-['Urbanist'] leading-loose">
        Deal Info
      </div>
      <div className="flex-col justify-start items-center gap-5 flex">
        <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-[#18191c] text-[17px] font-bold font-['Urbanist'] leading-loose">
              Token price
            </div>
            <div className="text-right text-[#a5a5a5] text-[17px] font-bold font-['Urbanist'] leading-loose">
              {project.round} ${token.price}
            </div>
          </div>
          <div className="justify-start items-start gap-[89px] inline-flex">
            <div className="text-[#18191c] text-[17px] font-bold font-['Urbanist'] leading-loose">
              Vesting
            </div>
            <div className="text-right text-[#a5a5a5] text-[17px] font-bold font-['Urbanist'] leading-[33px]">
              {token.vesting}
            </div>
          </div>
        </div>
        {/* Social Links */}
        <div className="flex-col justify-start items-center gap-2.5 flex">
          {Object.entries(socialLink).map(
            ([platform, link]) =>
              link && (
                <div
                  key={platform}
                  className="px-[15px] py-3 bg-white rounded-lg justify-start items-center gap-[25.34px] flex w-full"
                >
                  <div className="justify-start items-center gap-[16.89px] flex">
                    <div className="w-[42.23px] h-[42.23px] bg-[#f3f3f3] rounded-lg justify-center items-center gap-[0.84px] flex">
                      {getIcon(platform)}
                    </div>
                    <div className="text-[#18191c] text-sm font-semibold font-['Urbanist'] leading-tight">
                      {platform}
                    </div>
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto"
                  >
                    <FaGlobe />
                  </a>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default DealInfo;
