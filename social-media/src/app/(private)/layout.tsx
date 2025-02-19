import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const PrivateLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return children;
};

export default PrivateLayout;
