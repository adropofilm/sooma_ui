import React from "react";
import { redirect } from "react-router-dom";

type Props = {
  action: string | (() => void);
  label: string;
  classes?: string;
};

export const Button: React.FC<Props> = ({ action, label, classes }: Props) => {
  const handleButtonClick = () => {
    if (typeof action === "string") {
      redirect(action);
    } else if (typeof action === "function") {
      action();
    }
  };

  return (
    <button
      className={`${classes} rounded-lg flex items-center justify-center bg-periwinkle`}
      onClick={handleButtonClick}
    >
      <span>{label}</span>
    </button>
  );
};
