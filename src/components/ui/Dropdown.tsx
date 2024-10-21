// components/Dropdown.tsx
import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder: string;
  multiple?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder,
  multiple = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    if (multiple) {
      const newValue = value.includes(option)
        ? value.filter((v) => v !== option)
        : [...value, option];
      onChange(newValue);
    } else {
      onChange([option]);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 text-left border border-gray-300 rounded-md text-sm appearance-none bg-white flex justify-between items-center text-black"
      >
        {value.length > 0 ? value.join(", ") : placeholder}
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-400 text-black ${
                value.includes(option) ? "bg-gray-200" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
