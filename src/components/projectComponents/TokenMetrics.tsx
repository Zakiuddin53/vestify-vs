// "use client";
// import React, { useEffect, useState } from "react";

// interface TokenMetricsProps {
//   onComplete: (data: {
//     tokenMetrics: {
//       allocation: string;
//       fdv: string;
//       price: string;
//       tgeUnlock: string;
//       tge: string;
//       vesting: string;
//     };
//   }) => void;
//   initialData?: {
//     allocation: string;
//     fdv: string;
//     price: string;
//     tgeUnlock: string;
//     tge: string;
//     vesting: string;
//   };
// }

// const TokenMetrics: React.FC<TokenMetricsProps> = ({
//   onComplete,
//   initialData,
// }) => {
//   const [allocation, setAllocation] = useState(initialData?.allocation || "");
//   const [fdv, setFdv] = useState(initialData?.fdv || "");
//   const [price, setPrice] = useState(initialData?.price || "");
//   const [tgeUnlock, setTgeUnlock] = useState(initialData?.tgeUnlock || "");
//   const [tge, setTge] = useState(initialData?.tge || "");
//   const [vesting, setVesting] = useState(initialData?.vesting || "");

//   useEffect(() => {
//     if (initialData) {
//       setAllocation(initialData.allocation);
//       setFdv(initialData.fdv);
//       setPrice(initialData.price);
//       setTgeUnlock(initialData.tgeUnlock);
//       setTge(initialData.tge);
//       setVesting(initialData.vesting);
//     }
//   }, [initialData]);

//   const formatDate = (dateString: string): string => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return date.toISOString();
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onComplete({
//       tokenMetrics: {
//         allocation,
//         fdv,
//         price,
//         tgeUnlock,
//         tge: formatDate(tge),
//         vesting: formatDate(vesting),
//       },
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6 text-black">
//       <h2 className="text-2xl font-bold mb-6 text-black text-center">
//         Token Metrics
//       </h2>

//       <div>
//         <label
//           htmlFor="allocation"
//           className="block mb-2 font-medium text-black"
//         >
//           Allocation
//         </label>
//         <input
//           id="allocation"
//           type="number"
//           value={allocation}
//           onChange={(e) => setAllocation(e.target.value)}
//           placeholder="Enter Allocation"
//           className="w-full p-3 border border-gray-300 rounded-md"
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="fdv" className="block mb-2 font-medium text-black">
//           FDV
//         </label>
//         <input
//           id="fdv"
//           type="number"
//           value={fdv}
//           onChange={(e) => setFdv(e.target.value)}
//           placeholder="Enter FDV"
//           className="w-full p-3 border border-gray-300 rounded-md"
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="price" className="block mb-2 font-medium text-black">
//           Price
//         </label>
//         <input
//           id="price"
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           placeholder="Enter price"
//           className="w-full p-3 border border-gray-300 rounded-md"
//           required
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="tgeUnlock"
//           className="block mb-2 font-medium text-black"
//         >
//           TGE Unlock
//         </label>
//         <input
//           id="tgeUnlock"
//           type="number"
//           value={tgeUnlock}
//           onChange={(e) => setTgeUnlock(e.target.value)}
//           placeholder="Enter TGE unlock"
//           className="w-full p-3 border border-gray-300 rounded-md"
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="tge" className="block mb-2 font-medium text-black">
//           TGE
//         </label>
//         <input
//           id="tge"
//           type="date"
//           value={tge}
//           onChange={(e) => setTge(e.target.value)}
//           className="w-full p-3 border border-gray-300 rounded-md text-black "
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="vesting" className="block mb-2 font-medium text-black">
//           TGE Summary
//         </label>
//         <input
//           id="vesting"
//           type="date"
//           value={vesting}
//           onChange={(e) => setVesting(e.target.value)}
//           className="w-full p-3 border border-gray-300 rounded-md text-black"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//       >
//         Proceed
//       </button>
//     </form>
//   );
// };

// export default TokenMetrics;

"use client";
import React, { useEffect, useState } from "react";

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
  initialData?: {
    allocation: string;
    fdv: string;
    price: string;
    tgeUnlock: string;
    tge: string;
    vesting: string;
  };
}

const TokenMetrics: React.FC<TokenMetricsProps> = ({
  onComplete,
  initialData,
}) => {
  const [allocation, setAllocation] = useState(initialData?.allocation || "");
  const [fdv, setFdv] = useState(initialData?.fdv || "");
  const [price, setPrice] = useState(initialData?.price || "");
  const [tgeUnlock, setTgeUnlock] = useState(initialData?.tgeUnlock || "");
  const [tge, setTge] = useState(initialData?.tge || "");
  const [vesting, setVesting] = useState(initialData?.vesting || "");

  useEffect(() => {
    if (initialData) {
      setAllocation(initialData.allocation);
      setFdv(initialData.fdv);
      setPrice(initialData.price);
      setTgeUnlock(initialData.tgeUnlock);
      setTge(initialData.tge);
      setVesting(initialData.vesting);
    }
  }, [initialData]);

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
    <form onSubmit={handleSubmit} className="space-y-6 text-black">
      <h2 className="text-2xl font-bold mb-6 text-black text-center">
        Token Metrics
      </h2>
      <div>
        <label
          htmlFor="allocation"
          className="block mb-2 font-medium text-black"
        >
          Allocation
        </label>
        <input
          id="allocation"
          type="number"
          value={allocation}
          onChange={(e) => setAllocation(e.target.value)}
          placeholder="Enter Allocation"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="fdv" className="block mb-2 font-medium text-black">
          FDV
        </label>
        <input
          id="fdv"
          type="number"
          value={fdv}
          onChange={(e) => setFdv(e.target.value)}
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
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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
          value={tgeUnlock}
          onChange={(e) => setTgeUnlock(e.target.value)}
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
          value={tge}
          onChange={(e) => setTge(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-black "
          required
        />
      </div>
      <div>
        <label htmlFor="vesting" className="block mb-2 font-medium text-black">
          TGE Summary
        </label>
        <input
          id="vesting"
          type="date"
          value={vesting}
          onChange={(e) => setVesting(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-black"
          required
        />
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

export default TokenMetrics;
