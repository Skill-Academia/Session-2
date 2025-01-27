import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      className={`border border-zinc-400 rounded h-[31px] px-2 text-[13px] ${props.className}`}
    />
  );
};

export default Input;
