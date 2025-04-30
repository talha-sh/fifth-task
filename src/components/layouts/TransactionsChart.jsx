import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Text from "../ui/Text";
// import { Heading } from "../ui/Heading";

const data = [
  { name: "Jan", paid: 2000, unpaid: 500 },
  { name: "Feb", paid: 9000, unpaid: 4000 },
  { name: "Mar", paid: 7000, unpaid: 2000 },
  { name: "Apr", paid: 3000, unpaid: 1000 },
  { name: "May", paid: 7000, unpaid: 3000 },
  { name: "June", paid: 7000, unpaid: 2500 },
  { name: "July", paid: 7000, unpaid: 3000 },
  { name: "Aug", paid: 5000, unpaid: 2000 },
  { name: "Sept", paid: 6000, unpaid: 3000 },
  { name: "Oct", paid: 5000, unpaid: 2500 },
  { name: "Nov", paid: 8000, unpaid: 3500 },
  { name: "Dec", paid: 5000, unpaid: 1500 },
];

const TransactionsChart = () => {
  return (
    <div className="bg-white border-1 border-grey rounded-lg w-full !p-[15px]">
      <div className="flex items-start justify-between mb-6">
        <div>
          <Text size={14} className="font-semibold">
            Recent Transactions
          </Text>
          <Text size={12} className="font-medium text-grey">
            Jan 24 - Dec 24
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.9906 4.61577C10.3385 4.31936 7.66161 4.31936 5.0095 4.61577C4.83006 4.63583 4.74364 4.84626 4.8572 4.98664L7.20188 7.88501C8.04181 8.92329 8.50005 10.2183 8.50005 11.5538V13.48L9.50005 14.2133V11.5538C9.50005 10.2183 9.95829 8.92329 10.7982 7.88501L13.1429 4.98664C13.2565 4.84626 13.1701 4.63583 12.9906 4.61577ZM4.89843 3.62196C7.62436 3.3173 10.3758 3.3173 13.1017 3.62196C14.0663 3.72977 14.5308 4.86096 13.9204 5.61558L11.5757 8.51395C10.8797 9.37423 10.5001 10.4473 10.5001 11.5538V15.2C10.5001 15.3884 10.3941 15.5608 10.2261 15.646C10.058 15.7312 9.85631 15.7146 9.70437 15.6032L7.70437 14.1365C7.57593 14.0423 7.50005 13.8926 7.50005 13.7333V11.5538C7.50005 10.4473 7.12037 9.37423 6.42443 8.51395L4.07975 5.61558C3.46929 4.86096 3.93381 3.72977 4.89843 3.62196Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="h-64 flex gap-2 !ml-[-52px]">
        <ResponsiveContainer width="100%" height="100%" >
          <BarChart data={data} barSize={10}>
            <XAxis
              dataKey="name"
              stroke="#bdbdbd"
              tick={{ fill: "#bdbdbd", fontSize: 12 }}
            />
            <YAxis tick={false} axisLine={{ stroke: "#bdbdbd" }} />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="paid"
              stackId="a"
              fill="#8df6eb"
              radius={[0, 0, 10, 10]}
            />
            <Bar
              dataKey="unpaid"
              stackId="a"
              fill="#1e88e5"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 flex flex-col gap-1">
          <div className="flex flex-col">
            <Text size={10} className="font-medium text-black">
              Billed
            </Text>
            <Text size={10} className="text-sea font-bold whitespace-nowrap">
              $ 598720918
            </Text>
          </div>

          <div className="flex gap-2 items-start">
              <div className="w-3 h-3 rounded-[2px] bg-sea !mt-[1px]"></div>
            <div className="flexflex-col gap-1">
              <Text size={10} className="!font-medium text-black">
                Paid
              </Text>
            <Text size={10} className="text-sea !font-medium whitespace-nowrap">
              $ 598720918
            </Text>
            </div>
          </div>

          <div className="flex gap-2 items-start">
              <div className="w-3 h-3 rounded-[2px] bg-blue !mt-[1px]"></div>
            <div className="flexflex-col gap-1">
              <Text size={10} className="!font-medium text-black">
            Unpaid
              </Text>
            <Text size={10} className="text-blue !font-medium whitespace-nowrap">
              $ 20876394
            </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsChart;
