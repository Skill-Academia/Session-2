import React from "react";
import { signIn, auth } from "@/auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await auth();

  if (session) {
    redirect("/home");
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
      className="w-full mx-auto flex items-center justify-center min-h-screen"
    >
      <button type="submit">Continue with Google</button>
    </form>
  );
};

export default Login;
