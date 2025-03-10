import React from "react";
import { signIn, auth } from "@/auth";
import { redirect } from "next/navigation";
import GoogleLogo from "../../public/google.png";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Login = async () => {
  const session = await auth();

  if (session) {
    redirect("/home");
  }

  return (
    <div className="w-full min-h-screen flex flex-col gap-6 justify-center items-center">
      <h1 className="text-lg font-semibold">Login to your omegele account</h1>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          type="submit"
          className="p-4 border rounded-md flex items-center justify-between gap-10 font-medium hover:bg-zinc-50 transition"
        >
          <Image src={GoogleLogo} alt="G" width={40} height={40} />
          Continue with Google
          <ChevronRight className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

export default Login;
