"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import VCInfoForm from "./VCInfoForm";
import VCTagsForm from "./VCTagsForm";
import { signUp, createVC } from "@/lib/api";
import InitialSignupForm from "./InitialSignupForm";
import SocialLinksForm from "./SocialLinksForm";

const SignupForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({ userType: "VC" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInitialSignup = async (formData) => {
    try {
      const signupData = { ...formData, userType: "VC" };
      const response = await signUp(signupData);
      if (response.success) {
        setUserData((prev) => ({ ...prev, ...signupData }));
        setStep(2);
      } else {
        setError(response.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred during signup.");
      console.error("Signup error:", error);
    }
  };

  const handleVCInfoSubmit = (vcInfo) => {
    setUserData((prev) => ({ ...prev, ...vcInfo }));
    setStep(3);
  };

  const handleVCTagsSubmit = (tagsAndSubscription) => {
    setUserData((prev) => ({ ...prev, ...tagsAndSubscription }));
    setStep(4);
  };

  const handleSocialLinksSubmit = async (socialLinks) => {
    const finalData = {
      ...userData,
      ...socialLinks,
    };

    try {
      const response = await createVC(finalData);
      if (response.success) {
        router.push("/dashboard");
      } else {
        setError(
          response.message || "Failed to create VC profile. Please try again."
        );
      }
    } catch (error) {
      setError("An error occurred while creating VC profile.");
      console.error("VC profile creation error:", error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4 bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full"
            style={{ width: `${step * 25}%` }}
          ></div>
        </div>
        {step === 1 && <InitialSignupForm onSubmit={handleInitialSignup} />}
        {step === 2 && <VCInfoForm onSubmit={handleVCInfoSubmit} />}
        {step === 3 && <VCTagsForm onSubmit={handleVCTagsSubmit} />}
        {step === 4 && <SocialLinksForm onSubmit={handleSocialLinksSubmit} />}
      </div>
    </div>
  );
};

export default SignupForm;
