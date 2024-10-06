import React, { useState } from "react";
import TwitterIcon from "../ui/TwitterIcon";
import DiscordIcon from "../ui/DiscordIcon";
import EyeIcon from "../ui/Icons/EyeIcon";

interface SignupFormData {
  email: string;
  password: string;
  username: string;
}

const InitialSignupForm: React.FC<{
  onSubmit: (data: SignupFormData) => void;
}> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await onSubmit({ username, email, password });
    } catch (err) {
      setError("An error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };

  const renderInputField = (label: string, name: string, type: string) => (
    <div className="w-full mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label.toUpperCase()}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={
            name === "password" ? (showPassword ? "text" : "password") : type
          }
          value={
            name === "username" ? username : name === "email" ? email : password
          }
          onChange={(e) => {
            if (name === "username") setUsername(e.target.value);
            else if (name === "email") setEmail(e.target.value);
            else setPassword(e.target.value);
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
          required
        />
        {name === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            <EyeIcon
              className={`h-5 w-5 ${
                showPassword ? "text-indigo-600" : "text-gray-400"
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-[456px] px-7 py-8 bg-white rounded-[10px] border border-[#d0d4dd]">
      <div className="w-[400px] flex-col justify-start items-center gap-8 flex">
        <div className="w-[400px] h-[34px] flex-col justify-start items-center flex">
          <h1 className="text-[#101828] text-[28px] font-semibold font-['Urbanist'] leading-[33.60px]">
            WELCOME TO MAMBAX
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex-col justify-start items-center gap-[30px] flex"
        >
          <div className="self-stretch flex-col justify-start items-start gap-8 flex">
            <div className="w-full flex-col gap-6">
              {renderInputField("Username", "username", "text")}
              {renderInputField("Email", "email", "email")}
              {renderInputField("Password", "password", "password")}
            </div>
            <div className="w-full flex justify-between gap-4">
              <button
                type="button"
                className="w-[200px] h-[60px] bg-[#ecf9ff] rounded-[10px] flex items-center justify-center gap-3"
              >
                <TwitterIcon className="w-6 h-6 text-[#1DA1F2]" />
                <span className="text-black text-base font-semibold font-['Urbanist'] leading-normal">
                  Twitter
                </span>
              </button>
              <button
                type="button"
                className="w-[200px] h-[60px] bg-[#f1f2ff] rounded-[10px] flex items-center justify-center gap-3"
              >
                <DiscordIcon className="w-6 h-6 text-[#5865F2]" />
                <span className="text-black text-base font-semibold font-['Urbanist'] leading-normal">
                  Discord
                </span>
              </button>
            </div>
            <button
              type="submit"
              className="w-full h-[55px] px-6 py-4 bg-indigo-600 rounded-lg text-white text-base font-semibold font-['Urbanist'] leading-normal flex justify-center items-center gap-2.5"
              disabled={loading}
            >
              {loading ? "Signing up..." : "SIGN UP"}
            </button>
            {error && <p className="text-red-600 text-center">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default InitialSignupForm;
