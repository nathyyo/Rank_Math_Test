// BottomNav.tsx

import React from "react";
import { FaWallet, FaCompass, FaBell, FaCog } from "react-icons/fa";

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-100 dark:bg-black dark:border-t dark:border-white p-4">
      <ul className="flex justify-around items-center text-gray-500">
        <li className="flex flex-col items-center" title="Wallet">
          <FaWallet size={30} />
        </li>
        <li className="flex flex-col items-center" title="Discover">
          <FaCompass size={30} />
        </li>
        <li className="flex flex-col items-center" title="Notifications">
          <FaBell size={30} />
        </li>
        <li className="flex flex-col items-center" title="Settings">
          <FaCog size={30} />
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
