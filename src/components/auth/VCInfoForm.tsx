"use client";

import React, { useState } from "react";

interface VCInfoFormProps {
  onSubmit: (data: {
    name: string;
    description: string;
    logoFile: File;
  }) => void;
}

const VCInfoForm: React.FC<{
  onSubmit: (vcInfo: {
    name: string;
    description: string;
    logoFile: File;
  }) => void;
}> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (logoFile) {
      onSubmit({ name, description, logoFile });
    } else {
      // Handle error: logo file is required
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Add new VC</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
        />
        <label htmlFor="logo-upload" className="cursor-pointer">
          <div className="text-gray-500">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <p>Drop your logo here, or browse</p>
          </div>
        </label>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="VC Name"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="VC Description"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        Proceed
      </button>
    </form>
  );
};

export default VCInfoForm;
