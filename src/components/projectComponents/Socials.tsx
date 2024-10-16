// "use client";
// import React, { useState } from "react";
// import {
//   FaXTwitter,
//   FaInstagram,
//   FaDiscord,
//   FaTelegram,
//   FaMedium,
//   FaYoutube,
// } from "react-icons/fa6";

// interface SocialsProps {
//   onComplete: (data: { projectSocials: Record<string, string> }) => void;
// }

// const Socials: React.FC<SocialsProps> = ({ onComplete }) => {
//   const [socials, setSocials] = useState({
//     x: "",
//     instagram: "",
//     discord: "",
//     telegram: "",
//     medium: "",
//     youtube: "",
//   });

//   const handleChange =
//     (platform: keyof typeof socials) =>
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       setSocials((prev) => ({ ...prev, [platform]: e.target.value }));
//     };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onComplete({ projectSocials: socials });
//   };

//   const socialIcons = {
//     x: FaXTwitter,
//     instagram: FaInstagram,
//     discord: FaDiscord,
//     telegram: FaTelegram,
//     medium: FaMedium,
//     youtube: FaYoutube,
//   };

//   return (
//     <div className="w-full max-w-md mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center text-black">TGE</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="space-y-4">
//           {(Object.keys(socials) as Array<keyof typeof socials>).map(
//             (platform) => {
//               const Icon = socialIcons[platform];
//               return (
//                 <div
//                   key={platform}
//                   className="flex items-center bg-white border rounded-md overflow-hidden"
//                 >
//                   <div className="p-3 bg-gray-100">
//                     <Icon className="w-6 h-6 text-gray-600" />
//                   </div>
//                   <input
//                     type="text"
//                     placeholder={`Enter ${platform} link here`}
//                     className="flex-grow p-3 outline-none text-gray-600"
//                     value={socials[platform]}
//                     onChange={handleChange(platform)}
//                   />
//                 </div>
//               );
//             }
//           )}
//         </div>
//         <button
//           type="submit"
//           className="w-full mt-6 py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Socials;

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

  const [errors, setErrors] = useState<Record<string, string | null>>({
    x: null,
    instagram: null,
    discord: null,
    telegram: null,
    medium: null,
    youtube: null,
  });

  const handleChange =
    (platform: keyof typeof socials) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSocials((prev) => ({ ...prev, [platform]: value }));

      // Reset error when the input changes
      setErrors((prev) => ({ ...prev, [platform]: null }));
    };

  const validateInput = (platform: keyof typeof socials, value: string) => {
    let regex;

    switch (platform) {
      case "x":
        regex = /^(https?:\/\/)?(www\.)?(twitter\.com\/\S+)/;
        break;
      case "instagram":
        regex = /^(https?:\/\/)?(www\.)?(instagram\.com\/\S+)/;
        break;
      case "discord":
        regex = /^(https?:\/\/)?(www\.)?(discord\.gg\/\S+)/;
        break;
      case "telegram":
        regex = /^(https?:\/\/)?(www\.)?(t\.me\/\S+)/;
        break;
      case "medium":
        regex = /^(https?:\/\/)?(www\.)?(medium\.com\/\S+)/;
        break;
      case "youtube":
        regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/\S+)/;
        break;
      default:
        return;
    }

    if (!regex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        [platform]: `Invalid ${platform} link.`,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all inputs before submitting
    Object.keys(socials).forEach((platform) => {
      validateInput(
        platform as keyof typeof socials,
        socials[platform as keyof typeof socials]
      );
    });

    // Check for any errors
    if (Object.values(errors).some((error) => error)) {
      return; // Prevent submission if there are errors
    }

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
      <h2 className="text-2xl font-bold mb-6 text-center text-black">TGE</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {(Object.keys(socials) as Array<keyof typeof socials>).map(
            (platform) => {
              const Icon = socialIcons[platform];
              return (
                <div key={platform} className="flex flex-col">
                  <div className="flex items-center bg-white border rounded-md overflow-hidden">
                    <div className="p-3 bg-gray-100">
                      <Icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <input
                      type="text"
                      placeholder={`Enter ${platform} link here`}
                      className="flex-grow p-3 outline-none text-gray-600"
                      value={socials[platform]}
                      onChange={handleChange(platform)}
                      onBlur={() => validateInput(platform, socials[platform])} // Validate on blur
                    />
                  </div>
                  {errors[platform] && (
                    <span className="text-red-600 text-sm mt-1">
                      {errors[platform]}
                    </span>
                  )}
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
