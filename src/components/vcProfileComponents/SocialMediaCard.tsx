import React from "react";
import { FaDiscord, FaXTwitter, FaTelegram, FaLinkedin } from "react-icons/fa6";

interface SocialIconProps {
  Icon: React.ElementType;
  color: string;
  size: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, color, size }) => (
  <div className="flex-shrink-0">
    <Icon size={size} color={color} />
  </div>
);

const socialIcons: SocialIconProps[] = [
  { Icon: FaDiscord, color: "#5865F2", size: 30.89 },
  { Icon: FaXTwitter, color: "#000000", size: 22.92 },
  { Icon: FaTelegram, color: "#039BE5", size: 28.12 },
  { Icon: FaLinkedin, color: "#0077B7", size: 23.48 },
];

export const SocialMediaCard: React.FC = () => (
  <div
    className="relative w-[276.89px] h-[139.75px] bg-[#F9F9F9] border border-black/10 rounded-[20.2892px]"
    style={{ borderWidth: "1.01446px" }}
  >
    <h3 className="absolute top-[20.29px] left-[20.57px] font-urbanist font-medium text-[15.0001px] leading-[17px] text-[#18191C]">
      Social Media:
    </h3>
    <div className="absolute top-[76.57px] left-[20.57px] flex flex-row items-center gap-[35.4px]">
      {socialIcons.map((icon, index) => (
        <SocialIcon key={index} {...icon} />
      ))}
    </div>
  </div>
);
