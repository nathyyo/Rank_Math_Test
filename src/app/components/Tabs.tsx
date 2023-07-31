import React from "react";

interface TabsProps {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: React.FC<TabsProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="tabs flex items-center justify-between">
      <div
        onClick={() => setSelectedTab("Day")}
        className={selectedTab === "Day" ? "active" : ""}
      >
        Day
      </div>
      <div
        onClick={() => setSelectedTab("Week")}
        className={selectedTab === "Week" ? "active" : ""}
      >
        Week
      </div>
      <div
        onClick={() => setSelectedTab("Month")}
        className={selectedTab === "Month" ? "active" : ""}
      >
        Month
      </div>
      <div
        onClick={() => setSelectedTab("Year")}
        className={selectedTab === "Year" ? "active" : ""}
      >
        Year
      </div>
    </div>
  );
};

export default Tabs;
