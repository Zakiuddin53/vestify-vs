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

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onComplete({
//       tokenMetrics: {
//         allocation,
//         fdv,
//         price,
//         tgeUnlock,
//         tge,
//         vesting,
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
//           Current Round
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
//       projectRound: string; // Added for project round
//     }[];
//   }) => void;
//   initialData?: {
//     allocation: string;
//     fdv: string;
//     price: string;
//     tgeUnlock: string;
//     tge: string;
//     vesting: string;
//   }[];
// }

// const TokenMetrics: React.FC<TokenMetricsProps> = ({
//   onComplete,
//   initialData = [], // Default to empty array
// }) => {
//   const [rounds, setRounds] = useState<
//     {
//       allocation: string;
//       fdv: string;
//       price: string;
//       tgeUnlock: string;
//       tge: string;
//       vesting: string;
//       projectRound: string; // Added for project round
//     }[]
//   >(Array.isArray(initialData) ? initialData : []); // Ensure rounds is initialized as an array

//   const [allocation, setAllocation] = useState("");
//   const [fdv, setFdv] = useState("");
//   const [price, setPrice] = useState("");
//   const [tgeUnlock, setTgeUnlock] = useState("");
//   const [tge, setTge] = useState("");
//   const [vesting, setVesting] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newRound = {
//       allocation,
//       fdv,
//       price,
//       tgeUnlock,
//       tge,
//       vesting,
//       projectRound: "", // Placeholder for dropdown value
//     };

//     setRounds([...rounds, newRound]);
//     resetForm();
//     onComplete({ tokenMetrics: [...rounds, newRound] }); // Submit all rounds
//   };

//   const resetForm = () => {
//     setAllocation("");
//     setFdv("");
//     setPrice("");
//     setTgeUnlock("");
//     setTge("");
//     setVesting("");
//   };

//   const handleAddAnotherRound = () => {
//     const newRound = {
//       allocation: "",
//       fdv: "",
//       price: "",
//       tgeUnlock: "",
//       tge: "",
//       vesting: "",
//       projectRound: "", // New field for project round dropdown
//     };
//     setRounds([...rounds, newRound]);
//   };

//   const handleProjectRoundChange = (index: number, value: string) => {
//     const updatedRounds = [...rounds];
//     updatedRounds[index].projectRound = value;
//     setRounds(updatedRounds);
//   };

//   return (
//     <div className="space-y-6 text-black">
//       <h2 className="text-2xl font-bold mb-6 text-black text-center">
//         Token Metrics
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label
//             htmlFor="allocation"
//             className="block mb-2 font-medium text-black"
//           >
//             Current Round
//           </label>
//           <input
//             id="allocation"
//             type="number"
//             value={allocation}
//             onChange={(e) => setAllocation(e.target.value)}
//             placeholder="Enter Allocation"
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="fdv" className="block mb-2 font-medium text-black">
//             FDV
//           </label>
//           <input
//             id="fdv"
//             type="number"
//             value={fdv}
//             onChange={(e) => setFdv(e.target.value)}
//             placeholder="Enter FDV"
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="price" className="block mb-2 font-medium text-black">
//             Price
//           </label>
//           <input
//             id="price"
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             placeholder="Enter price"
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="tgeUnlock"
//             className="block mb-2 font-medium text-black"
//           >
//             TGE Unlock
//           </label>
//           <input
//             id="tgeUnlock"
//             type="number"
//             value={tgeUnlock}
//             onChange={(e) => setTgeUnlock(e.target.value)}
//             placeholder="Enter TGE unlock"
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="tge" className="block mb-2 font-medium text-black">
//             TGE
//           </label>
//           <input
//             id="tge"
//             type="date"
//             value={tge}
//             onChange={(e) => setTge(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md text-black"
//             required
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="vesting"
//             className="block mb-2 font-medium text-black"
//           >
//             TGE Summary
//           </label>
//           <input
//             id="vesting"
//             type="date"
//             value={vesting}
//             onChange={(e) => setVesting(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md text-black"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//         >
//           Proceed
//         </button>
//       </form>
//       <button
//         onClick={handleAddAnotherRound}
//         className="w-full py-3 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
//       >
//         Add Another Round
//       </button>

//       {Array.isArray(rounds) &&
//         rounds.map((round, index) => (
//           <div
//             key={index}
//             className="mt-4 p-4 border border-gray-300 rounded-md"
//           >
//             <h3 className="font-semibold mb-2">Round {index + 1}</h3>
//             <div>
//               <label
//                 htmlFor={`projectRound-${index}`}
//                 className="block mb-2 font-medium text-black"
//               >
//                 Project Round
//               </label>
//               <select
//                 id={`projectRound-${index}`}
//                 value={round.projectRound}
//                 onChange={(e) =>
//                   handleProjectRoundChange(index, e.target.value)
//                 }
//                 className="w-full p-3 border border-gray-300 rounded-md"
//                 required
//               >
//                 <option value="">Select Project Round</option>
//                 <option value="Seed">Seed</option>
//                 <option value="Private">Private</option>
//                 <option value="Public">Public</option>
//                 {/* Add more options as needed */}
//               </select>
//             </div>
//           </div>
//         ))}
//     </div>
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
      projectRound: string; // Added for project round
    }[];
  }) => void;
  initialData?: {
    allocation: string;
    fdv: string;
    price: string;
    tgeUnlock: string;
    tge: string;
    vesting: string;
  }[];
}

