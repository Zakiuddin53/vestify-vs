import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    round: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center mr-3">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
              alt="Twitter Icon"
              width={24}
              height={24}
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{project.name}</h3>
          </div>
        </div>
        <span className="text-sm text-green-500 font-semibold">Success</span>
      </div>

      <div className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
        {project.round}
      </div>

      <p className="text-sm text-gray-600 mb-2">{project.description}</p>
      {project.description.length > 150 && (
        <span className="text-sm text-blue-600 cursor-pointer">See More</span>
      )}

      <div className="mt-4 mb-2 flex items-center">
        <div className="flex-grow bg-gray-200 rounded-full h-2 mr-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: "80%" }}
          ></div>
        </div>
        <span className="text-sm text-gray-600 font-semibold">80%</span>
      </div>

      <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 mt-2">
        Details →
      </button>
    </div>
  );
};

export default ProjectCard;
