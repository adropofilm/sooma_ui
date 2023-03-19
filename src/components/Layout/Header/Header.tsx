import React from "react";
import { ReactElement } from "react";
import { useMatch } from "react-router-dom";
import { PATHS } from "../../../utils/constants";
import logo from "../../../assets/logo.png";
import NavItem from "./NavItem";
import Button from "../../common/Button";
import BurgerMenu from "./BurgerMenu";

export const Header = (): ReactElement => {
  const homePage = useMatch(PATHS.HOME);
  const quizzesPage = useMatch(PATHS.QUIZZES);

  return (
    <header>
      <nav className="w-4/5 mt-10 bg-midnight rounded-lg mx-auto h-16">
        <ul className="flex justify-between px-8 text-white h-full items-center">
          <li>
            <img
              src={logo}
              alt="the word sooma with two diamonds above the a"
              className="w-40"
            />
          </li>
          <div className="hidden md:flex flex-row h-full">
            <NavItem active={!!homePage} label="home" to={PATHS.HOME} />
            <NavItem
              active={!!quizzesPage}
              label="quizzes"
              to={PATHS.QUIZZES}
            />
          </div>
          <Button
            action="/quizzes"
            label="Sign Up"
            classes="hidden md:flex md:h-10 md:w-28 "
          />
          <BurgerMenu />
        </ul>
      </nav>
    </header>
  );
};
