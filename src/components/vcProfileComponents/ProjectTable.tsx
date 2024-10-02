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
    <div>
      <h2 className="text-2xl font-bold mb-4">Last 5 projects</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-600">
            <th className="pb-2">Project Name</th>
            <th className="pb-2">Pledge Amount</th>
            <th className="pb-2">Market Cap</th>
            <th className="pb-2">Top Gainers</th>
            <th className="pb-2">Raised Amount</th>
            <th className="pb-2">Ongoing Claim</th>
            <th className="pb-2"></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-t">
              <td className="py-4 flex items-center">
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                {project.name}
              </td>
              <td className="py-4">{project.pledgeAmount}</td>
              <td className="py-4">{project.marketCap}</td>
              <td className="py-4">
                <Image
                  src={`/icons/${project.topGainer}.svg`}
                  alt={project.topGainer}
                  width={24}
                  height={24}
                />
              </td>
              <td className="py-4">{project.raisedAmount}</td>
              <td className="py-4">{project.ongoingClaim}</td>
              <td className="py-4">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
