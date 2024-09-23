"use client";
import React, { useState } from "react";

interface TeamMember {
  name: string;
  title: string;
  description: string;
}

interface TeamAndAdvisorsProps {
  onComplete: (data: { teamAndAdvisors: TeamMember[] }) => void;
}

const TeamAndAdvisors: React.FC<TeamAndAdvisorsProps> = ({ onComplete }) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: "", title: "", description: "" },
  ]);

  const handleInputChange = (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => {
    const updatedMembers = teamMembers.map((member, i) => {
      if (i === index) {
        return { ...member, [field]: value };
      }
      return member;
    });
    setTeamMembers(updatedMembers);
  };

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: "", title: "", description: "" }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete({
      teamAndAdvisors: teamMembers.filter(
        (member) => member.name && member.title && member.description
      ),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Team & Advisors</h2>

      {teamMembers.map((member, index) => (
        <div key={index} className="space-y-3 pb-4 border-b">
          <div>
            <label htmlFor={`name-${index}`} className="block mb-1">
              Name
            </label>
            <input
              id={`name-${index}`}
              type="text"
              value={member.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
              placeholder="Enter name"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor={`title-${index}`} className="block mb-1">
              Title
            </label>
            <input
              id={`title-${index}`}
              type="text"
              value={member.title}
              onChange={(e) =>
                handleInputChange(index, "title", e.target.value)
              }
              placeholder="Enter title"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor={`description-${index}`} className="block mb-1">
              Brief Description
            </label>
            <textarea
              id={`description-${index}`}
              value={member.description}
              onChange={(e) =>
                handleInputChange(index, "description", e.target.value)
              }
              placeholder="Enter brief description"
              className="w-full p-2 border rounded"
              rows={3}
              required
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addTeamMember}
        className="text-purple-600 underline"
      >
        Add another team member
      </button>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700"
      >
        Proceed
      </button>
    </form>
  );
};

export default TeamAndAdvisors;
