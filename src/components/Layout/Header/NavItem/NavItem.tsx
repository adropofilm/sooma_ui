import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

type NavItemProps = {
  active: boolean;
  label: string;
  to: string;
  styles?: string;
  testId?: string;
};

export const NavItem = ({
  active,
  label,
  to,
  styles,
  testId,
}: NavItemProps): ReactElement => {
  const style = active ? "border-b-4 border-periwinkle" : "mb-1";
  return (
    <li
      className={`${style} ${styles} flex justify-center items-center`}
      data-testid={testId}
      data-navselected={active}
    >
      <Link to={to} aria-label={`${label} page link`} className="capitalize">
        {label}
      </Link>
    </li>
  );
};
