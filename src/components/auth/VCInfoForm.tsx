"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import Image from "next/image";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const vcInfoSchema = z.object({
  name: z.string().min(1, "VC name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  logoFile: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});
type VCInfoFormData = z.infer<typeof vcInfoSchema>;

interface VCInfoFormProps {
  onSubmit: SubmitHandler<VCInfoFormData>;
}

const VCInfoForm: React.FC<VCInfoFormProps> = ({ onSubmit }) => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<VCInfoFormData>({
    resolver: zodResolver(vcInfoSchema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setValue("logoFile", file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmitWrapper: SubmitHandler<VCInfoFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitWrapper)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload logo
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="logo-upload"
            accept={ACCEPTED_IMAGE_TYPES.join(",")}
          />
          <label htmlFor="logo-upload" className="cursor-pointer">
            {logoPreview ? (
              <Image
                src={logoPreview}
                alt="Logo preview"
                width={100}
                height={100}
                className="mx-auto mb-2 object-contain"
              />
            ) : (
              <img
                src="/download.png"
                alt="Upload"
                className="mx-auto mb-2 w-12 h-12"
              />
            )}
            <span className="text-blue-600">
              {logoPreview ? "Change logo" : "Drop your logo here, or browse"}
            </span>
            <p className="text-xs text-gray-500 mt-1">
              Support: JPG, PNG, WebP
            </p>
          </label>
        </div>
        {errors.logoFile && (
          <p className="text-red-500 text-xs mt-1">
            {errors.logoFile.message as string}
          </p>
        )}
      </div>

      <Input
        label="VC Name"
        {...register("name")}
        error={errors.name}
        placeholder="Enter VC name"
      />

      <Input
        label="VC Description"
        {...register("description")}
        error={errors.description}
        as="textarea"
        placeholder="VC Description"
      />

      <Button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg"
      >
        Proceed
      </Button>
    </form>
  );
};

export default VCInfoForm;
