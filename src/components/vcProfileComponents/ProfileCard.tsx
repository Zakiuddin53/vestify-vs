import React from "react";
import Image from "next/image";

interface ProfileCardProps {
  title?: string;
  className?: string;
  name?: string;
  logoBase64?: string;
  children?: React.ReactNode;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  className = "",
  name,
  logoBase64,
  children,
}) => (
  <div
    className={`bg-[#F9F9F9] rounded-[20px] border border-black/10 p-6 w-[316.5px] h-[139.05px] relative ${className}`}
    style={{ borderWidth: "1.18px" }}
  >
    {title && <h3 className="text-sm font-medium mb-4 text-black">{title}</h3>}
    {name && logoBase64 && (
      <div className="absolute flex items-center gap-5 top-8 left-8 w-[250px] h-[73px]">
        <Image src={logoBase64} alt={`${name} logo`} width={73} height={73} />
        <h2 className="text-xl font-bold text-black">{name}</h2>
      </div>
    )}
    {children}
  </div>
);
