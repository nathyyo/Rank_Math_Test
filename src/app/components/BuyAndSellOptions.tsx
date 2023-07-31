"use client";

import React from "react";
import { TbCurrencyDollar } from "react-icons/tb";

const BuyAndSellOptions: React.FC = () => {
  return (
    <div className="buy-and-sell-options flex justify-between">
      <BuyAndSellOption title="Buy" currency="BTC" />
      <BuyAndSellOption title="Sell" currency="BTC" />
    </div>
  );
};

interface BuyAndSellOptionProps {
  title: string;
  currency: string;
}
const BuyAndSellOption: React.FC<BuyAndSellOptionProps> = ({
  title,
  currency,
}) => {
  return (
    <div className="buy-and-sell-option w-1/2 m-2 flex flex-col items-center bg-white dark:bg-black dark:border dark:border-white py-5 px-10 rounded-3xl">
      <span
        className={`buy-and-sell-option__icon inline-block rounded-full p-3 ${
          title === "Buy" ? "bg-[#4590EE]" : "bg-[#E95191]"
        } text-white`}
      >
        <TbCurrencyDollar size={35} />
      </span>
      <div className="buy-and-sell-option__title">
        {title} {currency}
      </div>
    </div>
  );
};

export default BuyAndSellOptions;
