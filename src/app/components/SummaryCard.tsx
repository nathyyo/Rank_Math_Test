"use client";

import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { BsChevronCompactDown } from "react-icons/bs";
import { SiBitcoinsv } from "react-icons/si";

interface SummaryCardProps {
  title: string;
  icon: string;
  value: string;
  valueCurrency: string;
  currencySymbol: string;
  currencyAmount: string;
  differencePercentage: string;
  differenceColor: string;
  toggleExtraInfo: () => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  currencySymbol,
  icon,
  value,
  valueCurrency,
  currencyAmount,
  differencePercentage,
  differenceColor,
  toggleExtraInfo,
}) => {
  return (
    <div className="summary-card rounded-2xl bg-white dark:bg-black dark:border dark:border-white p-6">
      <div className="row flex justify-between">
        <div className="flex items-center mb-4">
          <div className="icon">{icon}</div>
          <SiBitcoinsv className="icon mr-4" size={50} />
          <div className="title">{title}</div>
        </div>
        <div className="symbol">{currencySymbol}</div>
      </div>
      <div className="row flex">
        <div className="currency-amount font-bold text-4xl">
          {currencyAmount} {currencySymbol}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="value">
          ${value} {valueCurrency}
        </div>
        <span
          className="difference rounded-3xl py-2 px-3 text-white font-bold"
          style={{ backgroundColor: differenceColor }}
        >
          {differencePercentage}%
        </span>
      </div>
      <div className="flex justify-center">
        <div onClick={() => toggleExtraInfo()}>
          <BsChevronCompactDown color="#ddd" size={50} />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
