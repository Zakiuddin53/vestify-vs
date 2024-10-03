"use client";
import React, { useState } from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaDiscord,
  FaTelegram,
  FaMedium,
  FaYoutube,
} from "react-icons/fa6";

interface SocialsProps {
  onComplete: (data: { projectSocials: Record<string, string> }) => void;
}

const Socials: React.FC<SocialsProps> = ({ onComplete }) => {
  const [socials, setSocials] = useState({
    x: "",
    instagram: "",
    discord: "",
    telegram: "",
    medium: "",
    youtube: "",
  });

  const handleChange =
    (platform: keyof typeof socials) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSocials((prev) => ({ ...prev, [platform]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({ projectSocials: socials });
  };

  const socialIcons = {
    x: FaXTwitter,
    instagram: FaInstagram,
    discord: FaDiscord,
    telegram: FaTelegram,
    medium: FaMedium,
    youtube: FaYoutube,
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">TGE</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {(Object.keys(socials) as Array<keyof typeof socials>).map(
            (platform) => {
              const Icon = socialIcons[platform];
              return (
                <div
                  key={platform}
                  className="flex items-center bg-white border rounded-md overflow-hidden"
                >
                  <div className="p-3 bg-gray-100">
                    <Icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <input
                    type="text"
                    placeholder={`Enter ${platform} link here`}
                    className="flex-grow p-3 outline-none text-gray-600"
                    value={socials[platform]}
                    onChange={handleChange(platform)}
                  />
                </div>
              );
            }
          )}
        </div>
        <button
          type="submit"
          className="w-full mt-6 py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Socials;
