// Dashboard.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { getVCProjects } from "../../lib/api";
import ProjectCard from "../projectComponents/ProjectCard";
import { Search } from "./Search";

interface DecodedToken {
  user: {
    id: string;
  };
  iat: number;
}

interface Project {
  id: string;
  name: string;
  description: string;
  round: string;
}

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = Cookies.get("access_token");
        if (!token) {
          throw new Error("No access token found");
        }

        const decodedToken = jwtDecode<DecodedToken>(token);
        const vcId = decodedToken.user.id;

        const response = await getVCProjects(vcId);
        if (response.success) {
          setProjects(response.data);
        } else {
          throw new Error(response.message || "Failed to fetch projects");
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
    <div className="flex flex-col min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Search />
              <button
                onClick={handleAddProject}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 flex items-center"
              >
                <span className="mr-2">+</span>
                Add New project
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : error ? (
            <div className="text-red-500 mb-4 text-center">{error}</div>
          ) : projects.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
                No projects found. Create your first project!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={{ ...project, status: "In Progress", progress: 0 }}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
