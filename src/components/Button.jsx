import React from "react";

export const Button = ({ variant = "1", children, ...props }) => {
  return (
    <button className={`btn btn-${variant} rounded-pill`} {...props}>
      {children}
    </button>
  );
};
