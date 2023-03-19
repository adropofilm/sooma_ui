import React, { ReactElement } from "react";

type Props = {
  classes?: string;
  action?: () => void;
};

export const BurgerMenuIcon = ({ classes, action }: Props): ReactElement => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${classes} mr-5 w-8 h-8`}
        stroke-width={3}
        stroke="currentColor"
        fill="none"
        onClick={action}
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
