'use client';

import { useState } from 'react';

export default function Tabs({ tabs = [], onTabChange }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabChange) onTabChange(index);
  };

  return (
    <div className="overflow-x-auto border-b border-blue-light bg-[#EFF5F880]">
      <div className="flex min-w-max gap-1 sm:gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 rounded-t-md whitespace-nowrap text-sm sm:text-base transition-colors duration-200
              ${
                index === activeTab
                  ? 'bg-blue text-white !py-[10px] !px-[16px] cursor-pointer text-[14px] font-medium'
                  : 'text-blue-light !py-[10px] !px-[16px] cursor-pointer text-[14px] font-medium'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
