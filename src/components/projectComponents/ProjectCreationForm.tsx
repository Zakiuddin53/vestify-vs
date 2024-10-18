// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import BasicInformation from "./BasicInformation";
// import TokenMetrics from "./TokenMetrics";
// import OurDeals from "./OurDeals";
// import TeamAndAdvisors from "./TeamAndAdvisors";
// import PartnersAndInvestors from "./PartnersAndInvestors";
// import Socials from "./Socials";
// import { createProject, ProjectData } from "@/lib/api";
// import StepIndicator from "./StepIndicator";

// const ProjectCreationForm: React.FC<{
//   step: number;
//   setStep: React.Dispatch<React.SetStateAction<number>>;
// }> = ({ step, setStep }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [projectData, setProjectData] = useState<
//     Omit<ProjectData, "info"> & { info: Omit<ProjectData["info"], "vcId"> }
//   >({
//     info: {
//       name: "",
//       category: "",
//       description: "",
//       round: "",
//     },
//     tokenMetrics: {
//       allocation: "",
//       fdv: "",
//       price: "",
//       tgeUnlock: "",
//       tge: "",
//       vesting: "",
//     },
//     deals: {
//       maximum: 0,
//       minimum: 0,
//       acceptedTokens: "",
//       poolFee: 0,
//     },
//     teamAndAdvisors: [],
//     partnersAndInvestors: [],
//     projectSocials: {},
//   });
//   const router = useRouter();

//   const steps = [
//     { name: "Basic Information", component: BasicInformation },
//     { name: "Token Metrics", component: TokenMetrics },
//     { name: "Our Deals", component: OurDeals },
//     { name: "Team & Advisor", component: TeamAndAdvisors },
//     { name: "Partners & Investors", component: PartnersAndInvestors },
//     { name: "Socials", component: Socials },
//     { name: "Finish", component: null },
//   ];

//   const CurrentStepComponent = steps[step - 1].component;

//   const handleStepComplete = (stepData: Partial<typeof projectData>) => {
//     setProjectData((prev) => ({ ...prev, ...stepData }));
//     setStep((prevStep) => prevStep + 1);
//   };

//   const handleSubmit = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       await createProject(projectData);
//       router.push("/vc");
//     } catch (error) {
//       console.error("Project creation error:", error);
//       setError(
//         "An error occurred while creating the project. Please try again."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 px-4">
//       <div className="mb-8">
//         <StepIndicator currentStep={step} steps={steps} />
//       </div>
//       <div className="h-[100vh] bg-white border border-gray-200 rounded-lg p-6">
//         {CurrentStepComponent && (
//           <CurrentStepComponent
//             onComplete={(data) => handleStepComplete(data)}
//           />
//         )}
//         {step === steps.length && (
//           <div className="mt-6">
//             {error && <p className="text-red-500 mb-4">{error}</p>}
//             <button
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className={`w-full py-3 px-4 bg-indigo-600 text-white rounded-md text-sm font-medium ${
//                 isLoading
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-indigo-700"
//               }`}
//             >
//               {isLoading ? "Creating Project..." : "Finish"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectCreationForm;

// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import BasicInformation from "./BasicInformation";
// import TokenMetrics from "./TokenMetrics";
// import OurDeals from "./OurDeals";
// import TeamAndAdvisors from "./TeamAndAdvisors";
// import PartnersAndInvestors from "./PartnersAndInvestors";
// import Socials from "./Socials";
// import { createProject, ProjectData } from "@/lib/api";
// import StepIndicator from "./StepIndicator";

// const ProjectCreationForm: React.FC<{
//   step: number;
//   setStep: React.Dispatch<React.SetStateAction<number>>;
// }> = ({ step, setStep }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [projectData, setProjectData] = useState<
//     Omit<ProjectData, "info"> & { info: Omit<ProjectData["info"], "vcId"> }
//   >({
//     info: {
//       name: "",
//       category: "",
//       description: "",
//       round: "",
//     },
//     tokenMetrics: {
//       allocation: "",
//       fdv: "",
//       price: "",
//       tgeUnlock: "",
//       tge: "",
//       vesting: "",
//     },
//     deals: {
//       maximum: 0,
//       minimum: 0,
//       acceptedTokens: "",
//       poolFee: 0,
//     },
//     teamAndAdvisors: [],
//     partnersAndInvestors: [],
//     projectSocials: {},
//   });
//   const router = useRouter();

