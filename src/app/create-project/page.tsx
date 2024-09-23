"use client";

import ProjectCreationForm from "@/components/projectComponents/ProjectCreationForm";

export default function CreateProjectPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Create Your First Project</h1>
      <ProjectCreationForm />
    </div>
  );
}
