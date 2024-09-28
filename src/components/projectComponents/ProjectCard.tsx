// components/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    status: "Success" | "In Progress";
    progress: number;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Image
          src="/placeholder-avatar.jpg"
          alt={project.name}
          width={40}
          height={40}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold">{project.name}</h3>
          <span
            className={`text-sm ${
              project.status === "Success"
                ? "text-green-500"
                : "text-yellow-500"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
      <div className="mb-4">
        <div className="bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600">{project.progress}%</span>
      </div>
      <Button className="w-full btn-default">Details →</Button>
    </div>
  );
};

export default ProjectCard;
