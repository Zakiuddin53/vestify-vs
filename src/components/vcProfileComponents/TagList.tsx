import React from "react";

interface TagListProps {
  tags: string[];
}

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="w-full h-[124.31px] bg-[#F5F4FF] border border-[rgba(79,70,229,0.1)] rounded-[26.986px] p-[23.27px_20.52px] relative">
      <div className="flex flex-col gap-[29.88px]">
        <h3 className="font-urbanist text-[15.0001px] font-medium leading-[17px] text-[#18191C]">
          Tags
        </h3>
        <div className="flex flex-wrap gap-[8.54px]">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-[12.806px] py-[6.40299px] bg-[#443CC4] rounded-[10.6716px] text-white text-[15px] font-medium font-inter leading-[21px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
