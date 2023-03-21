import React, { ReactElement, useState } from "react";
import { useMatch } from "react-router-dom";
import { PATHS } from "../../../../utils/constants";
import XIcon from "../../../common/Icons";
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
    <div className="md:hidden">
      <BurgerMenuIcon
        classes={`${showDropdown ? "hidden" : ""}`}
        action={activateBurgerMenu}
      />
      <div
        onClick={() => setShowDropdown(false)}
        className={`${showDropdown ? "" : "hidden"} relative`}
      >
        <XIcon />
        <div className="w-28 absolute top-9 border-t-8 border-midnight -left-14 bg-midnight rounded-b-lg">
          <NavItem active={!!homePage} label="home" to={PATHS.HOME} />
          <NavItem active={!!quizzesPage} label="quizzes" to={PATHS.QUIZZES} />
        </div>
      </div>
    </div>
  );
};
