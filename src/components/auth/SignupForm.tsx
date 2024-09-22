"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import VCInfoForm from "./VCInfoForm";
import VCTagsForm from "./VCTagsForm";
import { signUp, createVC, createProject } from "@/lib/api";
import InitialSignupForm from "./InitialSignupForm";
import ProjectBasicInfoForm from "../ProjectBasicInfoForm";

interface UserData {
  userType: string;
  username?: string;
  email?: string;
  password?: string;
  name?: string;
  description?: string;
  logoBase64?: string;
  tags?: string[];
  kycDone?: boolean;
  subscriptionFee?: number;
  vcId?: string;
}

const SignupForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<UserData>({ userType: "VC" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInitialSignup = async (formData: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      const signupData = { ...formData, userType: "VC" };
      await signUp(signupData);
      setUserData((prev) => ({ ...prev, ...signupData }));
      setStep(2);
    } catch (error) {
      setError("An error occurred during signup.");
      console.error("Signup error:", error);
    }
  };

  const handleVCInfoSubmit = (vcInfo: {
    name: string;
    description: string;
    logoBase64: string;
  }) => {
    setUserData((prev) => ({ ...prev, ...vcInfo }));
    setStep(3);
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
      setUserData((prev) => ({ ...prev, vcId: response.data.vc.name })); // Use VC name as ID for now
      setStep(4);
    } catch (error) {
      setError("An error occurred while creating VC profile.");
      console.error("VC profile creation error:", error);
    }
  };

  const handleProjectBasicInfoSubmit = async (projectInfo: {
    name: string;
    description: string;
    category: string;
    round: string;
  }) => {
    const projectData = {
      info: {
        ...projectInfo,
        vcId: userData.vcId!,
      },
      tokenMetrics: {},
      deals: {},
      teamAndAdvisors: [],
      partnersAndInvestors: [],
      projectSocials: {},
    };

    try {
      await createProject(projectData);
      router.push("/dashboard");
    } catch (error) {
      setError("An error occurred while creating the project.");
      console.error("Project creation error:", error);
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
        {step === 4 && (
          <ProjectBasicInfoForm onSubmit={handleProjectBasicInfoSubmit} />
        )}
      </div>
    </div>
  );
};

export default SignupForm;
