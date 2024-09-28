// components/SignupForm.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import VCInfoForm from "./VCInfoForm";
import VCTagsForm from "./VCTagsForm";
import { signUp, createVC } from "@/lib/api";
import InitialSignupForm from "./InitialSignupForm";
import imageCompression from "browser-image-compression";

interface UserData {
  accountType: string;
  username?: string;
  email?: string;
  password?: string;
  name?: string;
  description?: string;
  logoBase64?: string;
  tags?: string[];
  kycDone?: boolean;
  subscriptionFee?: number;
}

const SignupForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<UserData>({ accountType: "VC" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInitialSignup = async (formData: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      const signupData = { ...formData, accountType: "VC" };
      await signUp(signupData);
      setUserData((prev) => ({ ...prev, ...signupData }));
      setStep(2);
    } catch (error) {
      setError("An error occurred during signup.");
      console.error("Signup error:", error);
    }
  };

  const handleVCInfoSubmit = async (vcInfo: {
    name: string;
    description: string;
    logoFile: File;
  }) => {
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(vcInfo.logoFile, options);
      const logoBase64 = await imageCompression.getDataUrlFromFile(
        compressedFile
      );
      setUserData((prev) => ({ ...prev, ...vcInfo, logoBase64 }));
      setStep(3);
    } catch (error) {
      setError("An error occurred while compressing the image.");
      console.error("Image compression error:", error);
    }
  };

  const handleVCTagsSubmit = async (tagsAndSubscription: {
    tags: string[];
    kycDone: boolean;
    subscriptionFee: number;
  }) => {
    const finalVCData = {
      name: userData.name!,
      description: userData.description!,
      logoBase64: userData.logoBase64!,
      subscriptionFee: tagsAndSubscription.subscriptionFee,
      tags: tagsAndSubscription.tags,
      kycDone: tagsAndSubscription.kycDone,
    };

    try {
      const response = await createVC(finalVCData);

      if (response.data && response.data.vcId) {
        console.log("VC created successfully with ID:", response.data.vcId);
        localStorage.setItem("vcId", response.data.vcId);
        router.push("/dashboard");
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error: any) {
      const errorMessage = error.message || "An unknown error occurred";
      setError(`Error creating VC profile: ${errorMessage}`);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4 bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full"
            style={{ width: `${step * 33.33}%` }}
          ></div>
        </div>
        {step === 1 && <InitialSignupForm onSubmit={handleInitialSignup} />}
        {step === 2 && <VCInfoForm onSubmit={handleVCInfoSubmit} />}
        {step === 3 && <VCTagsForm onSubmit={handleVCTagsSubmit} />}
      </div>
    </div>
  );
};

export default SignupForm;
