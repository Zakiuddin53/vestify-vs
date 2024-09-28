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

  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString(); // This will format the date as "2024-08-28T12:20:13.264Z"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      tokenMetrics: {
        allocation,
        fdv,
        price,
        tgeUnlock,
        tge: formatDate(tge),
        vesting: formatDate(vesting),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Token Metrics</h2>

      <div>
        <label htmlFor="allocation" className="block mb-1">
          Allocation
        </label>
        <input
          id="allocation"
          type="text"
          value={allocation}
          onChange={(e) => setAllocation(e.target.value)}
          placeholder="Enter Allocation"
          className="w-full py-2 px-4 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="fdv" className="block mb-1">
          FDV
        </label>
        <input
          id="fdv"
          type="text"
          value={fdv}
          onChange={(e) => setFdv(e.target.value)}
          placeholder="Enter FDV"
          className="w-full py-2 px-4 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="price" className="block mb-1">
          Price
        </label>
        <input
          id="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
          className="w-full py-2 px-4 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="tgeUnlock" className="block mb-1">
          TGE Unlock
        </label>
        <input
          id="tgeUnlock"
          type="text"
          value={tgeUnlock}
          onChange={(e) => setTgeUnlock(e.target.value)}
          placeholder="Enter TGE unlock"
          className="w-full py-2 px-4 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="tge" className="block mb-1">
          TGE Date
        </label>
        <input
          id="tge"
          type="datetime-local"
          value={tge}
          onChange={(e) => setTge(e.target.value)}
          className="w-full py-2 px-4 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="vesting" className="block mb-1">
          Vesting Date
        </label>
        <input
          id="vesting"
          type="datetime-local"
          value={vesting}
          onChange={(e) => setVesting(e.target.value)}
          className="w-full py-2 px-4 border rounded-md"
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

export default TokenMetrics;
