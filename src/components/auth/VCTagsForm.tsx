import React, { useState } from "react";

interface VCTagsFormProps {
  onSubmit: (data: {
    tags: string[];
    kycDone: boolean;
    subscriptionFee: number;
  }) => void;
}

const VCTagsForm: React.FC<VCTagsFormProps> = ({ onSubmit }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [kycDone, setKycDone] = useState(false);
  const [subscriptionFee, setSubscriptionFee] = useState("");

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag]);
      setCurrentTag("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      tags,
      kycDone,
      subscriptionFee: parseFloat(subscriptionFee) || 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Add VC Tags</h2>
      <div>
        <input
          type="text"
          value={currentTag}
          onChange={(e) => setCurrentTag(e.target.value)}
          onKeyPress={(e) =>
            e.key === "Enter" && (e.preventDefault(), handleAddTag())
          }
          placeholder="Add project tags"
          className="w-full p-2 border rounded"
        />
        <button
          type="button"
          onClick={handleAddTag}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Tag
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-200 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span>KYC</span>
        <div className="flex items-center">
          <label className="mr-2">
            <input
              type="radio"
              checked={kycDone}
              onChange={() => setKycDone(true)}
              className="mr-1"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              checked={!kycDone}
              onChange={() => setKycDone(false)}
              className="mr-1"
            />
            No
          </label>
        </div>
      </div>
      <div>
        <label
          htmlFor="subscriptionFee"
          className="block text-sm font-medium text-gray-700"
        >
          Subscription fee
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            id="subscriptionFee"
            value={subscriptionFee}
            onChange={(e) => setSubscriptionFee(e.target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="0.00"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        Proceed
      </button>
    </form>
  );
};

export default VCTagsForm;
