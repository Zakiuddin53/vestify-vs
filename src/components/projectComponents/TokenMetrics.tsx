"use client";
import React, { useState } from "react";

interface TokenMetricsProps {
  onComplete: (data: {
    tokenMetrics: {
      allocation: string;
      fdv: string;
      price: string;
      tgeUnlock: string;
      tge: string;
      vesting: string;
    };
  }) => void;
}

const TokenMetrics: React.FC<TokenMetricsProps> = ({ onComplete }) => {
  const [allocation, setAllocation] = useState("");
  const [fdv, setFdv] = useState("");
  const [price, setPrice] = useState("");
  const [tgeUnlock, setTgeUnlock] = useState("");
  const [tge, setTge] = useState("");
  const [vesting, setVesting] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      tokenMetrics: {
        allocation,
        fdv,
        price,
        tgeUnlock,
        tge,
        vesting,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Token Metrics</h2>
      <input
        type="text"
        value={allocation}
        onChange={(e) => setAllocation(e.target.value)}
        placeholder="Enter Allocation"
        className="w-full py-2 px-4 border rounded-md"
      />
      <input
        type="text"
        value={fdv}
        onChange={(e) => setFdv(e.target.value)}
        placeholder="Enter FDV"
        className="w-full py-2 px-4 border rounded-md"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
        className="w-full py-2 px-4 border rounded-md"
      />
      <input
        type="text"
        value={tgeUnlock}
        onChange={(e) => setTgeUnlock(e.target.value)}
        placeholder="Enter TGE unlock"
        className="w-full py-2 px-4 border rounded-md"
      />
      <input
        type="datetime-local"
        value={tge}
        onChange={(e) => setTge(e.target.value)}
        placeholder="Enter TGE date"
        className="w-full py-2 px-4 border rounded-md"
      />
      <input
        type="datetime-local"
        value={vesting}
        onChange={(e) => setVesting(e.target.value)}
        placeholder="Vesting"
        className="w-full py-2 px-4 border rounded-md"
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-600 text-white rounded-md"
      >
        Proceed
      </button>
    </form>
  );
};

export default TokenMetrics;
