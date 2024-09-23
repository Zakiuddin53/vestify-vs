"use client";
import React, { useState } from "react";

interface OurDealsProps {
  onComplete: (data: {
    deals: {
      maximum: number;
      minimum: number;
      acceptedTokens: string;
      poolFee: number;
    };
  }) => void;
}

const OurDeals: React.FC<OurDealsProps> = ({ onComplete }) => {
  const [minimum, setMinimum] = useState<string>("");
  const [maximum, setMaximum] = useState<string>("");
  const [acceptedTokens, setAcceptedTokens] = useState<string>("");
  const [poolFee, setPoolFee] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      deals: {
        maximum: parseFloat(maximum),
        minimum: parseFloat(minimum),
        acceptedTokens,
        poolFee: parseFloat(poolFee),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Our Deals</h2>

      <div>
        <label htmlFor="minimum" className="block mb-1">
          Minimum
        </label>
        <input
          id="minimum"
          type="number"
          step="0.01"
          value={minimum}
          onChange={(e) => setMinimum(e.target.value)}
          placeholder="Enter Minimum"
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="maximum" className="block mb-1">
          Maximum
        </label>
        <input
          id="maximum"
          type="number"
          step="0.01"
          value={maximum}
          onChange={(e) => setMaximum(e.target.value)}
          placeholder="Enter maximum"
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label htmlFor="acceptedTokens" className="block mb-1">
          Select tokens accepted
        </label>
        <select
          id="acceptedTokens"
          value={acceptedTokens}
          onChange={(e) => setAcceptedTokens(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select token accepted</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="USDT">USDT</option>
          {/* Add more token options as needed */}
        </select>
      </div>

      <div>
        <label htmlFor="poolFee" className="block mb-1">
          Pool Fee
        </label>
        <input
          id="poolFee"
          type="number"
          step="0.1"
          value={poolFee}
          onChange={(e) => setPoolFee(e.target.value)}
          placeholder="Enter Pool fee"
          className="w-full p-2 border rounded"
          required
        />
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

export default OurDeals;
