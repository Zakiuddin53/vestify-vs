"use client";
import React, { useState } from "react";

interface Partner {
  name: string;
  logo: string | null;
}

interface PartnersAndInvestorsProps {
  onComplete: (data: { partnersAndInvestors: Partner[] }) => void;
}

const PartnersAndInvestors: React.FC<PartnersAndInvestorsProps> = ({
  onComplete,
}) => {
  const [partners, setPartners] = useState<Partner[]>([
    { name: "", logo: null },
  ]);

  const handleNameChange = (index: number, value: string) => {
    const updatedPartners = partners.map((partner, i) =>
      i === index ? { ...partner, name: value } : partner
    );
    setPartners(updatedPartners);
  };

  const handleLogoChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const updatedPartners = partners.map((partner, i) =>
          i === index ? { ...partner, logo: base64String } : partner
        );
        setPartners(updatedPartners);
      };
      reader.readAsDataURL(file);
    }
  };

  const addPartner = () => {
    setPartners([...partners, { name: "", logo: null }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validPartners = partners.filter(
      (partner) => partner.name && partner.logo
    );
    onComplete({ partnersAndInvestors: validPartners });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Partners & Investors</h2>

      {partners.map((partner, index) => (
        <div key={index} className="space-y-3 pb-4 border-b">
          <div>
            <label htmlFor={`partnerName-${index}`} className="block mb-1">
              Partner name
            </label>
            <input
              id={`partnerName-${index}`}
              type="text"
              value={partner.name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              placeholder="Enter partner name"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor={`logoUpload-${index}`} className="block mb-1">
              Partner Logo
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleLogoChange(index, e)}
                className="hidden"
                id={`logoUpload-${index}`}
              />
              <label
                htmlFor={`logoUpload-${index}`}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
              >
                <svg
                  className="mr-2 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                Upload logo
              </label>
              <span className="text-xs text-gray-500">
                SVG, PNG, JPG • Max. 5MB
              </span>
            </div>
            {partner.logo && (
              <p className="mt-1 text-sm text-gray-600">Logo uploaded</p>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addPartner}
        className="text-purple-600 underline"
      >
        Add another partner
      </button>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        Proceed
      </button>
    </form>
  );
};

export default PartnersAndInvestors;
