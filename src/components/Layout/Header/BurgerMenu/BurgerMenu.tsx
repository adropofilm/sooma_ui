import React, { ReactElement, useState } from "react";
import { useMatch } from "react-router-dom";
import { PATHS } from "../../../../utils/constants";
import BurgerMenuIcon from "../BurgerMenuIcon";
import NavItem from "../NavItem";

export const BurgerMenu = (): ReactElement => {
  const [showDropdown, setShowDropdown] = useState(false);

  const homePage = useMatch(PATHS.HOME);
  const quizzesPage = useMatch(PATHS.QUIZZES);

  const activateBurgerMenu = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative w-full md:hidden">
      <BurgerMenuIcon
        classes={`${showDropdown ? "hidden" : ""} z-10 ml-auto`}
        action={activateBurgerMenu}
      />
      <div className={`${showDropdown ? "" : "xs:hidden"} w-full absolute `}>
        <div className="relative z-20 bg-midnight w-full rounded-lg">
          <div onClick={() => setShowDropdown(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <NavItem active={!!homePage} label="home" to={PATHS.HOME} />
            <NavItem
              active={!!quizzesPage}
              label="quizzes"
              to={PATHS.QUIZZES}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