//   const steps = [
//     { name: "Basic Information", component: BasicInformation },
//     { name: "Token Metrics", component: TokenMetrics },
//     { name: "Our Deals", component: OurDeals },
//     { name: "Team & Advisor", component: TeamAndAdvisors },
//     { name: "Partners & Investors", component: PartnersAndInvestors },
//     { name: "Socials", component: Socials },
//   ];

//   const CurrentStepComponent = steps[step - 1].component;

//   const handleStepComplete = (stepData: Partial<typeof projectData>) => {
//     setProjectData((prev) => ({ ...prev, ...stepData }));

//     // If this is the last step, submit the project
//     if (step === steps.length) {
//       handleSubmit();
//     } else {
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleSubmit = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       await createProject(projectData);
//       router.push("/dashboard");
//     } catch (error) {
//       console.error("Project creation error:", error);
//       setError(
//         "An error occurred while creating the project. Please try again."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl min-h-screen mx-auto mt-10 px-4">
//       <div className="mb-8">
//         <StepIndicator currentStep={step} steps={steps} />
//       </div>
//       <div className=" bg-white border border-gray-200 rounded-lg p-6">
//         {CurrentStepComponent && (
//           <CurrentStepComponent
//             onComplete={(data) => handleStepComplete(data)}
//           />
//         )}
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         {isLoading && <p className="text-indigo-600">Creating Project...</p>}
//       </div>
//     </div>
//   );
// };

// export default ProjectCreationForm;

// impo
// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import BasicInformation from "./BasicInformation";
// import TokenMetrics from "./TokenMetrics";
// import OurDeals from "./OurDeals"; // Assume this component is already created
// import TeamAndAdvisors from "./TeamAndAdvisors"; // Assume this component is already created
// import PartnersAndInvestors from "./PartnersAndInvestors"; // Assume this component is already created
// import Socials from "./Socials"; // Assume this component is already created
// import { createProject, ProjectData } from "@/lib/api"; // Adjust the import based on your API structure
// import StepIndicator from "./StepIndicator";

// const ProjectCreationForm: React.FC<{
//   step: number;
//   setStep: React.Dispatch<React.SetStateAction<number>>;
// }> = ({ step, setStep }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [projectData, setProjectData] = useState<
//     Omit<ProjectData, "info"> & {
//       info: Omit<ProjectData["info"], "vcId">;
//     }
//   >({
//     info: {
//       name: "",
//       category: "",
//       description: "",
//       round: "",
//     },
//     tokenMetrics: {
//       allocation: "",
//       fdv: "",
//       price: "",
//       tgeUnlock: "",
//       tge: "",
//       vesting: "",
//     },
//     deals: {
//       maximum: 0,
//       minimum: 0,
//       acceptedTokens: "",
//       poolFee: 0,
//     },
//     teamAndAdvisors: [],
//     partnersAndInvestors: [],
//     projectSocials: {},
//   });

//   const router = useRouter();

//   const steps = [
//     { name: "Basic Information", component: BasicInformation },
//     { name: "Token Metrics", component: TokenMetrics },
//     { name: "Our Deals", component: OurDeals },
//     { name: "Team & Advisors", component: TeamAndAdvisors },
//     { name: "Partners & Investors", component: PartnersAndInvestors },
//     { name: "Socials", component: Socials },
//   ];

//   const CurrentStepComponent = steps[step - 1].component;

//   const handleStepComplete = (stepData: Partial<typeof projectData>) => {
//     setProjectData((prev) => ({ ...prev, ...stepData }));

