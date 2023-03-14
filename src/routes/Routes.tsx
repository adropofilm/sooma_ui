import React from "react";
import { PATHS } from "../utils/constants";
import { Home } from "../components/Pages/Home";
import { Quizzes } from "../components/Pages/Quizzes";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import Root from "../components/Pages/Root";

export const Routes = [
  {
    path: PATHS.HOME,
    element: <Root />,
    children: [
      { path: PATHS.HOME, element: <Home /> },
      { path: PATHS.QUIZZES, element: <Quizzes /> },
      { path: PATHS.LOGIN, element: <Login /> },
      { path: PATHS.REGISTER, element: <Register /> },
    ],
  },
];
