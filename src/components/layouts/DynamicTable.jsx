import React from "react";
import Text from "../ui/Text";

const DynamicTable = ({ headers, data }) => {
  // Helper to get status colors
  const getStatusStyles = (status) => {
    const s = status.toLowerCase();
    if (s === "active" || s === "paid") {
      return { bg: "bg-[#70EDE2]", text: "text-green-800" };
    }
    if (s === "hold") {
      return { bg: "bg-[#BDBDBD]", text: "text-white" };
    }
    if (s === "unpaid") {
      return { bg: "bg-[#FFDE2199]", text: "text-yellow-800" };
    }
    if (s === "bad debt" || s === "overdue") {
      return { bg: "bg-[#ED1111]", text: "text-red-800" };
    }
    if (s === "overdue" || s === "overdue") {
      return { bg: "bg-[#ED1111]", text: "text-red-800" };
    }
    return { bg: "bg-[#70EDE2]", text: "text-gray-700" };
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full divide-y divide-green-dark">
        <thead className="bg-white">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="!p-[11px] text-left text-xs font-normal text-black uppercase tracking-wider border-r border-green-dark last:border-none"
              >
                <div className="flex items-center">
                  <Text size="11" weight="bold" color="black">
                    {header}
                  </Text>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-green-dark">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="even:bg-green-light"
            >
              {Object.values(row).map((cell, cellIndex) => {
                const isStatusColumn = cellIndex === 1;
                const { bg, text } = isStatusColumn ? getStatusStyles(cell) : {};

                return (
                  <td
                    key={cellIndex}
                    className="!p-[11px] whitespace-nowrap border-r border-green-dark last:border-none"
                  >
                    {isStatusColumn ? (
                      <div className={`inline-flex items-center !px-2.5 !py-0.5 rounded-[4px] text-xs font-light ${bg} ${text}`}>
                        <Text size="11" weight="light" color="white">
                          {cell}
                        </Text>
                      </div>
                    ) : (
                      <Text size="11" color="black" weight="light">
                        {cell}
                      </Text>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
