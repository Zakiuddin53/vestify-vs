import React from "react";
import Image from "next/image";

interface Project {
  id: string;
  name: string;
  pledgeAmount: string;
  marketCap: string;
  topGainer: string;
  raisedAmount: string;
  ongoingClaim: number;
}

interface ProjectTableProps {
  projects: Project[];
}

export const ProjectTable: React.FC<ProjectTableProps> = ({ projects }) => {
  return (
    <div className="flex flex-col items-start gap-[30px] w-[1296px]">
      <h2 className="text-[25px] font-bold leading-[28px] text-[#18191C]">
        Last 5 projects
      </h2>
      <div className="flex flex-col items-start gap-[20px] w-full">
        <div className="flex items-center w-full pb-[31.5px] border-b border-[#E1E1E1]">
          <span className="w-[295.96px] text-[15px] font-semibold text-[#AFAFAF] capitalize">
            Project Name
          </span>
          <span className="w-[170px] text-[15px] font-semibold text-[#AFAFAF] capitalize">
            Pledge Amount
          </span>
          <span className="w-[175px] text-[15px] font-semibold text-[#AFAFAF] capitalize">
            Market Cap
          </span>
          <span className="w-[169.59px] text-[15px] font-semibold text-[#AFAFAF] capitalize">
            Top Gainers
          </span>
          <span className="w-[211.59px] text-[15px] font-semibold text-[#AFAFAF] capitalize">
            Raised Amount
          </span>
          <span className="w-[177.85px] text-[15px] font-semibold text-[#AFAFAF] capitalize">
            Ongoing Claim
          </span>
          <span className="w-[96px]"></span>
        </div>
        {projects.map((project) => (
          <div key={project.id} className="flex items-center w-full h-[40px]">
            <div className="w-[295.96px] flex items-center gap-[15px]">
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={40}
                height={40}
              />
              <span className="text-[18px] font-bold text-[#303138]">
                {project.name}
              </span>
            </div>
            <span className="w-[170px] text-[18px] font-bold text-[#515151]">
              {project.pledgeAmount}
            </span>
            <span className="w-[175px] text-[18px] font-bold text-[#515151]">
              {project.marketCap}
            </span>
            <div className="w-[169.59px]">
              <Image
                src={`/icons/${project.topGainer}.svg`}
                alt={project.topGainer}
                width={29.01}
                height={29.01}
              />
            </div>
            <span className="w-[211.59px] text-[18.6758px] font-extrabold text-[#303138]">
              {project.raisedAmount}
            </span>
            <span className="w-[177.85px] text-[18px] font-bold text-[#515151]">
              {project.ongoingClaim}
            </span>
            <button className="w-[96px] h-[35px] bg-[#443CC4] text-white text-[14px] font-semibold rounded-[28px]">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