const TokenMetrics: React.FC<TokenMetricsProps> = ({
  onComplete,
  initialData = [], // Default to empty array
}) => {
  const [rounds, setRounds] = useState<
    {
      allocation: string;
      fdv: string;
      price: string;
      tgeUnlock: string;
      tge: string;
      vesting: string;
      projectRound: string; // Added for project round
    }[]
  >(Array.isArray(initialData) ? initialData : []); // Ensure rounds is initialized as an array

  const [currentRound, setCurrentRound] = useState({
    allocation: "",
    fdv: "",
    price: "",
    tgeUnlock: "",
    tge: "",
    vesting: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRound = {
      ...currentRound,
      projectRound: "", // Placeholder for dropdown value
    };

    setRounds([...rounds, newRound]);
    resetCurrentRound();
    onComplete({ tokenMetrics: [...rounds, newRound] }); // Submit all rounds
  };

  const resetCurrentRound = () => {
    setCurrentRound({
      allocation: "",
      fdv: "",
      price: "",
      tgeUnlock: "",
      tge: "",
      vesting: "",
    });
  };

  const handleAddAnotherRound = () => {
    resetCurrentRound(); // Clear current round fields
  };

  const handleProjectRoundChange = (index: number, value: string) => {
    const updatedRounds = [...rounds];
    updatedRounds[index].projectRound = value;
    setRounds(updatedRounds);
  };

  return (
    <div className="space-y-6 text-black">
      <h2 className="text-2xl font-bold mb-6 text-black text-center">
        Token Metrics
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="allocation"
            className="block mb-2 font-medium text-black"
          >
            Current Round Allocation
          </label>
          <input
            id="allocation"
            type="number"
            value={currentRound.allocation}
            onChange={(e) =>
              setCurrentRound({ ...currentRound, allocation: e.target.value })
            }
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
            htmlFor="vesting"
            className="block mb-2 font-medium text-black"
          >
            TGE Summary
          </label>
          <input
            id="vesting"
            type="date"
            value={currentRound.vesting}
            onChange={(e) =>
              setCurrentRound({ ...currentRound, vesting: e.target.value })
            }
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
      <button
        onClick={handleAddAnotherRound}
        className="w-full py-3 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Add Another Round
      </button>

      {rounds.map((round, index) => (
        <div key={index} className="mt-4 p-4 border border-gray-300 rounded-md">
          <h3 className="font-semibold mb-2">Round {index + 1}</h3>
          <div>
            <label
              htmlFor={`projectRound-${index}`}
              className="block mb-2 font-medium text-black"
            >
              Project Round
            </label>
            <select
              id={`projectRound-${index}`}
              value={round.projectRound}
              onChange={(e) => handleProjectRoundChange(index, e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Project Round</option>
              <option value="Seed">Seed</option>
              <option value="Private">Private</option>
              <option value="Public">Public</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {/* Additional fields can be added here as needed */}
        </div>
      ))}
    </div>
  );
};

export default TokenMetrics;
