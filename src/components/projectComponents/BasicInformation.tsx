"use client";

import React, { useState } from "react";

interface BasicInformationProps {
  onComplete: (data: {
    info: {
      name: string;
      category: string;
      description: string;
      round: string;
    };
  }) => void;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ onComplete }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [round, setRound] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      info: {
        name,
        category,
        description,
        round,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-black">Basic Information</h2>

      <div>
        <label
          htmlFor="projectName"
          className="block mb-2 font-medium text-black"
        >
          Project Name
        </label>
        <input
          id="projectName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Project name"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label
          htmlFor="projectDescription"
          className="block mb-2 font-medium text-black"
        >
          Project Description
        </label>
        <textarea
          id="projectDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project Description"
          className="w-full p-3 border border-gray-300 rounded-md"
          rows={4}
          required
        />
      </div>

      <div>
        <label
          htmlFor="projectCategory"
          className="block mb-2 font-medium text-black"
        >
          Project Category
        </label>
        <select
          id="projectCategory"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-black"
          required
        >
          <option value="">Select Project category</option>
          <option value="DeFi">DeFi</option>
          <option value="NFT">NFT</option>
          <option value="GameFi">GameFi</option>
          <option value="Infrastructure">Infrastructure</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="projectRound"
          className="block mb-2 font-medium text-black"
        >
          Project Round
        </label>
        <select
          id="projectRound"
          value={round}
          onChange={(e) => setRound(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-black"
          required
        >
          <option value="">Select Project round</option>
          <option value="PRE_SEED">Pre Seed</option>
          <option value="SEED">Seed</option>
          <option value="PRIVATE_1">Private 1</option>
          <option value="PRIVATE_2">Private 2</option>
          <option value="PRIVATE_3">Private 3</option>
          <option value="PUBLIC">Public</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Proceed
      </button>
    </form>
  );
};

export default BasicInformation;
