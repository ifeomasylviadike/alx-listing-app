import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary" }) => {
  const baseStyle = "px-4 py-2 rounded-md font-semibold transition-all duration-200";
  const styles =
    variant === "primary"
      ? `${baseStyle} bg-blue-600 text-white hover:bg-blue-700`
      : `${baseStyle} bg-gray-200 text-gray-800 hover:bg-gray-300`;

  return (
    <button onClick={onClick} className={styles}>
      {label}
    </button>
  );
};

export default Button;
