import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa"; // Import Twitter icon

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    round: string;
    status: "Success" | "In Progress";
    progress: number;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-80 p-3.5 bg-neutral-50 rounded-2xl border border-slate-300 flex flex-col justify-start items-start gap-3">
      <div className="w-full justify-between items-center inline-flex">
        <div className="justify-start items-center gap-2.5 flex">
          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
            <FaTwitter className="text-white text-lg" />
          </div>
          <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <h3 className="self-stretch text-neutral-900 text-lg font-bold font-['Urbanist'] capitalize">
              {project.name}
            </h3>
          </div>
        </div>
        <div className="pl-1.5 pr-2 py-0.5 rounded-2xl border border-slate-700/20 flex items-center gap-1.5">
          <div className="w-2 h-2 bg-slate-700 rounded-full" />
          <div className="text-center text-slate-700 text-xs font-medium font-['Urbanist'] leading-none">
            {project.status}
          </div>
        </div>
      </div>
      <div className="h-6 p-2 bg-indigo-200/40 rounded flex items-center gap-1.5">
        <div className="text-center text-indigo-600 text-xs font-extrabold font-['Urbanist'] leading-none">
          {project.round}
        </div>
      </div>
      <div className="flex-grow">
        <div
          className={`text-sm text-gray-600 mb-2 ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </div>
        {project.description.length > 100 && (
          <button
            onClick={toggleDescription}
            className="text-indigo-600 text-sm font-semibold hover:underline"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        )}
      </div>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
            <div
              className="bg-blue-400 h-2 rounded-full"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-600">
            {project.progress}%
          </span>
        </div>
        <button className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300">
          Details →
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
