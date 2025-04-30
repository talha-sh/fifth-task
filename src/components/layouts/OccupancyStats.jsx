import React from "react";
import Text from "../ui/Text"; // make sure this is the correct path
import { FiFilter } from "react-icons/fi";

const OccupancyStats = () => {
  const percentage = 75;

  const radius = 70;
  const strokeWidth = 18;
  const circumference = 2 * Math.PI * radius;
  const gapAngle = 64;
  const totalAngle = 305 - gapAngle;

  const segmentAngles = [25, 25, 25, 25];

  const dashArrayFull = (totalAngle / 360) * circumference;
  const segmentLength = dashArrayFull / 4;
  const gapLength = 2;

  return (
    <div className="bg-white rounded-xl shadow-sm !p-[15px] w-full max-w-sm">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 bg-sea rounded-sm"></div>
          <Text size={14} className="font-semibold text-gray-800">
            Occupancy Stats
          </Text>
        </div>
        <div className="bg-sea p-2 rounded-full">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="18" rx="3" fill="#70EDE2" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.9906 4.61577C10.3385 4.31936 7.66161 4.31936 5.0095 4.61577C4.83006 4.63583 4.74364 4.84626 4.8572 4.98664L7.20188 7.88501C8.04181 8.92329 8.50005 10.2183 8.50005 11.5538V13.48L9.50005 14.2133V11.5538C9.50005 10.2183 9.95829 8.92329 10.7982 7.88501L13.1429 4.98664C13.2565 4.84626 13.1701 4.63583 12.9906 4.61577ZM4.89843 3.62196C7.62436 3.3173 10.3758 3.3173 13.1017 3.62196C14.0663 3.72977 14.5308 4.86096 13.9204 5.61558L11.5757 8.51395C10.8797 9.37423 10.5001 10.4473 10.5001 11.5538V15.2C10.5001 15.3884 10.3941 15.5608 10.2261 15.646C10.058 15.7312 9.85631 15.7146 9.70437 15.6032L7.70437 14.1365C7.57593 14.0423 7.50005 13.8926 7.50005 13.7333V11.5538C7.50005 10.4473 7.12037 9.37423 6.42443 8.51395L4.07975 5.61558C3.46929 4.86096 3.93381 3.72977 4.89843 3.62196Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* SVG Circle */}
      <div className="relative flex flex-col items-center mt-6">
        <svg
          width="150"
          height="150"
          viewBox="0 0 200 120"
          className="overflow-visible"
        >
          <g transform="rotate(150 100 100)">
            {/* Segment 1 */}
            <circle
              r={radius}
              cx="100"
              cy="130"
              fill="transparent"
              stroke="#70ede2"
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength} ${circumference}`}
              strokeDashoffset="0"
              strokeLinecap="round"
            />
            {/* Segment 2 */}
            <circle
              r={radius}
              cx="100"
              cy="130"
              fill="transparent"
              stroke="#0F3E9F"
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength} ${circumference}`}
              strokeDashoffset={-(segmentLength + gapLength)}
              strokeLinecap="round"
            />
            {/* Segment 3 */}
            <circle
              r={radius}
              cx="100"
              cy="130"
              fill="transparent"
              stroke="#60C5F9"
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength} ${circumference}`}
              strokeDashoffset={-(2 * (segmentLength + gapLength))}
              strokeLinecap="round"
            />
            {/* Segment 4 */}
            <circle
              r={radius}
              cx="100"
              cy="130"
              fill="transparent"
              stroke="#e7f3f9"
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength} ${circumference}`}
              strokeDashoffset={-(3 * (segmentLength + gapLength))}
              strokeLinecap="round"
            />
          </g>
        </svg>

        {/* Percentage Text */}
        <div className="absolute top-[70px] left-[41%]">
          <Text size={24} className="text-sea font-semibold">
            {percentage}%
          </Text>
        </div>

        {/* 0% and 100% Labels */}
        <div className="absolute bottom-0 w-full flex justify-center gap-[64px] text-xs text-gray-400">
          <Text size={12}>0%</Text>
          <Text size={12}>100%</Text>
        </div>
      </div>
    </div>
  );
};

export default OccupancyStats;