//     // If this is the last step, submit the project
//     if (step === steps.length) {
//       handleSubmit();
//     } else {
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleSubmit = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       await createProject(projectData);
//       router.push("/dashboard");
//     } catch (error) {
//       console.error("Project creation error:", error);
//       setError(
//         "An error occurred while creating the project. Please try again."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl min-h-screen mx-auto mt-10 px-4">
//       <div className="mb-8">
//         <StepIndicator currentStep={step} steps={steps} />
//       </div>
//       <div className="bg-white border border-gray-200 rounded-lg p-6">
//         {CurrentStepComponent && (
//           <CurrentStepComponent
//             onComplete={(data) => handleStepComplete(data)}
//             initialData={
//               step === 1
//                 ? projectData.info
//                 : step === 2
//                 ? projectData.tokenMetrics
//                 : step === 3
//                 ? projectData.deals
//                 : step === 4
//                 ? projectData.teamAndAdvisors
//                 : step === 5
//                 ? projectData.partnersAndInvestors
//                 : step === 6
//                 ? projectData.projectSocials
//                 : undefined
//             } // Pass relevant initial data based on the step
//           />
//         )}
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         {isLoading && <p className="text-indigo-600">Creating Project...</p>}
//       </div>
//     </div>
//   );
// };

// export default ProjectCreationForm;

// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import BasicInformation from "./BasicInformation";
// import TokenMetrics from "./TokenMetrics";
// import OurDeals from "./OurDeals";
// import TeamAndAdvisors from "./TeamAndAdvisors";
// import PartnersAndInvestors from "./PartnersAndInvestors";
// import Socials from "./Socials";
// import { createProject, ProjectData } from "@/lib/api";
// import StepIndicator from "./StepIndicator";

// const ProjectCreationForm: React.FC<{
//   step: number;
//   setStep: React.Dispatch<React.SetStateAction<number>>;
// }> = ({ step, setStep }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [projectData, setProjectData] = useState<
//     Omit<ProjectData, "info"> & {
//       info: Omit<ProjectData["info"], "vcId">;
//     }
//   >({
//     info: {
//       name: "",
//       category: "",
//       description: "",
//       round: "",
//     },
//     tokenMetrics: {
//       allocation: "",
//       fdv: "",
//       price: "",
//       tgeUnlock: "",
//       tge: "",
//       vesting: "",
//     },
//     deals: {
//       maximum: 0,
//       minimum: 0,
//       acceptedTokens: "",
//       poolFee: 0,
//     },
//     teamAndAdvisors: [],
//     partnersAndInvestors: [],
//     projectSocials: {},
//   });

//   const router = useRouter();

//   const steps = [
//     { name: "Basic Information", component: BasicInformation },
//     { name: "Token Metrics", component: TokenMetrics },
//     { name: "Our Deals", component: OurDeals },
//     { name: "Team & Advisors", component: TeamAndAdvisors },
//     { name: "Partners & Investors", component: PartnersAndInvestors },
//     { name: "Socials", component: Socials },
//   ];

//   const CurrentStepComponent = steps[step - 1].component;

//   const handleStepComplete = (stepData: Partial<typeof projectData>) => {
//     setProjectData((prev) => ({ ...prev, ...stepData }));

//     // If this is the last step, submit the project
//     if (step === steps.length) {
//       handleSubmit();
//     } else {
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleSubmit = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       await createProject(projectData);
//       router.push("/dashboard");
//     } catch (error) {
//       console.error("Project creation error:", error);
//       setError(
//         "An error occurred while creating the project. Please try again."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl min-h-screen mx-auto mt-10 px-4">
//       <div className="mb-8">
//         <StepIndicator currentStep={step} steps={steps} />
//       </div>
//       <div className="bg-white border border-gray-200 rounded-lg p-6">
//         {CurrentStepComponent && (
//           <CurrentStepComponent
//             onComplete={(data) => handleStepComplete(data)}
//           />
//         )}
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         {isLoading && <p className="text-indigo-600">Creating Project...</p>}
//       </div>
//     </div>
//   );
// };

// export default ProjectCreationForm;

// "use client";
// import React, { useState } from "react";
// import StepIndicator from "./StepIndicator"; // Your step indicator component
// import TokenMetrics from "./TokenMetrics";
// import OurDeals from "./OurDeals";
// import TeamAndAdvisors from "./TeamAndAdvisors";
// import PartnersAndInvestors from "./PartnersAndInvestors";
// import Socials from "./Socials";

// const steps = [
//   { name: "Basic Information" },
//   { name: "Token Metrics" },
//   { name: "Our Deals" },
//   { name: "Team & Advisors" },
//   { name: "Partners & Investors" },
//   { name: "Socials" },
// ];

