"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BasicInformation from "./BasicInformation";
import TokenMetrics from "./TokenMetrics";
import OurDeals from "./OurDeals";
import TeamAndAdvisors from "./TeamAndAdvisors";
import PartnersAndInvestors from "./PartnersAndInvestors";
import Socials from "./Socials";
import { createProject, ProjectData } from "@/lib/api";
import StepIndicator from "./StepIndicator";

const ProjectCreationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [projectData, setProjectData] = useState<
    Omit<ProjectData, "info"> & { info: Omit<ProjectData["info"], "vcId"> }
  >({
    info: {
      name: "",
      category: "",
      description: "",
      round: "",
    },
    tokenMetrics: {
      allocation: "",
      fdv: "",
      price: "",
      tgeUnlock: "",
      tge: "",
      vesting: "",
    },
    deals: {
      maximum: 0,
      minimum: 0,
      acceptedTokens: "",
      poolFee: 0,
    },
    teamAndAdvisors: [],
    partnersAndInvestors: [],
    projectSocials: {},
  });
  const router = useRouter();

  const steps = [
    { name: "Basic Information", component: BasicInformation },
    { name: "Token Metrics", component: TokenMetrics },
    { name: "Our Deals", component: OurDeals },
    { name: "Team & Advisor", component: TeamAndAdvisors },
    { name: "Partners & Investors", component: PartnersAndInvestors },
    { name: "Socials", component: Socials },
    { name: "Finish", component: null },
  ];

  const CurrentStepComponent = steps[step - 1].component;

  const handleStepComplete = (stepData: Partial<typeof projectData>) => {
    setProjectData((prev) => ({ ...prev, ...stepData }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await createProject(projectData);
      router.push("/vc/profile");
    } catch (error) {
      console.error("Project creation error:", error);
      setError(
        "An error occurred while creating the project. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Add new Project</h1>
      <div className="mb-8">
        <StepIndicator currentStep={step} steps={steps} />
      </div>
      {CurrentStepComponent && (
        <CurrentStepComponent onComplete={(data) => handleStepComplete(data)} />
      )}
      {step === steps.length && (
        <div className="mt-6">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full py-3 px-4 bg-indigo-600 text-white rounded-md ${
              isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-indigo-700"
            }`}
          >
            {isLoading ? "Creating Project..." : "Finish"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCreationForm;
