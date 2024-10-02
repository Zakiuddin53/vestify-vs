"use client";
import React, { useEffect, useState } from "react";
import { getVCProfile, VCProfile } from "@/lib/api";
import { Button } from "./ui/Button";

import { ProfileCard } from "./vcProfileComponents/ProfileCard";
import { ProjectTable } from "./vcProfileComponents/ProjectTable";
import { SocialMediaIcons } from "./vcProfileComponents/SocialMediaIcons";
import { TagList } from "./vcProfileComponents/TagList";
import { ROICard } from "./vcProfileComponents/ROICard";
import { SubscriptionFeeCard } from "./vcProfileComponents/SubscriptionFeeCard";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <ProfileCard name={profile.name} logoBase64={profile.logoBase64} />
        <KYCStatus kycDone={profile.kycDone} />
        <SocialMediaCard />
        <FundSizeCard fundSize={profile.fundSize} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <TagList tags={profile.tags} />
        <ROICard title="Last project ROI" value="32%" />
        <ROICard title="Average ROI" value="72%" isAverage />
        <SubscriptionFeeCard fee={profile.subscriptionFee} />
      </div>
      <DescriptionSection description={profile.description} />
      <ProjectTable projects={profile.projects} />
    </div>
  );
};

const Header: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-3xl font-bold">Hi, {name}</h1>
    <Button className="bg-indigo-600 text-white">Join Now</Button>
  </div>
);

const KYCStatus: React.FC<{ kycDone: boolean }> = ({ kycDone }) => (
  <ProfileCard title="KYC Status">
    <div
      className={`p-3 rounded-lg ${kycDone ? "bg-green-100" : "bg-red-100"}`}
    >
      <span
        className={`text-2xl font-semibold ${
          kycDone ? "text-green-600" : "text-red-600"
        }`}
      >
        {kycDone ? "Completed" : "Required"}
      </span>
    </div>
  </ProfileCard>
);

const SocialMediaCard: React.FC = () => (
  <ProfileCard title="Social Media">
    <SocialMediaIcons />
  </ProfileCard>
);

const FundSizeCard: React.FC<{ fundSize: string }> = ({ fundSize }) => (
  <ProfileCard title="Fund Size" className="bg-[#fff9f4] border-[#e5bf46]/10">
    <span className="text-4xl font-bold">${fundSize}</span>
  </ProfileCard>
);

const DescriptionSection: React.FC<{ description: string }> = ({
  description,
}) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">VC Description</h2>
    <p className="text-gray-700">{description}</p>
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
