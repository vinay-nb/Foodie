import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faInfo,
  faCartShopping,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex m-0 p-0 h-24 w-auto shadow-md">
      <div className="flex">
        <h1 className="flex items-center pl-20">logo</h1>
        <span className="flex items-center font-bold text-sm pl-32 font-mono">
          location
        </span>
      </div>
      <div className="flex ml-60 justify-end">
        <ul className="flex items-center justify-end">
          <li className="mr-9 px-6 hover:text-orange-600 cursor-pointer">
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="px-2" />
              Search
            </span>
          </li>
          <li className="mr-9 px-6 hover:text-orange-600 cursor-pointer">
            <span>
              <FontAwesomeIcon icon={faBolt} className="px-2" /> Offers
            </span>
          </li>
          <li className="mr-9 px-6 hover:text-orange-600 cursor-pointer">
            <FontAwesomeIcon icon={faInfo} className="px-2" />
            <span>Help</span>
          </li>
          <li className="mr-9 px-6 hover:text-orange-600 cursor-pointer">
            <span>
              <FontAwesomeIcon icon={faUser} className="px-2" /> Username
            </span>
          </li>
          <li className="mr-9 px-6 hover:text-orange-600 cursor-pointer">
            <span>
              <FontAwesomeIcon icon={faCartShopping} className="px-2" /> Cart
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
