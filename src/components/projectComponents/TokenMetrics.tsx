"use client";
import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";

interface TokenMetricsProps {
  onComplete: (data: {
    tokenMetrics: {
      round: string;
      fdv: string;
      price: string;
      tgeUnlock: number;
      tge: string;
      tgeSummary: string;
    }[];
  }) => void;
  initialData?: {
    round: string;
    fdv: string;
    price: string;
    tgeUnlock: number;
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
      tgeUnlock: number;
      tge: string;
      tgeSummary: string;
      round: string;
    }[]
  >(Array.isArray(initialData) ? initialData : []);

  const [currentRound, setCurrentRound] = useState({
    fdv: "",
    price: "",
    tgeUnlock: 0, // Default to a number
    tge: "",
    tgeSummary: "",
    round: "", // Keep as a string
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRound = {
      ...currentRound,
      tgeUnlock: Number(currentRound.tgeUnlock), // Parse as number
      tge: new Date(currentRound.tge).toISOString(),
    };

    // Adding the new round to the existing rounds
    const updatedRounds = [...rounds, newRound];

    // Filter rounds with at least one non-empty value and send the correct structure
    const filteredRounds = updatedRounds.filter((round) =>
      Object.values(round).some((value) => value !== "")
    );

    // Make sure `round` is sent as a string by mapping over rounds
    const roundsAsStrings = filteredRounds.map((round) => ({
      round: round.round,
      fdv: round.fdv,
      price: round.price,
      tgeUnlock: round.tgeUnlock,
      tge: round.tge,
      tgeSummary: round.tgeSummary,
    }));

    setRounds(filteredRounds);
    resetCurrentRound();

    // Calling the onComplete function, passing the modified data
    onComplete({ tokenMetrics: roundsAsStrings });
  };

  const resetCurrentRound = () => {
    setCurrentRound({
      fdv: "",
      price: "",
      tgeUnlock: 0, // Reset to default
      tge: "",
      tgeSummary: "",
      round: "", // Reset to empty string
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
          <label htmlFor="round" className="block mb-2 font-medium text-black">
            Project Round
          </label>
          <Dropdown
            options={roundOptions}
            value={currentRound.round}
            onChange={
              (value) => setCurrentRound({ ...currentRound, round: value }) // Keep as a string
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
            type="text" // Accept string
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
            type="text" // Accept string
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
            type="number" // Accept number
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
            type="text"
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
            type="button" // Change to button type
            onClick={addAnotherRound}
            className="w-[166px] p-3 bg-white text-[#4F46E5] rounded-md border border-[#4F46E5] mb-4 font-urbanist font-semibold text-[12px]"
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
