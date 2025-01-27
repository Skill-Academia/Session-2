import React from "react";

const Label = (props) => {
  return (
    <label {...props} className={`text-sm font-bold ${props.className}`}>
      {props.title}
    </label>
  );
};

export default Label;
