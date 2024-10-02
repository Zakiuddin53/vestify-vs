import React from "react";
import { FaSearch } from "react-icons/fa";

export function Search() {
  return (
    <div className="cursor-pointer">
      <FaSearch
        className="text-gray-600 hover:text-gray-800 transition-colors"
        size={20}
      />
    </div>
  );
}
