"use client";
import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";

interface TokenMetricsProps {
  onComplete: (data: {
    tokenMetrics: {
      round: string;
      fdv: string;
      price: string;
      tgeUnlock: string;
      tge: string;
      tgeSummary: string;
    }[];
  }) => void;
  initialData?: {
    round: string;
    fdv: string;
    price: string;
    tgeUnlock: string;
    tge: string;
    tgeSummary: string;
  }[];
}

const TokenMetrics: React.FC<TokenMetricsProps> = ({
  onComplete,
  initialData = [],
}) => {
  const [rounds, setRounds] = useState<
    {
      fdv: string;
      price: string;
      tgeUnlock: string;
      tge: string;
      tgeSummary: string;
      round: string; // Include round here
    }[]
  >(Array.isArray(initialData) ? initialData : []);

  console.log(rounds);
  const [currentRound, setCurrentRound] = useState({
    fdv: "",
    price: "",
    tgeUnlock: "",
    tge: "",
    tgeSummary: "",
    round: "", // Added here to hold the selected round value
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRound = {
      ...currentRound,
    };

    setRounds([...rounds, newRound]);
    resetCurrentRound();
    onComplete({ tokenMetrics: [...rounds, newRound] });
  };

  const resetCurrentRound = () => {
    setCurrentRound({
      fdv: "",
      price: "",
      tgeUnlock: "",
      tge: "",
      tgeSummary: "",
      round: "", // Reset round value
    });
  };

  const addAnotherRound = () => {
    const newRound = {
      ...currentRound,
    };

    setRounds([...rounds, newRound]);
    resetCurrentRound();
  };

  const roundOptions = [
    "PRE_SEED",
    "SEED",
    "PRIVATE_1",
    "PRIVATE_2",
    "PRIVATE_3",
    "PUBLIC",
  ];

  return (
    <div className="space-y-6 text-black">
      <h2 className="text-2xl font-bold mb-6 text-black text-center">
        Token Metrics
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="round"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Round
          </label>
          <Dropdown
            options={roundOptions}
            value={currentRound.round} // Use the value from currentRound
            onChange={
              (value) => setCurrentRound({ ...currentRound, round: value }) // Set the selected round
            }
            placeholder="Select Round"
          />
        </div>
        <div>
          <label htmlFor="fdv" className="block mb-2 font-medium text-black">
            FDV
          </label>
          <input
            id="fdv"
            type="number"
            value={currentRound.fdv}
            onChange={(e) =>
              setCurrentRound({ ...currentRound, fdv: e.target.value })
            }
            placeholder="Enter FDV"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 font-medium text-black">
            Price
          </label>
          <input
            id="price"
            type="number"
            value={currentRound.price}
            onChange={(e) =>
              setCurrentRound({ ...currentRound, price: e.target.value })
            }
            placeholder="Enter price"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label
            htmlFor="tgeUnlock"
            className="block mb-2 font-medium text-black"
          >
            TGE Unlock
          </label>
          <input
            id="tgeUnlock"
            type="number"
            value={currentRound.tgeUnlock}
            onChange={(e) =>
              setCurrentRound({ ...currentRound, tgeUnlock: e.target.value })
            }
            placeholder="Enter TGE unlock"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="tge" className="block mb-2 font-medium text-black">
            TGE
          </label>
          <input
            id="tge"
            type="date"
            value={currentRound.tge}
            onChange={(e) =>
              setCurrentRound({ ...currentRound, tge: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="tgeSummary"
            className="block mb-2 font-medium text-black"
          >
            TGE Summary
          </label>
          <input
            id="tgeSummary"
            type="date"
            value={currentRound.tgeSummary}
            onChange={(e) =>
              setCurrentRound({ ...currentRound, tgeSummary: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-md text-black"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={addAnotherRound}
            className="w-[166px] p-3   items-center bg-white  text-[#4F46E5] rounded-md border border-[#4F46E5] mb-4"
          >
            Add Another Round
          </button>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default TokenMetrics;
