// 3f3a2b73-8bdf-473a-9e33-c54b6c593cba

import React from "react";
import { getProjectDetails } from "@/lib/api";
import DealInfo from "@/components/singleProject/DealInfo";
const ProjectDetailsPage = async ({ params }: { params: { id: string } }) => {
  const projectDetails = await getProjectDetails(params.id);

  if (!projectDetails.success) {
    return <div>Error loading project details</div>;
  }

  const { project, token, socialLink, teamAndAdvisors, partnersAndInvestors } =
    projectDetails.data;

  return (
    <div className="min-h-screen bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="p-1.5 bg-[#f3f3f3] rounded-[50px] inline-block mb-2">
                <div className="text-black text-[15px] font-semibold font-['Urbanist'] leading-snug">
                  {project.status}
                </div>
              </div>
              <h1 className="text-black text-3xl font-bold font-['Urbanist'] leading-[43.50px] mb-4">
                {project.name}
              </h1>
              {/* Project Info Cards */}
              <div className="flex gap-6 mb-4">
                <div className="p-[15px] bg-[#f3f3f3] rounded-[10px]">
                  <div className="text-black text-[25px] font-extrabold font-['Urbanist'] leading-9">
                    ${token.price}
                  </div>
                  <div className="text-[#6c6c6c] text-base font-semibold font-['Urbanist'] leading-normal">
                    {project.round}
                  </div>
                </div>
                <div className="p-[15px] bg-[#f3f3f3] rounded-[10px]">
                  <div className="text-black text-[25px] font-extrabold font-['Urbanist'] leading-9">
                    {project.tokensReceived}
                  </div>
                  <div className="text-[#6c6c6c] text-base font-semibold font-['Urbanist'] leading-normal">
                    Tokens received
                  </div>
                </div>
              </div>
              {/* Edit Profile Button */}
              <button className="p-[15px] bg-indigo-600/10 rounded-lg text-[#574ee9] text-base font-semibold font-['Urbanist'] leading-normal mb-4">
                Edit Profile
              </button>
              {/* Progress Bar */}
              <div className="flex items-center gap-2.5">
                <div className="w-full h-4 bg-[#f3f3f3] rounded-full">
                  <div className="w-1/2 h-4 bg-gradient-to-r from-[#5047e6] to-[#7068f5] rounded-full"></div>
                </div>
                <div className="text-black text-[17px] font-bold font-['Urbanist'] leading-normal">
                  50%
                </div>
              </div>
            </div>
            {/* About Section */}
            <div className="mb-8">
              <h2 className="text-[#18191c] text-2xl font-bold font-['Urbanist'] leading-loose mb-2">
                About {project.name}
              </h2>
              <p className="text-[#2c2c2c] text-[17px] font-normal font-['Urbanist'] leading-normal">
                {project.description}
              </p>
            </div>
            {/* Team and Advisors */}
            <div className="mb-8">
              <h2 className="text-[#18191c] text-2xl font-bold font-['Urbanist'] leading-loose mb-4 text-center bg-[#f8f8f8] py-2 rounded-lg">
                Team and Advisors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {teamAndAdvisors.map((member, index) => (
                  <div key={index} className="relative">
                    <img
                      className="w-full h-48 object-cover rounded-t-lg"
                      src={`data:image/png;base64,${member.imgBase64}`}
                      alt={member.name}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-b-lg">
                      <div className="text-[#505050] text-lg font-bold font-['Urbanist'] leading-relaxed">
                        {member.name}
                      </div>
                      <div className="text-[#949494] text-sm font-medium font-['Urbanist'] leading-tight">
                        {member.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Partners and Investors */}
            <div className="p-[30px] bg-[#f8f8f8] rounded-lg mb-8">
              <h2 className="text-[#18191c] text-2xl font-bold font-['Urbanist'] leading-loose mb-6 text-center">
                Partners and Investors
              </h2>
              <div className="flex flex-wrap justify-between items-center gap-8">
                {partnersAndInvestors.map((partner, index) => (
                  <img
                    key={index}
                    className="h-6"
                    src={`data:image/png;base64,${partner.logoBase64}`}
                    alt={partner.name}
                  />
                ))}
              </div>
            </div>
            {/* Add Sale Details and Investment Rounds sections here */}
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Allocation and Contribute Button */}
              <div className="mb-8 text-center">
                <div className="w-24 h-24 bg-[#d9d9d9] rounded-full mx-auto mb-4"></div>
                <div className="text-black text-[22px] font-extrabold font-['Urbanist'] leading-loose mb-1">
                  ${token.allocation}
                </div>
                <div className="text-[#6c6c6c] text-[15px] font-semibold font-['Urbanist'] leading-snug mb-4">
                  Your allocation
                </div>
                <button className="px-8 py-3 bg-[#303138] rounded-lg text-white text-[15px] font-semibold font-['Urbanist'] leading-snug">
                  Contribute
                </button>
              </div>
              {/* Deal Info */}
              <DealInfo
                project={project}
                token={token}
                socialLink={socialLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
