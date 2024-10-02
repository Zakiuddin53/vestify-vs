import React from "react";

interface TagListProps {
  tags: string[];
}

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="bg-[#f4f4ff] rounded-[26.99px] border border-indigo-600/10 p-5">
      <h3 className="text-[#18191c] text-[15px] font-medium mb-4">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-[#443cc4] rounded-[10.67px] text-white text-[15px] font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
