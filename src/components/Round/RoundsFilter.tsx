import React, { useState } from "react";
import Title from "../ui/Title";

interface RoundFilterProps {
  onSelectLimit: (limit: string) => void;
}

const RoundsFilter: React.FC<RoundFilterProps> = ({ onSelectLimit }) => {
  const [activeTab, setActiveTab] = useState("micro");

  const handleTabClick = (limit: string) => {
    setActiveTab(limit);
    onSelectLimit(limit);
  };

  return (
    <div>
      <Title text="Tournaments" />
      <div className="flex justify-between font-semibold bg-[#FFFFFF26] rounded-[12px] p-1 h-[40px] mb-[14px]">
        {["all", "micro", "low", "medium", "high"].map((limit) => (
          <button
            key={limit}
            className={` px-[17px]  ${
              activeTab === limit
                ? " rounded-lg bg-white text-black"
                : "bg-transparent"
            }`}
            onClick={() => handleTabClick(limit)}
          >
            {limit.charAt(0).toUpperCase() + limit.slice(1)}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoundsFilter;
