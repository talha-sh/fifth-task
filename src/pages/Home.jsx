import React from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import TransactionsChart from "../components/layouts/TransactionsChart";
import OccupancyStats from "../components/layouts/OccupancyStats";
import DynamicTable from "../components/layouts/DynamicTable";
import Text from "../components/ui/Text";
import FacilityManagementChart from "../components/layouts/FacilityManagementChart";
import CompletionCircle from "../components/layouts/CompletionCircle";
import Tabs from "../components/layouts/Tabs";
import Header from "../components/layouts/Header";
import FlexButton from "../components/layouts/FlexButton";
import FinancialChart from "../components/layouts/FinancialChart";
import ImportantNotePopup from "../components/layouts/PopUp";
function Home() {
  const colors = ["#00B8D4", "#E0E0E0", "#181818"];
  const headers = ["Name", "Status", "Start Date", "End Date", "Rent"];
  const data = [
    {
      Name: "John Thomas",
      Status: "Active",
      "Start Date": "10-12-2024",
      "End Date": "09-12-2025",
      Rent: "20,000.00",
    },
    {
      Name: "John Thomas",
      Status: "Active",
      "Start Date": "10-12-2023",
      "End Date": "09-12-2024",
      Rent: "20,000.00",
    },
    {
      Name: "John Thomas",
      Status: "hold",
      "Start Date": "10-12-2022",
      "End Date": "09-12-2023",
      Rent: "20,000.00",
    },
    {
      Name: "John Thomas",
      Status: "unpaid",
      "Start Date": "10-12-2021",
      "End Date": "09-12-2022",
      Rent: "20,000.00",
    },
    {
      Name: "John Thomas",
      Status: "bad debt",
      "Start Date": "10-12-2020",
      "End Date": "09-12-2021",
      Rent: "20,000.00",
    },
    {
      Name: "John Thomas",
      Status: "paid",
      "Start Date": "10-12-2019",
      "End Date": "09-12-2020",
      Rent: "20,000.00",
    },
    {
      Name: "John Thomas",
      Status: "overdue",
      "Start Date": "10-12-2018",
      "End Date": "09-12-2019",
      Rent: "20,000.00",
    },
  ];
  const tabItems = [
    "Overview",
    "Financials",
    "Tickets",
    "Work Orders",
    "Attachments",
    "Listing",
    "Communication",
    "Legal",
    "Notes",
    "Inspections",
  ];
  const dropdownOptions = [
    { label: "Action 1", onClick: () => console.log("Action 1") },
    { label: "Action 2", onClick: () => console.log("Action 2") },
  ];
  return (
    <div className="flex flex-col w-full">
      <Header>
        <ImportantNotePopup/>
        <FlexButton
          label="Actions"
          isDropdown={true}
          dropdownItems={dropdownOptions}
        />
      </Header>
      <Tabs
        tabs={tabItems}
        onTabChange={(index) => console.log("Selected tab:", index)}
      />
      <div className="flex w-full">
      <div className="flex flex-col w-[60%]">
      <TransactionsChart />
      <div className="p-4">
        <Text size={16} weight="bold" className="mb-4">
          Lease History
        </Text>
        <DynamicTable headers={headers} data={data} />
      </div>
      <div className="p-4">
        <Text size={16} weight="bold" className="mb-4">
          Tenant Commission
        </Text>
        <DynamicTable headers={headers} data={data} />
      </div>
      <div className="p-4">
        <Text size={16} weight="bold" className="mb-4">
          Owner Commission
        </Text>
        <DynamicTable headers={headers} data={data} />
      </div>
      </div>
      <div className="flex flex-col w-[40%]">
        <FinancialChart/>
      <OccupancyStats value={75} title="Occupancy Stats" colors={colors} />
      <FacilityManagementChart />
      <CompletionCircle /> 
      <FacilityManagementChart />
      </div>
      </div>
    </div>
  );
}

export default Home;
