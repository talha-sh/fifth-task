import React, { useState } from "react";
import {
  FaBell,
  FaCog,
  FaSearch,
  FaHome,
  FaBuilding,
  FaUser,
} from "react-icons/fa";
import Image from "../ui/Image";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/icons/search.png";
import Text from "../ui/Text";
import Avatar from "../../assets/avatar.png";
import HomeIcon from "../../assets/icons/Home.png";
import StatsIcon from "../../assets/icons/Stats.png";
import portfolioIcon from "../../assets/icons/portfolio.png";
import leasingIcon from "../../assets/icons/leasing.png";
import contactIcon from "../../assets/icons/Contact.png";
const SidebarMenu = ({ icon, isActive, onClick }) => (
  <div
    className={`flex items-center cursor-pointer !px-[15px] hover:bg-green-dark transition ${
      isActive ? "bg-blue-100" : ""
    }`}
    onClick={onClick}
  >
    <Image src={icon} alt="icon" className="w-[22px]" />
  </div>
);

export default function DashboardLayout() {
  const [activeMenu, setActiveMenu] = useState("Portfolio");

  const menus = [
    {
      label: "Home",
      icon: HomeIcon,
    },
    {
      label: "Statistics",
      icon: StatsIcon,
      sub: ["Lorem1", "Lorem2", "Lorem3"],
    },
    {
      label: "Portfolio",
      icon: portfolioIcon,
      sub: ["Properties", "Units", "Parking"],
    },
    {
      label: "Leasing",
      icon: leasingIcon,
      sub: ["All Lease", "Draft", "Active", "Completed"],
    },
    {
      label: "Contacts",
      icon: contactIcon,
      sub: ["All Contacts", "Owner", "Tenant", "Vendor", "Agents"],
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="bg-green-light flex justify-between items-center !py-[14px] !px-[17px]">
        <div className="w-full flex items-center gap-[94px] lg:gap-[50px]">
          <Image src={logo} alt="Logo" className="max-w-[120px]" />
          <div className="relative bg-white w-full max-w-[363px] h-[22px] rounded-[5px] flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-[10px] text-[12px] font-normal text-[#BDBDBD] !ml-[36px] focus:outline-none"
            />
            <Image
              src={searchIcon}
              alt="search icon"
              className="w-[14px] h-[14px] absolute left-[13px] top-[50%] transform -translate-y-1/2 ml-2"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-2">
          <div className="flex items-center justify-end gap-[25px] border-l border-r !px-[32px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00001 1.3094L6.34041 3.02653C6.16377 3.20929 5.92048 3.3125 5.6663 3.3125H3.31251V5.66629C3.31251 5.92047 3.2093 6.16376 3.02654 6.3404L1.30941 8L3.02654 9.6596C3.2093 9.83625 3.31251 10.0795 3.31251 10.3337V12.6875H5.6663C5.92048 12.6875 6.16377 12.7907 6.34041 12.9735L8.00001 14.6906L9.65961 12.9735C9.83625 12.7907 10.0795 12.6875 10.3337 12.6875H12.6875V10.3337C12.6875 10.0795 12.7907 9.83624 12.9735 9.6596L14.6906 8L12.9735 6.3404C12.7907 6.16376 12.6875 5.92048 12.6875 5.6663V3.3125H10.3337C10.0795 3.3125 9.83625 3.20929 9.65961 3.02653L8.00001 1.3094ZM7.3259 0.388076C7.69443 0.00677489 8.30559 0.00677556 8.67412 0.388076L10.4133 2.1875H12.875C13.3928 2.1875 13.8125 2.60723 13.8125 3.125V5.58675L15.6119 7.32589C15.9932 7.69442 15.9932 8.30558 15.6119 8.67411L13.8125 10.4132V12.875C13.8125 13.3928 13.3928 13.8125 12.875 13.8125H10.4133L8.67412 15.6119C8.30559 15.9932 7.69443 15.9932 7.3259 15.6119L5.58676 13.8125H3.12501C2.60725 13.8125 2.18751 13.3928 2.18751 12.875V10.4133L0.388087 8.67411C0.00678716 8.30558 0.0067864 7.69442 0.388087 7.32589L2.18751 5.58675V3.125C2.18751 2.60723 2.60725 2.1875 3.12501 2.1875H5.58676L7.3259 0.388076Z"
                fill="#282B2E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.43751 8C4.43751 6.03249 6.0325 4.4375 8.00001 4.4375C9.96753 4.4375 11.5625 6.03249 11.5625 8C11.5625 9.96751 9.96753 11.5625 8.00001 11.5625C6.0325 11.5625 4.43751 9.96751 4.43751 8ZM8.00001 5.5625C6.65382 5.5625 5.56251 6.65381 5.56251 8C5.56251 9.34619 6.65382 10.4375 8.00001 10.4375C9.34621 10.4375 10.4375 9.34619 10.4375 8C10.4375 6.65381 9.34621 5.5625 8.00001 5.5625Z"
                fill="#282B2E"
              />
            </svg>
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.75002 1.25C6.75002 0.835786 6.41423 0.5 6.00002 0.5C5.5858 0.5 5.25002 0.835786 5.25002 1.25V1.8125H4.83195C3.16315 1.8125 1.78195 3.11001 1.67778 4.77556L1.51203 7.42565C1.44883 8.43605 1.10961 9.40974 0.531318 10.2407C0.00880668 10.9915 0.473972 12.0284 1.38217 12.1374L3.93752 12.444V13.25C3.93752 14.3891 4.86093 15.3125 6.00002 15.3125C7.1391 15.3125 8.06252 14.3891 8.06252 13.25V12.444L10.6179 12.1374C11.5261 12.0284 11.9912 10.9915 11.4687 10.2407C10.8904 9.40974 10.5512 8.43605 10.488 7.42565L10.3222 4.77556C10.2181 3.11001 8.83687 1.8125 7.16807 1.8125H6.75002V1.25ZM4.83195 2.9375C3.7572 2.9375 2.86767 3.77313 2.80058 4.84579L2.63483 7.49588C2.55879 8.71173 2.15059 9.88341 1.45471 10.8833C1.41694 10.9376 1.45056 11.0125 1.51621 11.0204L4.31945 11.3568C5.43582 11.4908 6.5642 11.4908 7.68057 11.3568L10.4838 11.0204C10.5495 11.0125 10.5831 10.9376 10.5453 10.8833C9.84943 9.88341 9.44124 8.71173 9.36519 7.49588L9.19944 4.84578C9.13235 3.77313 8.24282 2.9375 7.16807 2.9375H4.83195ZM6.00002 14.1875C5.48225 14.1875 5.06252 13.7678 5.06252 13.25V12.6875H6.93752V13.25C6.93752 13.7678 6.51778 14.1875 6.00002 14.1875Z"
                fill="#282B2E"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={Avatar}
              alt="avatar"
              className="rounded-full w-10 h-10"
            />
            <div className="">
              <Text size={14} className="font-semibold">
                Alex Johnson
              </Text>
              <Text size={12} className="font-normal text-[text]">
                Admin
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* Main layout below navbar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="bg-green-light flex flex-col items-center !px-[5px]">
          {menus.map((menu) => (
            <SidebarMenu
              key={menu.label}
              icon={menu.icon}
              label={menu.label}
              isActive={activeMenu === menu.label}
              onClick={() => setActiveMenu(menu.label)}
            />
          ))}
        </div>

        {/* Submenu */}
        <div className="w-48 bg-gray-50 border-r p-4">
          <h3 className="text-blue-700 font-semibold mb-2">{activeMenu}</h3>
          <ul className="space-y-2">
            {menus
              .find((menu) => menu.label === activeMenu)
              ?.sub.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-700 hover:text-blue-700 cursor-pointer"
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 bg-gray-100 p-6">Main content here</div>
      </div>
    </div>
  );
}
