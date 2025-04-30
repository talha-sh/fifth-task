import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Text from "../ui/Text";
const FacilityManagementChart = () => {
  const data = [
    { name: "Plumbing", value: 60 },
    { name: "Electrical", value: 90 },
    { name: "Joinery", value: 75 },
  ];

  return (
    <div className="bg-white rounded-md shadow !p-4">
      <div className="w-[99.5%] !mx-auto !my-0 flex justify-between items-center">
        <Text size="14" color="black" className="font-semibold">
          Facility Management
        </Text>
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
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index}>
            <Text
              size="10"
              color="black"
              className="text-[7px] font-light !ml-[5px]"
            >
              {item.name}
            </Text>
            <ResponsiveContainer width="100%" height={20}>
              <BarChart data={[item]} layout="vertical">
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis type="category" dataKey="name" hide />
                <Bar
                  dataKey="value"
                  fill={index == 0 ? "#70ede2" : "#1D90D8"}
                  background={{ fill: "#ffffff", radius: [7, 7, 7, 7] }}
                  radius={[7, 7, 7, 7]}
                  barSize={10}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilityManagementChart;
