import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

type NavItemProps = {
  active: boolean;
  label: string;
  to: string;
};

export const NavItem = ({ active, label, to }: NavItemProps): ReactElement => {
  const style = active ? "border-b-4 border-periwinkle" : "nav-deelected";
  return (
    <li className={`${style} ml-10`}>
      <Link to={to} aria-label={`${label} page link`} className="capitalize">
        {label}
      </Link>
    </li>
  );
};
