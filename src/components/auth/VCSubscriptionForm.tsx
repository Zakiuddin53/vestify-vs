import React, { useState } from "react";

const VCSubscriptionForm: React.FC<{ onSubmit: (data: any) => void }> = ({
  onSubmit,
}) => {
  const [subscriptionFee, setSubscriptionFee] = useState("");
  const [kycDone, setKycDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ subscriptionFee: parseFloat(subscriptionFee), kycDone });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        value={subscriptionFee}
        onChange={(e) => setSubscriptionFee(e.target.value)}
        placeholder="Subscription Fee"
        className="w-full p-2 border rounded"
        required
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={kycDone}
          onChange={(e) => setKycDone(e.target.checked)}
          id="kycDone"
          className="mr-2"
        />
        <label htmlFor="kycDone">KYC Completed</label>
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default VCSubscriptionForm;
