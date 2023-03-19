import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

type NavItemProps = {
  active: boolean;
  label: string;
  to: string;
  styles?: string;
};

export const NavItem = ({
  active,
  label,
  to,
  styles,
}: NavItemProps): ReactElement => {
  const style = active ? "border-b-4 border-periwinkle" : "mb-1";
  return (
    <li className={`${style} ${styles} flex justify-center items-center`}>
      <Link to={to} aria-label={`${label} page link`} className="capitalize">
        {label}
      </Link>
    </li>
  );
};
