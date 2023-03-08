import React from "react";
import { ReactElement } from "react";
import { Link, useMatch } from "react-router-dom";
import { PATHS } from "../../utils/constants";

export const Header = (): ReactElement => {
  const homePage = useMatch(PATHS.HOME);
  const quizzesPage = useMatch(PATHS.QUIZZES);

  return (
    <header>
      <nav>
        <ul>
          <li className={homePage ? "nav-selected" : "nav-deselected"}>
            <Link to={PATHS.HOME}>Home</Link>
          </li>
          <li className={quizzesPage ? "nav-selected" : "nav-deselected"}>
            <Link to={PATHS.QUIZZES}>Quizzes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
