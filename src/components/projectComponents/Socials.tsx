"use client";
import React, { useState } from "react";

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

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Socials</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {(Object.keys(socials) as Array<keyof typeof socials>).map(
            (platform) => (
              <div
                key={platform}
                className="flex items-center border rounded-md"
              >
                <div className="p-2">
                  {/* Add appropriate SVG icon for each platform */}
                </div>
                <input
                  type="text"
                  placeholder={`Enter ${platform} link here`}
                  className="flex-grow p-2 outline-none"
                  value={socials[platform]}
                  onChange={handleChange(platform)}
                />
              </div>
            )
          )}
        </div>
        <button
          type="submit"
          className="w-full mt-6 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Socials;
