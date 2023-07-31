"use client";

import React, { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-white dark:bg-black d-flex items-center">
      <div className="back-button" onClick={() => window.history.back()}>
        <IoIosArrowBack style={{ fontSize: "2.8rem", color: "#aaa" }} />
      </div>
      <div className="logo">Bitcoin Wallet</div>
      <div
        className="menu-icon"
        style={{ fontSize: "2rem", color: "#aaa" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <SlOptionsVertical />
      </div>

      {/* <nav className={isOpen ? 'open' : ''}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
