import React from "react";
import { ReactElement } from "react";
import { useMatch } from "react-router-dom";
import { PATHS } from "../../../utils/constants";
import logo from "../../../assets/logo.png";
import NavItem from "./NavItem";

export const Header = (): ReactElement => {
  const homePage = useMatch(PATHS.HOME);
  const quizzesPage = useMatch(PATHS.QUIZZES);

  return (
    <header>
      <nav className="h-14 w-4/5 mt-10 bg-midnight rounded-lg mx-auto">
        <ul className="flex pl-8 text-white h-full">
          <li>
            <img
              src={logo}
              alt="the word sooma with two diamonds above the a"
              className="h-10"
            />
          </li>
          <NavItem active={!!homePage} label="home" to={PATHS.HOME} />
          <NavItem active={!!quizzesPage} label="quizzes" to={PATHS.QUIZZES} />
        </ul>
      </nav>
    </header>
  );
};
