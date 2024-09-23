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

const ProjectCreationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [projectData, setProjectData] = useState<ProjectData>({
    info: {} as ProjectData["info"],
    tokenMetrics: {} as ProjectData["tokenMetrics"],
    deals: {} as ProjectData["deals"],
    teamAndAdvisors: [],
    partnersAndInvestors: [],
    projectSocials: {} as ProjectData["projectSocials"],
  });
  const router = useRouter();

  const handleStepComplete = (stepData: Partial<ProjectData>) => {
    setProjectData((prev) => ({ ...prev, ...stepData }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await createProject(projectData);
      router.push("/dashboard");
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
      {step === 1 && (
        <BasicInformation
          onComplete={(data) => handleStepComplete({ info: data.info })}
        />
      )}
      {step === 2 && (
        <TokenMetrics
          onComplete={(data) =>
            handleStepComplete({ tokenMetrics: data.tokenMetrics })
          }
        />
      )}
      {step === 3 && (
        <OurDeals
          onComplete={(data) => handleStepComplete({ deals: data.deals })}
        />
      )}
      {step === 4 && (
        <TeamAndAdvisors
          onComplete={(data) =>
            handleStepComplete({ teamAndAdvisors: data.teamAndAdvisors })
          }
        />
      )}
      {step === 5 && (
        <PartnersAndInvestors
          onComplete={(data) =>
            handleStepComplete({
              partnersAndInvestors: data.partnersAndInvestors,
            })
          }
        />
      )}
      {step === 6 && (
        <Socials
          onComplete={(data) =>
            handleStepComplete({ projectSocials: data.projectSocials })
          }
        />
      )}

      {step === 7 && (
        <>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full py-2 px-4 bg-purple-600 text-white rounded-md ${
              isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-purple-700"
            }`}
          >
            {isLoading ? "Creating Project..." : "Finish"}
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectCreationForm;
