import React, { ReactElement, useState } from "react";
import BurgerMenuIcon from "../BurgerMenuIcon";

export const BurgerMenu = (): ReactElement => {
  const [showDropdown, setShowDropdown] = useState(false);

  const activateBurgerMenu = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="relative w-full md:hidden">
      <BurgerMenuIcon
        classes={`${showDropdown ? "hidden" : ""} z-10`}
        action={activateBurgerMenu}
      />
      <div
        className={`${
          showDropdown ? "" : "xs:hidden"
        } absolute top-0 right-0 z-20 bg-midnight h-20 w-56 rounded-lg`}
      >
        <div onClick={() => setShowDropdown(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div>HELLOOO</div>
        </div>
      </div>
    </div>
  );
};
