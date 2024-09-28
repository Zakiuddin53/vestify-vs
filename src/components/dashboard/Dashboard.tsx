"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SideNavbar } from "../ui/SideNavbar";
import ProjectCard from "../projectComponents/ProjectCard";

interface Project {
  id: string;
  name: string;
  description: string;
  round: string;
}

interface ApiResponse {
  data: Project[];
  success: boolean;
  message: string;
}

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const vcId = localStorage.getItem("vcId");
        if (!vcId) {
          throw new Error("VC ID not found");
        }

        const response = await fetch(
          `http://localhost:3000/api/vc/${vcId}/projects`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const result: ApiResponse = await response.json();
        if (result.success) {
          setProjects(result.data);
        } else {
          throw new Error(result.message || "Failed to fetch projects");
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="text-red-500 mb-4">{error}</div>
          ) : projects.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
                No projects found. Create your first project!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
