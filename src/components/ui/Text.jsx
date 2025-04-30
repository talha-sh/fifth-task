import React from "react";

const Text = ({
  size = "14",
  color = "black",
  weight = "normal",
  className = "",
  children,
  ...props
}) => {
  const sizeClasses = {
    10: "text-[10px]",
    11: "text-[11px]",
    12: "text-[12px]",
    13: "text-[13px]",
    14: "text-[14px]",
    16: "text-[16px]",
  };

  const colorClasses = {
    black: "text-black",
    white: "text-white",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    bold: "font-bold",
  };

  const baseClasses = `font-sans ${sizeClasses[size]} ${colorClasses[color]} ${weightClasses[weight]} ${className}`;

  return (
    <p {...props} className={baseClasses}>
      {children}
    </p>
  );
};

export default Text;