// const ProjectCreationForm = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [formData, setFormData] = useState({
//     tokenMetrics: {},
//     deals: {},
//     teamAndAdvisors: [],
//     partnersAndInvestors: [],
//     projectSocials: {},
//   });

//   const handleNext = () => {
//     setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
//   };

//   const handleBack = () => {
//     setCurrentStep((prev) => Math.max(prev - 1, 0));
//   };

//   const handleComplete = (data: any) => {
//     setFormData((prev) => ({ ...prev, ...data }));
//     handleNext();
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-gray-100">
//       <StepIndicator currentStep={currentStep + 1} steps={steps} />
//       {currentStep === 0 && (
//         <TokenMetrics
//           onComplete={(data) =>
//             handleComplete({ tokenMetrics: data.tokenMetrics })
//           }
//         />
//       )}
//       {currentStep === 1 && (
//         <OurDeals
//           onComplete={(data) => handleComplete({ deals: data.deals })}
//         />
//       )}
//       {currentStep === 2 && (
//         <TeamAndAdvisors
//           onComplete={(data) =>
//             handleComplete({ teamAndAdvisors: data.teamAndAdvisors })
//           }
//         />
//       )}
//       {currentStep === 3 && (
//         <PartnersAndInvestors
//           onComplete={(data) =>
//             handleComplete({ partnersAndInvestors: data.partnersAndInvestors })
//           }
//         />
//       )}
//       {currentStep === 4 && (
//         <Socials
//           onComplete={(data) =>
//             handleComplete({ projectSocials: data.projectSocials })
//           }
//         />
//       )}

//       <div className="flex justify-between mt-6">
//         {currentStep > 0 && (
//           <button
//             onClick={handleBack}
//             className="py-2 px-4 bg-gray-300 rounded-md"
//           >
//             Back
//           </button>
//         )}
//         {currentStep < steps.length - 1 && (
//           <button
//             onClick={handleNext}
//             className="py-2 px-4 bg-indigo-600 text-white rounded-md"
//           >
//             Next
//           </button>
//         )}
//         {currentStep === steps.length - 1 && (
//           <button
//             onClick={() => console.log(formData)}
//             className="py-2 px-4 bg-green-600 text-white rounded-md"
//           >
//             Submit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectCreationForm;

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

const ProjectCreationForm: React.FC<{
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({ step, setStep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [projectData, setProjectData] = useState<{
    info: {
      name: string;
      category: string;
      description: string;
      round: string;
    };
    tokenMetrics: {
      allocation: string;
      fdv: string;
      price: string;
      tgeUnlock: string;
      tge: string;
      vesting: string;
    };
    deals: {
      maximum: number;
      minimum: number;
      acceptedTokens: string;
      poolFee: number;
    };
    teamAndAdvisors: { name: string; title: string; description: string }[];
    partnersAndInvestors: any[];
    projectSocials: Record<string, string>;
  }>({
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
    { name: "Team & Advisors", component: TeamAndAdvisors },

    { name: "Partners & Investors", component: PartnersAndInvestors },

    { name: "Socials", component: Socials },
  ];

  const CurrentStepComponent = steps[step - 1].component;

  const handleStepComplete = (stepData: Partial<typeof projectData>) => {
    setProjectData((prev) => ({ ...prev, ...stepData }));

    // If this is the last step, submit the project
    if (step === steps.length) {
      handleSubmit();
    } else {
      setStep((prevStep) => prevStep + 1);
    }
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
    <div className="max-w-xl min-h-screen mx-auto mt-10 px-4">
      <div className="mb-8">
        <StepIndicator currentStep={step} steps={steps} />
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        {CurrentStepComponent && (
          <CurrentStepComponent
            onComplete={(data) => handleStepComplete(data)}
            initialData={
              step === 1
                ? projectData.info
                : step === 2
                ? projectData.tokenMetrics
                : step === 3
                ? projectData.deals
                : step === 4
                ? projectData.teamAndAdvisors
                : step === 5
                ? projectData.partnersAndInvestors
                : step === 6
                ? projectData.projectSocials
                : undefined
            }
          />
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {isLoading && <p className="text-indigo-600">Creating Project...</p>}
      </div>
    </div>
  );
};

export default ProjectCreationForm;
