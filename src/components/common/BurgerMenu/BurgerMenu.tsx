import React, { ReactElement } from "react";

type Props = {
  classes?: string;
};

export const BurgerMenu = ({ classes }: Props): ReactElement => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${classes} w-8 h-8 lg:hidden md:hidden`}
        stroke-width={3}
        stroke="currentColor"
        fill="none"
      >
        <path
          d="M3.75 9h16.5m-8 6.75h8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
