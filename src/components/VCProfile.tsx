"use client";
import React, { useEffect, useState } from "react";
import { getVCProfile, VCProfile } from "@/lib/api";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

import { ProfileCard } from "./vcProfileComponents/ProfileCard";
import { ProjectTable } from "./vcProfileComponents/ProjectTable";
import { TagList } from "./vcProfileComponents/TagList";
import { ROICard } from "./vcProfileComponents/ROICard";
import { SubscriptionFeeCard } from "./vcProfileComponents/SubscriptionFeeCard";
import { KYCStatus } from "./vcProfileComponents/KYCStatus";
import { SocialMediaCard } from "./vcProfileComponents/SocialMediaCard";
import { FundSizeCard } from "./vcProfileComponents/FundSizeCard";

const VCProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<VCProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const response = await getVCProfile();
        if (response.success) {
          setProfile(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError("Failed to fetch VC profile");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!profile) return <NoProfileData />;

  return (
    <div className="min-h-screen bg-white p-8">
      <Header name={profile.name} />
      <div className="flex flex-col gap-[21.34px] w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-[25.61px] w-full">
          <ProfileCard name={profile.name} logoBase64={profile.logoBase64} />
          <KYCStatus kycDone={profile.kycDone} />
          <SocialMediaCard />
          <FundSizeCard fundSize={profile.fundSize} />
        </div>
        <div className="flex flex-col md:flex-row gap-[21.34px] w-full">
          <TagList tags={profile.tags} />
          <ROICard title="Last project ROI" value="32%" />
          <ROICard title="Average ROI" value="72%" isAverage />
          <SubscriptionFeeCard fee={profile.subscriptionFee} />
        </div>
      </div>
      <DescriptionSection description={profile.description} />
      <ProjectTable projects={profile.projects} />
    </div>
  );
};
const Header: React.FC<{ name: string }> = ({ name }) => {
  const router = useRouter();

  const handleAddProject = () => {
    router.push("/vc/add-project");
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Hi, {name}</h1>
      <Button className="bg-indigo-600 text-white" onClick={handleAddProject}>
        Add Project
      </Button>
    </div>
  );
};

const DescriptionSection: React.FC<{ description: string }> = ({
  description,
}) => (
  <div className="flex flex-col items-start gap-[15px] w-full  mb-8">
    <h2 className="text-[25px] font-bold leading-[28px] text-[#18191C] font-urbanist">
      VC Description
    </h2>
    <p className="w-full text-base leading-6 text-[#2D2D2D] font-urbanist">
      {description}
    </p>
  </div>
);

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex justify-center items-center h-screen text-red-500">
    Error: {message}
  </div>
);

const NoProfileData: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    No profile data available
  </div>
);

export default VCProfilePage;
