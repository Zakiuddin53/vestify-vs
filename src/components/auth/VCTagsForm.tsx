"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { FormError } from "../ui/formError";

const vcTagsSchema = z.object({
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  kycDone: z.preprocess((val) => val === "true", z.boolean()),
  subscriptionFee: z.number().min(0, "Subscription fee must be 0 or greater"),
});

type VCTagsFormData = z.infer<typeof vcTagsSchema> & {
  id?: string;
};

interface VCTagsFormProps {
  onSubmit: (data: VCTagsFormData) => void;
  isLoading: boolean;
  userId: string;
}

const VCTagsForm: React.FC<VCTagsFormProps> = ({
  onSubmit,
  isLoading,
  userId,
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<VCTagsFormData>({
    resolver: zodResolver(vcTagsSchema),
    defaultValues: {
      tags: [],
      kycDone: true,
      subscriptionFee: 70,
    },
  });

  console.log("Form errors:", errors);

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      const newTags = [...tags, currentTag];
      setTags(newTags);
      setValue("tags", newTags);
      setCurrentTag("");
    }
  };

  const onSubmitForm: SubmitHandler<VCTagsFormData> = (data) => {
    console.log("Form submitted in VCTagsForm:", data);
    onSubmit({
      ...data,
      id: userId,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div className="bg-green-500 h-1 rounded-full w-1/3"></div>
      </div>
      <div className="text-right text-sm text-gray-500">0%</div>

      <h2 className="text-2xl font-bold mb-6">Add new VC</h2>

      <div>
        <Input
          label="VC tags"
          value={currentTag}
          onChange={(e) => setCurrentTag(e.target.value)}
          onKeyPress={(e) =>
            e.key === "Enter" && (e.preventDefault(), handleAddTag())
          }
          placeholder="Add project tags"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-200 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      {errors.tags && (
        <FormError message={errors.tags.message || "Tags are required"} />
      )}

      <div className="flex items-center space-x-2">
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          KYC
        </span>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register("kycDone")}
              value="true"
              className="form-radio text-green-500"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register("kycDone")}
              value="false"
              className="form-radio"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-md">
        <Input
          label="Subscription fee"
          type="number"
          {...register("subscriptionFee", { valueAsNumber: true })}
          error={errors.subscriptionFee}
          prefix="$"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-indigo-600 hover:bg-indigo-700"
      >
        {isLoading ? "Creating VC..." : "Proceed"}
      </Button>
    </form>
  );
};

export default VCTagsForm;
