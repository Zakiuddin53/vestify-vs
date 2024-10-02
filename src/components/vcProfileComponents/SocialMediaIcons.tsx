import React from "react";
import { FaDiscord, FaXTwitter, FaTelegram, FaLinkedin } from "react-icons/fa6";

export const SocialMediaIcons: React.FC = () => {
  const socialIcons = [
    { name: "Discord", Icon: FaDiscord, color: "#5865F2" },
    { name: "X", Icon: FaXTwitter, color: "#000000" },
    { name: "Telegram", Icon: FaTelegram, color: "#26A5E4" },
    { name: "LinkedIn", Icon: FaLinkedin, color: "#0A66C2" },
  ];

  return (
    <div className="flex gap-4">
      {socialIcons.map(({ name, Icon, color }) => (
        <div key={name} className="w-8 h-8">
          <Icon size={32} color={color} />
        </div>
      ))}
    </div>
  );
};
