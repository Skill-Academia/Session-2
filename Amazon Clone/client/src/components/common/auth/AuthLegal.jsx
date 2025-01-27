import React from "react";

const AuthLegal = () => {
  return (
    <p className="text-xs mt-5">
      By continuing, you agree to Amazon's{" "}
      <span className="text-blue-600 hover:text-amber-700 underline cursor-pointer">
        Conditions of Use
      </span>{" "}
      and{" "}
      <span className="text-blue-600 hover:text-amber-700 underline cursor-pointer">
        Privacy Policy
      </span>
      .
    </p>
  );
};

export default AuthLegal;
