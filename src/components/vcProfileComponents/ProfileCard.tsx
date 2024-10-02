import React, { ReactNode } from "react";

interface ProfileCardProps {
  title?: string;
  children?: ReactNode;
  className?: string;
  name?: string;
  logoBase64?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  children,
  className = "",
  name,
  logoBase64,
}) => (
  <div
    className={`bg-[#f8f8f8] rounded-3xl border border-black/10 p-6 ${className}`}
  >
    {title && <h3 className="text-sm font-medium mb-4 text-black">{title}</h3>}
    {name && logoBase64 && (
      <div className="flex items-center mb-4">
        <img
          src={logoBase64}
          alt={`${name} logo`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <h2 className="text-xl font-bold text-black">{name}</h2>
      </div>
    )}
    {children}
  </div>
);
