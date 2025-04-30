import React from "react";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import StockLineChart from "./StockLineChart";
function FinancialChart() {
      // Increasing curve
  const dataUp = [
    { x: 1, value: 10 },
    { x: 2, value: 15 },
    { x: 3, value: 12 },
    { x: 4, value: 18 },
    { x: 5, value: 22 },
  ];

  // Decreasing curve
  const dataDown = [
    { x: 1, value: 22 },
    { x: 2, value: 18 },
    { x: 3, value: 12 },
    { x: 4, value: 15 },
    { x: 5, value: 10 },
  ];
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <Heading level={6} size={16} className="text-[14px]">
          Financials Snapshot
        </Heading>
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
      <div className="flex">
        <div className="flex flex-col">
            <div className="flex flex-col">
            <Text>Incoming</Text>
            <Text>$456456</Text>
            </div>
            <div className="flex flex-col">
            <Text>Incoming</Text>
            <Text>$456456</Text>
            </div>
        </div>
        <div className="flex flex-col justify-start items-start">
        <StockLineChart data={dataUp} />
        <StockLineChart data={dataDown} />
        </div>

      </div>
    </div>
  );
}

export default FinancialChart;
