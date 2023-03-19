import React from "react";
import { redirect } from "react-router-dom";

type Props = {
  action: string | (() => void);
  label: string;
  color?: string; // | "";
};

export const Button: React.FC<Props> = ({ action, label, color }: Props) => {
  const handleButtonClick = () => {
    if (typeof action === "string") {
      redirect(action);
    } else if (typeof action === "function") {
      action();
    }
  };

  return (
    <button
      className={`bg-${color} h-10 w-28 rounded-lg`}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
};
