"use client";

import React, { useEffect, useState } from "react";
import Dropdown from "../ui/Dropdown";

interface BasicInformationProps {
  onComplete: (data: {
    info: {
      name: string;
      category: string;
      description: string;
      round: string;
    };
  }) => void;
  initialData?: {
    name: string;
    category: string;
    description: string;
    round: string;
  };
}

const BasicInformation: React.FC<BasicInformationProps> = ({
  onComplete,
  initialData,
}) => {
  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [category, setCategory] = useState(initialData?.category || "");
  const [round, setRound] = useState(initialData?.round || "");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setCategory(initialData.category);
      setRound(initialData.round);
    }
  }, [initialData]);

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

  const categoryOptions = ["DeFi", "NFT", "GameFi", "Infrastructure"];
  // Uncomment and populate round options if needed
  // const roundOptions = [
  //   "PRE_SEED",
  //   "SEED",
  //   "PRIVATE_1",
  //   "PRIVATE_2",
  //   "PRIVATE_3",
  //   "PUBLIC",
  // ];

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 mx-auto text-black"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
        Basic Information
      </h2>

      <div>
        <label
          htmlFor="projectName"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Project Name
        </label>
        <input
          id="projectName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Project name"
          className="w-full p-3 border border-gray-300 rounded-md text-sm text-black"
          required
        />
      </div>

      <div>
        <label
          htmlFor="projectDescription"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Project Description
        </label>
        <textarea
          id="projectDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project Description"
          className="w-full p-3 border border-gray-300 rounded-md text-sm text-black"
          rows={4}
          required
        />
      </div>

      <div>
        <label
          htmlFor="projectCategory"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Project Category
        </label>
        <Dropdown
          options={categoryOptions}
          value={category}
          onChange={setCategory}
          placeholder="Select Project category"
        />
      </div>

      {/* Uncomment if using rounds */}
      {/* <div>
        <label
          htmlFor="projectRound"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Project Round
        </label>
        <Dropdown
          options={roundOptions}
          value={round}
          onChange={setRound}
          placeholder="Select Project round"
        />
      </div> */}

      <button
        type="submit"
        className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium"
      >
        Proceed
      </button>
    </form>
  );
};

export default BasicInformation;
