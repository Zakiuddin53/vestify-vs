"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { SideNavbar } from "../ui/SideNavbar";
import ProjectCard from "../projectComponents/ProjectCard";
interface Project {
  id: string;
  name: string;
  description: string;
  status: "Success" | "In Progress";
  progress: number;
}

const Dashboard: React.FC = () => {
  const router = useRouter();

  // Mock data - replace this with API call in the future
  const projects: Project[] = [
    {
      id: "1",
      name: "Zksync",
      description:
        "Spicy Capital Is A Dynamic And Visionary Venture Capital Firm That Ignites Innovation And Accelerates Growth In The Startup Landscape. Founded On The Belief That Bold Ideas Should Be Seasoned With Strategic Investment, Spicy Capital Specializes In Early-Stage Ventures Across Diverse Sectors. Pro Susanna",
      status: "Success",
      progress: 80,
    },
  ];

  const handleAddProject = () => {
    router.push("/create-project");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SideNavbar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="mr-4 p-2 border rounded"
              />
              <button
                onClick={handleAddProject}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Add New project
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
