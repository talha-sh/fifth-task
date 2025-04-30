'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FlexButton({ label, isDropdown = false, dropdownItems = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => isDropdown && setIsOpen(true)}
      onMouseLeave={() => isDropdown && setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 !px-4 !py-2 bg-blue text-white text-[12px] font-medium rounded-[3px] hover:bg-blue-950 transition-all cursor-pointer"
      >
        {label}
        {isDropdown && <ChevronDown size={14} />}
      </button>

      {isDropdown && isOpen && (
        <ul className="absolute left-0 mt-1 w-40 bg-white border border-gray-200 rounded shadow-lg z-50">
          {dropdownItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={item.onClick}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
