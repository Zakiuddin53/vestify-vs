"use client";

import React, { useState, useEffect } from "react";

interface BasicInformationProps {
  vcId: string;
  onComplete: (data: {
    info: {
      name: string;
      category: string;
      description: string;
      round: string;
      vcId: string;
    };
  }) => void;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ onComplete }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [round, setRound] = useState("");
  const [vcId, setVcId] = useState("");

  useEffect(() => {
    // Access localStorage only on the client side
    const storedVcId = localStorage.getItem("vcId") || "";
    setVcId(storedVcId);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      info: {
        name,
        category,
        description,
        round,
        vcId,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Basic Information</h2>

      <div>
        <label htmlFor="projectName" className="block mb-1">
          Project Name
        </label>
        <input
          id="projectName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Project name"
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="projectDescription" className="block mb-1">
          Project Description
        </label>
        <textarea
          id="projectDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project Description"
          className="w-full p-2 border rounded"
          rows={3}
          required
        />
      </div>

      <div>
        <label htmlFor="projectCategory" className="block mb-1">
          Project Category
        </label>
        <select
          id="projectCategory"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Project category</option>
          <option value="Crypto">Crypto</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      <div>
        <label htmlFor="projectRound" className="block mb-1">
          Project Round
        </label>
        <select
          id="projectRound"
          value={round}
          onChange={(e) => setRound(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Project round</option>
          <option value="PRE_SEED">Pre-seed</option>
          {/* Add more rounds as needed */}
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        Proceed
      </button>
    </form>
  );
};

export default BasicInformation;
