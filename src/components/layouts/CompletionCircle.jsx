import React from "react";
import Text from "../ui/Text";
const CompletionCircle = () => {
  const percentage = 75;
  const size = 150; // Circle size
  const strokeBg = 4; // Background circle stroke width
  const strokeProgress = 10; // Progress circle stroke width
  const radius = (size - strokeProgress) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full flex justify-center items-center gap-3">
      <Text size="14" color="black" className="font-semibold">
          Completion Status
        </Text>
      <div className="relative flex items-center justify-center">

      <svg width={size} height={size} className="transform -rotate-0">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e7f3f9" // Tailwind's gray-200
          strokeWidth={strokeBg}
          fill="transparent"
          />

        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#70ede2" // Tailwind's green-500
          strokeWidth={strokeProgress}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          />
      </svg>

      {/* Center Text */}
      <div className="absolute text-sea text-xl font-semibold">
        {percentage}%
      </div>
          </div>
    </div>
  );
};

export default CompletionCircle;
