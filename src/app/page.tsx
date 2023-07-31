"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Graph from "./components/Graph";
import SummaryCard from "./components/SummaryCard";
import BottomNav from "./components/BottomNav";
import BuyAndSellOptions from "./components/BuyAndSellOptions";

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Day");
  const [isExtraInfoOpen, setIsExtraInfoOpen] = useState<boolean>(false);

  return (
    <div className="App pb-10">
      <Header />
      <div className="p-4">
        <SummaryCard
          title="Bitcoin"
          currencySymbol="BTC"
          icon=""
          currencyAmount="3.529020"
          value="19.153"
          valueCurrency="USD"
          differencePercentage="-2.32"
          differenceColor="red"
          toggleExtraInfo={() => setIsExtraInfoOpen(!isExtraInfoOpen)}
        />
        {isExtraInfoOpen && (
          <div className="extra-info">
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </div>
        )}
        <Graph selectedTab={selectedTab} />
        <BuyAndSellOptions />
      </div>
      <BottomNav />
    </div>
  );
};

export default App;
